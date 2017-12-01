var kafka = require('./kafka/client');

var logger = require('morgan');
var winston = require('winston');
var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({filename: './mylogfile.log'})
    ]
});



exports.hotels = function(req,res){


    var getHotelParams = {
        "location":req.body.location,
        "checkindate": req.body.checkindate,
        "checkoutdate": req.body.checkoutdate
    }

   // logger.info("Flights,"+req.body.source+","+req.body.destination);
    kafka.make_request('Hotels_topic',getHotelParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("get hotels error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({hotels:results.hotels});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"No hotels available"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};





exports.posthotel = function(req,res) {
    console.log( 'hi'+req.body);
    var FlightsParams = {

        HotelId: req.body.HotelId,
        HotelName: req.body.HotelName,
        Location: req.body.Location,
        ReviewScore: req.body.ReviewScore,
        Phone: req.body.Phone,
        StreetAddress: req.body.StreetAddress,
        State: req.body.State,

        Longitude: req.body.Longitude,
        Latitude: req.body.Latitude,
        ZipCode:req.body.ZipCode,


        Stars:req.body.Stars,
        Description:req.body.Description,
        DeluxRoomCount:req.body.DeluxRoomCount,
        StandardRoomCount:req.body.StandardRoomCount,
        KingRoomCount:req.body.KingRoomCount,
        QueenRoomCount:req.body.QueenRoomCount,
        DoubleRoomCount:req.body.DoubleRoomCount,
        DeluxRoomPrice:req.body.DeluxRoomPrice,
        StandardRoomPrice:req.body.StandardRoomPrice,
        KingRoomPrice:req.body.KingRoomPrice,
        QueenRoomPrice:req.body.QueenRoomPrice,
        DoubleRoomPrice:req.body.DoubleRoomPrice,
        operation:req.body.operation,
        image :req.body.image,
        Pool:req.body.Pool,
        Gym:req.body.Gym,
        Spa:req.body.Spa,
        Bicycle:req.body.Bicycle,
        //  {"Pet-Friendly":"'"+document.getElementById("Pet-Friendly").checked+"'"}],
        /*    {"Wi-Fi":"'"+document.getElementById("Wi-Fi").checked+"'"},
         {"Parking":"'"+document.getElementById("Parking").checked+"'"},
         {"Restaurant":"'"+document.getElementById("Restaurant").checked+"'"},
         {"Disability-Friendly":"'"+document.getElementById("Disability-Friendly").checked+"'"},
         {"24-Hour-Front-Desk":"'"+ document.getElementById("24-Hour-Front-Desk").checked+"'"}],*/

        free_cancel_standard:req.body.free_cancel_standard,
        free_cancel_king: req.body.free_cancel_king,
        free_cancel_queen: req.body.free_cancel_queen,
        free_cancel_double: req.body.free_cancel_double,



    };
    console.log(FlightsParams);
    kafka.make_request('PostHotels_topic', FlightsParams, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            console.log("error while updating");
            throw err;
        }
        else {
            if (results.code == 200) {
                console.log(JSON.stringify(results));
                return res.status(200).send({'message': 'update done'});
            }
            else if (results.code == 400) {
                return res.status(400).send({flights: "No update made"});
            }
            else {
                return res.status(417).send({error: "Could not serve your request"});
            }
        }

    });
}





exports.getHotels = function(req,res){

    var getHotelParams = {
        "location":req.body.location,
        "checkindate": req.body.checkindate,
        "checkoutdate": req.body.checkoutdate
    }
    kafka.make_request('getHotels_topic',getHotelParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("get hotels error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({hotels:results.hotels});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"No hotels available"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};


exports.filterHotels = function(req,res){

    var filterHotelParams = {
        "location":req.body.location,
        "checkindate": req.body.checkindate,
        "checkoutdate": req.body.checkoutdate,
        "stars":req.body.stars,
        "reviewScore": req.body.reviewScore,
        "minPrice": req.body.minPrice,
        "maxPrice": req.body.maxPrice,
        "hotelName": req.body.hotelName
    }
    kafka.make_request('filterHotels_topic',filterHotelParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("get hotels error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({hotels:results.hotels});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"No hotels for this filter"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};


exports.getRooms = function(req,res){

    var getRoomsParams = {
        "HotelId":req.body.HotelId,
        "location":req.body.location,
        "checkindate": req.body.checkindate,
        "checkoutdate": req.body.checkoutdate
    }
    kafka.make_request('getRooms_topic',getRoomsParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("get hotels error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({rooms:results.rooms});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"No rooms available"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};

exports.addReview = function(req,res){
    console.log(req.body)
    var setReviewsParams = {
        "booking_id":req.body.booking_id,
        "user_id":req.body.user_id,
        "hotel_id": req.body.hotel_id,
        "rating": req.body.rating,
        "review_content":req.body.review_content,
    }
    console.log(setReviewsParams)
    console.log("setReviewsParams")
    kafka.make_request('setReview_topic',setReviewsParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("add reviews error");
            throw err;
        }
        else
        {
            console.log(results.code);
           if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({results: results.value});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:results.value});
            }
            else {
                return res.status(401).send({error:results.value});
            }
        }
    });
};



exports.getReviews = function(req,res){
    console.log(req.body);
    var getReviewsParams = {
        "hotel_id": req.body.hotel_id
    }
    kafka.make_request('setReview_topic',getReviewsParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("get reviews error");
            throw err;
        }
        else
        {
            console.log(results.code);
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({results: results.value});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:results.value});
            }
            else {
                return res.status(401).send({error:results.value});
            }
        }
    });
};
