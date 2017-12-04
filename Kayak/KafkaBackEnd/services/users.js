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
                res.code = "400";
                res.value = "Error";
                res.user = err;
                callback(null, res);
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



function handleSignup(msg, callback) {

    var res = {};
    var checkuserFlag = 0;

    var checkUser = "SELECT * FROM USER WHERE Email = " + "'" + msg.email + "'";
    console.log("checkUser" + checkUser);

    mysql.fetchData(function (err, results) {
        if (err) {
            if(err){
                res.code = "400";
                res.value = "Error";
                res.user = err;
                callback(null, res);
            }
        }
        else {
           if(results.length>0){
               checkuserFlag = 1;
               res.code = "409";
               res.value = "user already exists";
               console.log("signup res" + JSON.stringify(res));
               callback(null, res);
           }
           else {
               try {

                   var setUser = "INSERT INTO USER (Email, Password, IsAdmin) VALUES ('" + msg.email + "','" + msg.password + "' , 0  )";
                   console.log("setUser" + setUser);

                   mysql.fetchData(function (err, results) {
                       if (err) {
                           if(err){
                               res.code = "400";
                               res.value = "Error";
                               res.user = err;
                               callback(null, res);
                           }
                       }
                       else {
                           console.log("db signup result" + results);
                           res.code = "200";
                           res.value = "Success signup";
                           console.log("signup res" + JSON.stringify(res));
                           callback(null, res);
                       }
                   }, setUser);

               }
               catch (e) {
                   // done(e,{});
                   res.code = "401";
                   res.value = "Failed signup";
                   console.log("signup res" + JSON.stringify(res));
                   callback(null, res);
               }
           }
        }
    }, checkUser);
}

exports.handleSignup = handleSignup;




function handleUserInfo(msg, callback) {

    var res = {};
    var checkuserFlag = 0;

    var checkUser = "SELECT * FROM USER WHERE UserId = " + "'" + msg.Id + "'";
    console.log("checkUser" + checkUser);

    mysql.fetchData(function (err, results) {
        if (err) {
            if(err){
                res.code = "400";
                res.value = "Error";
                res.user = err;
                callback(null, res);
            }
        }
        else {
            if(results.length<0){
                checkuserFlag = 1;
                res.code = "400";
                res.value = "user doesn't exists";
                console.log("UserInfo res" + JSON.stringify(res));
                callback(null, res);
            }
            else {
                try {

                    var UpdateUser = "UPDATE user SET FirstName = '"+ msg.FirstName + "', LastName = '"+ msg.LastName + "' ,Address = '"+ msg.Address + "', City = '"+ msg.City + "', State = '"+ msg.State + "', ZipCode = '"+ msg.ZipCode + "', Phone = '"+ msg.Phone+ "', ProfileImage = '"+ msg.image + "', IsDeleted = '"+ msg.deleteflag + "' WHERE UserId = " + msg.Id;
                    console.log("UpdateUser" + UpdateUser);

                    mysql.fetchData(function (err, results) {
                        if (err) {
                            if(err){
                                res.code = "400";
                                res.value = "Error";
                                res.user = err;
                                callback(null, res);
                            }
                        }
                        else {
                            console.log("db UserInfo result" + results);
                            res.code = "200";
                            res.value = "Success UserInfo Update";
                            console.log("UserInfo res" + JSON.stringify(res));
                            callback(null, res);
                        }
                    }, UpdateUser);

                }
                catch (e) {
                    // done(e,{});
                    res.code = "401";
                    res.value = "Failed UserInfo";
                    console.log("UserInfo res" + JSON.stringify(res));
                    callback(null, res);
                }
            }
        }
    }, checkUser);
}

exports.handleUserInfo = handleUserInfo;




function handleGetUserInfo(msg, callback){

    var res = {};
    try {

        //hash = bcrypt.hashSync(msg.password.toString(), salt);
        var getUser="select * from user where UserId=" + msg.Id ;
        console.log("getUser"+ getUser);

        mysql.fetchData(function(err,results){
            if(err){
                if(err){
                    res.code = "400";
                    res.value = "Error";
                    res.user = err;
                    callback(null, res);
                }
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

exports.handleGetUserInfo = handleGetUserInfo;


function getAllUsers(msg, callback){

    var res = {};
    try {
        var getAllUsers="select * from user where IsAdmin= 0" ;
        console.log("getAllUsers"+ getAllUsers);

        mysql.fetchData(function(err,results){
            if(err){
                if(err){
                    res.code = "400";
                    res.value = "Error";
                    res.user = err;
                    callback(null, res);
                }
            }
            else
            {
                if(results.length > 0){
                    res.code = "200";
                    res.value = "Success get all users";
                    res.users = results;
                    callback(null, res);
                }
                else
                {
                    res.code = "400";
                    res.value = "Failed fetching all users";
                    console.log("login res"+ JSON.stringify(res));
                    callback(null, res);
                }
            }
        },getAllUsers);

    }
    catch (e){
        // done(e,{});
        res.code = "401";
        res.users = "No users found";
        callback(null, res);
    }
}

exports.getAllUsers = getAllUsers;



