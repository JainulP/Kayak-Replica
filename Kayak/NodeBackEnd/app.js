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
var booking = require('./routes/booking');
var flightBooking = require('./routes/flightBooking');


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
app.post('/Flights',flights.flights);

app.post('/Hotels',hotels.hotels);


app.post('/postflight', flights.postflights);
app.post('/posthotel',hotels.posthotel);

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




app.get('/graphs',function(req,res) {


    var output={};
    var output1={};
    var hotellocation={};
    var flightsource={};
    var flightdestination={};
    var cars = {};

    var m=[];
    var p=0;q=0;r=0;
    var foo = {};
    var i,x,y,z;
    var results;

    lineReader.eachLine(__dirname + '/mylogfile.log', function(line,error) {
        console.log(line);

        var array = line.split(',');
        // var toWrite = ":";
        if (array) {
            if (array[0]) {


                if (array[0] === 'Hotels') {
                    q++;
                    hotellocation[q] = array[1];

                }
                if (array[0] === 'Flights') {

                    p++;
                    flightsource[p] = array[1];
                    flightdestination[p] = array[2];

                }
                if (array[0] === 'Cars') {
                    r++;
                    cars[r] = array[1];

                }
                graphs[0] = hotellocation;
                graphs[1] = flightsource;
                graphs[2] = flightdestination;
                graphs[3] = cars;
            }}
            if(error) {
                res.status(200).send({"results": JSON.stringify(graphs)});
            }
            })

   /* lineReader.open(__dirname + '/mylogfile.log', function(err, reader) {
        if (err) throw err;
            reader.nextLine(function(err, line) {
                try {
                    if (err) throw err;
                    console.log(line);

                    var array = line.split(',');
                    // var toWrite = ":";
                    if (array) {
                        if (array[0]) {


                            if (array[0] === 'Hotels') {
                                q++;
                                hotellocation[q] = array[1];

                            }
                            if (array[0] === 'Flights') {

                                p++;
                                flightsource[p] = array[1];
                                flightdestination[p] = array[2];

                            }
                            if (array[0] === 'Cars') {
                                r++;
                                cars[r] = array[1];

                            }
                            graphs[0] = hotellocation;
                            graphs[1] = flightsource;
                            graphs[2] = flightdestination;
                            graphs[3] = cars;



                        }}

                } finally {
                    reader.close(function(err) {
                        if (err) throw err;
                    });
                }
            });
        })*/

    });
/*
app.listen(5000, () =>{

     console.log("Server started on 5000");
 });
 */



module.exports = app;
