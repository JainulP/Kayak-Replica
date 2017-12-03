var express = require('express');
var router = express.Router();
var kafka = require('./kafka/client');
var multer  =   require('multer');
/*
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        console.log("request in multer" + req);
        cb(null, file.originalname)
    }
});
var upload = multer({storage:storage});*/



var passport = require('passport');
require('./passport')(passport);


router.use(passport.initialize());


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null,  file.originalname)
    }
});

var upload = multer({storage:storage}).single('myfile');


router.post('/login',function(req, res,next) {
    console.log("in login");

    passport.authenticate('login', function(err, user) {
        if(err) {
            console.log("ERROR");
            console.log(err);
            res.status(500).send();
        }
        else {
            req.session.user = user.user.UserId;
            console.log(req.session.user);
            console.log("session initilized");
            //console.log("user is " + JSON.stringify(user));
            return res.status(201).send({"user":user, "sessiondata":req.session.user});
        }
    })(req, res, next);



});

router.post('/signup',function(req, res) {

    var signupParams = {
        "email": req.body.email,
        "password": req.body.password
    };
    kafka.make_request('signup_topic',signupParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("sign up error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({value:results.value});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Failed signup"});
            }
            else if(results.code == 409)
            {
                return res.status(409).send({error:"User Already Exists"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });
});



router.post('/userinfo', upload, function(req, res) {

    var userinfoParams = {
            "FirstName": req.body.firstname,
            "LastName": req.body.lastname,
            "Address": req.body.address,
            "City": req.body.city,
            "State": req.body.state,
            "ZipCode": req.body.city,
            "Phone": req.body.phone,
            "Id": req.body.id,
            "image":req.body.image
    };
    console.log(userinfoParams);

    kafka.make_request('userinfo_topic',userinfoParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("Add UserInfo error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({value:results.value});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Failed signup"});
            }
            else if(results.code == 409)
            {
                return res.status(409).send({error:"User Already Exists"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });
});



router.post('/getuserinfo',function(req, res) {

    var userinfoParams = {
        "Id": req.body.id
    };
    kafka.make_request('getuserinfo_topic',userinfoParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("Add UserInfo error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({user:results.user});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Failed signup"});
            }
            else if(results.code == 409)
            {
                return res.status(409).send({error:"User Already Exists"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });
});


module.exports = router;


