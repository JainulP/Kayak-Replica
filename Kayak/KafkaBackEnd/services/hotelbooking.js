var mysql = require('./mysql');

function addTravelerInfo(msg, callback){

    var res = {};
    try {


        var firstname  = msg.firstname;
        var lastname = msg.lastname;
        var phone = msg.phone;
        var email = msg.email;
        var userid = msg.userid;

        var addTravelerInfo = "INSERT INTO travelerinfo(FirstName, LastName, Phone, Email,UserId) VALUES ('"+ firstname + "','"+ lastname + "','"+ phone + "','"+ email+ "','"+ userid+ "');"

        console.log("addTravelerInfo"+ addTravelerInfo);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                res.code = "200";
                res.value = "Success add traveler";
                res.traveler = results;
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
                res.payment = results;
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


var mysql = require('./mysql');


function submitBooking(msg, callback){

    var res = {};
    try
    {
        var userid  = msg.userid;
        var hotelid = msg.hotelid;
        var roomtype = msg.roomtype;
        var travelerid = msg.travelerid;
        var cardid = msg.cardid;
        var street= msg.street;
        var city = msg.city;
        var state = msg.state;
        var country = msg.country;
        var zip = msg.zip;
        var totalcost = msg.totalcost;
        var numberofrooms = msg.numberofrooms;
        var numberofadults= msg.numberofadults;
        var numberofchildren = msg.numberofchildren;
        var bookingdate= msg.bookingdate;
        var checkindate = new Date(msg.checkindate);
        var checkoutdate = new Date(msg.checkoutdate);

        var submitBooking = "INSERT INTO hotelbooking(UserId, HotelId, RoomType, TravelerId, CardId, Street,City,State, Country,Zip,TotalCost,NumberOfRooms,NumberOfAdults,NumberOfChildren,BookingDateTime,CheckInDate,CheckOutDate) VALUES ('"
            + userid + "','"+ hotelid + "','"+ roomtype + "','"+ travelerid+ "','"+ cardid+ "','"+ street+ "','"+ city+ "','"+ state+ "','"+ country+ "','"+ zip+ "',"+ totalcost+ ","+ numberofrooms+ ","+ numberofadults+ ","+ numberofchildren+ ",'"+ bookingdate+ "','"+ checkindate.toISOString().slice(0,10) +"','"+ checkoutdate.toISOString().slice(0,10) +  "');"


        var getMaxRoomCount = "SELECT DeluxRoomCount, StandardRoomCount, KingRoomCount, QueenRoomCount,DoubleRoomCount,DeluxRoomPrice, StandardRoomPrice, KingRoomPrice, QueenRoomPrice, DoubleRoomPrice FROM hotelavailability WHERE HotelId = "+ hotelid + " AND Date IS NULL";

        var updateColumn;
        switch(roomtype)
        {
            case "1":
                updateColumn = "DeluxRoomCount";
                break;
            case "2":
                updateColumn = "StandardRoomCount";
                break;
            case "3":
                updateColumn = "KingRoomCount";
                break;
            case "4":
                updateColumn = "QueenRoomCount";
                break;
            case "5":
                updateColumn = "DoubleRoomCount";
                break;

        }

        console.log("submitBooking"+ submitBooking);

        console.log("getMaxRoomCount"+ getMaxRoomCount);

        mysql.fetchData(function(err,results1){
            if(err){
                throw err;
            }
            else
            {
                console.log("STEP1 Success");
                mysql.fetchData(function(err,results){
                    if(err){
                        throw err;
                    }
                    else {
                        if (results.length > 0) {
                            var countDelux = results[0].DeluxRoomCount,
                                countStandard = results[0].StandardRoomCount,
                                countKing = results[0].KingRoomCount,
                                countQueen = results[0].QueenRoomCount,
                                countDouble = results[0].DoubleRoomCount;
                            var priceDelux = results[0].DeluxRoomPrice,
                                priceStandard = results[0].StandardRoomPrice,
                                priceKing = results[0].KingRoomPrice,
                                priceQueen = results[0].QueenRoomPrice,
                                priceDouble = results[0].DoubleRoomPrice;

                            switch (roomtype) {
                                case "1":
                                    updateColumn = "DeluxRoomCount";
                                    countDelux = results[0].DeluxRoomCount - numberofrooms;
                                    break;
                                case "2":
                                    updateColumn = "StandardRoomCount";
                                    countStandard = results[0].StandardRoomCount - numberofrooms;
                                    break;
                                case "3":
                                    updateColumn = "KingRoomCount";
                                    countKing = results[0].KingRoomCount - numberofrooms;
                                    break;
                                case "4":
                                    updateColumn = "QueenRoomCount";
                                    countQueen = results[0].QueenRoomCount - numberofrooms;
                                    break;
                                case "5":
                                    updateColumn = "DoubleRoomCount";
                                    countDouble = results[0].DoubleRoomCount - numberofrooms;
                                    break;
                            }




                            for (var date = new Date(checkindate); (date.getDate()) <= (checkoutdate.getDate()); date.setDate(date.getDate() + 1)) {
                                let k = date;
                                  asyncProcess(function () {

                                         var checkAvailability = "SELECT * FROM hotelavailability WHERE HotelId =" + hotelid + "  AND Date = '" + k.toISOString().slice(0, 10) + "'";
                                         console.log("checkAvailability" + checkAvailability);

                                         var addToHotelAvailability = "INSERT INTO hotelavailability(HotelId, Date, DeluxRoomCount, StandardRoomCount, KingRoomCount, QueenRoomCount,DoubleRoomCount,DeluxRoomPrice,StandardRoomPrice,KingRoomPrice,QueenRoomPrice,DoubleRoomPrice) VALUES ('" + hotelid + "','" + k.toISOString().slice(0, 10) + "'," + countDelux + "," + countStandard + "," + countKing + "," + countQueen + "," + countDouble + "," + priceDelux + "," + priceStandard + "," + priceKing + "," + priceQueen + "," + priceDouble + ");"
                                         console.log("addToHotelAvailability" + addToHotelAvailability);
                                         mysql.fetchData(function (err, results2) {
                                             if (err) {
                                                 throw err;
                                             }
                                             else {
                                                 if (results2.length > 0) {
                                                     var count;

                                                     switch (roomtype) {
                                                         case "1":
                                                             count = results2[0].DeluxRoomCount - numberofrooms;
                                                             break;
                                                         case "2":
                                                             count = results2[0].StandardRoomCount - numberofrooms;
                                                             break;
                                                         case "3":
                                                             count = results2[0].KingRoomCount - numberofrooms;
                                                             break;
                                                         case "4":
                                                             count = results2[0].QueenRoomCount - numberofrooms;
                                                             break;
                                                         case "5":
                                                             count = results2[0].DoubleRoomCount - numberofrooms;
                                                             break;

                                                     }
                                                     var updateHotelAvailability = "UPDATE hotelavailability SET " + updateColumn + " = " + count + " WHERE HotelId = '" + hotelid + "' AND Date = '" + results2[0].Date.toISOString().slice(0, 10) + "'";

                                                     console.log("updateHotelAvailability    ", updateHotelAvailability);
                                                     mysql.fetchData(function (err, results) {
                                                         if (err) {
                                                             throw err;
                                                         }
                                                         else {
                                                             console.log("Success update hotel availability");

                                                         }
                                                     }, updateHotelAvailability);
                                                 }
                                                 else {
                                                     mysql.fetchData(function (err, results) {
                                                         if (err) {
                                                             throw err;
                                                         }
                                                         else {
                                                             console.log("Success adding to hotel availability  i");

                                                         }
                                                     }, addToHotelAvailability);
                                                 }

                                             }
                                         }, checkAvailability);
                                  });
                            }

                            var getBooking = "SELECT * FROM hotelbooking WHERE UserId= '"+userid +"' AND HotelId = "+ hotelid + " AND RoomType = '"+ roomtype + "' AND BookingDateTime= '"+bookingdate+ "'";

                            console.log("getBooking"+ getBooking);

                            mysql.fetchData(function(err,results){
                                if(err){
                                    throw err;
                                }
                                else
                                {
                                    res.code = "200";
                                    res.value = "Success adding payment info";
                                    res.booking = results;
                                    callback(null, res);
                                }
                            },getBooking);


                        }

                    }
                },getMaxRoomCount);
            }
        },submitBooking);

    }
    catch (e){
        console.log(e);
        res.code = "401";
        res.value = "Failed booking hotel";
        res.booking = "Eorror booking hotel";
        console.log("booking hotel res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.submitBooking = submitBooking;

function asyncProcess(callback) {
callback();
}