
var mysql = require('./mysql');
var mongoose = require('./mongoose');
mongo=require('./mongo.js');
var mongo = require("./mongo");
var moment = require('moment');

var redis=require('./Redis');

var mysql2 = require('mysql');

//Put your mysql configuration settings - user, password, database and port
var pool  = mysql2.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'kayak',
    port	 : 3306
});

function Hotels(msg, callback){

    var res = {};
    try {




        var getHotel = "SELECT DISTINCT H.HotelId, H.HotelName,H.Location,H.ReviewScore,H.Phone,H.StreetAddress,H.Longitude,H.Latitude,H.State,H.Longitude,H.Latitude,H.ZipCode,H.Stars,H.Description,DeluxRoomCount,StandardRoomCount,KingRoomCount,QueenRoomCount,HA.DoubleRoomCount,HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice FROM hotel as H LEFT OUTER JOIN  hotelavailability  as HA ON H.HotelId = HA.HotelId  where HA.Date IS NULL;";

        console.log("getHotel"+ getHotel);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else {
                if (results.length > 0) {


//for admin add amenities,images, bedtype and free cancellation to mongo
                    //var hotel = new mongoose.hotel({
                    //     //"hotel_id":results.insertId,
                    //     "hotel_id":1,
                    //     "image" : "hotel.jpg",
                    //     "amenities" : [ "Pool", "Gym", "Spa", "Bicycle rental" ],
                    //     "free_cancel_delux": true,
                    //     "free_cancel_standard": false,
                    //     "free_cancel_king": true,
                    //     "free_cancel_queen": false,
                    //     "free_cancel_double": true,
                    //     "delux_bed_type": "2 double beds",
                    //     "standard_bed_type": "no beds specified",
                    //     "king_bed_type": "1 king bed",
                    //     "queen_bed_type": "1 queen bed",
                    //     "double_bed_type": "2 double beds",
                    //     "room_img":["hotel.jpg", "hotel.jpg", "hotel.jpg","hotel.jpg"]
                    //
                    // });
                    // hotel.save(function (errors,responses) {
                    //
                    //     if(errors)
                    //     {
                    //         console.log(errors);
                    //     }
                    //     else
                    //     {
                    //
                    //         console.log("in mongoose");
                    //
                    //     }
                    // });


                    results.forEach(function (row) {
                        mongoose.hotel.findOne({"hotel_id": row.HotelId}, function (error, response) {
                            if (error) {
                                console.log(error);
                                res.code = 404;
                                callback(null, res);

                            }
                            else if (response != null) {

                                row["amenities"] = response["amenities"];
                                if(!response["amenities"])
                                    row["amenities"]='NULL';
                                row["image"] = response["image"];
                                if(!response["amenities"])
                                    row["amenities"]='NULL';
                                if (row == results[results.length - 1]) {
                                    res.code = 200;
                                    res.value = "Success get hotels";
                                    res.hotels = results;
                                    callback(null, res);
                                }
                            }
                            else {
                                row["amenities"] = 'NULL';
                                row["image"] = 'NULL';

                                if (row == results[results.length - 1]) {
                                    res.code = 200;
                                    res.value = "Success get hotels";
                                    res.hotels = results;
                                    callback(null, res);
                                }
                            }
                        });
                    });

                }
                else {
                    res.code = "400";
                    res.value = "No Hotels available";
                    console.log("get hotel res" + JSON.stringify(res));
                    callback(null, res);
                }


            }
        },getHotel);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed fetching hotels";
        console.log("get hotel res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.Hotels = Hotels;



function posthotel(msg, callback) {
    var res = {};
    console.log('hi');
    console.log(msg.AirlinesName);

    var updates = {};
    if (msg.HotelName != "") {
        console.log('hi123');
        updates['HotelName'] = msg.HotelName;
        console.log('hi'+updates['HotelName']);
    }
    if (msg.Location != "")
        updates['Location'] = msg.Location;
    if (msg.ReviewScore != "")
        updates['ReviewScore'] = msg.ReviewScore;
    if (msg.Phone != "")
        updates['Phone']=  msg.Phone;
    if (msg.StreetAddress != "")
        updates['StreetAddress'] = msg.StreetAddress;
    if (msg.State !== "")
        updates['State'] = msg.State;
    if (msg.Longitude !== "")
        updates['Longitude'] = msg.Longitude;
    if (msg.Latitude !== "")
        updates['Latitude'] = msg.Latitude;
    if (msg.ZipCode !== "")
        updates['ZipCode'] = msg.ZipCode;
    if (msg.Stars !== "")
        updates['Stars']= msg.Stars;
    if (msg.Description !== "")
        updates['Description'] = msg.Description;

    var updates2 = {};
    if (msg.DeluxRoomCount !== "")
        updates2['DeluxRoomCount'] = msg.DeluxRoomCount;
    if (msg.StandardRoomCount !== "")
        updates2['StandardRoomCount'] = msg.StandardRoomCount;
    if (msg.QueenRoomCount !== "")
        updates2['QueenRoomCount'] = msg.QueenRoomCount;

    if (msg.DoubleRoomCount !== "")
        updates2['DoubleRoomCount'] = msg.DoubleRoomCount;
    if (msg.DeluxRoomPrice !== "")
        updates2['DeluxRoomPrice'] = msg.DeluxRoomPrice;
    if (msg.StandardRoomPrice !== "")
        updates2['StandardRoomPrice'] = msg.StandardRoomPrice;
    if (msg.KingRoomPrice !== "")
        updates2['KingRoomPrice'] = msg.KingRoomPrice;
    if (msg.QueenRoomPrice !== "")
        updates2['QueenRoomPrice'] = msg.QueenRoomPrice;
    if (msg.DoubleRoomPrice !== "")
        updates2['DoubleRoomPrice'] = msg.DoubleRoomPrice;




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
            if (msg.HotelName != "") {
                console.log('hi123');
                updates['HotelName'] = msg.HotelName;
                console.log('hi'+updates['HotelName']);
            }
            if (msg.Location != "" || msg.Location != null )
                updates['Location'] = msg.Location;
            if (msg.ReviewScore != "")
                updates['ReviewScore'] = msg.ReviewScore;
            if (msg.Phone != "")
                updates['Phone']=  msg.Phone;
            if (msg.StreetAddress != "")
                updates['StreetAddress'] = msg.StreetAddress;
            if (msg.State !== "")
                updates['State'] = msg.State;
            if (msg.Longitude !== "")
                updates['Longitude'] = msg.Longitude;
            if (msg.Latitude !== "")
                updates['Latitude'] = msg.Latitude;
            if (msg.ZipCode !== "")
                updates['ZipCode'] = msg.ZipCode;
            if (msg.Stars !== "")
                updates['Stars']= msg.Stars;
            if (msg.Description !== "")
                updates['Description'] = msg.Description;

            var updates2 = {};
            if (msg.DeluxRoomCount !== "")
                updates2['DeluxRoomCount'] = msg.DeluxRoomCount;
            if (msg.StandardRoomCount !== "")
                updates2['StandardRoomCount'] = msg.StandardRoomCount;
            if (msg.QueenRoomCount !== "")
                updates2['QueenRoomCount'] = msg.QueenRoomCount;

            if (msg.DoubleRoomCount !== "")
                updates2['DoubleRoomCount'] = msg.DoubleRoomCount;
            if (msg.DeluxRoomPrice !== "")
                updates2['DeluxRoomPrice'] = msg.DeluxRoomPrice;
            if (msg.StandardRoomPrice !== "")
                updates2['StandardRoomPrice'] = msg.StandardRoomPrice;
            if (msg.KingRoomPrice !== "")
                updates2['KingRoomPrice'] = msg.KingRoomPrice;
            if (msg.QueenRoomPrice !== "")
                updates2['QueenRoomPrice'] = msg.QueenRoomPrice;
            if (msg.DoubleRoomPrice !== "")
                updates2['DoubleRoomPrice'] = msg.DoubleRoomPrice;

            console.log('hi'+updates['Location']);
            console.log(msg.hotels);

            console.log('you stupid');










            //console.log('hi' + updates['AirlinesName']);
            var postflight;
            if(msg.operation==='update')
                postflight = "UPDATE hotel SET ? where HotelID='" + msg.HotelId + "'";
            else
                postflight = "INSERT into  hotel (HotelName,Location,ReviewScore,Phone,StreetAddress,State,Longitude,Latitude,ZipCode,Stars,Description)values('"+msg.HotelName+"','"+msg.Location+"','"+msg.ReviewScore+"','"+msg.Phone+"','"+
                    msg.StreetAddress+"','"+msg.State+"','"+msg.Longitude+"','"+msg.Latitude+"','"+msg.ZipCode+"','"+msg.Stars+"','"+msg.Description+"')";
            // Neat!
            console.log(postflight);
            connection.query(postflight, updates, function (err, result) {
                if (err) {
                    console.log("ERROR: " + err.message);
                }
                else {	// return err or result

                    console.log('hello232e132');



                    mongoose.hotel.findOne({"hotel_id": result.insertId}, function (error, response) {
                        console.log("The response is"+response);
                        if (error) {
                            console.log('hi12323ndnfd');

                            console.log(error);
                            res.code = 404;
                            callback(null, res);

                        }
                        else {
                            console.log("The response here is"+response);

                            mongoose.hotel.remove({"hotel_id": result.insertId}, function (error, response) {
                                if (error) {
                                    console.log('hi12323'+error);
                                    res.code = 404;
                                    callback(null, res);

                                }
                                else{
                                    var hotel = new mongoose.hotel({

                                        "hotel_id": result.insertId,
                                        "image" : "hotel.jpg",
                                        "amenities": {'Pool': msg.Pool, 'Gym': msg.Gym, 'Spa': msg.Spa, 'Bicycle-Rental': msg.Bicycle},

                                        "free_cancel_delux": true,
                                        "free_cancel_standard": msg.free_cancel_standard,
                                        "free_cancel_king": msg.free_cancel_king,
                                        "free_cancel_queen": msg.free_cancel_queen,
                                        "free_cancel_double": msg.free_cancel_double,
                                        score: 1

                                    });

                                    hotel.save(function (errors,responses) {

                                        if (errors) {
                                            console.log(errors);
                                        }
                                        else {

                                            console.log("in mongoose");

                                        }
                                    });

                                }
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
                            if (msg.DeluxRoomCount !== "")
                                updates2['DeluxRoomCount'] = msg.DeluxRoomCount;
                            if (msg.StandardRoomCount !== "")
                                updates2['StandardRoomCount'] = msg.StandardRoomCount;
                            if(msg.KingRoomCount!=="")
                                updates2['KingRoomCount'] = msg.KingRoomCount;
                            if (msg.QueenRoomCount !== "")
                                updates2['QueenRoomCount'] = msg.QueenRoomCount;

                            if (msg.DoubleRoomCount !== "")
                                updates2['DoubleRoomCount'] = msg.DoubleRoomCount;
                            if (msg.DeluxRoomPrice !== "")
                                updates2['DeluxRoomPrice'] = msg.DeluxRoomPrice;
                            if (msg.StandardRoomPrice !== "")
                                updates2['StandardRoomPrice'] = msg.StandardRoomPrice;
                            if (msg.KingRoomPrice !== "")
                                updates2['KingRoomPrice'] = msg.KingRoomPrice;
                            if (msg.QueenRoomPrice !== "")
                                updates2['QueenRoomPrice'] = msg.QueenRoomPrice;
                            if (msg.DoubleRoomPrice !== "")
                                updates2['DoubleRoomPrice'] = msg.DoubleRoomPrice;

                            console.log('fdfdx');

                            if(msg.operation=='update')
                                postflight = "UPDATE hotelavailability SET ? where FlightID='" + msg.FlightID + "' where Date IS NULL";

                            else {
                                postflight2 = "INSERT into hotelavailability (Date, HotelID , DeluxRoomCount , StandardRoomCount , KingRoomCount,QueenRoomCount,DoubleRoomCount,DeluxRoomPrice,StandardRoomPrice,KingRoomPrice,QueenRoomPrice,DoubleRoomPrice) values (NULL,'" + result.insertId+ "','" + msg.DeluxRoomCount + "','" + msg.StandardRoomCount + "','" + msg.KingRoomCount + "','" + msg.QueenRoomCount + "','" + msg.DoubleRoomCount + "','" + msg.DeluxRoomPrice + "','" + msg.StandardRoomPrice + "','" + msg.KingRoomPrice + "','" + msg.QueenRoomPrice + "','" + msg.DoubleRoomPrice + "')";
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
                        }
                    });

                }
                console.log("\nConnection released..");
                connection.release();
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
exports.posthotel = posthotel;










function fetchHotels(msg, callback){

    var res = {};
    try {


        var checkindate  = msg.checkindate;
        var checkoutdate = msg.checkoutdate;
        var location = msg.location;



        var getHotel = "SELECT DISTINCT H.HotelId, H.HotelName,H.Location,H.ReviewScore,H.Phone,H.StreetAddress,H.State,H.ZipCode,H.Stars,H.Description, LEAST(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) AS 'Price'" +
            " FROM hotel as H RIGHT JOIN hotelavailability  as HA ON H.HotelId = HA.HotelId " +
            " WHERE H.HotelId NOT IN ( SELECT HA.HotelId FROM hotelavailability HA WHERE HA.date >= '"+checkindate +"' and HA.date <= '"+ checkoutdate+
            "' AND HA.DeluxRoomCount=0 AND HA.StandardRoomCount=0 AND HA.KingRoomCount=0 AND HA.QueenRoomCount=0 and HA.DoubleRoomCount=0 )" +
            " AND H.Location = '" + location+"'";

        console.log("getHotel"+ getHotel);

        // redis.delete(msg.location,function (err,reply) {
        //     console.log("Deleted as :"+reply);
        // })

        // redis.fetch(msg.location,function (err,reply) {
        //     console.log("Found redis reply as :"+JSON.stringify(reply)+" with type :"+typeof reply+" typeof location :"+typeof msg.location);
        //
        //     if(!err){
        //         if(reply.length!=0){
        //             res.code=200;
        //             reply.forEach(function (row) {
        //                 mongoose.hotel.findOne({"hotel_id": row.HotelId}, function (error, response) {
        //                     if (error) {
        //                         console.log(error);
        //                         res.code = 404;
        //                         callback(null, res);
        //
        //                     }
        //                     else if (response != null) {
        //
        //                         row["amenities"] = response["amenities"];
        //                         row["image"] = response["image"];
        //                         if (row == reply[reply.length - 1]) {
        //
        //
        //                             console.log("******************");
        //                             console.log(reply);
        //                             res.code = 200;
        //                             res.value = "Success get hotels";
        //                             res.hotels = reply;
        //                             callback(null, res);
        //                         }
        //                     }
        //                     else {
        //                         if (row == reply[reply.length - 1]) {
        //                             console.log("******************-------");
        //                             console.log(reply);
        //                             res.code = 200;
        //                             res.value = "Success get hotels";
        //                             res.hotels = reply;
        //                             callback(null, res);
        //                         }
        //                     }
        //                 });
        //             });
        //         }
        //         else{
        //
        //             mysql.fetchData(function(err,results){
        //                 if(err){
        //                     throw err;
        //                 }
        //                 else {
        //                     if (results.length > 0) {
        //                                 redis.store(msg.location,results,function (err,reply) {
        //                                     if(!err){
        //                                         results.forEach(function (row) {
        //                                             mongoose.hotel.findOne({"hotel_id": row.HotelId}, function (error, response) {
        //                                                 if (error) {
        //                                                     console.log(error);
        //                                                     res.code = 404;
        //                                                     callback(null, res);
        //
        //                                                 }
        //                                                 else if (response != null) {
        //
        //                                                     row["amenities"] = response["amenities"];
        //                                                     row["image"] = response["image"];
        //                                                     if (row == results[results.length - 1]) {
        //
        //
        //                                                         console.log("****************&&&&&&");
        //                                                         console.log(results);
        //                                                         res.code = 200;
        //                                                         res.value = "Success get hotels";
        //                                                         res.hotels = results;
        //                                                         callback(null, res);
        //                                                     }
        //                                                 }
        //                                                 else {
        //                                                     if (row == results[results.length - 1]) {
        //                                                         console.log("&&&&&&&&&&&&&&&&&");
        //                                                         console.log(results);
        //                                                         res.code = 200;
        //                                                         res.value = "Success get hotels";
        //                                                         res.hotels = results;
        //                                                         callback(null, res);
        //                                                     }
        //                                                 }
        //                                             });
        //                                         });
        //
        //                                     }
        //                                     else {
        //                                         console.log(err);
        //                                         res.code = 404;
        //                                         callback(null, res);
        //                                     }
        //                                 })
        //
        //
        //                     }
        //                     else {
        //                         res.code = "400";
        //                         res.value = "No Hotels available";
        //                         console.log("get hotel res" + JSON.stringify(res));
        //                         callback(null, res);
        //                     }
        //
        //                 }
        //             },getHotel);
        //
        //         }
        //     }
        // })





        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else {
                if (results.length > 0) {

                    //for admin add amenities,images, bedtype and free cancellation to mongo
                    // var hotel = new mongoose.hotel({
                    //     //"hotel_id":results.insertId,
                    //     "hotel_id":1,
                    //     "image" : "hotel.jpg",
                    //     "amenities" : [ "Pool", "Gym", "Spa", "Bicycle rental" ],
                    //     "free_cancel_delux": true,
                    //     "free_cancel_standard": false,
                    //     "free_cancel_king": true,
                    //     "free_cancel_queen": false,
                    //     "free_cancel_double": true,
                    //     "delux_bed_type": "2 double beds",
                    //     "standard_bed_type": "no beds specified",
                    //     "king_bed_type": "1 king bed",
                    //     "queen_bed_type": "1 queen bed",
                    //     "double_bed_type": "2 double beds",
                    //     "room_img":["hotel.jpg", "hotel.jpg", "hotel.jpg","hotel.jpg"]
                    //
                    // });
                    // hotel.save(function (errors,responses) {
                    //
                    //     if(errors)
                    //     {
                    //         console.log(errors);
                    //     }
                    //     else
                    //     {
                    //
                    //         console.log("in mongoose");
                    //
                    //     }
                    // });


                    results.forEach(function (row) {
                        mongoose.hotel.findOne({"hotel_id": row.HotelId}, function (error, response) {
                            if (error) {
                                console.log(error);
                                res.code = 404;
                                callback(null, res);

                            }
                            else if (response != null) {

                                row["amenities"] = response["amenities"];
                                row["image"] = response["image"];
                                if (row == results[results.length - 1]) {
                                    res.code = 200;
                                    res.value = "Success get hotels";
                                    res.hotels = results;
                                    callback(null, res);
                                }
                            }
                            else {
                                if (row == results[results.length - 1]) {
                                    res.code = 200;
                                    res.value = "Success get hotels";
                                    res.hotels = results;
                                    callback(null, res);
                                }
                            }
                        });
                    });

                }
                else {
                    res.code = "400";
                    res.value = "No Hotels available";
                    console.log("get hotel res" + JSON.stringify(res));
                    callback(null, res);
                }


            }
        },getHotel);

    }
    catch (e){
        console.log(e);
        res.code = "401";
        res.value = "Failed fetching hotels";
        console.log("get hotel res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.fetchHotels = fetchHotels;

exports.filterHotels = function (msg, callback) {

    var res = {};

    try{

        var checkindate  = msg.checkindate;
        var checkoutdate = msg.checkoutdate;
        var location = msg.location;
        var stars = msg.stars;
        var reviewScore = msg.reviewScore;
        var minPrice = msg.minPrice;
        var maxPrice = msg.maxPrice;

        var hotelName = msg.hotelName;
        var filterHotel;
        if(hotelName === null || hotelName === '')
        {
            filterHotel =  "SELECT DISTINCT H.HotelId, H.HotelName,H.Location,H.ReviewScore,H.Phone,H.StreetAddress,H.State,H.ZipCode,H.Stars,H.Description, LEAST(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) As 'Price' " +
                " FROM hotel as H RIGHT JOIN hotelavailability  as HA ON H.HotelId = HA.HotelId " +
                " WHERE H.HotelId NOT IN ( SELECT HA.HotelId FROM hotelavailability HA WHERE HA.date >= '"+checkindate +"' and HA.date <= '"+ checkoutdate+
                "' AND HA.DeluxRoomCount=0 AND HA.StandardRoomCount=0 AND HA.KingRoomCount=0 AND HA.QueenRoomCount=0 and HA.DoubleRoomCount=0 )" +
                " AND H.Location = '" + location+"'AND H.Stars >= " + stars + " AND H.ReviewScore >= "+ reviewScore +" AND (LEAST(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) >="+ minPrice +" OR GREATEST(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) <= " + maxPrice+ ") AND (" + hotelName+ " IS NULL OR H.HotelName = '"+ hotelName + "');";

        }
        else
        {
            filterHotel =  "SELECT DISTINCT H.HotelId, H.HotelName,H.Location,H.ReviewScore,H.Phone,H.StreetAddress,H.State,H.ZipCode,H.Stars,H.Description, LEAST(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) As 'Price' " +
                " FROM hotel as H RIGHT JOIN hotelavailability  as HA ON H.HotelId = HA.HotelId " +
                " WHERE H.HotelId NOT IN ( SELECT HA.HotelId FROM hotelavailability HA WHERE HA.date >= '"+checkindate +"' and HA.date <= '"+ checkoutdate+
                "' AND HA.DeluxRoomCount=0 AND HA.StandardRoomCount=0 AND HA.KingRoomCount=0 AND HA.QueenRoomCount=0 and HA.DoubleRoomCount=0 )" +
                " AND H.Location = '" + location+"'AND H.Stars >= " + stars + " AND H.ReviewScore >= "+ reviewScore +" AND (LEAST(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) >="+ minPrice +" OR GREATEST(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) <= " + maxPrice+ ") AND ('" + hotelName+ "' IS NULL OR H.HotelName = '"+ hotelName + "');";


        }

        console.log("filterHotel"+ filterHotel);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                if(results.length > 0){
                    // res.code = "200";
                    // res.value = "Success filter hotels";
                    // res.hotels= results;
                    // callback(null, res);
                    results.forEach(function (row) {
                        mongoose.hotel.findOne({"hotel_id": row.HotelId}, function (error, response) {
                            if (error) {
                                console.log(error);
                                res.code = 404;
                                callback(null, res);

                            }
                            else if (response != null) {

                                row["amenities"] = response["amenities"];
                                row["image"] = response["image"];
                                if (row == results[results.length - 1]) {
                                    res.code = 200;
                                    res.value = "Success filter hotels";
                                    res.hotels = results;
                                    callback(null, res);
                                }
                            }
                            else {
                                if (row == results[results.length - 1]) {
                                    res.code = 200;
                                    res.value = "Success filter hotels";
                                    res.hotels = results;
                                    callback(null, res);
                                }
                            }
                        });
                    });
                }
                else
                {
                    res.code = "400";
                    res.value = "No Hotels available";
                    res.hotels= "No Hotels available";
                    console.log("filter hotel res"+ JSON.stringify(res));
                    callback(null, res);
                }
            }
        },filterHotel);

    }
    catch (e){
        // done(e,{});
        res.code = "401";
        res.value = "Failed fetching hotels";
        console.log("filterHotel res"+ JSON.stringify(res));
        callback(null, res);
    }


};

exports.getRooms = function(msg, callback){

    var res = {};
    try {


        var hotelId  = msg.HotelId;
        var checkindate  = msg.checkindate;
        var checkoutdate = msg.checkoutdate;
        var location = msg.location;
        var roomDetails = [];

        var a = moment(new Date(msg.checkindate), 'DD/MM/YYYY');
        var b = moment(new Date(msg.checkoutdate), 'DD/MM/YYYY');
        var days = b.diff(a, 'days') +1;
        console.log(days);

        var checkAvailability = "SELECT * FROM   hotelavailability HA WHERE  HA.date >='"+checkindate+"' and HA.date <='"+checkoutdate+"'  AND HA.HotelId = "+ hotelId;


        var getRooms = "SELECT DISTINCT H.HotelId, H.HotelName,HA.DeluxRoomCount,HA.StandardRoomCount,HA.KingRoomCount, H.Location,H.ReviewScore,H.Phone,H.StreetAddress,H.State,H.ZipCode,H.Stars,H.Description, least(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) As Price ,HA.DeluxRoomPrice, HA.StandardRoomPrice, HA.KingRoomPrice " +
            "FROM hotel as H RIGHT JOIN hotelavailability  as HA ON H.HotelId = HA.HotelId " +
            "WHERE H.HotelId NOT IN ( SELECT HA.HotelId FROM hotelavailability HA " +
            "WHERE  HA.date >='"+checkindate+"' AND HA.date <='"+checkoutdate+"' AND HA.DeluxRoomCount=0 AND HA.StandardRoomCount=0 AND HA.KingRoomCount=0 AND HA.QueenRoomCount=0 AND HA.DoubleRoomCount=0)" +
            "AND H.Location = '"+location+"' AND HA.Date IS NULL AND H.HotelId= " + hotelId;

        console.log("checkAvailability"+ checkAvailability);
        console.log("getRooms"+ getRooms);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                if(results.length > 0){

                    var available = true;
                    var leastDeluxCount = results[0].DeluxRoomCount,leastStandardCount =results[0].StandardRoomCount,leastKingCount = results[0].KingRoomCount,leastQueenCount = results[0].QueenRoomCount,leastDoubleCount = results[0].DoubleRoomCount;
                     for(var i= 0; i< results.length; i++)
                     {
                         if(!(results[i].DeluxRoomCount >0 || results[i].StandardRoomCount >0 || results[i].KingRoomCount >0 || results[i].QueenRoomCount >0 || results[i].DoubleRoomCount >0))
                         {
                             available = false;
                         }
                         else
                         {
                              if(leastDeluxCount> results[i].DeluxRoomCount)
                              {
                                  leastDeluxCount =results[i].DeluxRoomCount;
                              }
                             if(leastStandardCount> results[i].StandardRoomCount)
                             {
                                 leastStandardCount = results[i].StandardRoomCount;
                             }
                             if(leastKingCount> results[i].KingRoomCount)
                             {
                                 leastKingCount = results[i].KingRoomCount;
                             }
                             if(leastQueenCount> results[i].QueenRoomCount)
                             {
                                 leastQueenCount = results[i].QueenRoomCount;
                             }
                             if(leastDoubleCount>results[i].DoubleRoomCount)
                             {
                                 leastDoubleCount = results[i].DoubleRoomCount;
                             }
                         }
                     }
                    if(available)
                    {
                        mongoose.hotel.findOne({"hotel_id": hotelId}, function (error, response) {
                            if (error) {
                                console.log(error);

                            }
                            else
                            {
                                var rooms = formatRoomJSON(results,leastDeluxCount,leastStandardCount,leastKingCount,leastQueenCount,leastDoubleCount,days,response);
                                res.code = "200";
                                res.value = "Success get*** rooms";
                                res.rooms = rooms;
                                callback(null, res);
                            }
                        });

                    }
                    else
                    {
                        //no rooms available
                        res.code = "400";
                        res.value = "No rooms available";
                        res.rooms = roomDetails;
                        callback(null, res);
                    }

                }
                else
                {


                    var getRooms = "SELECT * FROM  hotelavailability HA WHERE  HA.HotelId = "+ hotelId + " AND HA.Date IS NULL";

                    mysql.fetchData(function(err,results1){
                        if(err){
                            throw err;
                        }
                        else
                        {
                            if(results1.length > 0){

                                var leastDeluxCount = results1[0].DeluxRoomCount,leastStandardCount =results1[0].StandardRoomCount,leastKingCount = results1[0].KingRoomCount,leastQueenCount = results1[0].QueenRoomCount,leastDoubleCount = results1[0].DoubleRoomCount;

                                mongoose.hotel.findOne({"hotel_id": hotelId}, function (error, response) {
                                    if (error) {
                                        console.log(error);

                                    }
                                    else
                                    {
                                        var rooms = formatRoomJSON(results1,leastDeluxCount,leastStandardCount,leastKingCount,leastQueenCount,leastDoubleCount,days,response);
                                        res.code = "200";
                                        res.value = "Success get rooms";
                                        res.rooms= rooms;
                                        //console.log("filter hotel res"+ JSON.stringify(res));
                                        callback(null, res)
                                    }
                                });
                               ;
                            }
                            else
                            {
                                res.code = "400";
                                res.value = "Failed fetching rooms";
                                res.rooms = "Failed fetching rooms";
                                console.log("get  rooms res"+ JSON.stringify(res));
                                callback(null, res);
                            }
                        }
                    },getRooms);
                }
            }
        },checkAvailability);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed fetching rooms";
        console.log("get rooms res"+ JSON.stringify(res));
        callback(null, res);
    }
}

 function formatRoomJSON(results,leastDeluxCount,leastStandardCount,leastKingCount,leastQueenCount,leastDoubleCount,days,response)
{
  var rooms = {},deluxRooms = {},standardRooms = {},kingRooms = {},queenRooms = {},doubleRooms = {};
  var defaultBedType = "No bed specified";

             if (response != null) {

                //free cancellation info
                if(response["free_cancel_delux"] ? deluxRooms["free_cancellation"] = response["free_cancel_delux"] :deluxRooms["free_cancellation"]= "false" );
                if(response["free_cancel_standard"] ? standardRooms["free_cancellation"] = response["free_cancel_standard"] :standardRooms["free_cancellation"]= false );
                if(response["free_cancel_king"] ? kingRooms["free_cancellation"] = response["free_cancel_king"] :kingRooms["free_cancellation"]= false );
                if(response["free_cancel_queen"] ? queenRooms["free_cancellation"] = response["free_cancel_queen"] :queenRooms["free_cancellation"]= false );
                if(response["free_cancel_double"] ? doubleRooms["free_cancellation"] = response["free_cancel_double"] :doubleRooms["free_cancellation"]= false );

                //bed type info
                if(response["delux_bed_type"] ? deluxRooms["bedType"] = response["delux_bed_type"] :deluxRooms["bedType"]= defaultBedType );
                if(response["standard_bed_type"] ? standardRooms["bedType"] = response["standard_bed_type"] :standardRooms["bedType"]= defaultBedType );
                if(response["king_bed_type"] ? kingRooms["bedType"] = response["king_bed_type"] :kingRooms["bedType"]= defaultBedType );
                if(response["queen_bed_type"] ? queenRooms["bedType"] = response["queen_bed_type"] :queenRooms["bedType"]= defaultBedType );
                if(response["double_bed_type"] ? doubleRooms["bedType"] = response["double_bed_type"] :doubleRooms["bedType"]= defaultBedType );


                var room_imgs = response['room_img'];
                //rooms["room_img"] = room_imgs;
            }
            else {

                deluxRooms["free_cancellation"] = false;
                standardRooms["free_cancellation"] = false;
                kingRooms["free_cancellation"] = false;
                queenRooms["free_cancellation"] = false;
                doubleRooms["free_cancellation"] = false;

                deluxRooms["bedType"] = "1 king bed";
                standardRooms["bedType"] = "1 double bed";
                kingRooms["bedType"] = "1 king bed";
                queenRooms["bedType"] = "2 queen beds";
                doubleRooms["bedType"] = "2 double beds";
                 //rooms["room_img"] = [];
            }

    deluxRooms["count"] = leastDeluxCount;
    deluxRooms["price"] = results[0].DeluxRoomPrice;
    deluxRooms["id"] = "1";
    deluxRooms["days"] = days;
    rooms["DeluxRooms"]= deluxRooms;

    standardRooms["count"] = leastStandardCount;
    standardRooms["price"] = results[0].StandardRoomPrice;
    standardRooms["id"] = "2";
    standardRooms["days"] = days;
    rooms["StandardRooms"]= standardRooms;

    kingRooms["count"] = leastKingCount;
    kingRooms["price"] = results[0].KingRoomPrice;
    kingRooms["id"] ="3";
    kingRooms["days"] = days;
    rooms["KingRooms"]= kingRooms;

    queenRooms["count"] = leastQueenCount;
    queenRooms["price"] = results[0].QueenRoomPrice;
    queenRooms["id"]="4";
    queenRooms["days"] = days;
    rooms["QueenRooms"]= queenRooms;

    doubleRooms["count"] = leastDoubleCount;
    doubleRooms["price"] = results[0].DoubleRoomPrice;
    doubleRooms["id"] = "5";
    doubleRooms["days"] = days;
    rooms["DoubleRooms"]= doubleRooms;


    return rooms;



}



exports.setReviews = function(msg, callback){
    var res = {};
    try {
        var hotelreview = new mongoose.reviewByUser({
            "booking_id":msg.booking_id,
            "user_id":msg.user_id,
            "hotel_id": msg.hotel_id,
            "rating":msg.rating,
            "review_content":msg.review_content
        });
        hotelreview.save(function (errors,responses) {
            if(errors)
            {
                throw errors;
                //callback(errors, null);
            }
            else
            {

                var  reviewByUser = mongo.collection('reviewByUser');

                reviewByUser.aggregate([{$match:{"hotel_id":msg.hotel_id}},{"$group":{_id:msg.hotel_id,count:{$sum:1},avgRating:{$avg:"$rating"}}}],(function (err,answer) {
                        if(!err) { //Exception Handled

                            var updateReview = "UPDATE hotel set ReviewScore =  " + answer[0].avgRating + " WHERE HotelId = " + msg.hotel_id;
                            mysql.fetchData(function(err,results){
                                if(err){
                                    throw err;
                                }
                                else
                                {

                                    res.code = "200";
                                    res.value = "Success updating review";
                                    console.log("Success updating review"+ JSON.stringify(res));
                                    callback(null, res);


                                }
                            },updateReview);

                        }
                        else{
                            console.log("Error from MongoDB for user review as :"+err);
                            res.code="400";
                            res.value="Could not add the review";
                            callback(null,res);
                        }
                    })
                );





            }
        });
    }
    catch (e){
        console.log(e);
        res.code = "401";
        res.value = "Failed adding review";
        console.log("Failed adding review"+ JSON.stringify(res));
        callback(null, res);
    }
}


exports.getReviews = function(msg, callback){
    var res = {};
    try {
        console.log(msg.hotel_id);

        mongoose.reviewByUser.find({"hotel_id":msg.hotel_id}, function (err,answer) {
                 if(!err) { //Exception Handled
                        console.log(answer);
                             res.code = "200";
                             res.value = answer;
                             console.log("Success getting review"+ JSON.stringify(answer));
                             callback(null, res);


                 }
                 else{
                     console.log("Error from MongoDB for get user reviews as :"+err);
                     res.code="400";
                     res.value="Could not get reviews";
                     callback(null,res);
                 }
             });

    }
    catch (e){
        console.log(e);
        res.code = "401";
        res.value = "Failed getting reviews";
        console.log("Failed getting reviews"+ JSON.stringify(res));
        callback(null, res);
    }
};
