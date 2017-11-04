var express = require('express');
var router = express.Router();

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








module.exports = router;


