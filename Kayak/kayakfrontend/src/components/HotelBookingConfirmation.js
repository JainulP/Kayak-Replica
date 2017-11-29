import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {SetHotelBookingId} from '../actions/actionsAll';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class HotelBookingConfirmation extends Component {
    constructor(props){
        super(props);
        this.state = {
            hotelsList:[],
            hotelPageData:null,
            bookhotel:{},
            roomData:{},
            bookingId:null
        }

    }
    componentWillMount() {

}
    render() {
        return (
            <div className="pad-top-10  margin-right-40">
                <div className="row backgroud-white">
                    HOTEL BOOKING CONFIRMATION COMPONENT
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    console.log(state)
    return {
        hotelsList:state.hotels.hotelsList,
        hotelPageData:state.hotels.hotelPageData,
        bookhotel:state.hotels.bookhotel,
        roomData:state.hotels.roomData,
        bookingId:state.hotels.bookingId
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({SetHotelBookingId : SetHotelBookingId}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelBookingConfirmation));
