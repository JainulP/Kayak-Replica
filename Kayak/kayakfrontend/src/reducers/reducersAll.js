import {combineReducers} from 'redux';
import HotelReducer from './reducer-hotel';
import FlightReducer from './reducer-flight';
import CarReducer from './reducer-car';
import AllReducer from './reducer-common';

const allReducers = combineReducers({
    hotels: HotelReducer,
    flights : FlightReducer,
    cars : CarReducer,
    all : AllReducer
});

export default allReducers;