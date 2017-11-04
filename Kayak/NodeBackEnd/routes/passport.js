var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require('bcrypt');
var kafka = require('./kafka/client');

var salt = bcrypt.genSaltSync(10);
var hash ;

module.exports = function(passport) {
    passport.use('login', new LocalStrategy(function(username , password, done) {

        console.log('in passport');
        kafka.make_request('login_topic',{"username":username,"password":password}, function(err,results){
            console.log('in result');
            console.log(results);
            if(err){
                done(err,{});
            }
            else
            {
                if(results.code == 200){
                    done(null,{user:results.user});
                }
                else {
                    done(null,false);
                }
            }
        });
    }));
};


