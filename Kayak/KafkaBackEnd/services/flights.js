
var mysql = require('./mysql');
var moment = require('moment');

function getFlights(msg, callback){

    var res = {};
    try {


        var source  = msg.source;
        var destination = msg.destination;
        var travelDate = msg.travelDate;
        var travelDateReturn = msg.travelDateReturn;

        var onewayflights = [];
        var returnflights = [];
        var combination = [];

        if(travelDateReturn === null || travelDateReturn === undefined) {

            var getFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime,F.Description, F.Plane, FA.FirstClassSeats,FA.BusinessClassSeats, FA.EconomyClassSeats " +
                "FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
                "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='" + travelDate + "' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
                "And F.SourceAirport = '" + source + "' and F.DestinationAirport = '" + destination + "'";

            console.log("getFlight" + getFlight);

            mysql.fetchData(function (err, results) {
                if (err) {
                    throw err;
                }
                else {
                    if (results.length > 0) {

                        results.forEach(function (row) {
                            var takeoff = moment.duration(row["TakeOffTime"], "HH:mm");
                            var landing = moment.duration(row["LandingTime"], "HH:mm");
                            var diff = landing.subtract(takeoff);
                            var hrs;
                            var min;
                            hrs = diff.hours(); // return hours
                            min = diff.minutes(); // ret
                            var duration;

                            if (hrs < 0) {
                                hrs = hrs + 24;
                            }
                            if (diff.minutes() < 0) {
                                min = min + 60;
                            }

                            row["duration"] = hrs + " hrs " + min + " min";

                        });
                        res.code = "200";
                        res.value = "Success get flights";
                        res.flights = results;
                        callback(null, res);
                    }
                    else {
                        res.code = "400";
                        res.value = "No flights available";
                        console.log("get flights res" + JSON.stringify(res));
                        callback(null, res);
                    }
                }
            }, getFlight);
        }
        else {


            var getFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime,F.Description, F.Plane, FA.FirstClassSeats,FA.BusinessClassSeats, FA.EconomyClassSeats " +
                "FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
                "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='" + travelDate + "' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
                "And F.SourceAirport = '" + source + "' and F.DestinationAirport = '" + destination + "'";

            console.log("getFlight" + getFlight);

            var getFlightReturn = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime,F.Description, F.Plane, FA.FirstClassSeats,FA.BusinessClassSeats, FA.EconomyClassSeats " +
                "FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
                "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='" + travelDateReturn + "' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
                "And F.SourceAirport = '" + destination + "' and F.DestinationAirport = '" + source + "'";

            console.log("getFlightReturn" + getFlightReturn);

            mysql.fetchData(function (err, results) {
                if (err) {
                    throw err;
                }
                else {

                    mysql.fetchData(function (err, results) {
                        if (err) {
                            throw err;
                        }
                        else {



                            if (results.length > 0) {

                                results.forEach(function (row) {
                                    var takeoff = moment.duration(row["TakeOffTime"], "HH:mm");
                                    var landing = moment.duration(row["LandingTime"], "HH:mm");
                                    var diff = landing.subtract(takeoff);
                                    var hrs;
                                    var min;
                                    hrs = diff.hours(); // return hours
                                    min = diff.minutes(); // ret
                                    var duration;

                                    if (hrs < 0) {
                                        hrs = hrs + 24;
                                    }
                                    if (diff.minutes() < 0) {
                                        min = min + 60;
                                    }

                                    row["duration"] = hrs + " hrs " + min + " min";

                                });
                                returnflights = results;


                                function cartesianProduct(arr) {
                                    return arr.reduce((a, b) =>
                                        a.map(x => b.map(y => x.concat(y)))
                                            .reduce((a, b) => a.concat(b), []), [[]]);
                                }

                                console.log("ONE WAY", onewayflights);
                                console.log("ROUND TRIP", returnflights);
                                if(onewayflights.length>0 && returnflights.length>0) {
                                    var arr = [onewayflights,returnflights];
                                    console.log(JSON.stringify(cartesianProduct(arr)));
                                    combination = cartesianProduct(arr);
                                    res.code = "200";
                                    res.value = "Success get flights";
                                    res.flights = combination;
                                    callback(null, res);
                                }
                                else {
                                    res.code = "400";
                                    res.value = "Success get flights";
                                    res.flights = "No flights available";
                                    callback(null, res);
                                }


                            }
                            else {
                                res.code = "400";
                                res.value = "Success get flights";
                                res.flights = "No flights available";
                                callback(null, res);
                            }
                        }
                    }, getFlightReturn);

                    if (results.length > 0) {

                        results.forEach(function (row) {
                            var takeoff = moment.duration(row["TakeOffTime"], "HH:mm");
                            var landing = moment.duration(row["LandingTime"], "HH:mm");
                            var diff = landing.subtract(takeoff);
                            var hrs;
                            var min;
                            hrs = diff.hours(); // return hours
                            min = diff.minutes(); // ret
                            var duration;

                            if (hrs < 0) {
                                hrs = hrs + 24;
                            }
                            if (diff.minutes() < 0) {
                                min = min + 60;
                            }

                            row["duration"] = hrs + " hrs " + min + " min";

                        });
                    onewayflights = results;

                    }
                    else {
                        res.code = "400";
                        res.value = "Success get flights";
                        res.flights = "No flights available";
                        callback(null, res);

                    }
                }
            }, getFlight);

        }

    }
    catch (e){
        console.log(e);
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

        if(airlines === null || airlines === '')
        {
            var filterFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime ,F.Description, F.Plane, FA.FirstClassSeats,FA.BusinessClassSeats, FA.EconomyClassSeats" +
                " FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
                "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='" + travelDate + "' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
                "And F.SourceAirport = '" + source + "' and F.DestinationAirport = '" + destination + "' AND F.TakeOffTime >= '" + minTakeOffTime + "' AND F.TakeOffTime <= '" + maxTakeOffTime
                + "' AND F.LandingTime >= '" + minLandingTime + "' AND F.LandingTime <= '" + maxLandingTime + "' AND (LEAST(F.EconomyClassFares,F.BusinessClassFares,F.FirstClassFares) >=" + minPrice + " OR GREATEST(F.EconomyClassFares,F.BusinessClassFares,F.FirstClassFares) <= " + maxPrice + ") AND (" + airlines + " IS NULL OR F.AirlinesName = '" + airlines + "')";
        }
        else
        {
            var filterFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime ,F.Description, F.Plane, FA.FirstClassSeats,FA.BusinessClassSeats, FA.EconomyClassSeats" +
                " FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
                "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='" + travelDate + "' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
                "And F.SourceAirport = '" + source + "' and F.DestinationAirport = '" + destination + "' AND F.TakeOffTime >= '" + minTakeOffTime + "' AND F.TakeOffTime <= '" + maxTakeOffTime
                + "' AND F.LandingTime >= '" + minLandingTime + "' AND F.LandingTime <= '" + maxLandingTime + "' AND (LEAST(F.EconomyClassFares,F.BusinessClassFares,F.FirstClassFares) >=" + minPrice + " OR GREATEST(F.EconomyClassFares,F.BusinessClassFares,F.FirstClassFares) <= " + maxPrice + ") AND ('" + airlines + "' IS NULL OR F.AirlinesName = '" + airlines + "')";
        }

        console.log("filterFlight"+ filterFlight);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                if(results.length > 0){


                    results.forEach(function (row) {
                        var takeoff = moment.duration(row["TakeOffTime"], "HH:mm");
                        var landing = moment.duration(row["LandingTime"], "HH:mm");
                        var diff = landing.subtract(takeoff);
                        var hrs;
                        var min;
                        hrs = diff.hours(); // return hours
                        min = diff.minutes(); // ret
                        var duration;

                        if(hrs < 0)
                        {
                            hrs = hrs+24;
                        }
                        if(diff.minutes() < 0)
                        {
                            min = min + 60;
                        }

                        row["duration"] = hrs + " hrs " + min + " min";

                    });


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

    }
    catch (e){
        res.code = "401";
        res.value = "Failed fetching flights";
        console.log("getFlight res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.filterFlights = filterFlights;