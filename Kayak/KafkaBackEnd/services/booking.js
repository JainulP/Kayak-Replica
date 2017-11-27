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