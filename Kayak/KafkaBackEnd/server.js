var connection =  new require('./kafka/Connection');
var users = require('./services/users');
var hotels = require('./services/hotels');
var flights = require('./services/flights');

var hotelbooking = require('./services/hotelbooking');
var booking = require('./services/booking');
var flightbooking = require('./services/flightbooking');

var getcars = require('./services/getcars');
var bookcar = require('./services/bookcar');
var cancelcar = require('./services/cancelcar');
var filtercar = require('./services/filtercar');

var Flights_topic = 'Flights_topic';
var PostFlights_topic='PostFlights_topic';

//users
var login_topic = 'login_topic';

//hotel
var getHotels_topic = 'getHotels_topic';
var filterHotels_topic = 'filterHotels_topic';
var getRooms_topic = 'getRooms_topic';

//hotelbooking
var addTravelerInfo_topic = 'addTravelerInfo_topic';
var addPaymentInfo_topic = 'addPaymentInfo_topic';
var hotelBooking_topic = 'hotelBooking_topic';
var deleteHotelBooking_topic = 'deleteHotelBooking_topic';
var setReview_topic = 'setReview_topic';

//flights
var getFlights_topic = 'getFlights_topic';
var filterFlights_topic = 'filterFlights_topic';
var flightBooking_topic = 'flightBooking_topic';
var deleteFlightBooking_topic = 'deleteFlightBooking_topic';



//cars
var getcars_topic = 'getcars_topic';
var bookcar_topic = 'bookcar_topic';
var cancelcar_topic = 'cancelcar_topic';
var filtercar_topic = 'filtercar_topic';

var consumer = connection.getConsumer(login_topic);
var producer = connection.getProducer();

consumer.addTopics([setReview_topic,getFlights_topic,filterFlights_topic,flightBooking_topic, deleteFlightBooking_topic,getHotels_topic,filterHotels_topic, getRooms_topic, hotelBooking_topic, deleteHotelBooking_topic, addTravelerInfo_topic, addPaymentInfo_topic,Flights_topic,PostFlights_topic], function (err, added) {
});
/*consumer.addTopics([getHotels_topic,filterHotels_topic,getRooms_topic,getFlights_topic,filterFlights_topic,addTravelerInfo_topic,addPaymentInfo_topic, hotelBooking_topic,deleteHotelBooking_topic,flightBooking_topic,deleteFlightBooking_topic], function (err, added) {
});*/
consumer.addTopics([getcars_topic,bookcar_topic, cancelcar_topic, filtercar_topic], function (err, added) {
});

//Add all these topics
//getHotels_topic,filterHotels_topic,getRooms_topic,getFlights_topic,filterFlights_topic, getcars_topic,bookcar_topic, cancelcar_topic, filtercar_topic

console.log('server is running');
consumer.on('message', function (message) {
    console.log(message);
    if (message.topic === login_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        users.handleLogin(data.data, function (err, res) {
            console.log('after handle' + res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                //console.log(data);
            });
            return;
        });
    }
    else if (message.topic === getHotels_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        hotels.fetchHotels(data.data, function (err, res) {
            console.log('after get hotels');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }
    
    
    
        else if (message.topic === PostFlights_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        flights.postflights(data.data, function (err, res) {
            console.log('after post flights');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }
    
    
    
     else if (message.topic === Flights_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        flights.flights(data.data, function (err, res) {
            console.log('after get flights');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }
    
    

    else if (message.topic === filterHotels_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        hotels.filterHotels(data.data, function (err, res) {
            console.log('after filter hotels');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }

    else if (message.topic === getRooms_topic) {
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        hotels.getRooms(data.data, function (err, res) {
            console.log('after get rooms');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }

    else if (message.topic === getFlights_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        flights.getFlights(data.data, function (err, res) {
            console.log('after get flights');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }
    else if (message.topic === filterFlights_topic) {
        var data = JSON.parse(message.value);
        flights.filterFlights(data.data, function (err, res) {
            console.log('after filter flights');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }
    else if(message.topic === addTravelerInfo_topic){
        var data = JSON.parse(message.value);
        booking.addTravelerInfo(data.data, function (err, res) {
            console.log('after adding  traveler info');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }
    else if(message.topic === addPaymentInfo_topic){
        var data = JSON.parse(message.value);
        booking.addPaymentInfo(data.data, function (err, res) {
            console.log('after adding payment info');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }
    else if(message.topic === hotelBooking_topic){
        var data = JSON.parse(message.value);
        hotelbooking.submitBooking(data.data, function (err, res) {
            console.log('after submit booking');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }
    else if(message.topic === deleteHotelBooking_topic){
        var data = JSON.parse(message.value);
        hotelbooking.deleteBooking(data.data, function (err, res) {
            console.log('after delete booking');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }
    else if(message.topic === flightBooking_topic){
        var data = JSON.parse(message.value);
        flightbooking.submitBooking(data.data, function (err, res) {
            console.log('after submit booking');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }
    else if(message.topic === deleteFlightBooking_topic){
        var data = JSON.parse(message.value);
        flightbooking.deleteBooking(data.data, function (err, res) {
            console.log('after delete booking');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }
    else if (message.topic === getcars_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        getcars.handle_request(data.data, function (err, res) {
            console.log('after handle' + res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                //console.log(data);
            });
            return;
        });
    }

    else if (message.topic === bookcar_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        bookcar.handle_request(data.data, function (err, res) {
            console.log('after handle' + res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                //console.log(data);
            });
            return;
        });
    }

    else if (message.topic === cancelcar_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        cancelcar.handle_request(data.data, function (err, res) {
            console.log('after handle' + res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                //console.log(data);
            });
            return;
        });
    }

    else if (message.topic === filtercar_topic) {
        //console.log("hey");
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        filtercar.handle_request(data.data, function (err, res) {
            console.log('after handle' + res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                //console.log(data);
            });
            return;
        });
    }

});


