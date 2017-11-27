import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
//var GoogleMapsLoader = require('google-maps'); 
 import hotelPage from './HotelPage';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetHotel} from '../actions/actionsAll';
import * as HotelAPI from '../api/HotelAPI';
import {SetRoom} from '../actions/actionsAll';

class HotelUnit extends Component {
    constructor(props){
        super(props);
     this.state = {
             flag:false,
         view:"rooms",
         hotelData : this.props.hotelData,
         roomData:[]
        }
    }
    componentWillMount(){
        console.log(this.props.hotelData)
       // GoogleMapsLoader.load(function(google) {
   // new google.maps.Map(el, options);
//});
    }
setFlag = (temp) => {
    console.log("clicked")
        var stateTemp =this.state;
        stateTemp.flag = !stateTemp.flag;
        this.setState(stateTemp);
        this.setView('rooms');
    }
setView = (view) => {
    console.log("view clicked")
        var stateTemp =this.state;
        stateTemp.view = view;
        this.setState(stateTemp);
    if(view === 'rooms'){
        var data={
             "location" : this.state.hotelData.Location,
            "checkindate" : '',
            "checkoutdate": '',
            "HotelId": this.state.hotelData.HotelId
        }
         HotelAPI.getRooms(data)
        .then((res) => {
        console.log(res);
             console.log(res)
             var state_temp = this.state;
             state_temp.roomData = res.rooms;
             this.setState(state_temp);

        })
    }
    }
gotohotel = () =>{
    var temp = this.props.hotelData;
    this.props.SetHotel(temp);
    this.props.history.push("/hotelPage");
}
gotopayment = (roomData) =>{
    var temp = this.props.hotelData;
    this.props.SetHotel(temp);
    this.props.SetRoom(roomData);
    this.props.history.push("/hotelForm");
}
  render() {
      var amenitiesList1 = [];
      var amenitiesList2 = [];
      if(this.props.hotelData.amenities){
      var data = this.props.hotelData.amenities;
      data.map(function (temp, index) {
          if (index < 5) {
              amenitiesList1.push(
                  <div>
                      <img src={temp} className="airline-logo"/>
                      <span>{temp}</span>
                  </div>
              );
          }
          else {
              amenitiesList2.push(
                  <div>
                      <img src={temp} className="airline-logo"/>
                      <span>temp</span>
                  </div>
              );

          }

      });
  }

      var roomjson = this.state.roomData;
      var roomsData = [];
      for (var key in roomjson) {
            var cancelObj = null;
           if(roomjson[key].freeCancellation == true)
            cancelObj = <span className="can-style">Free Cancellation</span>
           roomsData.push(<div className="row top-border text-align-left padding-13">
                          <div className="col-md-3">
                          <span>{key}</span>
                          </div>
                          <div className="col-md-2">
                           <span>{roomjson[key].bedType}</span>
                          </div>
                          <div className="col-md-2">
                          {cancelObj}
                          </div>
                          <div className="col-md-2">
                          <span>${roomjson[key].price}</span>
                          </div>
                          <div className="col-md-3">
                           <button onClick={ () =>{this.gotopayment(roomjson[key])}} className="view-details-popup-button line-height-27">BOOK</button>
                          </div>
                          </div>
      )

                };
    return (
        <div className="pad-top-10  margin-right-40">
        <div className="row backgroud-white">
         <div className="col-md-4 padding-none">
         <img src={this.state.hotelData.image}  className="hotel-logo"/>
        </div>
         <div className="col-md-6">
        <div className="text-align-left">
        <span onClick={this.gotohotel} className="font-size-19">{this.state.hotelData.HotelName}</span>
        </div>
        <div className="text-align-left">
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
        </div>
        <div className="text-align-left">
        <div className="row pad-top-30">
        <div className="col-md-4">
        <span className="review-style">{this.state.hotelData.ReviewScore}</span>
        </div>
        <div className="col-md-4">
        <p className="margin-bottom-none">Excellent</p>
        <p className="font-size-11">234 reviews</p>
        </div>
         <div className="col-md-4">
        <p className="margin-bottom-none">Location</p>
        <p className="font-size-11">{this.state.hotelData.Location}</p>
        </div>
        </div>
        </div>
        </div>
         <div className="col-md-2">
          <div>

        <div className="price-style">${this.state.hotelData.Price}</div>
        <div className=" pad-top-30">
        <button onClick={ () =>{this.setFlag()}} className="view-details-popup-button line-height-27">VIEW DETAILS</button>
        </div>
        </div>
        </div>
        </div>
{
          this.state.flag
            ? <div className="row backgroud-white pad-15">
              <div className="text-align-left pad-top-10">
              <span className="padding-right-30" onClick={ () =>{this.setView("rooms")}} >Rooms</span>
          <span className="padding-right-30" onClick={ () =>{this.setView("details")}} >Details</span>
          <span className="padding-right-30" onClick={ () =>{this.setView("map")}} >Map</span>
          <span className="padding-right-30" onClick={ () =>{this.setView("reviews")}} >Reviews</span>
              </div>
        <div>
        {(this.state.view === "rooms")?
             <div>
              <div className="row pad-img-tab">
              <div className="col-md-3">
         <img src="1.jpg"  className="hotel-logo"/>
        </div>
          <div className="col-md-3">
         <img src="1.jpg"  className="hotel-logo"/>
        </div>
          <div className="col-md-3">
         <img src="1.jpg"  className="hotel-logo"/>
        </div>
          <div className="col-md-3">
         <img src="1.jpg"  className="hotel-logo"/>
        </div>
          </div>
              <div className="row padding-13 text-align-left">
                          <div className="col-md-3">
                          <span className="room-data-header">Room Type</span>
                          </div>
                          <div className="col-md-2">
                           <span className="room-data-header">Bed Type</span>
                          </div>
                          <div className="col-md-2">
                         <span className="room-data-header"> Conditions </span>
                          </div>
                          <div className="col-md-2">
                          <span className="room-data-header">Nightly</span>
                          </div>
                          <div className="col-md-3">

                          </div>


              </div>
                {roomsData}
            <div className="row text-align-left">
              <span className="room-disclaimer">Rooms pictured for reference. Booked room will depend on availability & room type.</span>
              </div>
          <div className="row">
              <span className="pull-left">
              <Ionicon icon="md-share"
                              className="cursor-pointer padding-right-3" fontSize="15px" color="#000000"/>
        <span className="padding-right-3 font-size-8">SHARE</span>
              </span>
              <span className="goto pull-right">SHOW ALL RATES & ROOM TYPES </span>
              </div>
              </div>

          :null
}</div>

          <div>
        {(this.state.view === "details")?
              <div>
         <div>Excellent hotel. Great rooms in excellent location. Awesome vibe.</div>
                  <div className="row">
                      <div className="col-md-6">
                         {amenitiesList1}
                      </div>
                      <div className="col-md-6">
                          {amenitiesList2}
                      </div>
                  </div>
         </div>:null
}</div>
          <div>
        {(this.state.view === "map")?
              <span>map</span>:null
}</div>
          <div>
        {(this.state.view === "reviews")?
              <span>reviews</span>:null
}</div>
        </div>
            : null
        }
</div>

    );
  }
}

function mapStateToProps(state){
    return {
        hotelPageData: state.hotels.hotelPageData
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({SetHotel : SetHotel, SetRoom: SetRoom}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelUnit));

