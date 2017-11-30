var MongoClient = require('mongodb').MongoClient;
var mongoURL = "mongodb://root:root@ds159235.mlab.com:59235/kayak";
var db;
var connected = false;


// /**
//  * Connects to the MongoDB Database with the provided URL
//  */
// function connect(url, callback){
//     MongoClient.connect(url, function(err, _db){
//       if (err) { throw new Error('Could not connect: '+err); }
//       db = _db;
//       connected = true;
//       console.log(connected +" is connected?");
//       callback(db);
//     });
// };
//
// /**
//  * Returns the collection on the selected database
//  */
// function collection(name){
//     if (!connected) {
//       throw new Error('Must connect to Mongo before calling "collection"');
//     }
//     return db.collection(name);
//
// };
// exports.connect = connect;
// exports.collection = collection;



var dbConnection;
var pool=[];
var url = "mongodb://root:root@ds159235.mlab.com:59235/kayak";


// mongoose.Promise = global.Promise;
var options={
    user: 'root',
    pass: 'root'
};
for(var i=0;i<20;i++){
    try {
        MongoClient.connect(url, function (err, dbconnection) {
            if (err) {
                console.log("Could not connect to mongoserver error :" + err)
                throw new Error('could not connect to MongoServer :' + err);
            }
            console.log("Connect to Mongo Server.")
            dbConnection = dbconnection;
            connected = true;
            pool.push(dbConnection);
        });
    }
    catch(err){
        console.log("Exception while trying to connect to MongoServer :"+err);
    }
}

console.log("Total Pool Connections :"+pool.length);

// exports.connect = function (url,callback) {
//     if(pool.length!=0){
//         callback(pool.pop());
//     }
//
//     else{
//         return null;
//     }
//     // console.log("Trying to connect to MongoDB server");
//     // try {
//     //     MongoClient.connect(url, function (err, dbcontainer) {
//     //
//     //         if (err) {
//     //             console.log("Could not connect to mongoserver error :" + err)
//     //             throw new Error('could not connect to MongoServer :' + err);
//     //         }
//     //         console.log("Connect to Mongo Server.")
//     //         db = dbcontainer;
//     //         connected = true;
//     //         callback(db)
//     //
//     //     });
//     // }
//     // catch(err){
//     //     console.log("Exception while trying to connect to MongoServer :"+err);
//     // }
// };



exports.collection=function (name) {

    if(pool.length!=0){
        if(!connected){
            console.log("Not connected to mongoServer!!")
            throw new Error('Must connect to the Mongo Server before calling connection');
        }
        console.log("sending back collection for :"+name);

        dbConnection=pool.pop(); //current Database Connection after popping from pool.
        console.log("Current pool length :"+pool.length);
        return dbConnection.collection(name);
    }

    else{
        console.log("Connection pool is empty");
        if(checkAvailability()==true){
            return connection.pop();
        }
    }

};

exports.returnConnection=function () {
    pool.push(dbConnection);// current Database Connection is again pushed in pool
    console.log("After Connection is returned pool size :"+pool.length);
}

checkAvailability=function () {
    setInterval(function () {
        if(connection.length==0){
            return false;
        }
        else
            return true;
    },1000)
}