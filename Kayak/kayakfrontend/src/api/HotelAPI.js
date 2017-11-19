const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const getHotels = (payload) =>
fetch(`${api}/getHotels`, {
        method: 'POST',
        headers: {
            ...headers,
        'Content-Type': 'application/json'
    },

    data : {
        "location" : payload.location,
        "checkindate" : payload.checkindate,
        "checkoutdate": payload.checkoutdate
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


export const filterHotels = (payload) =>
    fetch(`${api}/filterHotels`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },

        data : {
            "location" : payload.location,
            "checkindate" : payload.checkindate,
            "checkoutdate": payload.checkoutdate,
            "stars":payload.stars,
            "reviewScore": payload.reviewScore,
            "minPrice": payload.minPrice,
            "maxPrice": payload.maxPrice,
            "hotelName": payload.hotelName
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

export const getRooms = (payload) =>
    fetch(`${api}/getRooms`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        data : {
            "location" : payload.location,
            "checkindate" : payload.checkindate,
            "checkoutdate": payload.checkoutdate,
            "HotelId": payload.HotelId
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
