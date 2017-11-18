import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';

class FlightsList extends Component {
  render() {
    return (                     
         <div className="container-fluid">
        List Of Flights
            </div>
    );
  }
}

export default withRouter(FlightsList);

