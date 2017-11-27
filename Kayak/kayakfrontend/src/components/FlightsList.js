import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import FlightUnit from './FlightUnit';
import Footer from './Footer';
import FlightSearchNavBar from './FlightSearchNavBar';
var searchBarStyle= {
    maxHeight: "100px",
    height: "100%"
  
};

class FlightsList extends Component {
  render() {
    return ( 
        <div>
        <div style={searchBarStyle}>
        <FlightSearchNavBar/>
        </div>
   <div className="row">
      <div className="row  background-gray">
         <div className="col-md-3">
            <div>
               <div className="comp1 reset-margin-custom">
                  1234 out of 1300 | RESET        
               </div>
               <div className="background-color-white">
                  <div>
                     <p className="filter-heading-style">Stars</p>
                     <p className="filter-content-style">
                        <select>
                           <option value="0">Any Star</option>
                           <option value="1">1 star and up</option>
                           <option value="2">2 star and up</option>
                           <option value="3">3 star and up</option>
                           <option value="4">4 star and up</option>
                           <option value="5">5 star and up</option>
                        </select>
                     </p>
                  </div>
                  {/* REVIEWS FILTER */}
                  <div>
                     <p className="filter-heading-style">Reviews</p>
                     <p className="filter-content-style">
                        <select>
                           <option value="0">Any Reviews</option>
                           <option value="2">2 points and up</option>
                           <option value="4">4 points and up</option>
                           <option value="6">6 points and up</option>
                           <option value="8">8 points and up</option>
                           <option value="10">10 points and up</option>
                        </select>
                     </p>
                  </div>
               </div>
            </div>
         </div>
        {/* LIST OF CAR UNITS */}
         <div className="col-md-9 padding-none">
            <FlightUnit/>
            <FlightUnit/>
            <FlightUnit/>
         </div>
      </div>
      {/* FOOTER */}
      <Footer/>
   </div>
</div>
    );
  }
}

export default withRouter(FlightsList);

