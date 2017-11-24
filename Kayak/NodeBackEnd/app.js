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
require('./routes/passport')(passport);


var routes = require('./routes/index');

//Jainul
var users = require('./routes/users');
var hotels = require('./routes/hotels');
var flights = require('./routes/flights');
var hotelBooking = require('./routes/hotelBooking');

//Ujjval
var cars = require('./routes/cars');


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


app.use(cors(corsOptions))
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



//hotels
app.post('/getHotels',hotels.getHotels);
app.post('/filterHotels',hotels.filterHotels);
app.post('/getRooms',hotels.getRooms);


//flights
app.post('/getFlights',flights.getFlights);
app.post('/filterFlights',flights.filterFlights);


//hotel booking
app.post('/addTravelerInfo', hotelBooking.addTravelerInfo);
app.post('/addPaymentInfo',hotelBooking.addPaymentInfo);
app.post('/submitBooking',hotelBooking.submitBooking);
app.post('/deleteBooking',hotelBooking.deleteBooking);


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

// app.listen(5000, () =>{
//
//     console.log("Server started on 5000");
// });


module.exports = app;
