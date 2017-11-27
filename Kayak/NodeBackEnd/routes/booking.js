var kafka = require('./kafka/client');

exports.addTravelerInfo = function(req,res){

    var addTravelerInfoParams = {
        "firstname":req.body.firstname,
        "lastname": req.body.lastname,
        "middlename": req.body.middlename,
        "age":req.body.age,
        "gender": req.body.gender,
        "phone": req.body.phone,
        "email": req.body.email,
        "userid": req.body.userid
    }
    kafka.make_request('addTravelerInfo_topic',addTravelerInfoParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("add traveler info error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({traveler:results.traveler});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Failed adding traveler info"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};


exports.addPaymentInfo = function(req,res){

    var addPaymentInfoParams = {
        "nameoncard":req.body.nameoncard,
        "cardnumber": req.body.cardnumber,
        "cardtype": req.body.cardtype,
        "expirydate": req.body.expirydate,
        "cvv": req.body.cvv,
        "userid": req.body.userid
    }
    kafka.make_request('addPaymentInfo_topic',addPaymentInfoParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("add payment info error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({payment:results.payment});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Failed adding payment info"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};