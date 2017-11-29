import {SET_COMPONENT} from '../actions/actionsAll';
import {GET_COMPONENT} from '../actions/actionsAll';

const initialState = {
    componentActive:null
};


const all = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPONENT :
            state = {
                componentActive: action.obj
            };
            console.log(state);
            return state;

        case GET_COMPONENT :
            state = {
                componentActive: state.componentActive
            };
            console.log(state);
            return state;

        default :
            return state;
    }
};

export default all;