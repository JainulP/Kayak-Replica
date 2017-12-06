/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');
var lineReader = require('line-reader');
require('./routes/passport')(passport);


var routes = require('./routes/index');

//Jainul
var users = require('./routes/users');
var hotels = require('./routes/hotels');
var flights = require('./routes/flights');
var hotelBooking = require('./routes/hotelBooking');
var booking = require('./routes/booking');
var flightBooking = require('./routes/flightBooking');
var admin = require('./routes/admin');
var upload = require('./routes/upload');


//Ujjval
var cars = require('./routes/cars');

var moment = require('moment');

var mongoSessionURL = "mongodb://localhost:27017/sessions";
var expressSessions = require("express-session");
var mongoStore = require("connect-mongo")(expressSessions);


var app = express();

app.use(passport.initialize());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));


var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSessions({
    secret: "CMPE273_passport",
    resave: false,
    //Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, //force to save uninitialized session to db.
    //A session is uninitialized when it is new but not modified.
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    store: new mongoStore({
        url: mongoSessionURL
    })
}));



app.use('/', routes);
app.use('/users',users);
app.use('/cars',cars);
app.use('/upload',upload);



//hotels
app.post('/getHotels',hotels.getHotels);
app.post('/filterHotels',hotels.filterHotels);
app.post('/getRooms',hotels.getRooms);
app.post('/addReview',hotels.addReview);
app.post('/getReviews',hotels.getReviews);

//flights
app.post('/getFlights',flights.getFlights);
app.post('/filterFlights',flights.filterFlights);
app.post('/submitFlightBooking',flightBooking.submitBooking);
app.post('/deleteFlightBooking',flightBooking.deleteBooking);


//hotel booking
app.post('/addTravelerInfo', booking.addTravelerInfo);
app.post('/getTravelerInfo', booking.getTravelerInfo);
app.post('/deleteTravelerInfo', booking.deleteTravelerInfo);
app.post('/editTravelerInfo', booking.editTravelerInfo);
app.post('/addPaymentInfo',booking.addPaymentInfo);
app.post('/getPaymentInfo', booking.getPaymentInfo);
app.post('/deletePaymentInfo', booking.deletePaymentInfo);
app.post('/editPaymentInfo', booking.editPaymentInfo);
app.post('/submitBooking',hotelBooking.submitBooking);
app.post('/deleteBooking',hotelBooking.deleteBooking);

app.post('/Cars',flights.cars);

app.post('/getAllBookings',booking.getAllBookings);
app.post('/getAllBookingsByDate',booking.getAllBookingsByDate);
app.post('/getAllBookingsByMonthAndYear',booking.getAllBookingsByMonthAndYear);
app.get('/getAllBookingsForAdmin',booking.getAllBookingsForAdmin);
app.get('/getAllUsers',admin.getAllUsers);

app.post('/Flights',flights.flights);
app.post('/Hotels',hotels.hotels);


app.post('/postflight', flights.postflights);
app.post('/posthotel',hotels.posthotel);
app.post('/postcar',flights.postcar);
var graphs = {};

// user trace diagram
app.post('/getUserTrace',function(req,res){
    var userid = req.body.userid;
    var result = {
        labels: [],
        datasets: [{
            label: 'User Trace Diagram',
            data: [],
            backgroundColor: [
            ],
            hoverBackgroundColor: [
            ]
        }]
    }
    var time1;
    var time2;
    var count =0;
    lineReader.eachLine(__dirname + '/userTrace.log', function (line,last) {
        console.log(line);
        var temp =  JSON.parse(line);
        console.log(temp)
        var messageData = temp.message.split(",");
        console.log("bool value");
        console.log(userid === messageData[0]);

        if(userid === messageData[0]){
            time1 = temp.timestamp;
            if(count == 0){
            time2 = time1;
            count++;
            }

            var now = moment(time1);
            var then = moment(time2);
            console.log("time difference"+time1+" "+time2);
            var ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
            var d = moment.duration(ms);
            console.log(d.seconds());
             result.labels.push(messageData[1]);
             result.datasets[0].data.push(d.seconds());
            result.datasets[0].backgroundColor.push('#36A2EB');
            result.datasets[0].hoverBackgroundColor.push('#36A2EB');
            time2 = time1;
        }
if(last){
    return res.status(200).send({result:result});
}

    });

});
app.post('/graphs123',flights.graphs);
app.get('/graphs',function(req,res) {

    console.log('hi');
    var output = {};
    var output1 = {};
    var hotellocation = {};
    var flightsource = {};
    var flightdestination = {};
    var cars = {};
    var usertrace = {};

    var m = [];
    var p = 0;
    q = 0;
    r = 0, s = 0,t=0;
    var foo = {};
    var i, x, y, z;
    var results;


    lineReader.eachLine(__dirname + '/mylogfile.log', function (line,last) {
        console.log(line);
        var array = line.split(',');
        // var toWrite = ":";
        if (array) {
            if (array[0]) {


                if (array[2] === 'hotels') {
                    q++;
                    hotellocation[q] = array[3] + array[4];

                }
                if (array[2] === 'user') {
                    q++;
                    usertrace[t] = array[3] + array[4];

                }
                if (array[2] === 'cars') {

                    p++;
                    flightsource[p] = array[3] + array[4];


                }
                if (array[2] === 'Flightsource') {

                    r++;

                    flightdestination[r] = array[3] + array[4];

                }
                if (array[2] === 'Destinationsource') {
                    s++;
                    cars[s] =array[3] + array[4];

                }
                graphs[0] = hotellocation;
                graphs[1] = flightsource;
                graphs[2] = flightdestination;
                graphs[3] = cars;
                graphs[4] = usertrace;
                console.log(graphs);
                if (last) {


                    res.status(200).send(graphs);
                }
            }


        }
    });


});


app.use('./public/uploads', express.static(path.join(__dirname, 'uploads')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(err);

    // render the error page
    res.status(err.status || 500);
    res.json('error');
});





/*
app.listen(5000, () =>{

     console.log("Server started on 5000");
 });
 */



module.exports = app;
