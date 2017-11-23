var express = require('express');
var router = express.Router();
var kafka = require('./kafka/client');


router.get('/getcars', (req,res) =>{

    let city = "sf";
let multi_city = false;
let s_date = ("2018-01-17");
let e_date = ('2018-01-28');
kafka.make_request('getcars_topic',{
    "city":city, "multi_city": multi_city, "s_date":s_date, "e_date": e_date }, function(err,results){

    console.log('in result');
    console.log(results);
    res.json(results);
});

});

router.get('/bookcar', (req,res) =>{

    let id = "45";
let s_date = '2018-01-27';
let e_date = ('2018-01-28');
kafka.make_request('bookcar_topic',{id:id, s_date:s_date, e_date:e_date}, function(err,results){

    console.log('in result');
    res.json(results);
});
});


router.get('/cancelcar', (req,res) =>{

    let id = "18";
kafka.make_request('cancelcar_topic',{id:id}, function(err,results){

    console.log('in result');
    res.json(results);
});
});



router.post('/filtercar', (req,res) =>{

    let filter = req.body;
let city = "sf";
let multi_city = false;
let s_date = ("2018-01-17");
let e_date = ('2018-01-28');
console.log(filter);
kafka.make_request('filtercar_topic',{filter:filter, "city":city, "multi_city": multi_city, "s_date":s_date, "e_date": e_date}, function(err,results){

    console.log('in result');
    res.json(results);
});
});

module.exports =router;