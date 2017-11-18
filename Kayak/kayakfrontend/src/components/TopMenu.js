import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

class TopMenu extends Component {
    setType = (type) =>{
         this.props.history.push("/");
    }
  render() {
    return (                     
         <div className="topmenu-conatiner-menu">
        <div className="">
        <img src="kayakLogo.png"  className="kayak-logo"/>
        <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('hotels')}}>Hotels</a>
        <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('flights')}}>Flights</a>
        <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('cars')}}>Cars</a>

<a className="s pad-35 pull-right  cursor-pointer" onClick={ () =>{this.setFlag()}}>
    <Ionicon icon="md-person" 
                              className="cursor-pointer padding-right-3 pad-top-acc" fontSize="25px" color="#FFFFFF"/>
                                  <span className="vertical-align-s">My Account</span></a>
        </div>
      </div> 
    );
  }
}

export default withRouter(TopMenu);

