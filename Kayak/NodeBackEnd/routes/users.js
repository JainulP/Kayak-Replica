var express = require('express');
var router = express.Router();
var kafka = require('./kafka/client');


var passport = require('passport');
require('./passport')(passport);


router.use(passport.initialize());


router.post('/login',function(req, res,next) {

    passport.authenticate('login', function(err, user) {
        if(err) {
            res.status(500).send();
        }

        if(!user) {
            res.status(401).send({"user":"error"});
        }
        else {
            req.session.user = user.user.username;
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








module.exports = router;


