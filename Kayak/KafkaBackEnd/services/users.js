var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/Kayak";
var MongoClient = require('mongodb').MongoClient;
var bcrypt = require('bcrypt');
var mkdirp = require('mkdirp');
var salt = bcrypt.genSaltSync(10);
var hash ;



function handleLogin(msg, callback){

    var res = {};
   // console.log("In handle login request:"+ JSON.stringify(msg));
    try {
        MongoClient.connect(mongoURL, function(err,db){
        console.log('Connected to mongo at: ' + mongoURL);
            if (err) throw err;

            db.collection('users').findOne({username: msg.username}, function(err, user){
                if (user) {
                    console.log("password"+user.password);
                    var hash = bcrypt.hashSync(msg.password, salt);
                    var result = bcrypt.compareSync(msg.password, hash);

                    if(result) {
                        console.log("in bcryptuser");
                        console.log("db login result" + user);
                        res.code = "200";
                        res.value = "Success Login";
                        res.user = user;
                        console.log("loginnnnn res"+ JSON.stringify(res));
                        callback(null, res);
                    }
                    else
                    {
                        res.code = "401";
                        res.value = "Failed Login ?????";
                        console.log("loginnnnn res"+ JSON.stringify(res));
                        callback(null, res);
                    }

                } else {
                    res.code = "401";
                    res.value = "Failed Login";
                    console.log("loginnnnn res"+ JSON.stringify(res));
                    callback(null, res);
                }
            });
        });
    }
    catch (e){
        // done(e,{});
        res.code = "401";
        res.value = "Failed Login";
        console.log("loginnnnn res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.handleLogin = handleLogin;

