import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import MainComponent from './MainComponent.js';
import StaticContentComponent from './StaticContentComponent.js';
import HotelsList from './HotelsList.js';
import CarsList from './CarsList.js';
import FlightsList from './FlightsList.js';
import HotelPage from './HotelPage';
import HotelForm from './HotelForm';
import CarForm from './CarForm';
import TopMenu from './TopMenu';
import * as HotelAPI from '../api/HotelAPI';
import * as CarAPI from '../api/CarAPI';
import * as FlightAPI from '../api/FlightAPI';
import AdminDashboard from './AdminDashboard';
import MyAccount from './MyAccount';
import AccountPreferences from './AccountPreferences';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetHotels} from '../actions/actionsAll';
import {GetCars} from '../actions/actionsAll';

class HomePage extends Component {
         state = {
             hotelsList: []

    }
    searchHotel = (data) =>{
        var self = this;
        var state_temp = this.state;
        var data = {
            "location":"New York, NY",
            "checkindate":"2017-11-21",
            "checkoutdate": "2017-11-25"
        };
         HotelAPI.getHotels(data)
        .then((res) => {
        console.log(res);
            this.props.GetHotels(res.hotels);
             this.props.history.push("/hotels");
        });
    }

    searchCar = (data) =>{
        var self = this;
        var state_temp = this.state;
        var data = {
            "city":"sf",
            "multi_city": "false",
            "s_date": "2018-01-17",
            "e_date": "2018-01-28"
        };
        CarAPI.getcars(data)
            .then((res) => {
                console.log(res);
                this.props.GetCars(res);
                this.props.history.push("/cars");
            });
    }
    searchFlight = (data) =>{
        var self = this;
        var state_temp = this.state;
        var data = {
            "location":"New York, NY",
            "checkindate":"2017-11-21",
            "checkoutdate": "2017-11-25"
        };
        HotelAPI.getHotels(data)
            .then((res) => {
                console.log(res);
                this.props.GetHotels(res.hotels);
                this.props.history.push("/cars");
            });
    }


    render() {
    return (  
        <div>
   <Route exact path="/" render={() =>
   (
   <div>
      <MainComponent searchHotel={this.searchHotel} searchCar ={this.searchCar} searchFlight = {this.searchFlight}/>
      <div className="grey-content"></div>
      <StaticContentComponent/>
   </div>
   )}/>
   <Route exact path="/hotels" render={() =>
   (
   <div>
      <TopMenu/>
      <HotelsList/>
   </div>
   )}/>
   <Route exact path="/cars" render={() =>
   (
   <div>
      <TopMenu/>
      <CarsList/>
   </div>
   )}/>
   <Route exact path="/flights" render={() =>
   (
   <div>
      <TopMenu/>
      <FlightsList/>
   </div>
   )}/>
   <Route exact path="/hotelPage" render={() =>
   (
   <div>
      <TopMenu/>
      <HotelPage/>
   </div>
   )}/>
   <Route exact path="/hotelForm" render={() =>
   (
   <div>
       <TopMenu/>
       <HotelForm/>
   </div>
   )}/>
            <Route exact path="/adminDashboard" render={() =>
                (
                    <div>
                        <TopMenu/>
                        <AdminDashboard/>
                    </div>
                )}/>

            <Route exact path="/carForm" render={() =>
                (
                    <div>
                        <TopMenu/>
                        <CarForm/>
                    </div>
                )}/>
<Route exact path="/myaccount" render={() =>
   (
   <div>
       <TopMenu/>
      <MyAccount/>
   </div>
   )}/>
<Route exact path="/AccountPreferences" render={() =>
   (
   <div>
       <TopMenu/>
      <AccountPreferences/>
   </div>
   )}/>
</div>
    );
  }
}

function mapStateToProps(state){
    console.log(state.hotels.hotelsList)
    return {
        hotelsList: state.hotels.hotelsList
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({GetHotels : GetHotels, GetCars: GetCars}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));

