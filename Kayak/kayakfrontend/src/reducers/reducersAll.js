import {combineReducers} from 'redux';
import HotelReducer from './reducer-hotel';
import FlightReducer from './reducer-flight';
import CarReducer from './reducer-car';

const allReducers = combineReducers({
    hotels: HotelReducer,
    flights : FlightReducer,
    cars : CarReducer
});

export default allReducers;