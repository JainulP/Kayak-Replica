var express = require('express');
var router = express.Router();
var kafka = require('./kafka/client');
var logger = require('morgan');
var winston = require('winston');
var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({filename: './mylogfile.log'})
    ]
});


var logger_user = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({filename: './userTrace.log'})
    ]
});
router.post('/getcars', (req,res) =>{
    logger_user.info(req.session.user+","+"Search Car");
    let city = req.body.city;
let multi_city = req.body.multi_city;
let s_date = req.body.s_date;
let e_date = req.body.e_date;
let s_time = req.body.from_time;
let e_time = req.body.to_time;

let s_city;
    if(multi_city == "true"){
       s_city = req.body.s_city;
    }
    else{
        s_city = null;
    }

logger.info(",,cars,"+req.body.city+",");
kafka.make_request('getcars_topic',{
    "city":city, "multi_city": multi_city, "s_date":s_date, "e_date": e_date, "s_city": s_city }, function(err,results){

    console.log('in result');
    console.log(results);
    res.json(results);
});

});

router.post('/bookcar', (req,res) =>{
    logger_user.info(req.session.user+","+"Car Booking");
    let id = req.body.id;
    let multi_city = req.body.multi_city;
    let s_date = req.body.s_date;
    let e_date = req.body.e_date;
    let payment_id =  req.body.payment_id;
    let traveler_id = req.body.traveler_id;
    let user_id = req.session.user;
    let s_city;
    if(multi_city == "true"){
        s_city = req.body.s_city;
    }
    else{
        s_city = null;
    }
kafka.make_request('bookcar_topic',{id:id, s_date:s_date, e_date:e_date , s_city:s_city, payment_id: payment_id, traveler_id:traveler_id, user_id:user_id }, function(err,results){

    console.log('in result');
    res.json(results);
});
});


router.post('/cancelcar', (req,res) =>{
    logger_user.info(req.session.user+","+"Cancel Car Booking");
    //assume all cars have been canceled till id 20 so book a car before canceling it if the max id in the booking table is 20
    let id = req.body.id;
    res.json(id);
    kafka.make_request('cancelcar_topic',{id:id}, function(err,results){

    console.log('in result');
    res.json(results);
});
});







router.post('/filtercar', (req,res) =>{
    logger_user.info(req.session.user+","+"Filter Car");
    let filter = req.body.filter;
    let city = req.body.city;
    let multi_city = req.body.multi_city;
    let s_date = req.body.s_date;
    let e_date = req.body.e_date;

    console.log(filter);
    console.log(city);
    console.log(multi_city);
    console.log(s_date);
    console.log(e_date);

    kafka.make_request('filtercar_topic',{filter:filter, "city":city, "multi_city": multi_city, "s_date":s_date, "e_date": e_date}, function(err,results){

        console.log('in result');
        res.json(results);
    });
});



router.post('/addcar', (req,res) =>{

    var CarParams = {

        // carid: req.body.carId,
        carName: req.body.carName,
        carType: req.body.carType,
        capacity: req.body.capacity,
        luggageCapacity: req.body.luggageCapacity,
        carDoors: req.body.carDoors,

        airportPickup: req.body.airportPickup,
        airConditioning: req.body.airConditioning,
        automatic: req.body.automatic,
        hybrid:req.body.hybrid,

        price: req.body.price,
        car_number: req.body.car_number,
        //image: req.body.image,
        city:req.body.city,
        // operation:req.body.operation
    };

    kafka.make_request('PostCars_topic',CarParams, function(err,results){
        console.log('in result');
        console.log(results);
        if (err) {
            console.log("error while inserting");
            throw err;
        }
        else {
            console.log("&&&&&");
            console.log(JSON.stringify(results));
            if (results.code == 200) {
                return res.status(200).send({car: results.car});
            }
            else if (results.code == 400) {
                return res.status(400).send({car: results.car});
            }
            else {
                return res.status(417).send({error: "Could not serve your request"});
            }
        }
    });
});



router.post('/editcar', (req,res) =>{

    var CarParams = {

        carId: req.body.carId,
        carName: req.body.carName,
        carType: req.body.carType,
        capacity: req.body.capacity,
        luggageCapacity: req.body.luggageCapacity,
        carDoors: req.body.carDoors,

        airportPickup: req.body.airportPickup,
        airConditioning: req.body.airConditioning,
        automatic: req.body.automatic,
        hybrid:req.body.hybrid,

        price: req.body.price,
        car_number: req.body.car_number,
        //image: req.body.image,
        //city:req.body.city,
        // operation:req.body.operation
    };

    kafka.make_request('EditCars_topic',CarParams, function(err,results){
        console.log('in result');
        console.log(results);
        if (err) {
            console.log("error while inserting");
            throw err;
        }
        else {
            console.log(JSON.stringify(results));
            if (results.code == 200) {
                return res.status(200).send({car: results.car});
            }
            else if (results.code == 400) {
                return res.status(400).send({car: results.car});
            }
            else {
                return res.status(417).send({error: "Could not serve your request"});
            }
        }
    });
});


module.exports =router;
