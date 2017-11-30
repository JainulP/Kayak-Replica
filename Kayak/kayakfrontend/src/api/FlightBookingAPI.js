import * as BookingAPI from './BookingAPI';
var dateTime = require('node-datetime');
var dt = dateTime.create();
dt.format('m-d-Y H:M:S');

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const submitBooking = (payload) =>
    fetch(`${api}/submitFlightBooking`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)})
        .then(res => {
            return res.json();
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });



export const deleteBooking = (payload) =>
    fetch(`${api}/deleteFlightBooking`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)})
        .then(res => {
            return res.json();
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const submitBookingAction = (payload, isRound) =>{
    console.log(payload)
    var travellerid = "";
    var paymentid;
    var bookingid;


    for(var i=0;i<payload.bookingData.travellers.length;i++){
        var travellerData={
            firstname: payload.bookingData.travellers[i].firstname,
            lastname: payload.bookingData.travellers[i].lastname,
            phone: payload.bookingData.travellers[i].phoneNumber,
            email: payload.bookingData.travellers[i].email,
            userid: 1,
            middlename: payload.bookingData.travellers[i].middlename,
            age: payload.bookingData.travellers[i].age,
            gender: payload.bookingData.travellers[i].gender
        }
        BookingAPI.addTravelerInfo(travellerData)
            .then((res) => {
                console.log(res);
                if(travellerid === ""){
                    travellerid = res.traveler;
                }
                else{
                    travellerid = travellerid+ "," + res.traveler;
                }

            });
    }
    var bookinginfo;
    var paymentData={
        nameoncard:payload.bookingData.name,
        cardnumber: payload.bookingData.cardnumber,
        cardtype: 'MASTERCARD',
        expirydate: payload.bookingData.expirydate,
        cvv: payload.bookingData.cvv,
        userid: "1"
    }
    BookingAPI.addPaymentInfo(paymentData)
        .then((res) => {
            console.log(res)
            paymentid = res.payment;
            if(isRound === "true")
            {
                bookinginfo= {
                    userid: "1",
                    flightidto: payload.flightData[0].FlightId,
                    seattype: payload.bookingData.seatType,
                    travelerid: travellerid,
                    cardid: paymentid,
                    street: payload.bookingData.street,
                    city: payload.bookingData.city,
                    state: payload.bookingData.region,
                    country: payload.bookingData.country,
                    zip: payload.bookingData.postalCode,
                    totalcost: payload.bookingData.bill || 0,
                    numberofseats: payload.criteria.travellerCount,
                    numberofadults: payload.criteria.noAdults,
                    numberofchildren: payload.criteria.noChild,
                    bookingdate: new Date(dt.now()),
                    traveldateto: payload.criteria.travelDate,
                    flightidfro:payload.flightData[1].FlightId,
                    traveldatefro: payload.criteria.travelDateReturn
                }
            }
            else{

                bookinginfo= {
                    userid: "1",
                    flightidto: payload.flightData.flight.FlightId,
                    seattype: payload.bookingData.seatType,
                    travelerid: travellerid,
                    cardid: paymentid,
                    street: payload.bookingData.street,
                    city: payload.bookingData.city,
                    state: payload.bookingData.region,
                    country: payload.bookingData.country,
                    zip: payload.bookingData.postalCode,
                    totalcost: payload.bookingData.bill || 0,
                    numberofseats: payload.criteria.travellerCount,
                    numberofadults: payload.criteria.noAdults,
                    numberofchildren: payload.criteria.noChild,
                    bookingdate: new Date(dt.now()),
                    traveldateto: payload.criteria.travelDate,
                }

            }

            submitBooking(bookinginfo)
                .then((res) => {
                    console.log(res)
                    bookingid = res.booking;
                });
        });
    return bookingid;

}