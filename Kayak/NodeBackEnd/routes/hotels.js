var kafka = require('./kafka/client');

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