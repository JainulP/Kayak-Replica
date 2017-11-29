
var mysql = require('./mysql');
var mongoose = require('./mongoose');

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
                                var rooms = formatRoomJSON(results,leastDeluxCount,leastStandardCount,leastKingCount,leastQueenCount,leastDoubleCount,response);
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
                                        var rooms = formatRoomJSON(results1,leastDeluxCount,leastStandardCount,leastKingCount,leastQueenCount,leastDoubleCount,response);
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

 function formatRoomJSON(results,leastDeluxCount,leastStandardCount,leastKingCount,leastQueenCount,leastDoubleCount,response)
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

                deluxRooms["bedType"] = defaultBedType;
                standardRooms["bedType"] = defaultBedType;
                kingRooms["bedType"] = defaultBedType;
                queenRooms["bedType"] = defaultBedType;
                doubleRooms["bedType"] = defaultBedType;
                 //rooms["room_img"] = [];
            }

    deluxRooms["count"] = leastDeluxCount;
    deluxRooms["price"] = results[0].DeluxRoomPrice;
    rooms["DeluxRooms"]= deluxRooms;

    standardRooms["count"] = leastStandardCount;
    standardRooms["price"] = results[0].StandardRoomPrice;
    rooms["StandardRooms"]= standardRooms;

    kingRooms["count"] = leastKingCount;
    kingRooms["price"] = results[0].KingRoomPrice;
    rooms["KingRooms"]= kingRooms;

    queenRooms["count"] = leastQueenCount;
    queenRooms["price"] = results[0].QueenRoomPrice;
    rooms["QueenRooms"]= queenRooms;

    doubleRooms["count"] = leastDoubleCount;
    doubleRooms["price"] = results[0].DoubleRoomPrice;
    rooms["DoubleRooms"]= doubleRooms;


    return rooms;



}



exports.setReviews = function(msg, callback){
    console.log("msg");
    console.log(msg);
    var hotelreview = new mongoose.reviewByUser({
        "booking_id":"1",
        "user_id":"1",
        "hotel_id": "1",
        "rating":"2",
        "review_content":"Awesome Experience"
    });
    hotelreview.save(function (errors,responses) {
        if(errors)
        {
            console.log(errors);
            callback(errors, null);
        }
        else
        {
            console.log("in mongoose");
            callback(null, responses);
        }
    });
}