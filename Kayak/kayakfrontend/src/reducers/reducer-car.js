import {GET_CARS} from '../actions/actionsAll';
import {BOOK_CAR} from '../actions/actionsAll';
const initialState = {
    carsList:[],
    carBook:{}
};


const cars = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS :
            state = {
                carList: action.obj
            };
            console.log(state);
            return state;

        case BOOK_CAR :
            state = {
                carBook: action.obj
            };
            console.log(state);
            return state;


        default :
            return state;
    }
};

export default cars;