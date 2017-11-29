import {Route, withRouter, BrowserRouter} from 'react-router-dom';
import '../App.css';
import React, {Component} from 'react';
import CarUnit from './CarUnit';
import Footer from './Footer';
import RangeSlider from 'react-dual-rangeslider';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetCars} from '../actions/actionsAll';
import * as CarAPI from '../api/CarAPI';
import CarSearchNavBar from './CarSearchNavBar';

var searchBarStyle = {
    maxHeight: "119px",
    height: "100%"

};

class CarsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carList: [],
            filter: {
                "carType": [],
                "capacity": [],
                "luggageCapacity": [],
                "carDoors": [],
                "other": []
            },
            maxpricefilter: 1000,
            minpricefilter: 10
        }
    }

    componentWillMount() {
        console.log(this.props.carList)
    }

    searchCarByFilter = () => {
        //console.log(document.getElementById("other"));
        var others = document.forms['demoForm'].elements['other'];
        var other = [];
        for (var i = 0; i < others.length; i++) {
            other.push(others[i].value);
        }

        var others = document.forms['demoForm'].elements['carType'];
        var carType = [];
        for (var i = 0; i < others.length; i++) {
            carType.push(others[i].value);
        }

        var others = document.forms['demoForm'].elements['capacity'];
        var capacity = [];
        for (var i = 0; i < others.length; i++) {
            capacity.push(others[i].value);
        }

        var others = document.forms['demoForm'].elements['luggageCapacity'];
        var luggageCapacity = [];
        for (var i = 0; i < others.length; i++) {
            luggageCapacity.push(others[i].value);
        }

        var others = document.forms['demoForm'].elements['carDoors'];
        var carDoors = [];
        for (var i = 0; i < others.length; i++) {
            carDoors.push(others[i].value);
        }

        CarAPI.filtercar(this.state.filter)
            .then((res) => {
                console.log(res);
                this.props.GetCars(res);
                this.props.history.push("/cars");
            });
    }

    render() {
        if(this.props.carList.carList)
        {
        var carUnitsList = [];
        var data = this.props.carList.carList;
        data.map(function (temp, index) {
            carUnitsList.push(
                <CarUnit carData={temp}/>
            );
        });
    }
    else{
            carUnitsList = <div>NO CARS AVAILABLE</div>;
}
        return (
            <div>
                <div style={searchBarStyle}>
                    <CarSearchNavBar/>
                </div>
                <div className="row">
                    <div className="row  background-gray">
                        <div className="col-md-3">
                            <form id="demoForm">
                                {/* FILTERS */}
                                <div>
                                    <div className="comp1 reset-margin-custom">
                                        1234 out of 1300 | RESET
                                    </div>
                                    <div className="background-color-white">
                                        {/* CAPACITY FILTER */}
                                        <div>
                                            <p className="filter-heading-style">Capacity</p>
                                            <p>Passengers</p>
                                            <p className="filter-content-style">
                                                <input type="checkbox" name="1-2" value="2"/><span
                                                className="filter-style">1 - 2 Passengers</span><br/>
                                                <input type="checkbox" name="1-2" value="5"/><span
                                                className="filter-style">3 - 5 Passengers</span><br/>
                                                <input type="checkbox" name="1-2" value="6"/><span
                                                className="filter-style">6 or more Passengers</span><br/>
                                            </p>
                                            <p>Bags</p>
                                            <p className="filter-content-style">
                                                <input type="checkbox" name="1-2" value="2"/><span
                                                className="filter-style">1 - 2 Bags</span><br/>
                                                <input type="checkbox" name="1-2" value="4"/><span
                                                className="filter-style">3 - 4 Bags</span><br/>
                                            </p>
                                            <p>Doors</p>
                                            <p className="filter-content-style">
                                                <input type="checkbox" name="carDoors" value={2}/><span
                                                className="filter-style">2 doors</span><br/>
                                                <input type="checkbox" name="carDoors" value={4}/><span
                                                className="filter-style">2-4 doors</span><br/>
                                            </p>
                                        </div>
                                        {/* CAR TYPE FILTER */}
                                        <div>
                                            <p className="filter-heading-style">Car Type</p>
                                            <p className="filter-content-style">
                                                <input type="checkbox" name="1-2" value="Medium"/>
                                                <span className="filter-style">Medium</span><br/>
                                                <input type="checkbox" name="1-2" value="Small"/>
                                                <span className="filter-style">Small</span><br/>
                                                <input type="checkbox" name="1-2" value="Large"/>
                                                <span className="filter-style">Large</span><br/>
                                                <input type="checkbox" name="1-2" value="SUV"/>
                                                <span className="filter-style">SUV</span><br/>
                                                <input type="checkbox" name="1-2" value="Van"/>
                                                <span className="filter-style">Van</span><br/>
                                                <input type="checkbox" name="1-2" value="Convertible"/>
                                                <span className="filter-style">Convertible</span><br/>
                                                <input type="checkbox" name="1-2" value="Luxury"/>
                                                <span className="filter-style">Luxury</span><br/>
                                                <input type="checkbox" name="1-2" value="Pickup Truck"/>
                                                <span className="filter-style">Pickup Truck</span><br/>
                                            </p>
                                        </div>
                                        {/* PAYMENT TYPE FILTER */}
                                        <div>
                                            <p className="filter-heading-style">Payment Type</p>
                                            <p className="filter-content-style">
                                                <input type="checkbox" name="1-2" value="1-2"/>
                                                <span className="filter-style">Pay now</span><br/>
                                                <input type="checkbox" name="1-2" value="1-2"/>
                                                <span className="filter-style">Pay at counter</span><br/>
                                            </p>
                                        </div>
                                        {/* PRICE FILTER */}
                                        <div>
                                            <p className="filter-heading-style">Price</p>
                                            <div className="filter-content-style">
                                                <div id="selectedPrice">{this.state.pricefilter}</div>


                                                <RangeSlider
                                                    min={10}
                                                    max={1000}
                                                    onChange={() => {
                                                        console.log('react-dual-rangeslider max: ', this.state.maxpricefilter);
                                                        console.log('react-dual-rangeslider min: ', this.state.minpricefilter);
                                                    }}
                                                    step={1}/>
                                            </div>
                                        </div>
                                        {/* CAR OPTIONS FILTER */}
                                        <div>
                                            <p className="filter-heading-style">Car Options</p>
                                            <p className="filter-content-style">
                                                <input type="checkbox" id="other" name="other" value="airportPickup"/>
                                                <span className="filter-style">Airport Pick-up</span><br/>
                                                <input type="checkbox" id="other" name="other" value="airConditioning"/>
                                                <span className="filter-style">AC</span><br/>
                                                <input type="checkbox" id="other" name="other" value="automatic"/>
                                                <span className="filter-style">Automatic Transmission</span><br/>
                                                <input type="checkbox" id="other" name="other" value="hybrid"/>
                                                <span className="filter-style">hybrid</span><br/>
                                            </p>
                                        </div>
                                        <button onClick={this.searchCarByFilter}>Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* LIST OF CAR UNITS */}
                        <div className="col-md-9 padding-none">
                            {carUnitsList}
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
        carList: state.cars
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({GetCars: GetCars}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarsList));
