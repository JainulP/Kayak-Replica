
var mysql = require('./mysql');

function getFlights(msg, callback){

    var res = {};
    try {


        var source  = msg.source;
        var destination = msg.destination;
        var travelDate = msg.travelDate;
        var getFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessCalssFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime " +
            "FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
            "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='"+ travelDate+"' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
            "And F.SourceAirport = '"+ source+"' and F.DestinationAirport = '"+destination +"'";

        console.log("getFlight"+ getFlight);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                if(results.length > 0){

                    res.code = "200";
                    res.value = "Success get flights";
                    res.flights = results;
                    callback(null, res);
                }
                else
                {
                    res.code = "400";
                    res.value = "No flights available";
                    console.log("get flights res"+ JSON.stringify(res));
                    callback(null, res);
                }
            }
        },getFlight);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed fetching flights";
        console.log("getFlight res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.getFlights = getFlights;



function filterFlights(msg, callback){

    var res = {};
    try {


        var source  = msg.source;
        var destination = msg.destination;
        var travelDate = msg.travelDate;
        var minTakeOffTime= msg.minTakeOffTime;
        var maxTakeOffTime= msg.maxTakeOffTime;
        var minLandingTime=  msg.minLandingTime;
        var maxLandingTime= msg.maxLandingTime;
        var minDuration= msg.minDuration;
        var maxDuration =msg.maxDuration;
        var minPrice= msg.minPrice;
        var maxPrice= msg.maxPrice;
        var airlines= msg.airlines;

        var filterFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessCalssFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime " +
            "FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
            "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='"+ travelDate+"' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
            "And F.SourceAirport = '"+ source+"' and F.DestinationAirport = '"+destination +"' AND F.TakeOffTime >= '" + minTakeOffTime + "' AND F.TakeOffTime <= '" + maxTakeOffTime
            + "' AND F.LandingTime >= '" + minLandingTime + "' AND F.LandingTime <= '"+ maxLandingTime + "' AND (" + airlines+ " IS NULL OR F.AirlinesName = '"+ airlines + "')";


        //
        // var filterFlightByName = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessCalssFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime " +
        //     "FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
        //     "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='"+ travelDate+"' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
        //     "And F.SourceAirport = '"+ source+"' and F.DestinationAirport = '"+destination +"' AND TakeOffTime >= '" + minTakeOffTime + "' AND TakeOffTime <= '" + maxTakeOffTime
        //     + "' AND LandingTime >= '" + minLandingTime + "' AND LandingTime <= '"+ maxLandingTime + "' AND AirlinesName = '" + airlines + "'";




        // var filterHotel = "SELECT * FROM ROOMS RIGHT JOIN hotel ON rooms.HotelId = hotel.HotelId " +
        //     "WHERE RoomId NOT IN " +
        //     "(SELECT RoomId FROM hotelbooking " +
        //     "WHERE(CheckInDate <= '" +checkindate + "' AND CheckOutDate >= '"+  checkindate + "') " +
        //     "OR (CheckInDate < '" + checkindate   +  "' AND CheckOutDate >=  '" + checkoutdate+"') "+
        //     "OR ('" + checkindate   + "' <= CheckInDate AND '"+checkoutdate+ "' >=  CheckInDate))" +
        //     "AND hotel.Location = '"+  location+"' AND hotel.Stars >= "+ stars + " AND hotel.ReviewScore >= "+ reviewScore +
        //     " AND rooms.Price >=  "+  minPrice + " AND rooms.Price <= "+ maxPrice;
        //
        //
        // var filterHotelByName = "SELECT * FROM ROOMS RIGHT JOIN hotel ON rooms.HotelId = hotel.HotelId " +
        //     "WHERE RoomId NOT IN " +
        //     "(SELECT RoomId FROM hotelbooking " +
        //     "WHERE(CheckInDate <= '" +checkindate + "' AND CheckOutDate >= '"+  checkindate + "') " +
        //     "OR (CheckInDate < '" + checkindate   +  "' AND CheckOutDate >=  '" + checkoutdate+"') "+
        //     "OR ('" + checkindate   + "' <= CheckInDate AND '"+checkoutdate+ "' >=  CheckInDate))" +
        //     "AND hotel.Location = '"+  location+"' AND hotel.Stars >= "+ stars + " AND hotel.ReviewScore >= "+ msg.reviewScore +
        //     " AND rooms.Price >=  "+ msg.minPrice + " AND rooms.Price <= "+ maxPrice +" AND hotel.HotelName = '"+hotelName ;



        console.log("filterFlight"+ filterFlight);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                if(results.length > 0){

                    res.code = "200";
                    res.value = "Success filter flights";
                    res.flights = results;
                    callback(null, res);
                }
                else
                {
                    res.code = "400";
                    res.value = "No flights available";
                    console.log("filter flights res"+ JSON.stringify(res));
                    callback(null, res);
                }
            }
        },filterFlight);


        // if(airlines !=  null && airlines != "")
        // {
        //     mysql.fetchData(function(err,results){
        //         if(err){
        //             throw err;
        //         }
        //         else
        //         {
        //             if(results.length > 0){
        //
        //                 res.code = "200";
        //                 res.value = "Success filter flights By name";
        //                 res.flights = results;
        //                 callback(null, res);
        //             }
        //             else
        //             {
        //                 res.code = "400";
        //                 res.value = "No flights available";
        //                 console.log("filter flights res"+ JSON.stringify(res));
        //                 callback(null, res);
        //             }
        //         }
        //     },filterFlightByName);
        // }

    }
    catch (e){
        res.code = "401";
        res.value = "Failed fetching flights";
        console.log("getFlight res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.filterFlights = filterFlights;