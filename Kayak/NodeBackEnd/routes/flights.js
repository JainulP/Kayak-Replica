var kafka = require('./kafka/client');

exports.getFlights = function(req,res){

    var getOneWayFlightsParams = {
        "source":req.body.source,
        "destination": req.body.destination,
        "travelDate": req.body.travelDate
    }
    kafka.make_request('getFlights_topic',getOneWayFlightsParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("get one way flights error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({flights:results.flights});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};

exports.filterFlights = function(req,res){

    var filterFlightParams = {
        "source":req.body.source,
        "destination": req.body.destination,
        "travelDate": req.body.travelDate,
        "minTakeOffTime":req.body.minTakeOffTime,
        "maxTakeOffTime":req.body.maxTakeOffTime,
        "minLandingTime": req.body.minLandingTime,
        "maxLandingTime": req.body.maxLandingTime,
        "minDuration": req.body.minDuration,
        "maxDuration": req.body.maxDuration,
        "minPrice": req.body.minPrice,
        "maxPrice": req.body.maxPrice,
        "airlines": req.body.airlines
    }
    kafka.make_request('filterFlights_topic',filterFlightParams, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            console.log("filter flights error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({flights:results.flights});
            }
            else if(results.code == 400)
            {
                console.log(JSON.stringify(results));
                return res.status(400).send({error:"No flights available"});
            }
            else{
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};