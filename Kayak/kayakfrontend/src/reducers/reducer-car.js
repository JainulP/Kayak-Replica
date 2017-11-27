import {GET_CARS} from '../actions/actionsAll';

const initialState = {
    carsList:[]
};


const cars = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS :
            state = {
                carList: action.obj
            };
            console.log(state);
            return state;


        default :
            return state;
    }
};

export default cars;