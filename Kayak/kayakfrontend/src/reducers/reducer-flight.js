import {GET_FLIGHTS} from '../actions/actionsAll';
import {SET_FLIGHTDATA} from '../actions/actionsAll';
import {SET_FLIGHTBOOKINGID} from '../actions/actionsAll';
import {SET_FLIGHT_CRITERIA} from '../actions/actionsAll';

const initialState = {
    flightsList:[],
    flightData:{},
    bookingId:null,
    criteria:null
};


const flights = (state = initialState, action) => {
    switch (action.type) {
        case GET_FLIGHTS :
            state = {
                flightsList: action.obj,
                criteria : state.criteria
            };
            console.log(state);
            return state;

        case SET_FLIGHTDATA :
            state = {
                flightData: action.obj,
                criteria : state.criteria
            };
            console.log(state);
            return state;

        case SET_FLIGHTBOOKINGID :
            state = {
                bookingId: action.obj,
                flightData:state.flightData,
            };
            console.log(state);
            return state;

        case SET_FLIGHT_CRITERIA :
            state = {
                flightData: state.flightData,
                criteria : action.obj
            };
            console.log(state);
            return state;


        default :
            return state;
    }
};

export default flights;