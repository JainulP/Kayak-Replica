import * as BookingAPI from './BookingAPI';
var dateTime = require('node-datetime');
var dt = dateTime.create();
dt.format('m-d-Y H:M:S');

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};




export const addcar = (payload) =>
    fetch(`${api}/cars/addcar`, {
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

export const editcar = (payload) =>
    fetch(`${api}/cars/editcar`, {
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


export const getcars = (payload) =>
    fetch(`${api}/cars/getcars`, {
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

export const bookcar = (payload) =>
    fetch(`${api}/cars/bookcar`, {
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

export const cancelcar = (payload) =>
    fetch(`${api}/cars/cancelcar`, {
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

export const filtercar = (payload) =>
    fetch(`${api}/cars/filtercar`, {
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
                        id : payload.carData.id,
                        city: payload.criteria.city,
                        multi_city : payload.criteria.multi_city,
                        s_date: payload.criteria.s_date,
                        e_date: payload.criteria.e_date,
                        s_city: payload.criteria.s_city,
                        payment_id: paymentid,
                        traveler_id: travellerid
                    }
                    bookcar(bookinginfo)
                        .then((res) => {
                            console.log(res)
                            //bookingid = res.booking;
                            bookingid = 10;
                        });
                });
            return bookingid;
        });
}



