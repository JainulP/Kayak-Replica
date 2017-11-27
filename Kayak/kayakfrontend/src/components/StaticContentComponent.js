import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class StaticContentComponent extends Component {
  render() {
    return (
      <div>
       <h1>Start your travel planning here</h1>
        <h3>Search Flights, Hotels & Rental Cars</h3>
        <a className="padding-10">Worldwide</a>
        <a className="padding-10">Popular</a>
        <a>United States</a>          
        <p>Comment: Populate tiles here</p>
      </div>
    );
  }
}

export default StaticContentComponent;
