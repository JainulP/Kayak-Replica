import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';

class FlightBookingConfirmation extends Component {
    render() {
        return (
            <div className="pad-top-10  margin-right-40">
                <div className="row backgroud-white">
                    FlightBookingConfirmation component
                </div>
            </div>
        );
    }
}

export default withRouter(FlightBookingConfirmation);
