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
        "userid": "1"
    };
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

exports.getTravelerInfo = function(req,res){

    var getTravelerInfoParams = {
        "userid": req.body.userid
    };
    kafka.make_request('getTravelerInfo_topic',getTravelerInfoParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("get traveler info error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({op:results.op});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Failed getting traveler info"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};


exports.deleteTravelerInfo = function(req,res){

    var deleteTravelerInfoParams = {
        "userid": req.body.userid
    };
    kafka.make_request('deleteTravelerInfo_topic',deleteTravelerInfoParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("delete traveler info error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({op:results.op});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Failed delete traveler info"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};



exports.editTravelerInfo = function(req,res){

    var editTravelerInfoParams = {
        "firstname":req.body.firstname,
        "lastname": req.body.lastname,
        "middlename": req.body.middlename,
        "age":req.body.age,
        "gender": req.body.gender,
        "phone": req.body.phone,
        "email": req.body.email,
        "userid": req.body.userid
    };

    kafka.make_request('editTravelerInfo_topic',editTravelerInfoParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("edit traveler info error");
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
                return res.status(400).send({error:"Failed edit traveler info"});
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
        "userid": "1"
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



exports.getPaymentInfo = function(req,res){

    var getPaymentInfoParams = {
        "userid": req.body.userid
    };
    kafka.make_request('getPaymentInfo_topic',getPaymentInfoParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("get Payment info error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({op:results.op});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Failed getting Payment info"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};


exports.deletePaymentInfo = function(req,res){

    var deletePaymentInfoParams = {
        "cardid": req.body.cardid
    };
    kafka.make_request('deletePaymentInfo_topic',deletePaymentInfoParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("delete Payment info error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({op:results.op});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Failed delete Payment info"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};



exports.editPaymentInfo = function(req,res){

    var editPaymentInfoParams = {
        "nameoncard":req.body.nameoncard,
        "cardnumber": req.body.cardnumber,
        "cardtype": req.body.cardtype,
        "expirydate": req.body.expirydate,
        "cvv": req.body.cvv,
        "cardid": req.body.cardid
    };
    kafka.make_request('editPaymentInfo_topic',editPaymentInfoParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("edit payment info error");
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
                return res.status(400).send({error:"Failed edit payment info"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};


exports.getAllBookings = function(req,res){

    var getAllBookingsParams = {
        "userid": req.body.userid
    };
    kafka.make_request('getAllBookings_topic',getAllBookingsParams, function(err,results){
        console.log(results);
        if(err){
            console.log("get all bookings error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({bookings:results.value});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Could not find bookings"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};


exports.getAllBookingsByDate = function(req,res){

    var getAllBookingsParams = {
        "date": req.body.date
    };
    kafka.make_request('getAllBookingsByDate_topic',getAllBookingsParams, function(err,results){
        console.log(results);
        if(err){
            console.log("get all bookings by date error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({bookings:results.value});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({bookings:"Could not find bookings on the date"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};

exports.getAllBookingsByMonthAndYear = function(req,res){

    var getAllBookingsParams = {
        "month": req.body.month,
        "year": req.body.year
    };
    kafka.make_request('getAllBookingsByMonthYear_topic',getAllBookingsParams, function(err,results){
        console.log(results);
        if(err){
            console.log("get all bookings by month,year error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({bookings:results.value});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({bookings:"Could not find bookings for given month and year"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};

exports.getAllBookingsForAdmin = function(req,res){

    var getAllBookingsParams = {
        // "month": req.body.month,
        // "year": req.body.year
    };
    kafka.make_request('getAllBookingsForAdmin_topic',getAllBookingsParams, function(err,results){
        console.log(results);
        if(err){
            console.log("get all bookings error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({bookings:results.value});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({bookings:"Could not find bookings"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};