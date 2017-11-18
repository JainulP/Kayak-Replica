import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import HotelUnit from './HotelUnit';
class HotelsList extends Component {
    constructor(props){
        super(props);
     this.state = {
             flag:false,
         pricefilter : 50,
         hotelnamefilter:""
        }
    }
setFlag = () => {
    console.log("clicked")
        var stateTemp =this.state;
        stateTemp.flag = !stateTemp.flag;
        this.setState(stateTemp);
    }
adjustPrice = () =>
{
    
}
  render() {
    return (    
        <div>
        
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
        
        <div>
        <p className="filter-heading-style">Price</p>
        <div className="filter-content-style">
        <div id="selectedPrice">{this.state.pricefilter}</div>
        <input type="range" min="50" max="1000" id="myRange" value={this.state.pricefilter}
                                onChange={(event) => {
        var a = this.state;
        a.pricefilter = event.target.value
                                    this.setState(a);
                                }}/>
        </div>
        </div>

<div>
        <p className="filter-heading-style">Hotel Name</p>
        <div className="filter-content-style">
        <input type="text" id="hotelname" value={this.state.hotelnamefilter}
                                onChange={(event) => {
        var a = this.state;
        a.hotelnamefilter = event.target.value
                                    this.setState(a);
                                }}/>
        </div>
        </div>

        
        </div>
        </div>         
        </div>
        
        <div className="col-md-9 padding-none">
        <HotelUnit/>
        <HotelUnit/>
        <HotelUnit/>
        <HotelUnit/>
        </div>
        
        
        </div>
        
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
        
        
        </div>
            
       
        
        
        
        
        </div>
    );
  }
}

export default withRouter(HotelsList);

