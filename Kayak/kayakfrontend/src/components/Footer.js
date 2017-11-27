import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (  
        <div className="row footer">
   <div className="col-md-4">
      <div className="ul-header">Company</div>
      <ul className="ul-style">
         <li><a  className="color-white" href="/about" target="_self">About</a></li>
         <li><a  className="color-white" href="/careers" target="_self">Careers</a></li>
         <li><a  className="color-white" href="/mobile" target="_self">Mobile</a></li>
         <li><a  className="color-white" href="/news" target="_self">Blog</a></li>
      </ul>
   </div>
   <div className="col-md-4 padding-none">
      <div  className="ul-header">Contact</div>
      <ul className="ul-style">
         <li className="color-white"><a  className="color-white" href="/help" target="_self">Help/FAQ</a></li>
         <li><a  className="color-white" href="/press-contact" target="_self">Press</a></li>
         <li><a  className="color-white" href="/partners-contact" target="_self">Partners</a></li>
         <li><a  className="color-white" href="/hotelowner" target="_self">Hotel Owners</a></li>
      </ul>
   </div>
   <div className="col-md-4 padding-none">
      <div  className="ul-header">More</div>
      <ul className="ul-style">
         <li><a  className="color-white" href="/airline-fees" target="_self">Airline Fees</a></li>
         <li><a  className="color-white" href="/airlines" target="_self">Airlines</a></li>
         <li><a  className="color-white" href="/help/lowfares" target="_self">Low Fare Tips</a></li>
         <li><a  className="color-white" href="/direct" target="_self">Direct Routes</a></li>
      </ul>
   </div>
   <div className="text-align-center padding-bootom-100">Privacy Terms & Conditions Ad Choices ©2017 KAYAK</div>
</div>
    );
  }
}

export default withRouter(Footer);

