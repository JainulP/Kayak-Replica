var express = require('express');
var router = express.Router();
var kafka = require('./kafka/client');


router.post('/getcars', (req,res) =>{

    let city = req.body.city;
let multi_city = req.body.multi_city;
let s_date = req.body.s_date;
let e_date = req.body.e_date;
let s_city;
    if(multi_city == "true"){
       s_city = req.body.s_city;
    }
    else{
        s_city = null;
    }


kafka.make_request('getcars_topic',{
    "city":city, "multi_city": multi_city, "s_date":s_date, "e_date": e_date, "s_city": s_city }, function(err,results){

    console.log('in result');
    console.log(results);
    res.json(results);
});

});

router.post('/bookcar', (req,res) =>{
    let id = req.body.id;
    let multi_city = req.body.multi_city;
    let s_date = req.body.s_date;
    let e_date = req.body.e_date;
    let s_city;
    if(multi_city == "true"){
        s_city = req.body.s_city;
    }
    else{
        s_city = null;
    }
kafka.make_request('bookcar_topic',{id:id, s_date:s_date, e_date:e_date , s_city:s_city}, function(err,results){

    console.log('in result');
    res.json(results);
});
});


router.post('/cancelcar', (req,res) =>{

    //assume all cars have been canceled till id 20 so book a car before canceling it if the max id in the booking table is 20
    let id = req.body.id;
    res.json(id);
    kafka.make_request('cancelcar_topic',{id:id}, function(err,results){

    console.log('in result');
    res.json(results);
});
});



router.post('/filtercar', (req,res) =>{

    let filter = req.body.filter;
    let city = req.body.city;
    let multi_city = req.body.multi_city;
    let s_date = req.body.s_date;
    let e_date = req.body.e_date;


console.log(filter);
kafka.make_request('filtercar_topic',{filter:filter, "city":city, "multi_city": multi_city, "s_date":s_date, "e_date": e_date}, function(err,results){

    console.log('in result');
    res.json(results);
});
});

module.exports =router;