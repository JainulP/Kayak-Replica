var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/Kayak";
var MongoClient = require('mongodb').MongoClient;
var mysql = require('./mysql');
var bcrypt = require('bcrypt');
var mkdirp = require('mkdirp');
var salt = bcrypt.genSaltSync(10);
var hash ;


function handleLogin(msg, callback){

    var res = {};
    try {

        //hash = bcrypt.hashSync(msg.password.toString(), salt);
        var getUser="select UserId,FirstName,LastName from user where Email='" + msg.username +"' and Password= '"+ msg.password+"'";
        console.log("getUser"+ getUser);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {
                if(results.length > 0){
                    console.log("db login result" + results[0]);
                    res.code = "200";
                    res.value = "Success Login";
                    res.user = results[0];
                    console.log("login res"+ JSON.stringify(res));
                    callback(null, res);
                }
                else
                {
                    res.code = "401";
                    res.value = "Failed Login";
                    console.log("login res"+ JSON.stringify(res));
                    callback(null, res);
                }
            }
        },getUser);

    }
    catch (e){
        // done(e,{});
        res.code = "401";
        res.value = "Failed Login";
        console.log("login res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.handleLogin = handleLogin;

