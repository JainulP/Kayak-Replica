
var mysql = require('./mysql');

function fetchHotels(msg, callback){

    var res = {};
    try {


        var checkindate  = msg.checkindate;
        var checkoutdate = msg.checkoutdate;
        var location = msg.location;
        var hotelDetails = [];
        var getHotel = "Select * from rooms right join hotel on rooms.HotelId = hotel.HotelId " +
            "Where RoomId NOT IN " +
            "(Select RoomId from hotelbooking " +
            "Where(CheckInDate <= '" +checkindate + "' and CheckOutDate >= '"+  checkindate + "') " +
            "OR (CheckInDate < '" + checkindate   +  "' and CheckOutDate >=  '" + checkoutdate+"') "+
            "OR ('" + checkindate   + "' <= CheckInDate and '"+checkoutdate+ "' >=  CheckInDate))" +
            "AND hotel.Location = '"+  location+"'"

        console.log("getHotel"+ getHotel);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                if(results.length > 0){

                     for(var i =0; i< results.length; i++)
                     {
                         if(!(hotelDetails.some(hotelDetail => hotelDetail.HotelId === results[i].HotelId)))
                         {
                             hotelDetails.push(results[i]);
                         }
                     }

                    res.code = "200";
                    res.value = "Success get hotels";
                    res.hotels = hotelDetails;
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
        console.log("gethotel res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.fetchHotels = fetchHotels;

exports.filterHotels = function (msg, callback) {


    try{

        var checkindate  = msg.checkindate;
        var checkoutdate = msg.checkoutdate;
        var location = msg.location;
        var stars = msg.stars;
        var reviewScore = msg.reviewScore;
        var minPrice = msg.minPrice;
        var maxPrice = msg.maxPrice;

        var hotelName = msg.hotelName;

        var hotelDetails = [];


        var filterHotel = "SELECT * FROM ROOMS RIGHT JOIN hotel ON rooms.HotelId = hotel.HotelId " +
            "WHERE RoomId NOT IN " +
            "(SELECT RoomId FROM hotelbooking " +
            "WHERE(CheckInDate <= '" +checkindate + "' AND CheckOutDate >= '"+  checkindate + "') " +
            "OR (CheckInDate < '" + checkindate   +  "' AND CheckOutDate >=  '" + checkoutdate+"') "+
            "OR ('" + checkindate   + "' <= CheckInDate AND '"+checkoutdate+ "' >=  CheckInDate))" +
            "AND hotel.Location = '"+  location+"' AND hotel.Stars >= "+ stars + " AND hotel.ReviewScore >= "+ reviewScore +
             " AND rooms.Price >=  "+  minPrice + " AND rooms.Price <= "+ maxPrice;


        var filterHotelByName = "SELECT * FROM ROOMS RIGHT JOIN hotel ON rooms.HotelId = hotel.HotelId " +
            "WHERE RoomId NOT IN " +
            "(SELECT RoomId FROM hotelbooking " +
            "WHERE(CheckInDate <= '" +checkindate + "' AND CheckOutDate >= '"+  checkindate + "') " +
            "OR (CheckInDate < '" + checkindate   +  "' AND CheckOutDate >=  '" + checkoutdate+"') "+
            "OR ('" + checkindate   + "' <= CheckInDate AND '"+checkoutdate+ "' >=  CheckInDate))" +
            "AND hotel.Location = '"+  location+"' AND hotel.Stars >= "+ stars + " AND hotel.ReviewScore >= "+ msg.reviewScore +
            " AND rooms.Price >=  "+ msg.minPrice + " AND rooms.Price <= "+ maxPrice +" AND hotel.HotelName = '"+hotelName ;

        console.log("filterHotel"+ filterHotel);
        console.log("filterHotelByName"+ filterHotelByName);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                if(results.length > 0){


                    for(var i =0; i< results.length; i++)
                    {
                        if(!(hotelDetails.some(hotelDetail => hotelDetail.HotelId === results[i].HotelId)))
                        {
                            hotelDetails.push(results[i]);
                        }
                    }

                    res.code = "200";
                    res.value = "Success filter hotels";
                    res.hotels= hotelDetails;
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


        if(hotelName != null && hotelName != "")
        {
            mysql.fetchData(function(err,results){
                if(err){
                    throw err;
                }
                else
                {
                    if(results.length > 0){

                        for(var i =0; i< results.length; i++)
                        {
                            if(!(hotelDetails.some(hotelDetail => hotelDetail.HotelId === results[i].HotelId)))
                            {
                                hotelDetails.push(results[i]);
                            }
                        }
                        res.code = "200";
                        res.value = "Success filter hotels by name";
                        res.hotels = hotelDetails;
                        console.log("filter hotel res"+ JSON.stringify(res));
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
            },filterHotelByName);
        }

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

        var getRooms = "Select * from rooms right join hotel on rooms.HotelId = hotel.HotelId " +
            "Where RoomId NOT IN " +
            "(Select RoomId from hotelbooking " +
            "Where(CheckInDate <= '" +checkindate + "' and CheckOutDate >= '"+  checkindate + "') " +
            "OR (CheckInDate < '" + checkindate   +  "' and CheckOutDate >=  '" + checkoutdate+"') "+
            "OR ('" + checkindate   + "' <= CheckInDate and '"+checkoutdate+ "' >=  CheckInDate))" +
            "AND hotel.Location = '"+  location+"' AND hotel.hotelId = "+ hotelId ;

        console.log("getRooms"+ getRooms);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                if(results.length > 0){

                    for(var i =0; i< results.length; i++)
                    {
                        if(!(roomDetails.some(room => room.RoomType === results[i].RoomType)))
                        {
                            roomDetails.push(results[i]);
                        }
                    }

                    res.code = "200";
                    res.value = "Success get rooms";
                    res.rooms = roomDetails;
                    callback(null, res);
                }
                else
                {
                    res.code = "400";
                    res.value = "No rooms available";
                    console.log("get rooms res"+ JSON.stringify(res));
                    callback(null, res);
                }
            }
        },getRooms);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed fetching rooms";
        console.log("get rooms res"+ JSON.stringify(res));
        callback(null, res);
    }
}