import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BookCar} from '../actions/actionsAll';

class CarUnit extends Component {
    bookCarAction = () =>{
        this.props.BookCar(this.props.carData);
        this.props.history.push("/carForm");
    }
  render() {
    return (
        <div className="pad-top-10  margin-right-40">
            <div className="row backgroud-white">
                <div className="col-md-4 padding-none">

                    <img src="car.jpg"  className="hotel-logo"/>
                </div>
                <div className="col-md-6">
                    <div className="text-align-left">
                        <span className="font-size-19">{this.props.carData.carType}</span>
                    </div>
                    <div className="text-align-left">
                       <span>{this.props.carData.carName}</span>
                    </div>
                    <div className="text-align-left">
                        <div className="row pad-top-30">
                            <div className="col-md-4">
                                <span><img src="person.png"  className="car-person-capacity"/><span className="capacity-text">{this.props.carData.capacity}</span></span>
                            </div>
                            <div className="col-md-4">
                                <span><img src="bag.png"  className="car-person-capacity"/><span className="capacity-text">{this.props.carData.luggageCapacity}</span></span>
                            </div>
                            <div className="col-md-4">
                                <span><img src="door.png"  className="car-person-capacity"/><span className="capacity-text">{this.props.carData.carDoors}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div>

                        <div className="price-style">${this.props.carData.price / this.props.carData.days}</div>
                        <div className=" pad-top-30">
                            <button onClick={ () =>{this.bookCarAction()}} className="view-details-popup-button line-height-27">BOOK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
  }
}

function mapStateToProps(state) {
    return {
        carBook: state.cars
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({BookCar: BookCar}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarUnit));

