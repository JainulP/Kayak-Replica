export const GET_HOTELS = 'GET_HOTELS';
export const SET_HOTEL = 'SET_HOTEL';

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