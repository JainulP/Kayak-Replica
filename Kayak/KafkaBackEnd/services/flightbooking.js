var mysql = require('./mysql');


function submitBooking(msg, callback){

    var res = {};
    try
    {
        var userid  = msg.userid;
        var flightidto = msg.flightidto;
        var seattype = msg.seattype;
        var travelerid = msg.travelerid;
        var cardid = msg.cardid;
        var street= msg.street;
        var city = msg.city;
        var state = msg.state;
        var country = msg.country;
        var zip = msg.zip;
        var totalcost = msg.totalcost;
        var numberofseats = msg.numberofseats;
        var numberofadults= msg.numberofadults;
        var numberofchildren = msg.numberofchildren;
        var bookingdate= msg.bookingdate;
        var traveldateto = msg.traveldateto;
        //var traveldateto = new Date(msg.traveldateto);
        //var checkoutdate = new Date(msg.checkoutdate);

        var submitBooking = "INSERT INTO flightbooking(UserId, FlightIdTo, SeatType, TravelerId, CardId, Street,City,State, Country,Zip,TotalCost,NumberOfSeats,NumberOfAdults,NumberOfChildren,BookingDateTime,TravelDateTo) VALUES ('"
            + userid + "','"+ flightidto + "','"+ seattype + "','"+ travelerid+ "','"+ cardid+ "','"+ street+ "','"+ city+ "','"+ state+ "','"+ country+ "','"+ zip+ "',"+ totalcost+ ","+ numberofseats+ ","+ numberofadults+ ","+ numberofchildren+ ",'"+ bookingdate+ "','"+ traveldateto +  "');"


        var getMaxSeatCount = "SELECT FirstClassSeats, BusinessClassSeats, EconomyClassSeats FROM flightsavailability WHERE FlightId = '"+ flightidto + "'";

        var updateColumn;


        console.log("submitBooking"+ submitBooking);

        console.log("getMaxSeatCount"+ getMaxSeatCount);

        mysql.fetchData(function(err,results1){
            if(err){
                throw err;
            }
            else
            {
                mysql.fetchData(function(err,results){
                    if(err){
                        throw err;
                    }
                     else {
                        if (results.length > 0) {
                                var countFirst = results[0].FirstClassSeats,
                                    countBusiness = results[0].BusinessClassSeats,
                                    countEconomy = results[0].EconomyClassSeats

                            switch(seattype)
                            {
                                case "1":
                                    updateColumn = "FirstClassSeats";
                                     countFirst -= numberofseats;
                                    break;
                                case "2":
                                    updateColumn = "BusinessClassSeats";
                                    countBusiness -= numberofseats;
                                    break;
                                case "3":
                                    updateColumn = "EconomyClassSeats";
                                    countEconomy -= numberofseats;
                                    break;

                            }

                            var checkAvailability = "SELECT * FROM flightsavailability WHERE FlightId ='" + flightidto + "'  AND Date = '" + traveldateto + "'";
                            console.log("checkAvailability" + checkAvailability);

                            var addToFlightsAvailability = "INSERT INTO flightsavailability(Date,FlightId,FirstClassSeats, BusinessClassSeats, EconomyClassSeats) VALUES ('" + traveldateto + "','" + flightidto + "'," + countFirst + "," + countBusiness + "," + countEconomy+ ");"
                            console.log("addToFlightsAvailability" + addToFlightsAvailability);
                            mysql.fetchData(function (err, results2) {
                                if (err) {
                                    throw err;
                                }
                                else {
                                    if (results2.length > 0) {
                                        var count;

                                        switch (seattype) {
                                            case "1":
                                                count = results2[0].FirstClassSeats - numberofseats;
                                                break;
                                            case "2":
                                                count = results2[0].BusinessClassSeats - numberofseats;
                                                break;
                                            case "3":
                                                count = results2[0].EconomyClassSeats - numberofseats;
                                                break;

                                        }
                                        var updateFlightAvailability = "UPDATE flightsavailability SET " + updateColumn + " = " + count + " WHERE FlightId = '" + flightidto + "' AND Date = '" + traveldateto + "'";

                                        console.log("updateFlightAvailability    ", updateFlightAvailability);
                                        mysql.fetchData(function (err, results) {
                                            if (err) {
                                                throw err;
                                            }
                                            else {
                                                console.log("Success update flight availability");

                                            }
                                        }, updateFlightAvailability);
                                    }
                                    else {
                                        mysql.fetchData(function (err, results) {
                                            if (err) {
                                                throw err;
                                            }
                                            else {
                                                console.log("Success adding to flight availability");

                                            }
                                        }, addToFlightsAvailability);
                                    }

                                }
                            }, checkAvailability);

                            var getBooking = "SELECT * FROM flightbooking WHERE UserId= '" + userid + "' AND FlightIdTo = '" + flightidto + "' AND BookingDateTime= '" + bookingdate + "'";

                            console.log("getBooking" + getBooking);

                            mysql.fetchData(function (err, results) {
                                if (err) {
                                    throw err;
                                }
                                else {
                                    res.code = "200";
                                    res.value = "Success booking flight";
                                    res.booking = results;
                                    callback(null, res);
                                }
                            }, getBooking);

                        }
                       }

                },getMaxSeatCount);
            }
        },submitBooking);

    }
    catch (e){
        console.log(e);
        res.code = "401";
        res.value = "Failed booking flight";
        res.booking = "Eorror booking flight";
        console.log("booking flight res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.submitBooking = submitBooking;


function deleteBooking(msg, callback){

    var res = {};
    try
    {
        var bookingid = msg.bookingid;
        var userid  = msg.userid;


        var deleteBooking = "UPDATE flightbooking SET DeleteFlag = "+ 1 + " WHERE BookingId = " + bookingid + " AND UserId = " + userid ;
        var getBookingInfo = "SELECT FlightIdTo, SeatType, NumberOfSeats, TravelDateTo FROM flightbooking WHERE BookingId = "+ bookingid + " AND  UserId = "+ userid;

        console.log("deleteBooking "+ deleteBooking);

        console.log("getBookingInfo"+ getBookingInfo);

        mysql.fetchData(function(err,results1){
            if(err){
                throw err;
            }
            else
            {
                mysql.fetchData(function(err,results){
                    if(err){
                        throw err;
                    }
                    else {
                        if (results.length > 0) {

                            var updateColumn;
                            var seattype = results[0].SeatType;
                            var traveldateto = results[0].TravelDateTo;
                            var numberofseats = results[0].NumberOfSeats;
                            var flightid = results[0].FlightIdTo;

                            switch(seattype)
                            {
                                case "1":
                                    updateColumn = "FirstClassSeats";
                                    break;
                                case "2":
                                    updateColumn = "BusinessClassSeats";
                                    break;
                                case "3":
                                    updateColumn = "EconomyClassSeats";
                                    break;

                            }

                                var updateFlightAvailability = "UPDATE flightsavailability SET " + updateColumn + " = "+ updateColumn + " + "+ numberofseats+ " WHERE FlightId = '" + flightid + "' AND Date = '" + traveldateto.toISOString().slice(0,10) + "'";
                                console.log("updateFlightAvailability" + updateFlightAvailability);

                                mysql.fetchData(function (err, results) {
                                    if (err) {
                                        throw err;
                                    }
                                    else {
                                        console.log("Success update flight availability");
                                        res.code = "200";
                                        res.value = "Success deleting flight booking";
                                        res.booking = "Success deleting flight booking";
                                        callback(null, res);

                                    }
                                }, updateFlightAvailability);

                        }
                    }
                },getBookingInfo);
            }
        },deleteBooking);

    }
    catch (e){
        console.log(e);
        res.code = "401";
        res.value = "Failed deleting booking";
        res.booking = "Error deleting flight booking";
        console.log(" delete flight booking res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.deleteBooking = deleteBooking;