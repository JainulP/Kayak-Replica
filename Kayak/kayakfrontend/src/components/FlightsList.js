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
var sortBtnStyle={
    marginBottom:"10px"
}

class FlightsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flightsList:this.props.flightsList,
            criteria:this.props.criteria,
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
    componentDidMount(){
        document.getElementById("flightPricemax").innerHTML = 100;
        document.getElementById("flightPricemin").innerHTML = 50;
        if(this.props.criteria.round_trip == "false"){
            document.getElementById("maxTakeOffTime").innerHTML = "23:00";
            document.getElementById("minTakeOffTime").innerHTML = "1:00";
            document.getElementById("minLandingTime").innerHTML = "1:00";
            document.getElementById("maxLandingTime").innerHTML = "23:00";
        }
    }
    resetFilters = () =>{
        localStorage.setItem("minLandingTime","1" );
        localStorage.setItem("maxLandingTime", "23");
        localStorage.setItem("maxTakeOffTime","1");
        localStorage.setItem("minTakeOffTime", "23");
        localStorage.setItem("flightPricemin", 50);
        localStorage.setItem("flightPricemax", 100);

        var state_temp = this.state;
        var filterTemp  = {
            source: this.props.criteria.source,
            destination: this.props.criteria.destination,
            travelDate: this.props.criteria.travelDate,
            travelDateReturn : this.props.criteria.travelDateReturn,
            round_trip: this.props.criteria.round_trip,
            minTakeOffTime:"1:00",
            maxTakeOffTime:"24:00",
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
        console.log(this.props);
        this.resetFilters();
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
            return a.durationminutes < b.durationminutes;
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
            return a.durationminutes > b.durationminutes;
        })
        this.setState({
            flightsList: descHotels
        })

    }

    searchFlightByFilter = () => {
        var classflight = this.props.criteria.travelClass;
        localStorage.setItem("classflight",classflight);
        console.log(classflight)
        if(this.props.criteria.round_trip === "false"){
            var state_temp=this.state.filter;
            state_temp.minLandingTime = localStorage.getItem("minLandingTime");
            state_temp.maxLandingTime = localStorage.getItem("maxLandingTime");
            state_temp.maxTakeOffTime = localStorage.getItem("maxTakeOffTime");
            state_temp.minTakeOffTime = localStorage.getItem("minTakeOffTime");
            state_temp.minPrice = parseInt(localStorage.getItem("flightPricemin"));
            state_temp.maxPrice = parseInt(localStorage.getItem("flightPricemax"));
            FlightAPI.filterFlights(state_temp)
                .then((res) => {
                    console.log(res);
                    this.props.GetFlight(res.flights);
                    this.props.history.push("/flights");
                });
        }
        else{

            var newArray = this.props.flightsList.filter(function (el, classflight) {
                console.log(classflight)
                var b = 0;

                if( localStorage.getItem("classflight")=== "Economy"){
                    b = el[0].EconomyClassFares + el[1].EconomyClassFares;
                }
                if(localStorage.getItem("classflight") === "Business"){
                    b = el[0].BusinessClassFares + el[1].BusinessClassFares;
                }
                if(localStorage.getItem("classflight") === "First") {
                    b = el[0].FirstClassFares + el[1].FirstClassFares;
                }
                console.log(b)
                console.log(localStorage.getItem("flightPricemin"))
                return b > localStorage.getItem("flightPricemin") &&
                    b < localStorage.getItem("flightPricemax");
            });
            this.props.GetFlight(newArray);
            //this.props.history.push("/flights");
        }
    }

    render() {
        var flightUnitsList = [];
        if(this.props.criteria.round_trip === "true"){
            if(this.props.flightsList && this.props.flightsList != "No flights available") {
                var data = this.props.flightsList;
                var tclass = this.props.criteria.travelClass;
                var adults = this.props.criteria.noAdults;
                data.map(function (temp, index) {
console.log(temp)
                    if((tclass=== "Economy" && temp[0].EconomyClassSeats >= adults) ||(tclass=== "Business" && temp[0].BusinessClassSeats >= adults)|| (tclass=== "First" && temp[0].FirstClassSeats >= adults) ) {
                        flightUnitsList.push(
                            <FlightUnitTwoWay flightData={temp}/>
                        );
                    }

                    if (!(flightUnitsList.length > 0))
                    {
                        flightUnitsList= <div className="no-results">NO FLIGHTS AVAILABLE</div>;
                    }
                });
            }
            else{
                flightUnitsList= <div>NO FLIGHTS AVAILABLE</div>;
            }
        }
        else{
            if(this.props.flightsList && this.props.flightsList != "No flights available") {
                var data = this.props.flightsList;
                console.log("****");
                var tclass = this.props.criteria.travelClass;
                var adults = this.props.criteria.noAdults;
                data.map(function (temp, index) {
                    console.log("----");
                    console.log(temp.EconomyClassSeats);
                    console.log(temp.BusinessClassSeats);
                    console.log(temp.FirstClassSeats);
                    if((tclass=== "Economy" && temp.EconomyClassSeats >= adults) ||(tclass=== "Business" && temp.BusinessClassSeats >= adults)|| (tclass=== "First" && temp.FirstClassSeats >= adults) ) {

                        flightUnitsList.push(
                            <FlightUnit flightData={temp}/>
                        );

                    }
                    if (!(flightUnitsList.length > 0))
                    {
                        flightUnitsList= <div className="no-results">NO FLIGHTS AVAILABLE</div>;
                    }
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
                                    {(this.props.criteria.round_trip === "false")?
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
                                        :null
                                    }
                                    {/* PRICE FILTER */}
                                    <div>
                                        <p className="filter-heading-style">Price</p>
                                        <p className="filter-content-style">
                                            <span id="flightPricemin" className="pull-left override"></span>
                                            <span id="flightPricemax" className="pull-right override"></span>
                                            <RangeSlider
                                                min={10}
                                                max={1000}
                                                minRange={10}
                                                onChange={(state) => {
                                                    console.log('react-dual-rangeslider max: ', state.max);
                                                    console.log('react-dual-rangeslider min: ', state.min);
                                                    localStorage.setItem("flightPricemin",state.min);
                                                    localStorage.setItem("flightPricemax", state.max);
                                                    document.getElementById("flightPricemax").innerHTML = state.max;
                                                    document.getElementById("flightPricemin").innerHTML = state.min;
                                                }}
                                                step={1}/>
                                        </p>
                                    </div>
                                    {/* TAKE OFF TIME FILTER */}
                                    {(this.props.criteria.round_trip === "false")?
                                        <div>
                                            <p className="filter-heading-style">Take Off Time</p>
                                            <p className="filter-content-style">
                                                <span id="minTakeOffTime" className="pull-left override"></span>
                                                <span id="maxTakeOffTime" className="pull-right override"></span>
                                                <RangeSlider
                                                    min={0}
                                                    max={23}
                                                    minRange={10}
                                                    onChange={(state) => {
                                                        console.log('react-dual-rangeslider max: ', state.max);
                                                        console.log('react-dual-rangeslider min: ', state.min);
                                                        document.getElementById("maxTakeOffTime").innerHTML = state.max;
                                                        document.getElementById("minTakeOffTime").innerHTML = state.min;
                                                        localStorage.setItem("minTakeOffTime",state.min);
                                                        localStorage.setItem("maxTakeOffTime", state.max);
                                                    }}
                                                    step={1}/>
                                            </p>
                                        </div>
                                        :null}
                                    {/* LANDING TIME FILTER */}
                                    {(this.props.criteria.round_trip === "false")?
                                        <div>
                                            <p className="filter-heading-style">Landing Time</p>
                                            <p className="filter-content-style">
                                                <span id="maxLandingTime" className="pull-right override"></span>
                                                <span id="minLandingTime" className="pull-left override"></span>
                                                <RangeSlider
                                                    min={0}
                                                    max={23}
                                                    minRange={10}
                                                    onChange={(state) => {
                                                        console.log('react-dual-rangeslider max: ', state.max);
                                                        console.log('react-dual-rangeslider min: ', state.min);
                                                        document.getElementById("maxLandingTime").innerHTML = state.max;
                                                        document.getElementById("minLandingTime").innerHTML = state.min;
                                                        localStorage.setItem("minLandingTime",state.min);
                                                        localStorage.setItem("maxLandingTime", state.max);
                                                    }}
                                                    step={1}/>
                                            </p>
                                        </div>
                                        :null}
                                </div>
                            </div>
                        </div>
                        {/* LIST OF CAR UNITS */}
                        <div className="col-md-9 padding-none">
                            <div className="row sortRowFlightBtnList">
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-default sortButtons" style={sortBtnStyle}  onClick={()=>this.sortbyPriceLowtoHigh()}>Price(Low-High)</button>
                                </div>
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-default sortButtons" style={sortBtnStyle} onClick={()=>this.sortbyPriceHightoLow()}>Price(High-Low)</button>
                                </div>
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-default sortButtons" style={sortBtnStyle} onClick={()=>this.sortbyDurationLowtoHigh()}>Duration(Low-High)</button>
                                </div>
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-default padding sortButtons" style={sortBtnStyle} onClick={()=>this.sortbyDurationHightoLow()}>Duration(High-Low)</button>
                                </div>
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
