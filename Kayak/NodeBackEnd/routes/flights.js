var kafka = require('./kafka/client');

exports.getFlights = function(req,res){

    var getOneWayFlightsParams = {
        "source":req.body.source,
        "destination": req.body.destination,
        "travelDate": req.body.travelDate,
        "travelDateReturn" : req.body.travelDateReturn
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
            else if(results.code == 400)
            {
                return res.status(400).send({flights:"No flights available"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};

exports.postflights = function(req,res) {
   //console.log( 'hi'+req.body);
    var FlightsParams = {

        FlightID: req.body.FlightID,
        AirlinesName: req.body.AirlinesName,
        SourceAirport: req.body.SourceAirport,
        DestinationAirport: req.body.DestinationAirport,
        FirstClassSeats: req.body.FirstClassSeats,
        BusinessClassSeats: req.body.BusinessClassSeats,
        EconomyClassSeats: req.body.EconomyClassSeats,

        TakeOffTime: req.body.TakeOffTime,
        LandingTime: req.body.LandingTime,
        Description:req.body.Description,

        Plane: req.body.Plane,
        FirstClassFares: req.body.FirstClassFares,
        BusinessClassFares: req.body.BusinessClassFares,
        EconomyClassFares: req.body.EconomyClassFares,
        operation: req.body.operation
    };
console.log(FlightsParams);
    kafka.make_request('PostFlights_topic', FlightsParams, function (err, results) {
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

exports.flights = function(req,res){



    var getOneWayFlightsParams = {
        "source":req.body.source,
        "destination": req.body.destination,
        "travelDate": req.body.travelDate
    }
    logger.info("Flights,"+req.body.source+","+req.body.destination);
    kafka.make_request('Flights_topic',getOneWayFlightsParams, function(err,results){
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
            else if(results.code == 400)
            {
                return res.status(400).send({flights:"No flights available"});
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
