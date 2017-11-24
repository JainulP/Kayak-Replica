import React, { Component } from 'react';
import logo from '../logo.svg';
import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import SearchBar from './SearchBar.js';
import Ionicon from 'react-ionicons';

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
    gotodashboard = () =>{
        this.props.history.push("/adminDashboard");
    }
  render() {
    return (
        <div className="mc-background">
   <div className="topmenu-conatiner">
      <div className="topmenu-content topmemu-style">
         <img src="kayakLogo.png"  className="kayak-logo"/>
         <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('hotels')}}>Hotels</a>
         <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('flights')}}>Flights</a>
         <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('cars')}}>Cars</a>
          <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.gotodashboard('dashboard')}}>Dashboard</a>

          <a className="s pull-right  cursor-pointer" onClick={ () =>{this.setFlag()}}>
         <Ionicon icon="md-person" 
            className="cursor-pointer padding-right-3 pad-top-acc" fontSize="25px" color="#FFFFFF"/>
         <span className="vertical-align-s">My Account</span></a>
      </div>
      <h1 className="topmemu-style">Search hundreds of travel sites at once.</h1>
   </div>
   <a className="menu-style cursor-pointer" onClick={ () =>{this.setType('hotels')}}>HOTELS</a>
   <a className="menu-style padding-left-25 cursor-pointer" onClick={ () =>{this.setType('flights')}}>FLIGHTS</a>
   <a className="menu-style padding-left-25 cursor-pointer" onClick={ () =>{this.setType('cars')}}>CARS</a>
   <SearchBar type={this.state.type} searchHotel={this.props.searchHotel}/>
   <SearchBar type={this.state.type} searchHotel={this.props.searchHotel} searchCar={this.props.searchCar} searchFlight={this.props.searchFlight}/>
   {
   this.state.flag
   ? 
   <div className="login-popup">
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

export default withRouter(MainComponent);
