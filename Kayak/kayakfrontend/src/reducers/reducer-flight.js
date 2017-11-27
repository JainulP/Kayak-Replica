import {GET_FLIGHTS} from '../actions/actionsAll';

const initialState = {
    flightsList:[]
};


const flights = (state = initialState, action) => {
    switch (action.type) {
        case GET_FLIGHTS :
            state = {
                flightsList: action.obj
            };
            console.log(state);
            return state;

        default :
            return state;
    }
};

export default flights;