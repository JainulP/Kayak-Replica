var kafka = require('./kafka/client');

exports.submitBooking = function(req,res){

    var bookingParams = {
        "userid":req.session.user,
        "flightidto":req.body.flightidto,
        "seattype":req.body.seattype,
        "travelerid": req.body.travelerid,
        "cardid": req.body.cardid,
        "street": req.body.street,
        "city": req.body.city,
        "state": req.body.state,
        "country": req.body.country,
        "zip": req.body.zip,
        "totalcost":req.body.totalcost,
        "numberofseats": req.body.numberofseats,
        "numberofadults":req.body.numberofadults,
        "numberofchildren":req.body.numberofchildren,
        "bookingdate": req.body.bookingdate,
        "traveldateto": req.body.traveldateto,
        "flightidfro": req.body.flightidfro,
        "traveldatefro": req.body.traveldatefro

    }
    kafka.make_request('flightBooking_topic',bookingParams, function(err,results){
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
                return res.status(400).send({error:"Error while booking flight"});
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
    kafka.make_request('deleteFlightBooking_topic',bookingParams, function(err,results){
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
                return res.status(400).send({error:"Error while deleting flight booking"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};