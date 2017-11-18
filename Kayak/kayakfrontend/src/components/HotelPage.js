import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

class HotelPage extends Component {
    constructor(props){
        super(props);
     this.state = {
         view:"snapshot"
        }
    }
      setView = (view) => {
    console.log("view clicked")
        var stateTemp =this.state;
        stateTemp.view = view;
        this.setState(stateTemp);
    }
      gotopayment = () =>{
    this.props.history.push("/hotelForm");
}
  render() {       
       var roomjson = 
          [
              {
                  "roomType":"Superior Room",
                  "bedType" :"2 King bed",
                  "freeCancellation" : true,
                  "price" : 120
              },
              {
                  "roomType":"King Room",
                  "bedType" :"1 King bed",
                  "freeCancellation" : false,
                  "price" : 70
              }
          ]
      var roomsData = [];
       roomjson.map(function(temp, index) {
            var cancelObj = null;
           if(temp.freeCancellation == true)
            cancelObj = <span className="can-style">Free Cancellation</span>
           roomsData.push(<div className="row top-border text-align-left padding-13">
                          <div className="col-md-3">
                          <span>{temp.roomType}</span>
                          </div>
                          <div className="col-md-2">
                           <span>{temp.bedType}</span>
                          </div>
                          <div className="col-md-2">
                          {cancelObj}
                          </div>
                          <div className="col-md-2">
                          <span>${temp.price}</span>
                          </div>
                          <div className="col-md-3">
                           <button onClick={ () =>{this.gotopayment()}} className="view-details-popup-button line-height-27">BOOK</button>
                          </div>
                          </div>
           );
                }.bind(this));
    return (                     
         <div className="container-fluid-hotel">
        <div className="row">
        <div className="text-align-left">
        <span className="font-27 font-bold">Hotel Name</span>
        
        <span className="text-align-left pad-left">
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3"></span>
        <span className="glyphicon glyphicon-star padding-right-3 star-gray"></span>
        </span>
        </div>
        <div  className="text-align-left">
         <span className="glyphicon glyphicon-map-marker"></span>
        <span>
        120 N Glenwood, Jackson, WY 83001, United States +1 307 733 2200
        </span></div>
        <div className="pad-top-10">
        <img src="hotel.jpg"  className="hotel-logo"/>
        </div>
        
        </div>
        <div className="row pad-top-10">
        <div className="col-md-2">
        <div className="text-align-left pad-top-10">
          <p className="padding-right-30 abc" onClick={ () =>{this.setView("snapshot")}} >OVERVIEW</p>
              <p className="padding-right-30 abc" onClick={ () =>{this.setView("rooms")}} >ROOMS</p>          
          <p className="padding-right-30 abc" onClick={ () =>{this.setView("map")}} >LOCATION</p>
          <p className="padding-right-30 abc" onClick={ () =>{this.setView("reviews")}} >REVIEWS</p>
<p className="padding-right-30 abc" onClick={ () =>{this.setView("details")}} >POLICIES</p>
              </div>
        </div>
        <div className="col-md-10">
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
         </div>:null
}</div>
          <div>
        {(this.state.view === "map")?
              <span>map</span>:null
}</div>
 <div className="ta-jus">
        {(this.state.view === "snapshot")?
              <span>Hotel Jackson Hotel Jackson a Forbes Four Star and AAA Four Diamond award winning hotelwelcomes guests with distinctive service and inspiring surroundings that meld a contemporary play on nature and the west, with a rich history of Jackson. The luxury boutique hotel features 55 rooms with 4 suites. It is a LEED Building with underground parking.Hotel Jacksons award-winning dining and lounge areas provide a welcoming place to unwind while enjoying locally crafted beers, wine, specialty cocktails and farm-to-table culinary experiences featuring fresh fare made to share. Guests are steps from the famed antler arches on the Jackson Hole Town Square, countless galleries, specialty shops, restaurants and the best night life.</span>:null
}</div>
          <div>
        {(this.state.view === "reviews")?
              <span>reviews</span>:null
}</div>
</div>
            </div>
    );
  }
}

export default withRouter(HotelPage);

