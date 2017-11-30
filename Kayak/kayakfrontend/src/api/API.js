const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const getHotels = (payload) =>

    fetch(`${api}/Hotels`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        return res.json();
        //res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const getFlights = (payload) =>

    fetch(`${api}/Flights`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        return res.json();
        //res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
export const getgraphs = (payload) =>

    fetch(`${api}/graphs`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        return res.json();
        //res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const signup = (payload) =>
    fetch(`${api}/users/signup`, {
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



export const login = (payload) =>
    fetch(`${api}/users/login`, {
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

