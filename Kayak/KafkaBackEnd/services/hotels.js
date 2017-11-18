
var mysql = require('./mysql');

function fetchHotels(msg, callback){

    var res = {};
    try {


        var checkindate  = msg.checkindate;
        var checkoutdate = msg.checkoutdate;
        var location = msg.location;

        var getHotel = "SELECT DISTINCT H.HotelId, H.HotelName,H.Location,H.ReviewScore,H.Phone,H.StreetAddress,H.State,H.ZipCode,H.Stars, LEAST(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) AS 'Price'" +
            " FROM hotel as H RIGHT JOIN hotelavailability  as HA ON H.HotelId = HA.HotelId " +
            " WHERE H.HotelId NOT IN ( SELECT HA.HotelId FROM hotelavailability HA WHERE HA.date >= '"+checkindate +"' and HA.date <= '"+ checkoutdate+
            "' AND HA.DeluxRoomCount=0 AND HA.StandardRoomCount=0 AND HA.KingRoomCount=0 AND HA.QueenRoomCount=0 and HA.DoubleRoomCount=0 )" +
            " AND H.Location = '" + location+"'";

        console.log("getHotel"+ getHotel);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                if(results.length > 0){

                    res.code = "200";
                    res.value = "Success get hotels";
                    res.hotels = results;
                    callback(null, res);
                }
                else
                {
                    res.code = "400";
                    res.value = "No Hotels available";
                    console.log("get hotel res"+ JSON.stringify(res));
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

        var filterHotel =  "SELECT DISTINCT H.HotelId, H.HotelName,H.Location,H.ReviewScore,H.Phone,H.StreetAddress,H.State,H.ZipCode,H.Stars, LEAST(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) As 'Price' " +
            " FROM hotel as H RIGHT JOIN hotelavailability  as HA ON H.HotelId = HA.HotelId " +
            " WHERE H.HotelId NOT IN ( SELECT HA.HotelId FROM hotelavailability HA WHERE HA.date >= '"+checkindate +"' and HA.date <= '"+ checkoutdate+
            "' AND HA.DeluxRoomCount=0 AND HA.StandardRoomCount=0 AND HA.KingRoomCount=0 AND HA.QueenRoomCount=0 and HA.DoubleRoomCount=0 )" +
            " AND H.Location = '" + location+"'AND H.Stars >= " + stars + " AND H.ReviewScore >= "+ reviewScore +" AND (LEAST(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) >="+ minPrice +" OR GREATEST(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) <= " + maxPrice+ ") AND (" + hotelName+ " IS NULL OR H.HotelName = '"+ hotelName + "');";

        console.log("filterHotel"+ filterHotel);
        //console.log("filterHotelByName"+ filterHotelByName);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                if(results.length > 0){

                    res.code = "200";
                    res.value = "Success filter hotels";
                    res.hotels= results;
                   //console.log("filter hotel res"+ JSON.stringify(res));
                    callback(null, res);
                }
                else
                {
                    res.code = "400";
                    res.value = "No Hotels available";
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


        var getRooms = "SELECT DISTINCT H.HotelId, H.HotelName,HA.DeluxRoomCount,HA.StandardRoomCount,HA.KingRoomCount , H.Location,H.ReviewScore,H.Phone,H.StreetAddress,H.State,H.ZipCode,H.Stars,least(HA.DeluxRoomPrice,HA.StandardRoomPrice,HA.KingRoomPrice,HA.QueenRoomPrice,HA.DoubleRoomPrice) As Price ,HA.DeluxRoomPrice, HA.StandardRoomPrice, HA.KingRoomPrice " +
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
                        var rooms = formatRoomJSON(results,leastDeluxCount,leastStandardCount,leastKingCount,leastQueenCount,leastDoubleCount);
                        res.code = "200";
                        res.value = "Success get*** rooms";
                        res.rooms = rooms;
                        callback(null, res);
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
                                var rooms = formatRoomJSON(results1,leastDeluxCount,leastStandardCount,leastKingCount,leastQueenCount,leastDoubleCount);
                                res.code = "200";
                                res.value = "Success get rooms";
                                res.rooms= rooms;
                                //console.log("filter hotel res"+ JSON.stringify(res));
                                callback(null, res);
                            }
                            else
                            {
                                res.code = "401";
                                res.value = "Failed fetching rooms";
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


function formatRoomJSON(results,leastDeluxCount,leastStandardCount,leastKingCount,leastQueenCount,leastDoubleCount)
{
  var rooms = {},deluxRooms = {},standardRooms = {},kingRooms = {},queenRooms = {},doubleRooms = {};

        deluxRooms["count"] = leastDeluxCount;
        deluxRooms["price"] = results[0].DeluxRoomPrice;
        deluxRooms["bedType"] = "1 king bed";
        rooms["DeluxRooms"]= deluxRooms;

        standardRooms["count"] = leastStandardCount;
        standardRooms["price"] = results[0].StandardRoomPrice;
        standardRooms["bedType"] = "2 double beds or 1 king bed";
        rooms["StandardRooms"]= standardRooms;

        kingRooms["count"] = leastKingCount;
        kingRooms["price"] = results[0].KingRoomPrice;
        kingRooms["bedType"] = "1 king bed";
        rooms["KingRooms"]= kingRooms;

        queenRooms["count"] = leastQueenCount;
        queenRooms["price"] = results[0].QueenRoomPrice;
        queenRooms["bedType"] = "2 queen beds";
        rooms["QueenRooms"]= queenRooms;

        doubleRooms["count"] = leastDoubleCount;
        doubleRooms["price"] = results[0].DoubleRoomPrice;
        doubleRooms["bedType"] = "2 double beds";
        rooms["DoubleRooms"]= doubleRooms;


    return rooms;
}