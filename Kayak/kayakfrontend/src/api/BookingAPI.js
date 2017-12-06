const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'


const headers = {
    'Accept': 'application/json'
};

export const addTravelerInfo = (payload) =>
    fetch(`${api}/addTravelerInfo`, {
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



export const addPaymentInfo = (payload) =>
    fetch(`${api}/addPaymentInfo`, {
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


export const getAllBookings = (payload) =>
    fetch(`${api}/getAllBookings`, {
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


// export const getAllBookings = (payload) =>
//     fetch(`${api}/getAllBookings`, {
//         method: 'GET',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         credentials:'include',
//         body: JSON.stringify(payload)})
//         .then(res => {
//             return res.json();
//         })
//         .catch(error => {
//             console.log("This is error");
//             return error;
//         });



export const getAllBookingsByDate = (payload) =>
    fetch(`${api}/getAllBookingsByDate`, {
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


export const getAllBookingsByMonthAndYear = (payload) =>
    fetch(`${api}/getAllBookingsByMonthAndYear`, {
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

export const getAllBookingsForAdmin = (payload) =>
    fetch(`${api}/getAllBookingsForAdmin`, {
        method: 'GET',
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