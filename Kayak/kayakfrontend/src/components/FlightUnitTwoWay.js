import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetFlight} from '../actions/actionsAll';

class FlightUnitTwoWay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag1: false,
            flag2: false,
            flightDataTemp: {
                flight: [],
                totalPrice:0

            }

        }
    }
    componentWillMount(){
        console.log(this.props)
        var b = 0;

            if(this.props.criteria.travelClass === "Economy"){
                b = this.props.flightData[0].EconomyClassFares + this.props.flightData[1].EconomyClassFares;
            }
            if(this.props.criteria.travelClass === "Business"){
                b = this.props.flightData[0].BusinessClassFares + this.props.flightData[1].BusinessClassFares;
            }
            if(this.props.criteria.travelClass === "First") {
                b = this.props.flightData[0].FirstClassFares + this.props.flightData[1].FirstClassFares;
            }
            var state_temp = this.state;
            state_temp.totalPrice = b;
            this.setState(state_temp);
        // GoogleMapsLoader.load(figh(google) {
        // new google.maps.Map(el, options);
//});
    }
    setFlag1 = (temp) => {
        console.log("clicked")
        var stateTemp =this.state;
        stateTemp.flag1 = !stateTemp.flag1;
        this.setState(stateTemp);
    }
    setFlag2 = (temp) => {
        console.log("clicked")
        var stateTemp =this.state;
        stateTemp.flag2 = !stateTemp.flag2;
        this.setState(stateTemp);
    }
    bookflight = (classSelected) =>{
        var stateTemp =this.state;
        stateTemp.flightDataTemp.flight = this.props.flightData;
        stateTemp.flightDataTemp.flight.classSelected = classSelected;
        this.setState(stateTemp);
        this.props.SetFlight(this.state.flightDataTemp.flight);
        this.props.history.push("/flightform");
    }
  render() {
    return (
        <div className="pad-top-10  margin-right-40">

            {/*COMPONENT 1  */}
            <div className="margin-right-40">
                <div className="row backgroud-white">
                    <div className="col-md-2 margin-top">
                        <img  src="emirates.png" className="airline-logo"/>
                        <p className="airline-content">{this.props.flightData[0].AirlinesName} </p>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-4">
                                <p className="airport airport-align bold">
                                    {this.props.flightData[0].TakeOffTime}
                                </p>
                                <p className="airport">
                                    {this.props.flightData[0].SourceAirport}
                                </p>
                            </div>
                            <div className="col-md-4 airport-align ">
                                <p>----------</p>
                            </div>
                            <div className="col-md-4">
                                <p className="airport airport-align bold">
                                    {this.props.flightData[0].LandingTime}
                                </p>
                                <p className="airport margin-bot">
                                    {this.props.flightData[0].DestinationAirport}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <p className="airport-align duration">
                            {this.props.flightData[0].duration}
                        </p>
                    </div>
                    <div className="col-md-3">
                        <div className="price-style">${this.props.flightData[0].EconomyClassFares}</div>
                        <div className=" pad-top-30">
                            <button onClick={ () =>{this.setFlag1()}} className="view-details-popup-button line-height-27">VIEW DETAILS</button>
                        </div>
                    </div>
                </div>

                {
                    this.state.flag1
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
                                        <p className="airline-content mar-top-0"><span>{this.props.flightData[0].FlightId} | </span>
                                            <span>{this.props.flightData[0].Description} | </span>
                                            <span>{this.props.flightData[0].Plane}</span></p>
                                    </div>
                                    <div className="col-md-2 bold airport-small-1">
                                        {this.props.flightData[0].duration}
                                    </div>
                                </div>
                                <div className="text-align-left pad-top-30 side-head">

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
                                        <div className="col-md-2 airport-small-1">{this.props.flightData[0].BusinessClassFares}
                                        </div>
                                        <div className="col-md-2 airport-small-1">{this.props.flightData[0].BusinessClassSeats}
                                        </div>
                                        <div className="col-md-2 airport-small-1">Total
                                        </div>
                                        <div className="col-md-3">
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-3 airport-small-1">First Class
                                        </div>
                                        <div className="col-md-2 airport-small-1">{this.props.flightData[0].FirstClassFares}
                                        </div>
                                        <div className="col-md-2 airport-small-1">{this.props.flightData[0].FirstClassSeats}
                                        </div>
                                        <div className="col-md-2 airport-small-1">Total
                                        </div>
                                        <div className="col-md-3">

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-3 airport-small-1">Economy
                                        </div>
                                        <div className="col-md-2 airport-small-1">{this.props.flightData[0].EconomyClassFares}
                                        </div>
                                        <div className="col-md-2 airport-small-1">{this.props.flightData[0].EconomyClassSeats}
                                        </div>
                                        <div className="col-md-2 airport-small-1">Total
                                        </div>
                                        <div className="col-md-3">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :null}
            </div>

            {/*COMPONENT 2  */}
         <div className="margin-right-40">
            <div className="row backgroud-white">
                <div className="col-md-2 margin-top">
                    <img  src="emirates.png" className="airline-logo"/>
                    <p className="airline-content">{this.props.flightData[1].AirlinesName} </p>
                </div>
                <div className="col-md-5">
                    <div className="row">
                    <div className="col-md-4">
                        <p className="airport airport-align bold">
                            {this.props.flightData[1].TakeOffTime}
                        </p>
                        <p className="airport">
                            {this.props.flightData[1].SourceAirport}
                        </p>
                    </div>
                    <div className="col-md-4 airport-align ">
                        <p>----------</p>
                    </div>
                    <div className="col-md-4">
                        <p className="airport airport-align bold">
                            {this.props.flightData[1].LandingTime}
                        </p>
                        <p className="airport margin-bot">
                            {this.props.flightData[1].DestinationAirport}
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <p className="airport-align duration">
                        {this.props.flightData[1].duration}
                    </p>
                </div>
                <div className="col-md-3">
                    <div className="price-style">${this.props.flightData[1].EconomyClassFares}</div>
                    <div className=" pad-top-30">
                        <button onClick={ () =>{this.setFlag2()}} className="view-details-popup-button line-height-27">VIEW DETAILS</button>
                    </div>
                </div>
            </div>

             {
                 this.state.flag2
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
                                 <p className="airline-content mar-top-0"><span>{this.props.flightData[1].FlightId} | </span>
                                     <span>{this.props.flightData[1].Description} | </span>
                                     <span>{this.props.flightData[1].Plane}</span></p>
                             </div>
                             <div className="col-md-2 bold airport-small-1">
                                 {this.props.flightData[1].duration}
                             </div>
                         </div>
                         <div className="text-align-left pad-top-30 side-head">

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
                                 <div className="col-md-2 airport-small-1">{this.props.flightData[1].BusinessClassFares}
                                 </div>
                                 <div className="col-md-2 airport-small-1">{this.props.flightData[1].BusinessClassSeats}
                                 </div>
                                 <div className="col-md-2 airport-small-1">Total
                                 </div>
                                 <div className="col-md-3">

                                 </div>
                             </div>

                             <div className="row">
                                 <div className="col-md-3 airport-small-1">First Class
                                 </div>
                                 <div className="col-md-2 airport-small-1">{this.props.flightData[1].FirstClassFares}
                                 </div>
                                 <div className="col-md-2 airport-small-1">{this.props.flightData[1].FirstClassSeats}
                                 </div>
                                 <div className="col-md-2 airport-small-1">Total
                                 </div>
                                 <div className="col-md-3">

                                 </div>
                             </div>

                             <div className="row">
                                 <div className="col-md-3 airport-small-1">Economy
                                 </div>
                                 <div className="col-md-2 airport-small-1">{this.props.flightData[1].EconomyClassFares}
                                 </div>
                                 <div className="col-md-2 airport-small-1">{this.props.flightData[1].EconomyClassSeats}
                                 </div>
                                 <div className="col-md-2 airport-small-1">Total
                                 </div>
                                 <div className="col-md-3">

                                 </div>
                             </div>
                         </div>
                     </div>
                     </div>
                     :null}

             <div>
             <div className="row  backgroud-white">
                 <div className="col-md-9">

                 </div>
                 <div className="col-md-1">
                    <p className="price-style">{this.state.totalPrice}</p>
                 </div>
                 <div className="col-md-2">
                 <button onClick={ () =>{this.bookflight('Business')}} className="view-details-popup-button line-height-18">BOOK</button>
             </div>
            </div>
                 </div>
         </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        flighData: state.flights.flighData,
        criteria : state.flights.criteria
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({SetFlight: SetFlight}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlightUnitTwoWay));
