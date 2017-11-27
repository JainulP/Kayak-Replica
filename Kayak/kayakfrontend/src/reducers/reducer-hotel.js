import {GET_HOTELS} from '../actions/actionsAll';
import {SET_HOTEL} from '../actions/actionsAll';
import {SET_BOOKDATA} from '../actions/actionsAll';
import {SET_ROOMDATA} from '../actions/actionsAll';
import {SET_HOTELBOOKINGID} from '../actions/actionsAll';

const initialState = {
        hotelsList:[],
    hotelPageData:null,
    bookhotel:{},
    roomData:{},
    bookingId:null
};


const hotels = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOTELS :
            state = {
                hotelsList: action.obj,
                hotelPageData : state.hotelPageData,
                bookhotel:state.bookhotel,
                roomData:state.roomData
            };
            console.log(state);
            return state;

        case SET_HOTEL :
            state = {
                hotelsList:state.hotelsList,
                hotelPageData: action.obj,
                bookhotel:state.bookhotel,
                roomData:state.roomData
            };
            console.log(state);
            return state;

        case SET_BOOKDATA :
            state = {
                hotelsList:state.hotelsList,
                hotelPageData: state.hotelPageData,
                bookhotel:action.obj,
                roomData:state.roomData
            };
            console.log(state);
            return state;

        case SET_ROOMDATA :
            state = {
                hotelsList:state.hotelsList,
                hotelPageData: state.hotelPageData,
                bookhotel:state.bookhotel,
                roomData : action.obj
            };
            console.log(state);
            return state;

        case SET_HOTELBOOKINGID :
            state = {
                hotelsList:state.hotelsList,
                hotelPageData: state.hotelPageData,
                bookhotel:state.bookhotel,
                roomData : state.roomData,
                bookingId:action.obj

            };
            console.log(state);
            return state;

        default :
            return state;
    }
};
    
export default hotels;