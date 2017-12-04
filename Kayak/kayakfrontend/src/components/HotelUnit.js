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
import {reactLocalStorage} from 'reactjs-localstorage';

class HotelUnit extends Component {
    constructor(props){
        super(props);
        this.state = {
            flag:false,
            view:"rooms",
            hotelData : this.props.hotelData,
            roomData:[],
            reviewData : [{
                reviewScore:10,
                reviewComment:"Fantastic"
            },
                {
                    reviewScore:1,
                    reviewComment:"Bad!!!"
                }]
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
        var stateTemp = this.state;
        stateTemp.view = view;
        this.setState(stateTemp);
        if (view === 'rooms') {
            var data = {
                "location": this.props.hotelData.Location,
                "checkindate": this.props.bookhotel.checkindate,
                "checkoutdate": this.props.bookhotel.checkoutdate,
                "HotelId": this.props.hotelData.HotelId
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
        if (view === 'reviews') {
            var data = {
                "hotel_id": this.props.hotelData.HotelId
            }
            HotelAPI.getReviews(data)
                .then((res) => {
                    console.log(res.results)
                    var state_temp = this.state;
                    state_temp.reviewData = res.results;
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
        if(localStorage.getItem("criteriaChanged") === "false") {
            var temp = this.props.hotelData;
            this.props.SetHotel(temp);
            this.props.SetRoom(roomData);
            this.props.history.push("/hotelForm");
        }
        else {
            alert("Criteria changed")
        }
    }
    render() {
        var amenitiesList1 = [];
        var amenitiesList2 = [];
        if (this.props.hotelData.amenities) {
            var data = this.props.hotelData.amenities[0];
            var index = 0;
            for (var key in data) {
                index++;
                // data.map(function (temp, index) {
                if (index < 5) {
                    var src_temp = key + '.png';
                    amenitiesList1.push(
                        <div>
                            <img src={src_temp} className="amenities-logo"/>
                            <span>{key}</span>
                        </div>
                    );
                }
                else {
                    var src_temp = key + '.png';
                    amenitiesList2.push(
                        <div>
                            <img src={src_temp} className="airline-logo"/>
                            <span>{key}</span>
                        </div>
                    );

                }

            }
        }

        var roomjson1 = this.state.roomData;
        var roomsData1 = [];
        var roomsData =[];
        for (var key in roomjson1) {
            var data ={
                roomtype: key,
                count: roomjson1[key].count,
                price: roomjson1[key].price,
                bedType: roomjson1[key].bedType,
                free_cancellation : roomjson1[key].free_cancellation,
                id : roomjson1[key].id,
                days: roomjson1[key].days
            }
            roomsData1.push(data);
        }
        roomsData1.map(function(roomjson, key) {
            var cancelObj = null;
            if(roomjson.free_cancellation == true)
                cancelObj = <span className="can-style">Free Cancellation</span>
            roomsData.push(<div className="row top-border text-align-left padding-13">
                    <div className="col-md-3">
                        <span>{roomjson.roomtype}</span>
                    </div>
                    <div className="col-md-2">
                        <span>{roomjson.bedType}</span>
                    </div>
                    <div className="col-md-2">
                        {cancelObj}
                    </div>
                    <div className="col-md-2">
                        <span>${roomjson.price}</span>
                    </div>
                    <div className="col-md-3">
                        <button onClick={ () =>{this.gotopayment(roomjson)}} className="view-details-popup-button line-height-27">BOOK</button>
                    </div>
                </div>
            )
        }.bind(this));

        var reviewDetails =[];
        var reviews = this.state.reviewData;
        reviews.map(function(temp,index){
            var abc;
            if(temp.rating == 1){
                abc ="Pretty Bad";
            }
            if(temp.rating == 2){
                abc ="Pretty Bad";
            }
            if(temp.rating == 3){
                abc = "Bad";
            }
            if(temp.rating == 4){
                abc = "Bad";
            }
            if(temp.rating == 5){
                abc = "Ok";
            }
            if(temp.rating == 6){
                abc ="Good"
            }
            if(temp.rating == 7){
                abc ="Good"
            }
            if(temp.rating == 8){
                abc = "Better than most";
            }
            if(temp.rating == 9){
                abc = "Fantastic";
            }
            if(temp.rating == 10){
                abc ="Best";
            }
            reviewDetails.push(
                <div>
                    <p className="padding-right-3 review-heading text-align-left"><span className="border-style">{temp.rating} </span><span>{abc}</span></p>
                    <p className="review-content text-align-left"><span>{temp.review_content}</span></p>
                </div>
            );
        });
        return (
            <div className="pad-top-10  margin-right-40">
                <div className="row backgroud-white">
                    <div className="col-md-4 padding-none">
                        <img src="hotel.jpg"  className="hotel-logo"/>
                    </div>
                    <div className="col-md-6">
                        <div className="text-align-left">
                            <span onClick={this.gotohotel} className="font-size-19">{this.props.hotelData.HotelName}</span>
                        </div>
                        <div className="text-align-left">
                            {(this.props.hotelData.Stars === "1")?
                                <span>
                            <span className="glyphicon glyphicon-star padding-right-3"></span>
                            <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
                            <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
                            <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
                            <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
                                </span>
                                : null
                            }
                            {(this.props.hotelData.Stars === "2")?
                                <span>
                            <span className="glyphicon glyphicon-star padding-right-3"></span>
                            <span className="glyphicon glyphicon-star padding-right-3 "></span>
                            <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
                            <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
                            <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
                                </span>
                                : null
                            }
                            {(this.props.hotelData.Stars === "3")?
                                <span>
                            <span className="glyphicon glyphicon-star padding-right-3"></span>
                            <span className="glyphicon glyphicon-star padding-right-3 "></span>
                            <span className="glyphicon glyphicon-star padding-right-3 "></span>
                            <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
                            <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
                                </span>
                                : null
                            }
                            {(this.props.hotelData.Stars === "4")?
                                <span>
                            <span className="glyphicon glyphicon-star padding-right-3"></span>
                            <span className="glyphicon glyphicon-star padding-right-3 "></span>
                            <span className="glyphicon glyphicon-star padding-right-3 "></span>
                            <span className="glyphicon glyphicon-star padding-right-3 "></span>
                            <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
                                </span>
                                : null
                            }
                            {(this.props.hotelData.Stars === "5")?
                                <span>
                            <span className="glyphicon glyphicon-star padding-right-3"></span>
                            <span className="glyphicon glyphicon-star padding-right-3 "></span>
                            <span className="glyphicon glyphicon-star padding-right-3 "></span>
                            <span className="glyphicon glyphicon-star padding-right-3 "></span>
                            <span className="glyphicon glyphicon-star padding-right-3 "></span>
                                </span>
                                : null
                            }

                        </div>
                        <div className="text-align-left">
                            <div className="row pad-top-30">
                                <div className="col-md-4">
                                    <span className="review-style">{this.props.hotelData.ReviewScore}</span>
                                </div>
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-4">
                                    <p className="margin-bottom-none">Location</p>
                                    <p className="font-size-11">{this.props.hotelData.Location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>

                            <div className="price-style">${this.props.hotelData.Price}</div>
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
                                    <div className="amenities-style">
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
                                    <div>
                                        <p className="pad-10-re text-align-left review-heading border-style">REVIEW SCORE : {this.props.hotelData.ReviewScore}</p>
                                        <p className="padding-right-3 review-heading text-align-left"><span className="border-style">8 </span><span></span></p>
                                        <p className="review-content text-align-left"><span>Excellent Hotel</span></p>
                                        <p className="padding-right-3 review-heading text-align-left"><span className="border-style">8 </span><span></span></p>
                                        <p className="review-content text-align-left"><span>Awesome Ambience</span></p>
                                        {reviewDetails}
                                    </div>:null
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
        hotelPageData: state.hotels.hotelPageData,
        bookhotel : state.hotels.bookhotel
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({SetHotel : SetHotel, SetRoom: SetRoom}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelUnit));

