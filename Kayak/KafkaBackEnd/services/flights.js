
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

        var getFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime,F.Description, F.Plane, F.FirstClassSeats,F.BusinessClassSeats, F.EconomyClassSeats " +
            "FROM flights as F INNER JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId ";

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

                        row["duration"] = hrs + " hrs " + min + " min";
                        row["durationminutes"]= (hrs *60) + min ;

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





function cars(msg, callback){

    var res = {};
    try {



        var getFlight = "SELECT * FROM cars";

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
                    res.cars = results;
                    callback(null, res);
                }
                else
                {
                    res.code = "400";
                    res.value = "No cars available";
                    console.log("get cars res"+ JSON.stringify(res));
                    callback(null, res);
                }
            }
        },getFlight);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed fetching cars";
        console.log("getCar res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.cars = cars;


function revenuegraphs(msg, callback) {
    var res = {};

    var getFlight = "select SUM(TotalCost) as count, city from flightbooking group by city;";
    mysql.fetchData(function (err, results) {
        if (err) {
            throw err;
        }
        else {


            if (results.length > 0) {


                res.code = "200";
                res.value = "Success get graphs";
                res.graphs = results;

                var getFlight = "select count(*) as count, city from hotelbooking group by city;";
                mysql.fetchData(function (err, results2) {
                    if (err) {
                        throw err;
                    }
                    else {
                        res.graphs2 = results2;
                        var getFlight = "select SUM(TotalCost) as count,  FlightIdTo from flightbooking group by  FlightIdTo ;";

                        mysql.fetchData(function (err, results3) {
                            if (err) {
                                throw err;
                            }
                            else {

                                res.graphs3 = results3;
                                var getFlight = "select count(*) as count, city from bookings group by city;";

                                mysql.fetchData(function (err, results4) {
                                    if (err) {
                                        throw err;
                                    }
                                    else {
                                        res.graphs4 = results4;
                                        var getFlight = "select Count(hb.carid) as count,  h.carName from cars h inner join bookings hb on h.carid = hb.carid group by hb.carid ;";
                                        mysql.fetchData(function (err, results5) {
                                            if (err) {
                                                throw err;
                                            }
                                            else {
                                                res.graphs5 = results5;

                                                var getFlight = "select count(hb.HotelId) as count,h.HotelName  from hotel h inner join hotelbooking hb on h.HotelId=hb.HotelId  group by hb.HotelId;";

                                                mysql.fetchData(function (err, results6) {
                                                    if (err) {
                                                        throw err;
                                                    }
                                                    else {

                                                        res.graphs6 = results6;
                                                        callback( null,res);


                                                    }


                                                }, getFlight)

                                            }


                                        }, getFlight)
                                    }

                                }, getFlight);


                            }

                        }, getFlight);
                    }

                }, getFlight);


                /* if(msg.Object==='cars' && msg.Property==='city')
                 {
                 pool.getConnection(function (err, connection) {
                 if (err) {
                 connection.release();
                 callback(null, err);
                 throw err;
                 }
                 else {
                 var getFlight = "select count(*) as count, city from bookings group by city;";

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
                 });
                 }




                 if(msg.Object==='hotels' && msg.Property==='city')
                 {
                 pool.getConnection(function (err, connection) {
                 if (err) {
                 connection.release();
                 callback(null, err);
                 throw err;
                 }
                 else {
                 var getFlight = "select count(*) as count, city from hotelbooking group by HotelId;";

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
                 });
                 }

                 if(msg.Object==='flights' && msg.Property==='flights')
                 {
                 pool.getConnection(function (err, connection) {
                 if (err) {
                 connection.release();
                 callback(null, err);
                 throw err;
                 }
                 else {
                 var getFlight = "select SUM(TotalCost) as count,  FlightIdTo from flightbooking group by  FlightIdTo ;";

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
                 });

                 }

                 if(msg.Object==='cars' && msg.Property==='cars')
                 {
                 pool.getConnection(function (err, connection) {
                 if (err) {
                 connection.release();
                 callback(null, err);
                 throw err;
                 }
                 else {
                 var getFlight = "select Count(hb.carid) as count,  h.carName from cars h inner join bookings hb on h.carid = hb.carid group by hb.carid ;";

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
                 });
                 }


                 if(msg.Object==='hotels' && msg.Property==='hotels')
                 {
                 pool.getConnection(function (err, connection) {
                 if (err) {
                 connection.release();
                 callback(null, err);
                 throw err;
                 }
                 else {
                 var getFlight = "select count(hb.HotelId) as count,h.HotelName  from hotel h inner join hotelbooking hb on h.HotelId=hb.HotelId  group by hb.HotelId;";

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
                 });
                 }
                 */
// callback(null, res);

            }
        }
    }, getFlight)
}
exports.revenuegraphs = revenuegraphs;



function postcars(msg, callback) {
    var res = {};
    console.log('hi');
    console.log(msg.AirlinesName);

    var updates = {};
    if (msg.carName !== "") {
        console.log('hi123');
        updates['carName'] = msg.carName;
        console.log('hi'+updates['carName']);
    }
    if (msg.carType !== "")
        updates['carType'] = msg.carType;
    if (msg.capacity !== "")
        updates['capacity'] = msg.capacity;
    if (msg.luggageCapacity !== "")
        updates['luggageCapacity']=  msg.luggageCapacity;
    if (msg.carDoors !== "")
        updates['carDoors'] = msg.carDoors;
    if (msg.airConditioning !== "")
        updates['airConditioning'] = msg.airConditioning;
    if (msg.automatic !== "")
        updates['automatic'] = msg.automatic;
    if (msg.hybrid !== "")
        updates['hybrid'] = msg.hybrid;
    if (msg.price !== "")
        updates['price'] = msg.price;
    if (msg.car_number !== "")
        updates['car_number']= msg.car_number;
    if (msg.image !== "")
        updates['image'] = msg.image;




    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            callback(null, err);
            throw err;
        }
        else {

            var res = {};
            console.log('hi23343');
            console.log(msg.carId);

            var updates = {};
            if (msg.carName !== "") {
                console.log('hi123');
                updates['carName'] = msg.carName;
                console.log('hi'+updates['carName']);
            }
            if (msg.carType !== "")
                updates['carType'] = msg.carType;
            if (msg.capacity !== "")
                updates['capacity'] = msg.capacity;
            if (msg.luggageCapacity !== "")
                updates['luggageCapacity']=  msg.luggageCapacity;
            if (msg.carDoors !== "")
                updates['carDoors'] = msg.carDoors;
            if (msg.airConditioning !== "")
                updates['airConditioning'] = msg.airConditioning;
            if (msg.airportPickup !== "")
                updates['airportPickup'] = msg.airportPickup;
            if (msg.automatic !== "")
                updates['automatic'] = msg.automatic;
            if (msg.hybrid !== "")
                updates['hybrid'] = msg.hybrid;
            if (msg.price !== "")
                updates['price'] = msg.price;
            if (msg.car_number !== "")
                updates['car_number']= msg.car_number;
            if (msg.image !== "")
                updates['image'] = msg.image;


            console.log('hi' + updates['carName']);
            var airportPickup1;
            if(msg.airportPickup===true)
                airportPickup1=1;
            else
                airportPickup1=0;

            var airConditioning1;
            if(msg.airConditioning===true)
                airConditioning1=1;
            else
                airConditioning1=0;

            var hybrid1;
            if(msg.hybrid===true)
                hybrid1=1;
            else
                airportPickup1=0;

            var automatic1;
            if(msg.automatic===true)
                automatic1=1;
            else
                automatic1=0;

            var postflight2,postflight3;
            if(msg.operation==='update')
                postflight3 = "UPDATE cars SET ? where carId='" + msg.carId + "'";


            else
                postflight3 = "INSERT into  cars(carName,carType,capacity,luggageCapacity,carDoors,airportPickup,airConditioning,automatic,hybrid,price,car_number,image) values('"+msg.carName+"','"+msg.carType+"','"+msg.capacity+"','"+msg.luggageCapacity+"','"+
                    msg.carDoors+"','"+airportPickup1+"','"+airConditioning1+"','"+automatic1+"','"+hybrid1+"','"+msg.price+"','"+msg.car_number+"','"+msg.image+"')";
            // Neat!
            console.log(postflight3);
            connection.query(postflight3, updates, function (err, result) {
                if (err) {
                    console.log("ERROR: " + err.message);
                }
                else {	// return err or result

                    if (msg.operation !== 'update') {


                        var date = new Date();
                        date = date.getUTCFullYear() + '-' +
                            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
                            ('00' + date.getUTCDate()).slice(-2) + ' ' +
                            ('00' + date.getUTCHours()).slice(-2) + ':' +
                            ('00' + date.getUTCMinutes()).slice(-2) + ':' +
                            ('00' + date.getUTCSeconds()).slice(-2);

                        var d = new Date();
                        var year = d.getFullYear();
                        var month = d.getMonth();
                        var day = d.getDate();
                        var hour = d.getHours();
                        var minute = d.getMinutes();
                        var second = d.getSeconds();


                        var date2 = new Date(year + 30, month, day, hour, minute, second);
                        date2 = date2.getUTCFullYear() + '-' +
                            ('00' + (date2.getUTCMonth() + 1)).slice(-2) + '-' +
                            ('00' + date2.getUTCDate()).slice(-2) + ' ' +
                            ('00' + date2.getUTCHours()).slice(-2) + ':' +
                            ('00' + date2.getUTCMinutes()).slice(-2) + ':' +
                            ('00' + date2.getUTCSeconds()).slice(-2);

                        var getFlight = "SELECT count(*)  FROM cars;";

                        console.log("getFlight" + getFlight);
                        var numRows;

                        mysql.fetchData(function(err,results){
                            if(err){
                                throw err;
                            }
                            else
                            {







                                var postflight8 = "INSERT into  list (carId, city,s_date,e_date) values('" + results[0]['count(*)']+ "','" + msg.city + "','" + date + "','" + date2 + "')";

                                connection.query(postflight8, updates, function (err, result) {
                                    if (err) {
                                        console.log("ERROR: " + err.message);
                                    }
                                    console.log('hello232e13vdcdv2');


                                });
                                console.log("\nConnection released..");
                                connection.release();


                                numRows=results.length;
                            }
                        },getFlight);
                    }
                }
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
exports.postcars = postcars;























function postflights(msg, callback) {
    var res = {};

    try {
        var updates = {};
        if (msg.AirlinesName != "") {
            updates['AirlinesName'] = msg.AirlinesName;
        }
        if (msg.SourceAirport != "")
            updates['SourceAirport'] = msg.SourceAirport;
        if (msg.DestinationAirport != "")
            updates['DestinationAirport'] = msg.DestinationAirport;
        if (msg.FirstClassSeats != "")
            updates['FirstClassSeats'] = msg.FirstClassSeats;
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
            updates['TakeOffTime'] = msg.TakeOffTime;
        if (msg.LandingTime !== "")
            updates['LandingTime'] = msg.LandingTime;
        if (msg.Description !== "")
            updates['Description'] = msg.Description;
        if (msg.Plane !== "")
            updates['Plane'] = msg.Plane;
        var updates2 = {};
        if (msg.FirstClassSeats !== "")
            updates['FirstClassSeats'] = msg.FirstClassSeats;
        if (msg.BusinessClassSeats !== "")
            updates['BusinessClassSeats'] = msg.BusinessClassSeats;
        if (msg.EconomyClassSeats !== "")
            updates['EconomyClassSeats'] = msg.EconomyClassSeats;




        if(msg.operation == 'update' )
        {


            if( Object.keys(updates).length> 0) {


                pool.getConnection(function (err, connection) {
                    if (err) {

                        connection.release();
                        res.code = "400";
                        res.value = "Error updating flights";
                        callback(null, res);
                        throw err;
                    }
                    else {

                        var updates = {};
                        if (msg.AirlinesName != "") {
                            updates['AirlinesName'] = msg.AirlinesName;
                        }
                        if (msg.SourceAirport != "")
                            updates['SourceAirport'] = msg.SourceAirport;
                        if (msg.DestinationAirport != "")
                            updates['DestinationAirport'] = msg.DestinationAirport;
                        if (msg.FirstClassSeats != "")
                            updates['FirstClassSeats'] = msg.FirstClassSeats;
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
                            updates['TakeOffTime'] = msg.TakeOffTime;
                        if (msg.LandingTime !== "")
                            updates['LandingTime'] = msg.LandingTime;
                        if (msg.Description !== "")
                            updates['Description'] = msg.Description;
                        if (msg.Plane !== "")
                            updates['Plane'] = msg.Plane;
                        var updates2 = {};
                        if (msg.FirstClassSeats !== "")
                            updates['FirstClassSeats'] = msg.FirstClassSeats;
                        if (msg.BusinessClassSeats !== "")
                            updates['BusinessClassSeats'] = msg.BusinessClassSeats;
                        if (msg.EconomyClassSeats !== "")
                            updates['EconomyClassSeats'] = msg.EconomyClassSeats;


                        var updateflight = "UPDATE flights SET ? where FlightID='" + msg.FlightID + "'";
                        console.log(updateflight);

                        connection.query(updateflight, updates, function (err, result) {
                            if (err) {
                                console.log("ERROR: " + err);
                                res.code = "407";
                                res.value = "Flight id already exists";
                                callback(null, res);
                            }
                            else {	// return err or result

                                res.code = "200";
                                res.value = "Success updating flight";
                                callback(null, res);

                            }
                            //console.log("\nConnection released..");
                            connection.release();
                        });
                    }

                });

                pool.getConnection(function (err, connection2) {
                    if (err) {

                        connection2.release();

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

                        updateflight = "UPDATE flightsavailability SET ? where FlightID='" + msg.FlightID + "'";

                        connection2.query(updateflight, updates2, function (err, result) {
                            if (err) {
                                console.log("ERROR: " + err.message);
                            }
                            else {	// return err or result
                                res.code = "200";
                                res.value = "Success get flights";
                                callback(null, res);

                            }
                            connection2.release();
                            console.log("\nConnection released..");

                        });


                    }
                });
            }
            else {
                res.code = "400";
                res.value = "No values updated";
                callback(null, res);

            }
        }
        else {



            var addflight = "INSERT into  flights values('" + msg.FlightID + "','" + msg.AirlinesName + "','" + msg.SourceAirport + "','" + msg.DestinationAirport + "','" + msg.FirstClassSeats + "','" +
                msg.BusinessClassSeats + "','" + msg.EconomyClassSeats + "','" + msg.FirstClassFares + "','" + msg.BusinessClassFares + "','" + msg.EconomyClassFares + "','" + msg.TakeOffTime + "','" + msg.LandingTime + "','" + msg.Description + "','" + msg.Plane + "',0)";



            pool.getConnection(function (err, connection) {
                if (err) {

                    connection.release();
                    res.code = "400";
                    res.value = "Error adding flights";
                    callback(null, res);
                    throw err;
                }
                else {
                    console.log(addflight);
                    connection.query(addflight, updates, function (err, result) {
                        if (err) {
                            console.log("ERROR: " + err);
                            res.code = "407";
                            res.value = "Flight id already exists";
                            callback(null, res);
                        }
                        else {	// return err or result

                            pool.getConnection(function (err, connection2) {
                                if (err) {

                                    connection2.release();

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

                                    addflight = "INSERT into flightsavailability (Date, FlightId , FirstClassSeats , BusinessClassSeats , EconomyClassSeats) values (NULL,'" + msg.FlightID + "','" + msg.FirstClassSeats + "','" + msg.BusinessClassSeats + "','" + msg.EconomyClassSeats + "')";

                                    connection2.query(addflight, updates2, function (err, result) {
                                        if (err) {
                                            console.log("ERROR: " + err.message);
                                            res.code = "400";
                                            res.value = "Error adding flights";
                                            callback(null, res);
                                        }
                                        else {	// return err or result
                                            res.code = "200";
                                            res.value = "Success adding flights";
                                            callback(null, res);

                                        }
                                        connection2.release();
                                        //console.log("\nConnection released..");

                                    });


                                }
                            });

                        }
                        connection.release();
                    });
                }

            });


        }
        // pool.getConnection(function (err, connection) {
        //     if (err) {
        //
        //         connection.release();
        //         res.code = "400";
        //         res.value = "Error adding flights";
        //         callback(null, res);
        //         throw err;
        //     }
        //     else {
        //
        //         var res = {};
        //
        //         var updates = {};
        //         if (msg.FlightID != "")
        //             updates['FlightID'] = msg.FlightID;
        //         if (msg.AirlinesName != "") {
        //             updates['AirlinesName'] = msg.AirlinesName;
        //         }
        //         if (msg.SourceAirport != "")
        //             updates['SourceAirport'] = msg.SourceAirport;
        //         if (msg.DestinationAirport != "")
        //             updates['DestinationAirport'] = msg.DestinationAirport;
        //         if (msg.FirstClassSeats != "")
        //             updates['FirstClassSeats'] = msg.FirstClassSeats;
        //         if (msg.BusinessClassSeats != "")
        //             updates['BusinessClassSeats'] = msg.BusinessClassSeats;
        //         if (msg.EconomyClassSeats != "")
        //             updates['EconomyClassSeats'] = msg.EconomyClassSeats;
        //         if (msg.FirstClassFares != "")
        //             updates['FirstClassFares'] = msg.FirstClassFares;
        //         if (msg.BusinessClassFares != "")
        //             updates['BusinessClassFares'] = msg.BusinessClassFares;
        //         if (msg.EconomyClassFares != "")
        //             updates['EconomyClassFares'] = msg.EconomyClassFares;
        //         if (msg.TakeOffTime != "")
        //             updates['TakeOffTime'] = msg.TakeOffTime;
        //         if (msg.LandingTime != "")
        //             updates['LandingTime'] = msg.LandingTime;
        //         if (msg.Description != "")
        //             updates['Description'] = msg.Description;
        //         if (msg.Plane != "")
        //             updates['Plane'] = msg.Plane;
        //
        //
        //         // console.log('hi' + updates['AirlinesName']);
        //         var postflight;
        //         if (msg.operation == 'update')
        //             postflight = "UPDATE flights SET ? where FlightID='" + msg.FlightID + "'";
        //         else
        //             postflight = "INSERT into  flights values('" + msg.FlightID + "','" + msg.AirlinesName + "','" + msg.SourceAirport + "','" + msg.DestinationAirport + "','" + msg.FirstClassSeats + "','" +
        //                 msg.BusinessClassSeats + "','" + msg.EconomyClassSeats + "','" + msg.FirstClassFares + "','" + msg.BusinessClassFares + "','" + msg.EconomyClassFares + "','" + msg.TakeOffTime + "','" + msg.LandingTime + "','" + msg.Description + "','" + msg.Plane + "',0)";
        //         // Neat!
        //         console.log(postflight);
        //         connection.query(postflight, updates, function (err, result) {
        //             if (err) {
        //                 console.log("ERROR: " + err);
        //                 res.code = "407";
        //                 res.value = "Flight id already exists";
        //                 callback(null, res);
        //             }
        //             else {	// return err or result
        //
        //                 res.code = "200";
        //                 res.value = "Success updating flight";
        //                 callback(null, res);
        //
        //             }
        //             //console.log("\nConnection released..");
        //             connection.release();
        //         });
        //     }
        // });
        // pool.getConnection(function (err, connection2) {
        //     //console.log('fdfdx');
        //
        //
        //     if (err) {
        //
        //         connection2.release();
        //
        //         throw err;
        //     }
        //     else {
        //
        //
        //         var updates2 = {};
        //         if (msg.FlightID != "")
        //             updates2['FlightID'] = msg.FlightID;
        //         if (msg.FirstClassSeats != "")
        //             updates2['FirstClassSeats'] = msg.FirstClassSeats;
        //         if (msg.BusinessClassSeats != "")
        //             updates2['BusinessClassSeats'] = msg.BusinessClassSeats;
        //         if (msg.EconomyClassSeats != "")
        //             updates2['EconomyClassSeats'] = msg.EconomyClassSeats;
        //         //console.log(updates2.length );
        //
        //         console.log('fdfdx');
        //
        //         if (msg.operation == 'update')
        //             postflight = "UPDATE flightsavailability SET ? where FlightID='" + msg.FlightID + "'";
        //
        //         else
        //             postflight = "INSERT into flightsavailability (Date, FlightId , FirstClassSeats , BusinessClassSeats , EconomyClassSeats) values (NULL,'" + msg.FlightID + "','" + msg.FirstClassSeats + "','" + msg.BusinessClassSeats + "','" + msg.EconomyClassSeats + "')";
        //         //console.log(postflight2);
        //         connection2.query(postflight, updates2, function (err, result) {
        //             if (err) {
        //                 console.log("ERROR: " + err.message);
        //             }
        //             else {	// return err or result
        //                 res.code = "200";
        //                 res.value = "Success get flights";
        //                 callback(null, res);
        //
        //             }
        //             connection2.release();
        //             console.log("\nConnection released..");
        //
        //         });
        //
        //
        //     }
        // });
    }
    catch (e){
        console.log(e);
        res.code = "401";
        res.value = "Failed adding flights";
        callback(null, res);
    }

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

        var getFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime,F.Description, F.Plane, F.FirstClassSeats,F.BusinessClassSeats, F.EconomyClassSeats " +
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
                            row["durationminutes"]= (hrs *60) + min ;

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

            var getFlightReturn = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime,F.Description, F.Plane, F.FirstClassSeats,F.BusinessClassSeats, F.EconomyClassSeats " +
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
                var filterFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime ,F.Description, F.Plane, F.FirstClassSeats,F.BusinessClassSeats, F.EconomyClassSeats" +
                    " FROM flights as F RIGHT JOIN flightsavailability  as FA ON F.FlightId = FA.FlightId " +
                    "WHERE F.FlightId NOT IN (SELECT FlightId FROM   flightsavailability WHERE date ='" + travelDate + "' and BusinessClassSeats=0 and FirstClassSeats=0 and EconomyClassSeats=0)" +
                    "And F.SourceAirport = '" + source + "' and F.DestinationAirport = '" + destination + "' AND F.TakeOffTime >= '" + minTakeOffTime + "' AND F.TakeOffTime <= '" + maxTakeOffTime
                    + "' AND F.LandingTime >= '" + minLandingTime + "' AND F.LandingTime <= '" + maxLandingTime + "' AND (LEAST(F.EconomyClassFares,F.BusinessClassFares,F.FirstClassFares) >=" + minPrice + " OR GREATEST(F.EconomyClassFares,F.BusinessClassFares,F.FirstClassFares) <= " + maxPrice + ") AND (" + airlines + " IS NULL OR F.AirlinesName = '" + airlines + "')";
            }
            else {
                var filterFlight = "SELECT DISTINCT F.FlightId, F.AirlinesName, F.SourceAirport, F.DestinationAirport, F.FirstClassFares,F.BusinessClassFares,F.EconomyClassFares,F.TakeOffTime, F.LandingTime ,F.Description, F.Plane, F.FirstClassSeats,F.BusinessClassSeats, F.EconomyClassSeats" +
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
                            min = diff.minutes();
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
