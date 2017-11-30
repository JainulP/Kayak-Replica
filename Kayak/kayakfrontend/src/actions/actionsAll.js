export const GET_HOTELS = 'GET_HOTELS';
export const SET_HOTEL = 'SET_HOTEL';
export const GET_CARS = 'GET_CARS';
export const BOOK_CAR = 'BOOK_CAR';
export const GET_FLIGHTS = 'GET_FLIGHTS';
export const SET_BOOKDATA = 'SET_BOOKDATA';
export const SET_ROOMDATA = 'SET_ROOMDATA';
export const SET_HOTELBOOKINGID = 'SET_HOTELBOOKINGID';
export const SET_FLIGHTDATA = 'SET_FLIGHTDATA';
export const SET_FLIGHTBOOKINGID = 'SET_FLIGHTBOOKINGID';
export const SET_CARBOOKINGID = 'SET_CARBOOKINGID';
export  const SET_FLIGHT_CRITERIA = 'SET_FLIGHT_CRITERIA';
export  const SET_CAR_CRITERIA = 'SET_CAR_CRITERIA';
export  const SET_COMPONENT = 'SET_COMPONENT';
export  const GET_COMPONENT = 'GET_COMPONENT';

export function GetComponent(obj) {
    console.log("GET COMPONENT Loaded");
    return {
        type : "GET_COMPONENT",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function SetComponent(obj) {
    console.log("SetComponent Loaded");
    return {
        type : "SET_COMPONENT",
        obj                                // this is same as newItem : newItem in ES6
    }
}


export function GetHotels(obj) {
    console.log("Get Hotels Loaded");
    return {
        type : "GET_HOTELS",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function SetHotel(obj) {
    console.log("Set Hotel Loaded");
    return {
        type : "SET_HOTEL",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function GetCars(obj) {
    console.log("Get cars Loaded");
    return {
        type : "GET_CARS",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function BookCar(obj) {
    console.log("Book cars Loaded");
    return {
        type : "BOOK_CAR",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function GetFlight(obj) {
    console.log("Get Flights Loaded");
    return {
        type : "GET_FLIGHTS",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function HoteBbookingInfo(obj) {
    console.log("Get HoteBbookingInfo Loaded");
    return {
        type : "SET_BOOKDATA",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function SetRoom(obj) {
    console.log("Set rooms Loaded");
    return {
        type : "SET_ROOMDATA",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function SetHotelBookingId(obj) {
    console.log("SetHotelBookingId Loaded");
    return {
        type : "SET_HOTELBOOKINGID",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function SetFlight(obj) {
    console.log("SetFlight Loaded");
    return {
        type : "SET_FLIGHTDATA",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function SetFlightBookingId(obj) {
    console.log("SetFlight Loaded");
    return {
        type : "SET_FLIGHTBOOKINGID",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function SetCarBookingId(obj) {
    console.log("SetCarBookingId Loaded");
    return {
        type : "SET_CARBOOKINGID",
        obj                                // this is same as newItem : newItem in ES6
    }
}


export function SetFlightCriteria(obj) {
    console.log("SET_FLIGHT_CRITERIA Loaded");
    return {
        type : "SET_FLIGHT_CRITERIA",
        obj                                // this is same as newItem : newItem in ES6
    }
}

export function SetCarCriteria(obj) {
    console.log("SET_CAR_CRITERIA Loaded");
    return {
        type : "SET_CAR_CRITERIA",
        obj                                // this is same as newItem : newItem in ES6
    }
}
