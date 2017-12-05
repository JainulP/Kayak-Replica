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
var sortBtnStyle={
    marginBottom:"10px"
}
class CarsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carList: this.props.carList,
            filter: {
                carType: [],
                capacity: [],
                luggageCapacity: [],
                carDoors: [],
                other: [],
                min:10,
                max:1000
            }
        }
    }

    componentWillMount() {
        console.log(this.props.carList);

    }

    componentDidMount(){
        this.resetFilters();
    }
    resetFilters = () =>{
        var state_temp = this.state;
        localStorage.setItem("carPriceMin", 10);
        localStorage.setItem("carPriceMax", 1000);
        document.getElementById("carPriceMax").innerHTML = 1000;
        document.getElementById("carPriceMin").innerHTML = 0;
        var filterTemp  = {
            carType: [],
            capacity: [],
            luggageCapacity: [],
            carDoors: [],
            other: [],
            min:10,
            max:1000
        }
        state_temp.filter = filterTemp;
        this.setState(state_temp);

    }
    
     sortbyPriceHightoLow(){
      /*  var ascHotels= hotels.sort(function(a, b) {
    return a.Price < b.Price;
    })*/
                var ascHotels= this.state.carList.sort(function(a, b) {
    return a.Price < b.Price;
    })
         this.setState({
  carList: ascHotels
})

        }
sortbyPriceLowtoHigh(){
   /* var ascHotels= hotels.sort(function(a, b) {
    return a.Price > b.Price;
})*/
    var descHotels= this.state.carList.sort(function(a, b) {
    return a.Price > b.Price;
    })
         this.setState({
  carList: descHotels
})
    
    }

    
    searchCarByFilter = () => {

        //console.log(document.getElementById("other"));
        var state_temp = this.state;

        var others = document.forms['demoForm'].elements['other'];
        var other = [];
        var otherDeafult = [];
        for (var i = 0; i < others.length; i++) {
            if(others[i].checked)
            other.push(others[i].value);
            otherDeafult.push(others[i].value);
        }
        if(other.length == 0){
            other = otherDeafult;
        }
        state_temp.filter.other = other;
        var others = document.forms['demoForm'].elements['carType'];
        var carType = [];
        var carTypeDefault = [];
        for (var i = 0; i < others.length; i++) {
            if(others[i].checked)
            carType.push(others[i].value);
            carTypeDefault.push(others[i].value);
        }
        if(carType.length == 0){
            carType = carTypeDefault;
        }
        state_temp.filter.carType = carType;
        var others = document.forms['demoForm'].elements['capacity'];
        var capacity = [];
        var capacityDefault = [];
        for (var i = 0; i < others.length; i++) {
            if(others[i].checked)
            capacity.push(others[i].value);
            capacityDefault.push(others[i].value);
        }
        if(capacity.length == 0){
            capacity = capacityDefault;
        }
        state_temp.filter.capacity = capacity;
        var others = document.forms['demoForm'].elements['luggageCapacity'];
        var luggageCapacity = [];
        var luggageCapacityDefault = [];
        for (var i = 0; i < others.length; i++) {
            if(others[i].checked)
            luggageCapacity.push(others[i].value);
            luggageCapacityDefault.push(others[i].value);
        }
        if(luggageCapacity.length == 0){
            luggageCapacity = luggageCapacityDefault;
        }
        state_temp.filter.luggageCapacity = luggageCapacity;
        var others = document.forms['demoForm'].elements['carDoors'];
        var carDoors = [];
        var carDoorsDefault = [];
        for (var i = 0; i < others.length; i++) {
            if(others[i].checked)
            carDoors.push(others[i].value);
            carDoorsDefault.push(others[i].value);
            }
        if(carDoors.length == 0){
            carDoors = carDoorsDefault;
        }
        state_temp.filter.carDoors = carDoors;
        this.setState(state_temp);
        state_temp.filter.min =  localStorage.getItem("carPriceMin");
        state_temp.filter.max = localStorage.getItem("carPriceMax");
        var data={
            filter:this.state.filter,
            to_time: this.props.criteria.to_time,
            from_time: this.props.criteria.from_time,
            city: this.props.criteria.city,
            cityDes: this.props.criteria.multi_city,
            multi_city:  this.props.criteria.multi_city,
            s_date:  this.props.criteria.s_date,
            e_date:  this.props.criteria.e_date
        }
        CarAPI.filtercar(data)
            .then((res) => {
                console.log(res);
                this.props.GetCars(res.value);
                this.props.history.push("/cars");
            });
    }

    render() {
        if(this.props.carList[0] !== "No cars found")
        {
            var carUnitsList = [];
            var data = this.props.carList;
            data.map(function (temp, index) {
                carUnitsList.push(
                    <CarUnit carData={temp}/>
                );
            });
        }
        else{
            carUnitsList = <div className="no-results">NO CARS AVAILABLE</div>;
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
                                        <span onClick={this.searchCarByFilter}>FILTER | </span>
                                        <span onClick={this.resetFilters}>RESET</span>
                                    </div>
                                    <div className="background-color-white">
                                        {/* CAPACITY FILTER */}
                                        <div>
                                            <p className="filter-heading-style">Capacity</p>
                                            <p>Passengers</p>
                                            <p className="filter-content-style">
                                                <input type="checkbox" id="capacity" name="capacity" value="2"/><span
                                                className="filter-style">1 - 2 Passengers</span><br/>
                                                <input type="checkbox"  id="capacity" name="capacity"  value="5"/><span
                                                className="filter-style">3 - 5 Passengers</span><br/>
                                                <input type="checkbox"  id="capacity"name="capacity"  value="6"/><span
                                                className="filter-style">6 or more Passengers</span><br/>
                                            </p>
                                            <p>Bags</p>
                                            <p className="filter-content-style">
                                                <input type="checkbox" id="luggageCapacity" name="luggageCapacity" value="2"/><span
                                                className="filter-style">1 - 2 Bags</span><br/>
                                                <input type="checkbox"id="luggageCapacity" name="luggageCapacity" value="4"/><span
                                                className="filter-style">3 - 4 Bags</span><br/>
                                            </p>
                                            <p>Doors</p>
                                            <p className="filter-content-style">
                                                <input type="checkbox" id="carDoors" name="carDoors" value={2}/><span
                                                className="filter-style">2 doors</span><br/>
                                                <input type="checkbox" id="carDoors" name="carDoors" value={4}/><span
                                                className="filter-style">2-4 doors</span><br/>
                                            </p>
                                        </div>
                                        {/* CAR TYPE FILTER */}
                                        <div>
                                            <p className="filter-heading-style">Car Type</p>
                                            <p className="filter-content-style">
                                                <input type="checkbox" id="carType" name="carType" value="Medium"/>
                                                <span className="filter-style">Medium</span><br/>
                                                <input type="checkbox"id="carType" name="carType"  value="Small"/>
                                                <span className="filter-style">Small</span><br/>
                                                <input type="checkbox" id="carType" name="carType"  value="Large"/>
                                                <span className="filter-style">Large</span><br/>
                                                <input type="checkbox" id="carType" name="carType"  value="SUV"/>
                                                <span className="filter-style">SUV</span><br/>
                                                <input type="checkbox" id="carType" name="carType"  value="Van"/>
                                                <span className="filter-style">Van</span><br/>
                                                <input type="checkbox" id="carType" name="carType"  value="Convertible"/>
                                                <span className="filter-style">Convertible</span><br/>
                                                <input type="checkbox" id="carType" name="carType"  value="Luxury"/>
                                                <span className="filter-style">Luxury</span><br/>
                                                <input type="checkbox" id="carType" name="carType"  value="Pickup Truck"/>
                                                <span className="filter-style">Pickup Truck</span><br/>
                                            </p>
                                        </div>
                                        {/* PAYMENT TYPE FILTER */}
                                        <div>
                                            <p className="filter-heading-style">Payment Type</p>
                                            <p className="filter-content-style">
                                                <input type="checkbox" name="payment" id="payment" value="1-2"/>
                                                <span className="filter-style">Pay now</span><br/>
                                                <input type="checkbox" name="payment" id="payment" value="1-2"/>
                                                <span className="filter-style">Pay at counter</span><br/>
                                            </p>
                                        </div>
                                        {/* PRICE FILTER */}
                                        <div>
                                            <p className="filter-heading-style">Price</p>
                                            <div className="filter-content-style">
                                                <div id="selectedPrice">{this.state.pricefilter}</div>
                                                <span id="carPriceMax" className="pull-right override"></span>
                                                <span id="carPriceMin" className="pull-left override"></span>

                                                <RangeSlider
                                                    min={10}
                                                    max={1000}
                                                    minRange={10}
                                                    onChange={(state) => {
                                                        console.log('react-dual-rangeslider max: ', state.max);
                                                        console.log('react-dual-rangeslider min: ', state.min);
                                                        document.getElementById("carPriceMax").innerHTML = state.max;
                                                        document.getElementById("carPriceMin").innerHTML = state.min;
                                                        localStorage.setItem("carPriceMin", state.min);
                                                        localStorage.setItem("carPriceMax", state.max);
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
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* LIST OF CAR UNITS */}
                        <div className="col-md-9 padding-none">


                            <div className="row sortRowFlightBtnList">
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-primary"  onClick={()=>this.sortbyPriceLowtoHigh()}>Price(Low-High)</button>
                                </div>
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-primary"  onClick={()=>this.sortbyPriceHightoLow()}>Price(High-Low)</button>

                                </div>
                            </div>
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
        carList: state.cars.carList,
        criteria:state.cars.criteria
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({GetCars: GetCars}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarsList));
