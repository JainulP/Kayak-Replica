var mysql = require('./mysql');

function addTravelerInfo(msg, callback){

    var res = {};

    try {

        var firstname  = msg.firstname;
        var lastname = msg.lastname;
        var middlename = msg.middlename;
        var age = msg.age;
        var gender = msg.gender;
        var phone = msg.phone;
        var email = msg.email;
        var userid = msg.userid;

        var addTravelerInfo = "INSERT INTO travelerinfo(FirstName, LastName, Phone, Email,UserId,MiddleName,Age,Gender) VALUES ('"+ firstname + "','"+ lastname + "','"+ phone + "','"+ email+ "','"+ userid+ "','"+ middlename+ "','"+ age+"','"+ gender+"');"

        console.log("addTravelerInfo"+ addTravelerInfo);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {

                console.log(results);
                res.code = "200";
                res.value = "Success add traveler";
                res.traveler = results.insertId;
                callback(null, res);
            }
        },addTravelerInfo);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed adding traveler";
        console.log("add traveler res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.addTravelerInfo = addTravelerInfo;



function getTravelerInfo(msg, callback){

    var res = {};

    try {

        var userid = msg.userid;

        var getTravelerInfo = "SELECT * FROM travelerinfo WHERE UserId = " + userid + " AND DeleteFlag = 0";

        console.log("getTravelerInfo"+ getTravelerInfo);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                console.log(results);
                res.code = "200";
                res.value = "Success got traveler";
                res.op = results;
                //res.traveler = results.insertId;
                callback(null, res);
            }
        },getTravelerInfo);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed getting traveler";
        console.log("add traveler res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.getTravelerInfo = getTravelerInfo;


function deleteTravelerInfo(msg, callback){

    var res = {};

    try {

        var userid = msg.userid;

        var deleteTravelerInfo = "UPDATE travelerinfo SET DeleteFlag = '1' WHERE Travelerid = " + userid;

        console.log("deleteTravelerInfo"+ deleteTravelerInfo);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                console.log(results);
                res.code = "200";
                res.value = "Success got traveler";
                res.op = results;
                //res.traveler = results.insertId;
                callback(null, res);
            }
        },deleteTravelerInfo);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed delete traveler";
        console.log("delete traveler res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.deleteTravelerInfo = deleteTravelerInfo;



function editTravelerInfo(msg, callback){

    var res = {};

    try {

        var firstname  = msg.firstname;
        var lastname = msg.lastname;
        var middlename = msg.middlename;
        var age = msg.age;
        var gender = msg.gender;
        var phone = msg.phone;
        var email = msg.email;
        var userid = msg.userid;

        //var editTravelerInfo = "UPDATE travelerinfo SET (FirstName, LastName, Phone, Email, MiddleName,Age,Gender) VALUES ('"+ firstname + "','"+ lastname + "','"+ phone + "','"+ email+ "','"+ middlename+ "','"+ age+"','"+ gender+"') WHERE Travelerid = " + userid;

        var editTravelerInfo = "UPDATE travelerinfo SET FirstName = '"+ firstname + "', LastName = '"+ lastname + "' ,MiddleName = '"+ middlename + "', Age = '"+ age + "', Phone = '"+ phone + "', Gender = '"+ gender + "', email = '"+ email + "'   WHERE Travelerid = " + userid;

        console.log("editTravelerInfo"+ editTravelerInfo);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {

                console.log(results);
                res.code = "200";
                res.value = "Success edit traveler";
                res.traveler = results.insertId;
                callback(null, res);
            }
        },editTravelerInfo);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed edit traveler";
        console.log("edit traveler res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.editTravelerInfo = editTravelerInfo;







function addPaymentInfo(msg, callback){

    var res = {};
    try
    {
        var nameoncard  = msg.nameoncard;
        var cardnumber = msg.cardnumber;
        var cardtype = msg.cardtype;
        var expirydate = msg.expirydate;
        var cvv = msg.cvv;
        var userid= msg.userid;

        var addPaymentInfo = "INSERT INTO payment(CardType, UserName, Cvv, CardNumber, ExpiryDate, UserId) VALUES ('"+ cardtype + "','"+ nameoncard + "','"+ cvv + "','"+ cardnumber+ "','"+ expirydate+ "','"+ userid+ "');"

        console.log("addPaymentInfo"+ addPaymentInfo);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                res.code = "200";
                res.value = "Success adding payment info";
                res.payment =  results.insertId;
                callback(null, res);
            }
        },addPaymentInfo);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed adding payment info";
        console.log("add payment res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.addPaymentInfo = addPaymentInfo;




function getPaymentInfo(msg, callback){

    var res = {};

    try {

        var userid = msg.userid;

        var getPaymentInfo = "SELECT * FROM payment WHERE UserId = " + userid + " AND DeleteFlag = 0";

        console.log("getPaymentInfo"+ getPaymentInfo);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                console.log(results);
                res.code = "200";
                res.value = "Success got Payment";
                res.op = results;
                //res.traveler = results.insertId;
                callback(null, res);
            }
        },getPaymentInfo);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed getting Payment";
        console.log("add payment res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.getPaymentInfo = getPaymentInfo;




function deletePaymentInfo(msg, callback){

    var res = {};

    try {

        var cardid = msg.cardid;

        var deletePaymentInfo = "UPDATE payment SET DeleteFlag = '1' WHERE CardId = " + cardid;

        console.log("deletePaymentInfo"+ deletePaymentInfo);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                console.log(results);
                res.code = "200";
                res.value = "Success got Payment";
                res.op = results;
                //res.traveler = results.insertId;
                callback(null, res);
            }
        },deletePaymentInfo);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed delete Payment";
        console.log("delete payment res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.deletePaymentInfo = deletePaymentInfo;


function editPaymentInfo(msg, callback){

    var res = {};
    try
    {
        var nameoncard  = msg.nameoncard;
        var cardnumber = msg.cardnumber;
        var cardtype = msg.cardtype;
        var expirydate = msg.expirydate;
        var cvv = msg.cvv;
        var cardid = msg.cardid;

        //var editPaymentInfo = "UPDATE payment SET (CardType, UserName, Cvv, CardNumber, ExpiryDate) ('"+ cardtype + "','"+ nameoncard + "','"+ cvv + "','"+ cardnumber+ "','"+ expirydate+ "') WHERE CardId = " + cardid;

        var editPaymentInfo = "UPDATE payment SET CardType = '"+ cardtype + "', UserName = '"+ nameoncard + "' ,Cvv = '"+ cvv + "', CardNumber = '"+ cardnumber + "', ExpiryDate = '"+ expirydate + "'  WHERE CardId = " + cardid;

        console.log("editPaymentInfo"+ editPaymentInfo);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                res.code = "200";
                res.value = "Success adding payment info";
                res.payment =  results.insertId;
                callback(null, res);
            }
        },editPaymentInfo);

    }
    catch (e){
        res.code = "401";
        res.value = "Failed edit payment info";
        console.log("edit payment res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.editPaymentInfo = editPaymentInfo;


function getAllBookings(msg, callback){

    var res = {};

    try {

        var userid = msg.userid;
        var allBookings = {};

                var queryHotelBookings = "SELECT HB.BookingId,H.HotelName,H.Location,H.Phone,H.StreetAddress,H.State,HB.RoomType, HB.TotalCost, HB.NumberOfRooms,HB.CheckInDate,HB.CheckOutDate,HB.DeleteFlag FROM hotelbooking  as HB JOIN hotel as H on HB.HotelId = H.HotelId WHERE HB.UserId = " + userid;

                mysql.fetchData(function(err,results){
                    if (err) {
                        throw err;
                    }
                    else {
                        allBookings['hotelBookings']  = results;
                        getFlightBookings();

                    }
                },queryHotelBookings);

        function getFlightBookings() {


                var queryFlightBookings = "SELECT distinct FB.BookingId ,F.FlightId,F.SourceAirport, F.DestinationAirport, F.AirlinesName, FB.BookingDateTime,FB.TotalCost, FB.NumberOfSeats, FB.SeatType, FB.TravelDateTo, FB.TravelDateFro FROM flightbooking AS FB Join flights AS F ON  FB.FlightIdTo=F.FlightId or FB.FlightIdFro= F.FlightId WHERE FB.UserId = " + userid;

                mysql.fetchData(function(err,results){
                    if (err) {
                       throw err;
                    }
                    else {
                        //console.log(results);
                       allBookings['flightBookings'] = results;
                        getCarBookings();
                    }
                },queryFlightBookings);
        }

        function getCarBookings() {

            var queryCarBookings = "SELECT CB.bookingid, CB.city, CB.s_city, CB.s_date,CB.e_date,CB.deleted ,C.carName,C.car_number,C.carType FROM bookings AS CB JOIN cars AS C on CB.carid = C.carId WHERE CB.user_id = " + userid;

            mysql.fetchData(function(err,results){
                if (err) {
                    throw err;
                }
                else {
                    //console.log(results);
                    allBookings['carBookings'] = results;
                    res.code = "200";
                    res.value = allBookings;
                   //console.log("get all bookings res"+ JSON.stringify(allBookings));
                    callback(null, res);
                }
            },queryCarBookings);
        }
    }
    catch (e){
        console.log(e);
        res.code = "401";
        res.value = "Failed fetching all bookings";
        console.log("get all bookings res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.getAllBookings = getAllBookings;
