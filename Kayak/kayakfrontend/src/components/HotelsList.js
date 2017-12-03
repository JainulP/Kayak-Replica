import {Route, withRouter, BrowserRouter} from 'react-router-dom';
import '../App.css';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import HotelUnit from './HotelUnit';
import Footer from './Footer';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as HotelAPI from '../api/HotelAPI';
import {GetHotels} from '../actions/actionsAll';
import RangeSlider from 'react-dual-rangeslider';
import HotelSearchNavBar from './HotelSearchNavBar';

var searchBarStyle = {
    maxHeight: "84px",
    height: "100%"

};
var sortBtnStyle={
    marginBottom:"10px"
}

class HotelsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelsList: this.props.hotelsList,
            flag: false,
            pricefilter: 50,
            hotelnamefilter: "",
            filter: {
                location:this.props.bookhotel.location,
                checkindate:this.props.bookhotel.checkindate,
                checkoutdate: this.props.bookhotel.checkoutdate,
                noGuests : this.props.bookhotel.noGuests,
                noRooms : this.props.bookhotel.noRooms,
                stars: 0,
                reviewScore: 0,
                maxPrice: 0,
                minPrice: 0,
                hotelName: null
            }
        }
    }
    componentDidMount(){
            this.resetFilters();
            document.getElementById("max").innerHTML = 1000;
            document.getElementById("min").innerHTML = 10;
        }
    componentWillMount() {
        console.log(this.props.hotelsList)

    }

    setFlag = () => {
        console.log("clicked")
        var stateTemp = this.state;
        stateTemp.flag = !stateTemp.flag;
        this.setState(stateTemp);
    }
    adjustPrice = () => {

    }
    searchHotelByFilter = () => {
       var min =  localStorage.getItem("min");
        var max =  localStorage.getItem("max");
        var temp = this.state.filter;
        temp.minPrice = min;
        temp.maxPrice = max;
            temp.location = this.props.bookhotel.location;
            temp.checkindate = this.props.bookhotel.checkindate;
            temp.checkoutdate = this.props.bookhotel.checkoutdate;
            temp.noGuests = this.props.bookhotel.noGuests;
            temp.noRooms  = this.props.bookhotel.noRooms;
        HotelAPI.filterHotels(temp)
            .then((res) => {
                console.log(res);
                this.props.GetHotels(res.hotels);
                this.props.history.push("/hotels");
            });
    }
    resetFilters = () =>{
        localStorage.setItem("min" ,0);
        localStorage.setItem("max" ,0);
        document.getElementById("max").innerHTML = 1000;
        document.getElementById("min").innerHTML = 10;
        var state_temp = this.state;
        var filterTemp  = {
            location:this.props.bookhotel.location,
            checkindate:this.props.bookhotel.checkindate,
            checkoutdate: this.props.bookhotel.checkoutdate,
            noGuests : this.props.bookhotel.noGuests,
            noRooms : this.props.bookhotel.noRooms,
            stars: 0,
            reviewScore: 0,
            maxPrice: 1000,
            minPrice: 10,
            hotelName: null
        }
        state_temp.filter = filterTemp;
        this.setState(state_temp);

    }
    sortbyPriceHightoLow(){
      /*  var ascHotels= hotels.sort(function(a, b) {
    return a.Price < b.Price;
    })*/
                var ascHotels= this.state.hotelsList.sort(function(a, b) {
    return a.Price < b.Price;
    })
         this.setState({
  hotelsList: ascHotels
})

        }
sortbyPriceLowtoHigh(){
   /* var ascHotels= hotels.sort(function(a, b) {
    return a.Price > b.Price;
})*/
    var descHotels= this.state.hotelsList.sort(function(a, b) {
    return a.Price > b.Price;
    })
         this.setState({
  hotelsList: descHotels
})
    
    }
 sortbyReviewHightoLow(){
      /*  var ascHotels= hotels.sort(function(a, b) {
    return a.Price < b.Price;
    })*/
      var ascHotels= this.state.hotelsList.sort(function(a, b) {
    return a.ReviewScore < b.ReviewScore;
    })
         this.setState({
  hotelsList: ascHotels
})
        }
sortbyReviewLowtoHigh(){
   /* var ascHotels= hotels.sort(function(a, b) {
    return a.Price > b.Price;
})*/
         var descHotels= this.state.hotelsList.sort(function(a, b) {
    return a.ReviewScore > b.ReviewScore;
    })
         this.setState({
  hotelsList: descHotels
})

    }
  /*  sortbyName(){
        if(document.getElementById("SORTbtn").innerText== "SORT ASC")
        document.getElementById("SORTbtn").innerText= "SORT DESC";
        
       else
        document.getElementById("SORTbtn").innerText= "SORT ASC";
    }*/
    render() {

        if(this.props.hotelsList){
            var hotelUnitsList = [];
            var data = this.props.hotelsList;
            data.map(function (temp, index) {
                hotelUnitsList.push(
                    <HotelUnit hotelData={temp}/>
                );
            });
        }
        else{
            hotelUnitsList = <div className="no-results">NO HOTELS AVAILABLE</div>;
        }
        return (
            <div>
                <div style={searchBarStyle}>
                    <HotelSearchNavBar/>
                </div>
                <div className="row">
                    <div className="row  background-gray">
                        <div className="col-md-3">
                            <div>
                                <div className="comp1 reset-margin-custom">
                                    <span onClick={this.searchHotelByFilter}>FILTER | </span>
                                    <span onClick={this.resetFilters}>RESET</span>
                                </div>
                                <div className="background-color-white">
                                    <div>
                                        <p className="filter-heading-style">Stars</p>
                                        <p className="filter-content-style">
                                            <select className="filter-style" onChange={(event) => {
                                                this.setState({
                                                    filter: {
                                                        ...this.state.filter,
                                                        stars: event.target.value
                                                    }
                                                });
                                            }}>
                                                <option value="0" className="filter-style">Any Star</option>
                                                <option value="1" className="filter-style">1 star and up</option>
                                                <option value="2" className="filter-style">2 star and up</option>
                                                <option value="3" className="filter-style">3 star and up</option>
                                                <option value="4" className="filter-style">4 star and up</option>
                                                <option value="5" className="filter-style">5 star and up</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="filter-heading-style">Reviews</p>
                                        <p className="filter-content-style">
                                            <select className="filter-style" onChange={(event) => {
                                                this.setState({
                                                    filter: {
                                                        ...this.state.filter,
                                                        reviewScore: event.target.value
                                                    }
                                                });
                                            }}>
                                                <option value="0" className="filter-style">Any Reviews</option>
                                                <option value="2" className="filter-style">2 points and up</option>
                                                <option value="4" className="filter-style">4 points and up</option>
                                                <option value="6" className="filter-style">6 points and up</option>
                                                <option value="8" className="filter-style">8 points and up</option>
                                                <option value="10" className="filter-style">10 points and up</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="filter-heading-style">Price</p>
                                        <div className="filter-content-style">
                                            <span id="min" className="pull-left override"></span>
                                            <span id="max" className="pull-right override"></span>
                                            <RangeSlider
                                                min={0}
                                                max={1000}
                                                minRange={10}
                                                onChange={(state)=>{
                                                    console.log('react-dual-rangeslider max: ', state.max);
                                                    console.log('react-dual-rangeslider min: ', state.min);
                                                    document.getElementById("max").innerHTML = state.max;
                                                    document.getElementById("min").innerHTML = state.min;
                                                    localStorage.setItem("min",state.min);
                                                    localStorage.setItem("max", state.max);
                                                }}
                                                step={1}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="filter-heading-style">Hotel Name</p>
                                        <div className="filter-content-style">
                                            <input type="text" id="hotelname" value={this.state.filter.hotelName}
                                                   onChange={(event) => {
                                                       this.setState({
                                                           filter: {
                                                               ...this.state.filter,
                                                               hotelName: event.target.value
                                                           }
                                                       });
                                                   }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 padding-none">


                            <div className="row sortRowFlightBtnList">
                                <div className="col-sm-3">


                                    <button type="button" className="btn btn-default sortButtons" style={sortBtnStyle}  onClick={()=>this.sortbyPriceLowtoHigh()}>Price(Low-High)</button>
                                </div>
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-default sortButtons" style={sortBtnStyle} onClick={()=>this.sortbyPriceHightoLow()}>Price(High-Low)</button>
                                </div>
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-default sortButtons" style={sortBtnStyle} onClick={()=>this.sortbyReviewLowtoHigh()}>Review Score(Low-High)</button>
                                </div>
                                <div className="col-sm-3">
                                    <button type="button" className="btn btn-default padding sortButtons" style={sortBtnStyle} onClick={()=>this.sortbyReviewHightoLow()}>Review Score(High-Low)</button>
                                </div>
                            </div>


                            {hotelUnitsList}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        hotelsList: state.hotels.hotelsList,
        bookhotel : state.hotels.bookhotel
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({GetHotels: GetHotels}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelsList));
