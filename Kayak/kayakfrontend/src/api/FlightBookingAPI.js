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

export const submitBookingAction = (payload) =>{
    console.log(payload)
    var travellerid;
    var paymentid;
    var bookingid;
    var travellerData={
        firstname: payload.bookingData.firstname,
        lastname: payload.bookingData.lastname,
        phone: payload.bookingData.phoneNumber,
        email: payload.bookingData.email,
        userid: 1,
        middlename: payload.bookingData.middlename,
        age: payload.bookingData.age,
        gender: payload.bookingData.gender
    }

    BookingAPI.addTravelerInfo(travellerData)
        .then((res) => {
            console.log(res);
            travellerid = res.traveler;
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
                    var bookinginfo={
                        userid:"1",
                        flightidto:"EK 179",
                        seattype:"3",
                        travelerid: travellerid,
                        cardid: paymentid,
                        street: payload.bookingData.street,
                        city: payload.bookingData.city,
                        state: payload.bookingData.region,
                        country: payload.bookingData.country,
                        zip: payload.bookingData.postalCode,
                        totalcost:payload.flightData.bill || 0,
                        numberofseats: "2",
                        numberofadults:"1",
                        numberofchildren:"1",
                        bookingdate: new Date(dt.now()),
                        traveldateto: "2017-11-28"
                    }
                    submitBooking(bookinginfo)
                        .then((res) => {
                            console.log(res)
                            bookingid = res.booking;
                        });
                });
            return bookingid;
        });
}