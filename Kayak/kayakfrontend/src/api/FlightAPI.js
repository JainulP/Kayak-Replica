const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const getFlights = (payload) =>
    fetch(`${api}/getFlights`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },

        data : {
            "source" : payload.source,
            "destination" : payload.destination,
            "travelDate": payload.travelDate
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

export const filterFlights = (payload) =>
    fetch(`${api}/filterFlights`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },

        data : {
            "source" : payload.source,
            "destination" : payload.destination,
            "travelDate": payload.travelDate,
            "minTakeOffTime":payload.minTakeOffTime,
            "maxTakeOffTime":payload.maxTakeOffTime,
            "minLandingTime": payload.minLandingTime,
            "maxLandingTime": payload.maxLandingTime,
            "minDuration": payload.minDuration,
            "maxDuration": payload.maxDuration,
            "minPrice": payload.minPrice,
            "maxPrice": payload.maxPrice,
            "airlines": payload.airlines
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