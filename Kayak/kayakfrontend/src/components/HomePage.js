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
import TopMenu from './TopMenu';
import * as HotelAPI from '../api/HotelAPI';

class HomePage extends Component {    
    constructor(props){
        super(props);
         this.state = {
            hotelList: [
        {
            "HotelId": 4,
            "HotelName": "Row NYC",
            "Location": "New York, NY",
            "ReviewScore": 7,
            "Phone": "4433243",
            "StreetAddress": "700 8th Avenue",
            "State": "NY",
            "ZipCode": "10036",
            "Stars": "4",
            "Price": 300
        },
        {
            "HotelId": 5,
            "HotelName": "Sofitel New York",
            "Location": "New York, NY",
            "ReviewScore": 9,
            "Phone": "343546",
            "StreetAddress": "45 West 44TH Street",
            "State": "NY",
            "ZipCode": "10036",
            "Stars": "3",
            "Price": 300
        }
    ]
        }
    }
    searchHotel = (data) =>{
       /* var self = this;
        var state_temp = this.state;
         HotelAPI.filterHotels(data)
        .then((res) => {
        console.log(res);
             state_temp.hotelList = res.hotels;
            // this.setState(state_temp);
             this.props.history.push("/hotels");
        });*/        
             this.props.history.push("/hotels");
    }   
    
    
  render() {
    return (  
        <div>
   <Route exact path="/" render={() =>
   (
   <div>
      <MainComponent searchHotel={this.searchHotel}/>
      <div className="grey-content"></div>
      <StaticContentComponent/>
   </div>
   )}/>
   <Route exact path="/hotels" render={() =>
   (
   <div>
      <TopMenu/>
      <HotelsList hotelList= {this.state.hotelList}/>
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
      <HotelForm/>
   </div>
   )}/>
</div>
    );
  }
}

export default withRouter(HomePage);

