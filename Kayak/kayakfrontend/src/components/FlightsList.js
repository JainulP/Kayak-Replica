import {Route, withRouter, BrowserRouter} from 'react-router-dom';
import '../App.css';
import React, {Component} from 'react';
import FlightUnit from './FlightUnit';
import Footer from './Footer';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetFlight} from '../actions/actionsAll';
import FlightSearchNavBar from './FlightSearchNavBar';
import * as FlightAPI from '../api/FlightAPI';
import RangeSlider from 'react-dual-rangeslider';
import FlightUnitTwoWay from './FlightUnitTwoWay';

var searchBarStyle = {
    maxHeight: "119px",
    height: "100%"

};


class FlightsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flightsList:this.props.flightsList,
            filter : {
                source: this.props.criteria.source,
                destination: this.props.criteria.destination,
                travelDate: this.props.criteria.travelDate,
                travelDateReturn : this.props.criteria.travelDateReturn,
                round_trip: this.props.criteria.round_trip,
                minTakeOffTime:"1:00",
                maxTakeOffTime:"23:00",
                minLandingTime : "1:00",
                maxLandingTime: "23:00",
                airlines: null,
                minPrice: 50,
                maxPrice:1000
            }
        }
    }
    resetFilters = () =>{
        var state_temp = this.state;
        var filterTemp  = {
                source: this.props.criteria.source,
                destination: this.props.criteria.destination,
                travelDate: this.props.criteria.travelDate,
                travelDateReturn : this.props.criteria.travelDateReturn,
                round_trip: this.props.criteria.round_trip,
                minTakeOffTime:"1:00",
                maxTakeOffTime:"23:00",
                minLandingTime : "1:00",
                maxLandingTime: "23:00",
                airlines: null,
                minPrice: 50,
                maxPrice:1000
        }
        state_temp.filter = filterTemp;
        this.setState(state_temp);

    }
    componentWillMount() {
        console.log(this.props)
    }


 sortbyPriceHightoLow(){
      /*  var ascHotels= hotels.sort(function(a, b) {
    return a.Price < b.Price;
    })*/
                var ascHotels= this.state.flightsList.sort(function(a, b) {
    return a.Price < b.Price;
    })
         this.setState({
  flightsList: ascHotels
})

        }
sortbyPriceLowtoHigh(){
   /* var ascHotels= hotels.sort(function(a, b) {
    return a.Price > b.Price;
})*/
    var descHotels= this.state.flightsList.sort(function(a, b) {
    return a.Price > b.Price;
    })
         this.setState({
  flightsList: descHotels
})
    
    }
 sortbyDurationHightoLow(){
      /*  var ascHotels= hotels.sort(function(a, b) {
    return a.Price < b.Price;
    })*/
      var ascHotels= this.state.flightsList.sort(function(a, b) {
    return a.Minutes < b.Minutes;
    })
         this.setState({
  flightsList: ascHotels
})
        }
sortbyDurationLowtoHigh(){
   /* var ascHotels= hotels.sort(function(a, b) {
    return a.Price > b.Price;
})*/
         var descHotels= this.state.flightsList.sort(function(a, b) {
    return a.Minutes > b.Minutes;
    })
         this.setState({
  flightsList: descHotels
})

    }

    searchFlightByFilter = () => {
        FlightAPI.filterFlights(this.state.filter)
            .then((res) => {
                console.log(res);
                this.props.GetFlight(res.flights);
                this.props.history.push("/flights");
            });
    }

    render() {
        var flightUnitsList = [];
        if(this.props.criteria.round_trip === "true"){
            if(this.props.flightsList && this.props.flightsList != "No flights available") {
                var data = this.props.flightsList;
                data.map(function (temp, index) {
                    flightUnitsList.push(
                        <FlightUnitTwoWay flightData={temp}/>
                    );
                });
            }
            else{
                flightUnitsList= <div>NO FLIGHTS AVAILABLE</div>;
            }
        }
        else{
            if(this.props.flightsList && this.props.flightsList != "No flights available") {
                var data = this.props.flightsList;
                data.map(function (temp, index) {
                    flightUnitsList.push(
                        <FlightUnit flightData={temp}/>
                    );
                });
            }
            else{
                flightUnitsList= <div className="no-results">NO FLIGHTS AVAILABLE</div>;
            }
        }

        return (
            <div>
                <div style={searchBarStyle}>
                    <FlightSearchNavBar/>
                </div>
                <div className="row">
                    <div className="row  background-gray">
                        <div className="col-md-3">
                            <div>
                                <div className="comp1 reset-margin-custom">
                                    <span onClick={this.searchFlightByFilter}>FILTER | </span>
                                    <span onClick={this.resetFilters}>RESET</span>
                                </div>
                                <div className="background-color-white">
                                    {/* AIRLINES FILTER */}
                                    <div>
                                        <p className="filter-heading-style">Airlines</p>
                                        <p className="filter-content-style">
                                            <select className="filter-style" onChange={(event) => {
                                                this.setState({
                                                    filter: {
                                                        ...this.state.filter,
                                                        airlines: event.target.value
                                                    }
                                                });
                                            }}>
                                                <option value="any" className="filter-style">Any Airlines</option>
                                                <option value="emirates" className="filter-style">Emirates</option>
                                                <option value="airindia" className="filter-style">Air India</option>
                                                <option value="etihad" className="filter-style">Etihad</option>
                                                <option value="airchina" className="filter-style">Air China</option>
                                            </select>
                                        </p>
                                    </div>
                                    {/* PRICE FILTER */}
                                    <div>
                                        <p className="filter-heading-style">Price</p>
                                        <p className="filter-content-style">
                                            <RangeSlider
                                                min={10}
                                                max={1000}
                                                onChange={() => {
                                                    console.log('react-dual-rangeslider max: ', this.state.filter.minPrice);
                                                    console.log('react-dual-rangeslider min: ', this.state.filter.maxPrice);
                                                }}
                                                step={1}/>
                                        </p>
                                    </div>
                                    {/* TAKE OFF TIME FILTER */}
                                    <div>
                                        <p className="filter-heading-style">Take Off Time</p>
                                        <p className="filter-content-style">
                                            <RangeSlider
                                                min={0}
                                                max={23}
                                                onChange={() => {
                                                    console.log('react-dual-rangeslider max: ', this.state.filter.minTakeOffTime);
                                                    console.log('react-dual-rangeslider min: ', this.state.filter.maxTakeOffTime);
                                                }}
                                                step={1}/>
                                        </p>
                                    </div>
                                    {/* LANDING TIME FILTER */}
                                    <div>
                                        <p className="filter-heading-style">Landing Time</p>
                                        <p className="filter-content-style">
                                            <RangeSlider
                                                min={0}
                                                max={23}
                                                onChange={() => {
                                                    console.log('react-dual-rangeslider max: ', this.state.filter.minLandingTime);
                                                    console.log('react-dual-rangeslider min: ', this.state.filter.maxLandingTime);
                                                }}
                                                step={1}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* LIST OF CAR UNITS */}
                        <div className="col-md-9 padding-none">
                                          <div className="col-sm-3">
    <button type="button" className="btn btn-primary"  onClick={()=>this.sortbyPriceLowtoHigh()}>Price(Low-High)</button>
        </div>
<div className="col-sm-3">
    <button type="button" className="btn btn-primary"  onClick={()=>this.sortbyPriceHightoLow()}>Price(High-Low)</button>
        </div>
               <div className="col-sm-3">
    <button type="button" className="btn btn-primary" onClick={()=>this.sortbyDurationLowtoHigh()}>Duration(Low-High)</button>
        </div>
<div className="col-sm-3">
    <button type="button" className="btn btn-primary"  onClick={()=>this.sortbyDurationHightoLow()}>Duration(High-Low)</button>
        </div>
                            {flightUnitsList}
                        </div>
                    </div>
                    {/* FOOTER */}
                    <Footer/>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log(state)
    return {
        flightsList: state.flights.flightsList,
        criteria : state.flights.criteria
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({GetFlight: GetFlight}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlightsList));
