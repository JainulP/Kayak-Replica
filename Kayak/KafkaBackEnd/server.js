var connection =  new require('./kafka/Connection');
var users = require('./services/users');
var hotels = require('./services/hotels');
var flights = require('./services/flights');
var cars = require('./services/cars');



var RevenueGraphs_topic = 'RevenueGraphs_topic';

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
var signup_topic = 'signup_topic';
var userinfo_topic = 'userinfo_topic';
var getuserinfo_topic = 'getuserinfo_topic';

//hotel
var getHotels_topic = 'getHotels_topic';
var filterHotels_topic = 'filterHotels_topic';
var getRooms_topic = 'getRooms_topic';


var getAllBookings_topic = 'getAllBookings_topic';


var getAllBookingsByDate_topic = 'getAllBookingsByDate_topic';
var getAllBookingsByMonthYear_topic = 'getAllBookingsByMonthYear_topic';
var getAllBookingsForAdmin_topic = 'getAllBookingsForAdmin_topic';
var getAllUsers_topic = 'getAllUsers_topic';

//hotelbooking
var addTravelerInfo_topic = 'addTravelerInfo_topic';
var addPaymentInfo_topic = 'addPaymentInfo_topic';
var getTravelerInfo_topic = 'getTravelerInfo_topic';
var getPaymentInfo_topic = 'getPaymentInfo_topic';
var hotelBooking_topic = 'hotelBooking_topic';
var deleteTravelerInfo_topic = 'deleteTravelerInfo_topic';
var deletePaymentInfo_topic = 'deletePaymentInfo_topic';
var editTravelerInfo_topic = 'editTravelerInfo_topic';
var editPaymentInfo_topic = 'editPaymentInfo_topic';
var deleteHotelBooking_topic = 'deleteHotelBooking_topic';
var setReview_topic = 'setReview_topic';
var getReviews_topic = 'getReviews_topic';

var PostHotels_topic='PostHotels_topic';
var PostCars_topic='PostCars_topic';

var Hotels_topic='Hotels_topic';
var cars_topic='cars_topic';

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
var PostCars_topic='PostCars_topic';
var cars_topic='cars_topic';
var EditCars_topic = 'EditCars_topic';

var consumer = connection.getConsumer(login_topic);
var producer = connection.getProducer();

consumer.addTopics([

    deletePaymentInfo_topic, /*1*/
    deleteTravelerInfo_topic,/*2*/
    editPaymentInfo_topic,/*3*/
    getcars_topic,/*4*/
    bookcar_topic,/*5*/
    filtercar_topic,/*6*/
    getFlights_topic,/*7*/
    signup_topic,/*8*/
    Hotels_topic,/*9*/
    getTravelerInfo_topic,/*10*/
    getPaymentInfo_topic,/*11*/
    getReviews_topic,/*12*/
    setReview_topic,/*13*/
    cancelcar_topic,/*14*/
    filterFlights_topic,/*15*/
    flightBooking_topic,/*16*/
    deleteFlightBooking_topic,/*17*/
    getHotels_topic,/*18*/
    filterHotels_topic,/*19*/
    getRooms_topic,/*20*/
    hotelBooking_topic,/*21*/
    deleteHotelBooking_topic,/*22*/
    addTravelerInfo_topic,/*23*/
    addPaymentInfo_topic,/*24*/
    Flights_topic,/*25*/
    PostFlights_topic,/*26*/
    PostHotels_topic,/*27*/
    getAllBookings_topic,/*28*/
    editTravelerInfo_topic,/*29*/
    userinfo_topic,/*30*/
    getuserinfo_topic,/*31*/
    getAllBookingsByDate_topic,/*32*/
    getAllBookingsByMonthYear_topic,/*33*/
    getAllBookingsForAdmin_topic,/*34*/
    getAllUsers_topic,/*35*/
    PostCars_topic,/*36*/
    cars_topic,/*37*/
    RevenueGraphs_topic,/*38*/
    EditCars_topic,/*39*/

], function (err, added) {
});


//Add all these topics
//getHotels_topic,filterHotels_topic,getRooms_topic,getFlights_topic,filterFlights_topic, getcars_topic,bookcar_topic, cancelcar_topic, filtercar_topic, getTravelerInfo_topic, getPaymentInfo_topic,deletePaymentInfo_topic, deleteTravelerInfo_topic, editPaymentInfo_topic,editPaymentInfo_topic

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
    else if (message.topic === signup_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        users.handleSignup(data.data, function (err, res) {
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


    else if (message.topic === PostHotels_topic)
    {
        var data = JSON.parse(message.value);
        hotels.posthotel(data.data, function (err, res) {
            console.log('after post hotels');
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


    else if (message.topic === Hotels_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        hotels.Hotels(data.data, function (err, res) {
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
    else if(message.topic === getTravelerInfo_topic){
        var data = JSON.parse(message.value);
        booking.getTravelerInfo(data.data, function (err, res) {
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

    else if(message.topic === getPaymentInfo_topic){
        var data = JSON.parse(message.value);
        booking.getPaymentInfo(data.data, function (err, res) {
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

    else if(message.topic === deleteTravelerInfo_topic){
        var data = JSON.parse(message.value);
        booking.deleteTravelerInfo(data.data, function (err, res) {
            console.log('after delete  traveler info');
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

    else if(message.topic === deletePaymentInfo_topic){
        var data = JSON.parse(message.value);
        booking.deletePaymentInfo(data.data, function (err, res) {
            console.log('after delete  payment info');
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

    else if(message.topic === editTravelerInfo_topic){
        var data = JSON.parse(message.value);
        booking.editTravelerInfo(data.data, function (err, res) {
            console.log('after edit  traveler info');
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

    else if(message.topic === editPaymentInfo_topic){
        var data = JSON.parse(message.value);
        booking.editPaymentInfo(data.data, function (err, res) {
            console.log('after edit  payment info');
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



    else if (message.topic === PostCars_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        cars.addCar(data.data, function (err, res) {
            console.log('after add car' + res);
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

    else if (message.topic === EditCars_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        cars.editCar(data.data, function (err, res) {
            console.log('after edit car' + res);
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

    else if(message.topic === getAllBookings_topic){
        var data = JSON.parse(message.value);
        booking.getAllBookings(data.data, function (err, res) {
            console.log('after get all bookings');
            //console.log(res);
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


    else if (message.topic === cars_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        flights.cars(data.data, function (err, res) {
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



    // else if (message.topic === PostCars_topic) {
    //     //console.log(JSON.stringify(message.value));
    //     var data = JSON.parse(message.value);
    //     flights.postcars(data.data, function (err, res) {
    //         console.log('after handle' + res);
    //         var payloads = [
    //             {
    //                 topic: data.replyTo,
    //                 messages: JSON.stringify({
    //                     correlationId: data.correlationId,
    //                     data: res
    //                 }),
    //                 partition: 0
    //             }
    //         ];
    //         producer.send(payloads, function (err, data) {
    //             //console.log(data);
    //         });
    //         return;
    //     });
    // }



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
    else if(message.topic === setReview_topic){
        var data = JSON.parse(message.value);
        hotels.setReviews(data.data, function (err, res) {
            console.log('after set review');
            //console.log(res);
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
    else if(message.topic === getReviews_topic){
        var data = JSON.parse(message.value);
        hotels.getReviews(data.data, function (err, res) {
            console.log('after get review');
            //console.log(res);
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

    else if(message.topic === userinfo_topic){
        var data = JSON.parse(message.value);
        users.handleUserInfo(data.data, function (err, res) {
            console.log('after get review');
            //console.log(res);
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

    else if(message.topic === getuserinfo_topic){
        var data = JSON.parse(message.value);
        users.handleGetUserInfo(data.data, function (err, res) {
            console.log('after get review');
            //console.log(res);
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





    else if(message.topic === RevenueGraphs_topic){
        var data = JSON.parse(message.value);
        flights.revenuegraphs(data.data, function (err, res) {
            console.log('after edit  payment info');
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

    else if(message.topic === getAllBookingsByDate_topic){
        var data = JSON.parse(message.value);
        booking.getAllBookingsByDate(data.data, function (err, res) {
            console.log('after get all bookings');
            //console.log(res);
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

    else if(message.topic === getAllBookingsByMonthYear_topic){
        var data = JSON.parse(message.value);
        booking.getAllBookingsByMonthYear(data.data, function (err, res) {
            console.log('after get all bookings for month and year');
            //console.log(res);
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

    else if(message.topic === getAllBookingsForAdmin_topic){
        var data = JSON.parse(message.value);
        booking.getAllBookingsForAdmin(data.data, function (err, res) {
            console.log('after get all bookings for admin');
            //console.log(res);
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
    else if(message.topic === getAllUsers_topic){
        var data = JSON.parse(message.value);
        users.getAllUsers(data.data, function (err, res) {
            console.log('after get all bookings for admin');
            //console.log(res);
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


    // else if(message.topic === PostCars_topic){
    //     var data = JSON.parse(message.value);
    //     flights.postcars(data.data, function (err, res) {
    //         console.log('after get all bookings for admin');
    //         //console.log(res);
    //         var payloads = [
    //             {
    //                 topic: data.replyTo,
    //                 messages: JSON.stringify({
    //                     correlationId: data.correlationId,
    //                     data: res
    //                 }),
    //                 partition: 0
    //             }
    //         ];
    //         producer.send(payloads, function (err, data) {
    //             //console.log(data);
    //         });
    //         return;
    //     });
    // }


    else if (message.topic === cars_topic) {
        var data = JSON.parse(message.value);
        flights.cars(data.data, function (err, res) {
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

});


