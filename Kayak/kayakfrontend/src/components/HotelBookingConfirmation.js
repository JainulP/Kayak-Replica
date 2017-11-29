import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';

class HotelBookingConfirmation extends Component {
    constructor(props){
        super(props);
        this.state = {
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

export default withRouter(HotelBookingConfirmation);
