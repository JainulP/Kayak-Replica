import {GET_HOTELS} from '../actions/actionsAll';
import {SET_HOTEL} from '../actions/actionsAll';

const initialState = {
        hotelsList:[],
    hotelPageData:null
};


const hotels = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOTELS :
            state = {
                hotelsList: action.obj,
                hotelPageData : state.hotelPageData
            };
            console.log(state);
            return state;

        case SET_HOTEL :
            state = {
                hotelsList:state.hotelsList,
                hotelPageData: action.obj
            };
            console.log(state);
            return state;

        default :
            return state;
    }
};
    
export default hotels;