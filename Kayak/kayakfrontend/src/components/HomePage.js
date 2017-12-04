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
import {GetFlight} from '../actions/actionsAll';
import HotelBookingConfirmation from './HotelBookingConfirmation';
import  FlightForm from './FlightForm';
import FlightBookingConfirmation from './FlightBookingConfirmation';
import CarBookingConfirmation from './CarBookingConfirmation';
import PaymentLoader from './PaymentLoader';
import Login from './Login';
import * as  API from '../api/API';

class HomePage extends Component {
         state = {
             hotelsList: [],
             admin: localStorage.getItem("admin")

    }

    searchHotel = (data) =>{
        /*var data = {
            "location":"New York, NY",
            "checkindate":"2017-11-21",
            "checkoutdate": "2017-11-25"
        };*/
         HotelAPI.getHotels(data)
        .then((res) => {
        console.log(res);
            this.props.GetHotels(res.hotels);
             this.props.history.push("/hotels");
        });
    }

    searchCar = (data) =>{
       /* var data = {
            "city":"sf",
            "multi_city": "false",
            "s_date": "2018-01-17",
            "e_date": "2018-01-28"
        };*/
        CarAPI.getcars(data)
            .then((res) => {
                console.log(res);
                this.props.GetCars(res.value);
                this.props.history.push("/cars");
            });
    }
    searchFlight = (data) =>{
        /*var data = {
            "location":"New York, NY",
            "checkindate":"2017-11-21",
            "checkoutdate": "2017-11-25"
        };*/
        FlightAPI.getFlights(data)
            .then((res) => {
                console.log(res);
                this.props.GetFlight(res.flights);
                this.props.history.push("/flights");
            });
    }

    loginUser = (data) =>{
        console.log("results");
        var data1= {
            "username" :data.username,
            "password": data.password
        };
        API.loginnew(data1)
            .then((res) =>{
            if(res.user){
                localStorage.setItem("userid",res.user.user.UserId);
                localStorage.setItem("admin",res.user.user.IsAdmin);
                window.location.href = "http://localhost:3000/homePage";
            }
            if(res.error == "login failed"){
                alert("Invalid Credentials. Please try again!")
            }
            });
    }
    signupUser = (data1) =>{
        var data= {
            "email" : data1.username,
            "password": data1.password
        };
        API.signup(data)
            .then((res) =>{
                if(res.error === "User Already Exists"){
                    alert("user already exixts");
                }
                else{
                    localStorage.setItem("userid",res.value);
                    localStorage.setItem("admin",0);
                    window.location.href = "http://localhost:3000/homePage";
                }
            });
    }
    render() {
    return (  
        <div>
   <Route exact path="/homePage" render={() =>
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
            {

                (this.state.admin === "1")?
                    <Route exact path="/adminDashboard" render={() =>
                        (
                            <div>
                                <TopMenu/>
                                <AdminDashboard/>
                            </div>
                        )}/>
                    :null
            }


            <Route exact path="/carForm" render={() =>
                (
                    <div>
                        <TopMenu/>
                        <CarForm/>
                    </div>
                )}/>
            <Route exact path="/loader" render={() =>
                (
                    <div>
                        <TopMenu/>
                        <PaymentLoader/>
                    </div>
                )}/>

            <Route exact path="/" render={() =>
                (
                    <div>
                       <Login signupUser={this.signupUser} loginUser={this.loginUser}/>
                    </div>
                )}/>


<Route exact path="/myaccount" render={() =>
   (
   <div>
       <TopMenu/>
      <MyAccount/>
   </div>
   )}/>
            <Route exact path="/hotelconfirmation" render={() =>
                (
                    <div>
                        <TopMenu/>
                        <HotelBookingConfirmation/>
                    </div>
                )}/>
            <Route exact path="/flightform" render={() =>
                (
                    <div>
                        <TopMenu/>
                        <FlightForm/>
                    </div>
                )}/>

            <Route exact path="/flightconfirmation" render={() =>
                (
                    <div>
                        <TopMenu/>
                        <FlightBookingConfirmation/>
                    </div>
                )}/>
            <Route exact path="/carconfirmation" render={() =>
                (
                    <div>
                        <TopMenu/>
                        <CarBookingConfirmation/>
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
    return bindActionCreators({GetHotels : GetHotels, GetCars: GetCars, GetFlight: GetFlight}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));

