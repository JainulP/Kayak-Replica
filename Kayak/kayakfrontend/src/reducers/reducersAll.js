import {combineReducers} from 'redux';
import HotelReducer from './reducer-hotel';

const allReducers = combineReducers({
    hotels: HotelReducer
});

export default allReducers;