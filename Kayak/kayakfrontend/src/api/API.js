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



export const getCars = (payload) =>

    fetch(`${api}/Cars`, {
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


export const getGraphs1= (payload) =>

    fetch(`${api}/graphs123`, {
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




export const getGraphs2= (payload) =>

    fetch(`${api}/graphs123`, {
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

export const getGraphs3= (payload) =>

    fetch(`${api}/graphs123`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            object: 'flights',
            property: 'flights'
        }),
        credentials:'include'
    }).then(res => {
        return res.json();
        //res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });



export const getGraphs4= (payload) =>

    fetch(`${api}/graphs123`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body:{
            object: "flights",
            property: "city"
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


export const getGraphs5= (payload) =>

    fetch(`${api}/graphs123`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body:{
            object: "hotels",
            property: "hotels"
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


export const getGraphs6= (payload) =>

    fetch(`${api}/graphs123`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body:{
            object: "hotels",
            property: "city"
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


export const signout = (payload) =>
    fetch(`${api}/users/signout`, {
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
            localStorage.setItem("userid1",res.json());
            debugger;
            localStorage.getItem("userid1");
            return res.json();
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });




export const userinfo = (payload) =>
    fetch(`${api}/users/userinfo`, {
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





export const getuserinfo = (payload) =>
    fetch(`${api}/users/getuserinfo`, {
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


export const getAllUsers = (payload) =>
    fetch(`${api}/getAllUsers`, {
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


export const uploadFile = (payload) =>
    fetch(`${api}/upload/upload`, {
        method: 'POST',
        body: payload,
        credentials:'include'
    }).then(res => {
        return res.status;
    }).catch(error => {
        console.log("This is error");
        return error;
    });



export const loginnew = (payload) =>
    fetch(`${api}/users/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)})
        .then(res => {
            console.log(res);
            return res.json();
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });
