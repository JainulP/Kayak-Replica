var kafka = require('./kafka/client');

exports.submitBooking = function(req,res){

    var bookingParams = {
        "userid":req.session.user,
        "hotelid":req.body.hotelid,
        "roomtype":req.body.roomtype,
        "travelerid": req.body.travelerid,
        "cardid": req.body.cardid,
        "street": req.body.street,
        "city": req.body.city,
        "state": req.body.state,
        "country": req.body.country,
        "zip": req.body.zip,
        "totalcost":req.body.totalcost,
        "numberofrooms": req.body.numberofrooms,
        "numberofadults":req.body.numberofadults,
        "numberofchildren":req.body.numberofchildren,
        "bookingdate": req.body.bookingdate,
        "checkindate": req.body.checkindate,
        "checkoutdate": req.body.checkoutdate

    }
    kafka.make_request('hotelBooking_topic',bookingParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("submit booking error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({booking:results.booking});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Error while booking"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};

exports.deleteBooking = function(req,res){

    var bookingParams = {
        "userid":req.session.user,
        "bookingid":req.body.bookingid
    }
    kafka.make_request('deleteHotelBooking_topic',bookingParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("delete booking error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({booking:results.booking});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({error:"Error while deleting booking"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};