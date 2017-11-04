import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SearchBar from './SearchBar.js';

class MainComponent extends Component {
    constructor(props){
        super(props);
         this.state = {
            type:'hotels',
             flag:false
        }
    }
    setType = (type) => {
        var stateTemp =this.state;
        stateTemp.type = type;
        this.setState(stateTemp);
    }
    setFlag = () => {
        var stateTemp =this.state;
        stateTemp.flag = !stateTemp.flag;
        this.setState(stateTemp);
    }
  render() {
    return (
      <div className="mc-background">
        <div className="topmenu-conatiner">
        <div className="topmenu-content topmemu-style">
        <img src="kayakLogo.png"  className="kayak-logo"/>
        <a className="padding-left-25 cursor-pointer" onClick={ () =>{this.setType('hotels')}}>Hotels</a>
        <a className="padding-left-25 cursor-pointer" onClick={ () =>{this.setType('flights')}}>Flights</a>
        <a className="padding-left-25 cursor-pointer" onClick={ () =>{this.setType('cars')}}>Cars</a>
<a className="pull-right  cursor-pointer" onClick={ () =>{this.setFlag()}}><img src="myAccount.png"  className="kayak-logo"/>My Account</a>
        </div>
         <h1 className="topmemu-style">Search hundreds of travel sites at once.</h1>
      </div>  
        <a className="menu-style cursor-pointer" onClick={ () =>{this.setType('hotels')}}>HOTELS</a>
        <a className="menu-style padding-left-25 cursor-pointer" onClick={ () =>{this.setType('flights')}}>FLIGHTS</a>
        <a className="menu-style padding-left-25 cursor-pointer" onClick={ () =>{this.setType('cars')}}>CARS</a>
        <SearchBar type={this.state.type}/>
{
          this.state.flag
            ? <div className="login-popup">
              <button className="login-popup-button">Sign up</button>
         <button className="login-popup-button margin-top-10">Sign in</button>
          <a className="margin-top-10 pull-left">Trips</a>
            </div>
            : null
        }

      </div>       
    );
  }
}

export default MainComponent;
