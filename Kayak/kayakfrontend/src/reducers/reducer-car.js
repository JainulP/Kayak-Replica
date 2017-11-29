import {GET_CARS} from '../actions/actionsAll';
import {BOOK_CAR} from '../actions/actionsAll';
import  {SET_CARBOOKINGID} from "../actions/actionsAll";
import  {SET_CAR_CRITERIA} from "../actions/actionsAll";

const initialState = {
    carsList:[],
    carBook:{},
    bookingId:null,
    criteria:null
};


const cars = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS :
            state = {
                carList: action.obj,
                carBook:state.carBook,
                criteria: state.criteria
            };
            console.log(state);
            return state;

        case BOOK_CAR :
            state = {
                carList: state.carList,
                carBook: action.obj,
                criteria: state.criteria
            };
            console.log(state);
            return state;

        case SET_CARBOOKINGID :
            state = {
                carList: state.carList,
                carBook:state.carBook,
                bookingId: action.obj,
                criteria: state.criteria,
            };
            console.log(state);
            return state;

        case SET_CAR_CRITERIA :
            state = {
                carList: state.carList,
                carBook:state.carBook,
                criteria: action.obj,
            };
            console.log(state);
            return state;


        default :
            return state;
    }
};

export default cars;