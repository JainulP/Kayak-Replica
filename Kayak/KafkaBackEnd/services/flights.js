
var mysql = require('./mysql');
var moment = require('moment');
var mysql2 = require('mysql');

var pool  = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database : 'kayak',

});



function flights(msg, callback){

    var res = {};
    try {

        console.log(msg);
        var source  = msg.source;
        var destination = msg.destination;
        var travelDate = msg.travelDate;

        var getFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime,F.Description, F.Plane, FA.FirstClassSeats,FA.BusinessClassSeats, FA.EconomyClassSeats " +
            "FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId ";

        console.log("getFlight"+ getFlight);

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

                        row["duration"] = hrs + ":" + min;

                    });

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



exports.flights = flights;


function postflights(msg, callback) {
    var res = {};
    console.log('hi');
    console.log(msg.AirlinesName);

    var updates = {};
    if (msg.AirlinesName != "") {
        console.log('hi123');
        updates['AirlinesName'] = msg.AirlinesName;
        console.log('hi'+updates['AirlinesName']);
    }
    if (msg.SourceAirport != "")
        updates['SourceAirport'] = msg.SourceAirport;
    if (msg.DestinationAirport != "")
        updates['DestinationAirport'] = msg.DestinationAirport;
    if (msg.FirstClassSeats != "")
        updates['FirstClassSeats']=  msg.FirstClassSeats;
    if (msg.BusinessClassSeats != "")
        updates['BusinessClassSeats'] = msg.BusinessClassSeats;
    if (msg.EconomyClassSeats !== "")
        updates['EconomyClassSeats'] = msg.EconomyClassSeats;
    if (msg.FirstClassFares !== "")
        updates['FirstClassFares'] = msg.FirstClassFares;
    if (msg.BusinessClassFares !== "")
        updates['BusinessClassFares'] = msg.BusinessClassFares;
    if (msg.EconomyClassFares !== "")
        updates['EconomyClassFares'] = msg.EconomyClassFares;
    if (msg.TakeOffTime !== "")
        updates['TakeOffTime']= msg.TakeOffTime;
    if (msg.LandingTime !== "")
        updates['Description'] = msg.LandingTime;
    if (msg.Description !== "")
        updates['AirlinesName'] = msg.Description;
    if (msg.Plane !== "")
        updates['Plane'] = msg.Plane;
    var updates2 = {};
    if (msg.FirstClassSeats !== "")
        updates['FirstClassSeats'] = msg.FirstClassSeats;
    if (msg.BusinessClassSeats !== "")
        updates['BusinessClassSeats'] = msg.BusinessClassSeats;
    if (msg.EconomyClassSeats !== "")
        updates['EconomyClassSeats'] = msg.EconomyClassSeats;



        pool.getConnection(function (err, connection) {
            if (err) {
                connection.release();
                callback(null, err);
                throw err;
            }
            else {

                var res = {};
                console.log('hi');
                console.log(msg.AirlinesName);

                var updates = {};
                if(msg.FlightID!="")
                    updates['FlightID'] = msg.FlightID;
                if (msg.AirlinesName != "") {
                    console.log('hi123');
                    updates['AirlinesName'] = msg.AirlinesName;
                    console.log('hi' + updates['AirlinesName']);
                }
                if (msg.SourceAirport != "")
                    updates['SourceAirport'] = msg.SourceAirport;
                if (msg.DestinationAirport != "")
                    updates['DestinationAirport'] = msg.DestinationAirport;
                if (msg.FirstClassSeats != "")
                    updates['FirstClassSeats'] = msg.FirstClassSeats;
                if (msg.BusinessClassSeats != "")
                    updates['BusinessClassSeats'] = msg.BusinessClassSeats;
                if (msg.EconomyClassSeats != "")
                    updates['EconomyClassSeats'] = msg.EconomyClassSeats;
                if (msg.FirstClassFares != "")
                    updates['FirstClassFares'] = msg.FirstClassFares;
                if (msg.BusinessClassFares != "")
                    updates['BusinessClassFares'] = msg.BusinessClassFares;
                if (msg.EconomyClassFares != "")
                    updates['EconomyClassFares'] = msg.EconomyClassFares;
                if (msg.TakeOffTime != "")
                    updates['TakeOffTime'] = msg.TakeOffTime;
                if (msg.LandingTime != "")
                    updates['LandingTime'] = msg.LandingTime;
                if (msg.Description != "")
                    updates['Description'] = msg.Description;
                if (msg.Plane != "")
                    updates['Plane'] = msg.Plane;


                console.log('hi' + updates['AirlinesName']);
                var postflight;
                if(msg.operation=='update')
                 postflight = "UPDATE flights SET ? where FlightID='" + msg.FlightID + "'";
                else
                 postflight = "INSERT into  flights values('"+msg.FlightID+"','"+msg.AirlinesName+"','"+msg.SourceAirport+"','"+msg.DestinationAirport+"','"+msg.FirstClassSeats+"','"+
                 msg.BusinessClassSeats+"','"+msg.EconomyClassSeats+"','"+msg.FirstClassFares+"','"+msg.BusinessClassFares+"','"+msg.EconomyClassFares+"','"+msg.TakeOffTime+"','"+msg.LandingTime+"','"+msg.Description+"','"+msg.Plane+"',0)";
                // Neat!
                console.log(postflight);
                connection.query(postflight, updates, function (err, result) {
                    if (err) {
                        console.log("ERROR: " + err.message);
                    }
                    else {	// return err or result

                        console.log('hello232e132');

                    }
                    console.log("\nConnection released..");
                    connection.release();
                });
            }
        });
        pool.getConnection(function (err, connection2) {
            console.log('fdfdx');


            if (err) {
                connection2.release();
                callback(null, err);
                throw err;
            }
            else {


                var updates2 = {};
                if (msg.FlightID != "")
                    updates2['FlightID'] = msg.FlightID;
                if (msg.FirstClassSeats != "")
                    updates2['FirstClassSeats'] = msg.FirstClassSeats;
                if (msg.BusinessClassSeats != "")
                    updates2['BusinessClassSeats'] = msg.BusinessClassSeats;
                if (msg.EconomyClassSeats != "")
                    updates2['EconomyClassSeats'] = msg.EconomyClassSeats;
                //console.log(updates2.length );

                console.log('fdfdx');

                if(msg.operation=='update')
                    postflight = "UPDATE flightsavailability SET ? where FlightID='" + msg.FlightID + "'";

                          else
                 postflight2 = "INSERT into flightsavailability (Date, FlightId , FirstClassSeats , BusinessClassSeats , EconomyClassSeats) values (NULL,'"+msg.FlightID+"','"+msg.FirstClassSeats+"','"+msg.BusinessClassSeats+"','"+msg.EconomyClassSeats+"')";
                console.log(postflight2);
                connection2.query(postflight2, updates2, function (err, result) {
                    if (err) {
                        console.log("ERROR: " + err.message);
                    }
                    else {	// return err or result

                    }
                    connection2.release();
                    console.log("\nConnection released..");

                });


            }
        });



  /*  if(msg.operation==='insert')
    {




        pool.getConnection(function (err ,connection3) {
            if (err) {
                connection3.release();
                callback(null, err);
                throw err;
            }
            else {

                var res = {};
                console.log('hi');
                console.log(msg);
                console.log(msg.AirlinesName);

                var updates = {};
                if (msg.AirlinesName != "") {
                    console.log('hi123');
                    updates['AirlinesName'] = msg.AirlinesName;
                    console.log('hi' + updates['AirlinesName']);
                }
                if (msg.SourceAirport != "")
                    updates['SourceAirport'] = msg.SourceAirport;
                if (msg.DestinationAirport != "")
                    updates['DestinationAirport'] = msg.DestinationAirport;
                if (msg.FirstClassSeats != "")
                    updates['FirstClassSeats'] = msg.FirstClassSeats;
                if (msg.BusinessClassSeats != "")
                    updates['BusinessClassSeats'] = msg.BusinessClassSeats;
                if (msg.EconomyClassSeats != "")
                    updates['EconomyClassSeats'] = msg.EconomyClassSeats;
                if (msg.FirstClassFares != "")
                    updates['FirstClassFares'] = msg.FirstClassFares;
                if (msg.BusinessClassFares != "")
                    updates['BusinessClassFares'] = msg.BusinessClassFares;
                if (msg.EconomyClassFares != "")
                    updates['EconomyClassFares'] = msg.EconomyClassFares;
                if (msg.TakeOffTime != "")
                    updates['TakeOffTime'] = msg.TakeOffTime;
                if (msg.LandingTime != "")
                    updates['LandingTime'] = msg.LandingTime;
                if (msg.Description != "")
                    updates['Description'] = msg.Description;
                if (msg.Plane != "")
                    updates['Plane'] = msg.Plane;


                console.log('hi' + updates['AirlinesName']);
                var postflight = "INSERT  into flights  ?";
                // Neat!
                console.log(postflight);
                connection3.query(postflight, updates, function (err, result) {
                    if (err) {
                        console.log("ERROR: " + err.message);
                    }
                    else {	// return err or result

                        console.log('hello232e132');

                    }
                    console.log("\nConnection released..");
                    connection3.release();
                });
            }
        });
        pool.getConnection(function (err, connection4) {
            console.log('fdfdx');


            if (err) {
                connection4.release();
                callback(null, err);
                throw err;
            }
            else {


                var updates2 = {};
                if (msg.FirstClassSeats != "")
                    updates2['FirstClassSeats'] = msg.FirstClassSeats;
                if (msg.BusinessClassSeats != "")
                    updates2['BusinessClassSeats'] = msg.BusinessClassSeats;
                if (msg.EconomyClassSeats != "")
                    updates2['EconomyClassSeats'] = msg.EconomyClassSeats;
                //console.log(updates2.length );

                console.log('fdfdx');

                var postflight2 = "INSERT  into flightsavailability ? ";
                console.log(postflight2);
                connection4.query(postflight2, updates2, function (err, result) {
                    if (err) {
                        console.log("ERROR: " + err.message);
                    }
                    else {	// return err or result

                    }
                    connection4.release();
                    console.log("\nConnection released..");

                });


            }
        });










    }*/
/*    var postflight2 = "UPDATE flightsavailability SET ? where FlightID=" + msg.FlightID + "";
    mysql.putData(function(err,results){
        if(!error)
            res.code = "200";
        res.value = "Success post flights";

    },postflight2,updates2);*/

    callback(null, res);


}
exports.postflights = postflights;


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

        var getFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime,F.Description, F.Plane, FA.FirstClassSeats,FA.BusinessClassSeats, FA.EconomyClassSeats " +
            "FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
            "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='" + travelDate + "' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
            "And F.SourceAirport = '" + source + "' and F.DestinationAirport = '" + destination + "'";

        console.log("getFlight" + getFlight);

        if(travelDateReturn === null || travelDateReturn === undefined || travelDateReturn == "null") {

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
        var travelDateReturn = msg.travelDateReturn;

        // if(travelDateReturn === null || travelDateReturn === undefined) {
            if (airlines === null || airlines === '') {
                var filterFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime ,F.Description, F.Plane, FA.FirstClassSeats,FA.BusinessClassSeats, FA.EconomyClassSeats" +
                    " FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
                    "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='" + travelDate + "' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
                    "And F.SourceAirport = '" + source + "' and F.DestinationAirport = '" + destination + "' AND F.TakeOffTime >= '" + minTakeOffTime + "' AND F.TakeOffTime <= '" + maxTakeOffTime
                    + "' AND F.LandingTime >= '" + minLandingTime + "' AND F.LandingTime <= '" + maxLandingTime + "' AND (LEAST(F.EconomyClassFares,F.BusinessClassFares,F.FirstClassFares) >=" + minPrice + " OR GREATEST(F.EconomyClassFares,F.BusinessClassFares,F.FirstClassFares) <= " + maxPrice + ") AND (" + airlines + " IS NULL OR F.AirlinesName = '" + airlines + "')";
            }
            else {
                var filterFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime ,F.Description, F.Plane, FA.FirstClassSeats,FA.BusinessClassSeats, FA.EconomyClassSeats" +
                    " FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
                    "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='" + travelDate + "' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
                    "And F.SourceAirport = '" + source + "' and F.DestinationAirport = '" + destination + "' AND F.TakeOffTime >= '" + minTakeOffTime + "' AND F.TakeOffTime <= '" + maxTakeOffTime
                    + "' AND F.LandingTime >= '" + minLandingTime + "' AND F.LandingTime <= '" + maxLandingTime + "' AND (LEAST(F.EconomyClassFares,F.BusinessClassFares,F.FirstClassFares) >=" + minPrice + " OR GREATEST(F.EconomyClassFares,F.BusinessClassFares,F.FirstClassFares) <= " + maxPrice + ") AND ('" + airlines + "' IS NULL OR F.AirlinesName = '" + airlines + "')";
            }

            console.log("filterFlight" + filterFlight);

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
                        res.value = "Success filter flights";
                        res.flights = results;
                        callback(null, res);
                    }
                    else {
                        res.code = "400";
                        res.value = "No flights available";
                        console.log("filter flights res" + JSON.stringify(res));
                        callback(null, res);
                    }
                }
            }, filterFlight);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed fetching flights";
        console.log("getFlight res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.filterFlights = filterFlights;
