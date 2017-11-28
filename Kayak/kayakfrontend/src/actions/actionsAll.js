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
        type : "GetHotels",
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
    console.log("Get Flights Loaded");
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