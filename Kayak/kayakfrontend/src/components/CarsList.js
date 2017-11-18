import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';

class CarsList extends Component {
  render() {
    return (                     
         <div className="container-fluid">
        List Of Cars
            </div>
    );
  }
}

export default withRouter(CarsList);

