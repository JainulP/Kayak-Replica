import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetFlight} from '../actions/actionsAll';

class FlightUnit extends Component {
    constructor(props){
        super(props);
        this.state = {
            flag:false,
            flightData:{
                criteria:{},
                flight:{}
            }
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
    }
    bookflight = (classSelected) =>{
        var stateTemp =this.state;
        stateTemp.flightData.flight = this.props.flightData;
        stateTemp.flightData.flight.classSelected = classSelected;
        this.setState(stateTemp);
        this.props.SetFlight(this.state.flightData);
        this.props.history.push("/flightform");
    }
  render() {
    return (                     
         <div className="pad-top-10  margin-right-40">
            <div className="row backgroud-white">
                <div className="col-md-2 margin-top">
                    <img  src="emirates.png" className="airline-logo"/>
                    <p className="airline-content">{this.props.flightData.AirlinesName} </p>
                </div>
                <div className="col-md-5">
                    <div className="row">
                    <div className="col-md-4">
                        <p className="airport airport-align bold">
                            {this.props.flightData.TakeOffTime}
                        </p>
                        <p className="airport">
                            {this.props.flightData.SourceAirport}
                        </p>
                    </div>
                    <div className="col-md-4 airport-align ">
                        <p>----------</p>
                    </div>
                    <div className="col-md-4">
                        <p className="airport airport-align bold">
                            {this.props.flightData.LandingTime}
                        </p>
                        <p className="airport margin-bot">
                            {this.props.flightData.DestinationAirport}
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <p className="airport-align duration">
                        {this.props.flightData.duration}
                    </p>
                </div>
                <div className="col-md-3">
                    <div className="price-style">${this.props.flightData.EconomyClassFares}</div>
                    <div className=" pad-top-30">
                        <button onClick={ () =>{this.setFlag()}} className="view-details-popup-button line-height-27">VIEW DETAILS</button>
                    </div>
                </div>
            </div>

             {
                 this.state.flag
                     ? <div className="row backgroud-abc pad-15">
                     <div>
                         <div className="text-align-left side-head">
                             DEPART
                         </div>
                         <div className="row backgroud-white extra">
                            <div className="col-md-2 bold airport-small-1">
Mon, Jan 1
                            </div>
                             <div className="col-md-8">
<p className="airport-small-1 bold mar-top-0"> <img  src="emirates.png" className="airline-logo-small"/><span>{this.props.flightData.TakeOffTime} - {this.props.flightData.LandingTime}</span></p>
                                 <p className="airport-small mar-top-0">Newark - San Francisco</p>
                                 <p className="airline-content mar-top-0"><span>{this.props.flightData.FlightId} | </span>
                                     <span>{this.props.flightData.Description} | </span>
                                     <span>{this.props.flightData.Plane}</span></p>
                             </div>
                             <div className="col-md-2 bold airport-small-1">
                                 {this.props.flightData.duration}
                             </div>
                         </div>
                         <div className="text-align-left pad-top-30 side-head">
                             BOOKING OPTIONS
                         </div>
                         <div className="row backgroud-white extra">
                             <div className="row xyz">
                                 <div className="col-md-3 airport-small-1 bold">Fare option
                                 </div>
                                 <div className="col-md-2 airport-small-1 bold">Cost per ticket
                                 </div>
                                 <div className="col-md-2 airport-small-1 bold">Availability
                                 </div>
                                 <div className="col-md-2 airport-small-1 bold">Total
                                 </div>
                                 <div className="col-md-3">

                                 </div>
                             </div>

                             <div className="row">
                                 <div className="col-md-3 airport-small-1">Bussiness
                                 </div>
                                 <div className="col-md-2 airport-small-1">{this.props.flightData.BusinessClassFares}
                                 </div>
                                 <div className="col-md-2 airport-small-1">{this.props.flightData.BusinessClassSeats}
                                 </div>
                                 <div className="col-md-2 airport-small-1">Total
                                 </div>
                                 <div className="col-md-3">
                                     <div>
                                         <button onClick={ () =>{this.bookflight('Business')}} className="view-details-popup-button line-height-18">BOOK</button>
                                     </div>
                                 </div>
                             </div>

                             <div className="row">
                                 <div className="col-md-3 airport-small-1">First Class
                                 </div>
                                 <div className="col-md-2 airport-small-1">{this.props.flightData.FirstClassFares}
                                 </div>
                                 <div className="col-md-2 airport-small-1">{this.props.flightData.FirstClassSeats}
                                 </div>
                                 <div className="col-md-2 airport-small-1">Total
                                 </div>
                                 <div className="col-md-3">
                                     <div>
                                         <button onClick={ () =>{this.bookflight('First Class')}} className="view-details-popup-button line-height-18">BOOK</button>
                                     </div>
                                 </div>
                             </div>

                             <div className="row">
                                 <div className="col-md-3 airport-small-1">Economy
                                 </div>
                                 <div className="col-md-2 airport-small-1">{this.props.flightData.EconomyClassFares}
                                 </div>
                                 <div className="col-md-2 airport-small-1">{this.props.flightData.EconomyClassSeats}
                                 </div>
                                 <div className="col-md-2 airport-small-1">Total
                                 </div>
                                 <div className="col-md-3">
                                     <div>
                                         <button onClick={ () =>{this.bookflight('Economy')}} className="view-details-popup-button line-height-18">BOOK</button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     </div>
                     :null}
         </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        flighData: state.flights.flighData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({SetFlight: SetFlight}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlightUnit));
