const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

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




