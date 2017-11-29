import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Footer from './Footer';
import Ionicon from 'react-ionicons';

class StaticContentComponent extends Component {
  render() {
    return (
      <div>
       <h1>Start your travel planning here</h1>
        <h3>Search Flights, Hotels & Rental Cars</h3>
          <div className="row">
              <div className="col-md-4">
                  <div className="las-vegas-img">
                      <div className="pad-top-30 headingstyle-sc">
                      <div>NEW YORK</div>
                          <Ionicon icon="md-plane"
                                   className="cursor-pointer padding-right-3" fontSize="25px" color="#FFFFFF"/>
                          <Ionicon icon="md-home"
                                   className="cursor-pointer padding-right-3" fontSize="25px" color="#FFFFFF"/>
                          <Ionicon icon="md-car"
                                   className="cursor-pointer padding-right-3" fontSize="25px" color="#FFFFFF"/>
                      </div>
                  </div>
              </div>

              <div className="col-md-4">
                  <div className="miami-img">
                  <div className="pad-top-30 headingstyle-sc">
                      <div>FLORIDA</div>
                      <Ionicon icon="md-plane"
                               className="cursor-pointer padding-right-3" fontSize="25px" color="#FFFFFF"/>
                      <Ionicon icon="md-home"
                               className="cursor-pointer padding-right-3" fontSize="25px" color="#FFFFFF"/>
                      <Ionicon icon="md-car"
                               className="cursor-pointer padding-right-3" fontSize="25px" color="#FFFFFF"/>
                  </div>
                  </div>
              </div>

              <div className="col-md-4">
                  <div className="sf-img">
                  <div className="pad-top-30 headingstyle-sc">
                      <div>SAN FRANSISCO</div>
                      <Ionicon icon="md-plane"
                               className="cursor-pointer padding-right-3" fontSize="25px" color="#FFFFFF"/>
                      <Ionicon icon="md-home"
                               className="cursor-pointer padding-right-3" fontSize="25px" color="#FFFFFF"/>
                      <Ionicon icon="md-car"
                               className="cursor-pointer padding-right-3" fontSize="25px" color="#FFFFFF"/>
                  </div>
                  </div>
              </div>



              </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="pad-top-30"></div>
            <Footer/>
      </div>
    );
  }
}

export default StaticContentComponent;
