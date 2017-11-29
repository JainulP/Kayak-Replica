import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import * as FlightBookingAPI from '../api/FlightBookingAPI';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetFlight} from '../actions/actionsAll';
import {SetFlightBookingId} from '../actions/actionsAll';
import {SetComponent} from '../actions/actionsAll';

class FlightForm extends Component {
    constructor(props){
        super(props);
     this.state = {
         expirydate:"",
         name:"",
         cardnumber: "",
         cvv: "",
         street :"",
         postalCode:"",
         city:"",
         region:"",
         country:"",
         password: "",
         firstname:"",
         lastname:"",
         phoneNumber:"",
         email:"",
         saveflag:"",
         middlename:"",
         age:"",
         gender:""
        }
    }
    componentWillMount() {
        console.log(this.props)
    }

    bookHotelAction = () =>{
        var data={
            bookingData: this.state,
            flightData: this.props.flightData
        }
        var bookingid = FlightBookingAPI.submitBookingAction(data);
        this.props.SetFlightBookingId(bookingid);
        this.props.SetComponent("flight");
        this.props.history.push("/loader");
        //this.props.history.push("/flightconfirmation")
    }

    setView = (view) => {
    console.log("view clicked")
        var stateTemp =this.state;
        stateTemp.view = view;
        this.setState(stateTemp);
    }
  render() {
    return ( 
        <div className="container-fluid-hotel">
   <div className="row text-align-left">
      <form>
         <div className="form-group">
            <h3>FLIGHT BOOKING DETAILS</h3>
            <div>
               <span className="abc">AIRLINES: </span>
                <span>{this.props.flightData.flight.AirlinesName}</span>
               <br/>
               <span className="abc">DATE OF TRAVEL: </span>
                <span>{this.props.flightData.flight.FlightId}</span>
                <br/>
                <span className="abc">DURATION OF TRAVEL: </span>
                <span>{this.props.flightData.flight.duration}</span>
                <br/>
                <span className="abc">FLIGHT ID: </span>
                <span>{this.props.flightData.flight.FlightId}</span>
               <br/>
               <span className="abc">FARE OPTION: </span>
                <span>{this.props.flightData.flight.classSelected}</span>
               <br/>
               <span className="abc">SOURCE AIRPORT: </span>
                <span>{this.props.flightData.flight.SourceAirport}</span>
               <br/>
               <span className="abc">TAKE OFF TIME: </span>
                <span>{this.props.flightData.flight.TakeOffTime}</span>
               <br/>
               <span className="abc">DESTINATION AIRPORT: </span>
                <span>{this.props.flightData.flight.DestinationAirport}</span>
               <br/>
               <span className="abc">LANDING TIME: </span>
                <span>{this.props.flightData.flight.LandingTime}</span>
                <br/>
                <span className="abc">BILL: </span>
                <span>{this.props.flightData.flight.bill}</span>
               <br/>
               <br/>
               <br/>
            </div>
         </div>

          <h3>TRAVELLER INFORMATION</h3>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <span>FIRST NAME</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.firstname}
                onChange={(event) => {
                    this.setState({
                        firstname: event.target.value
                    });
                }}
            />
            </span>
                  </div>
                  <div className="form-group">
                      <span>MIDDLE NAME</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.middlename}
                onChange={(event) => {
                    this.setState({
                        middlename: event.target.value
                    });
                }}
            />
            </span>
                  </div>
                  <div className="form-group">
                      <span>AGE</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.age}
                onChange={(event) => {
                    this.setState({
                        age: event.target.value
                    });
                }}
            />
            </span>
                  </div>
                  <div className="form-group">
                      <span>PHONE NUMBER</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.phoneNumber}
                onChange={(event) => {
                    this.setState({
                        phoneNumber: event.target.value
                    });
                }}
            />
            </span>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <span>LAST NAME</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.lastname}
                onChange={(event) => {
                    this.setState({
                        lastname: event.target.value
                    });
                }}
            />
            </span>
                  </div>
                  <div className="form-group">
                      <span>GENDER</span><p></p>
                      <span>

            <input type="radio" name="gender" value="male" onChange={(event) => {
                this.setState({
                    gender: "male"
                });
            }}/> Male
  <input type="radio" name="gender" value="female" onChange={(event) => {
      this.setState({
          gender: "female"
      });
  }}/> Female
            </span>
                  </div>
                  <div className="form-group">
                      <span>EMAIL</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.email}
                onChange={(event) => {
                    this.setState({
                        email: event.target.value
                    });
                }}
            />
            </span>
                  </div>
              </div>
          </div>


          <h3>BILLING INFORMATION</h3>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <span>STREET</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.street}
                onChange={(event) => {
                    this.setState({
                        street: event.target.value
                    });
                }}
            />
            </span>
                  </div>
                  <div className="form-group">
                      <span>POSTAL CODE</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.postalCode}
                onChange={(event) => {
                    this.setState({
                        postalCode: event.target.value
                    });
                }}
            />
            </span>
                  </div>
                  <div className="form-group">
                      <span>STATE / REGION</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.region}
                onChange={(event) => {
                    this.setState({
                        region: event.target.value
                    });
                }}
            />
            </span>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <span>CITY</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.city}
                onChange={(event) => {
                    this.setState({
                        city: event.target.value
                    });
                }}
            />
            </span>
                  </div>
                  <div className="form-group">
                      <span>COUNTRY</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.country}
                onChange={(event) => {
                    this.setState({
                        country: event.target.value
                    });
                }}
            />
            </span>
                  </div>
              </div>
          </div>
          <h3>PAYMENT INFORMATION</h3>
          <div className="row">
              <div className="col-md-12">
                  <span>ACCEPTED CARDS</span>
                  <img src="card.png" className="pad-left card-img"/>
              </div>
          </div>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <span>NAME ON CARD</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.name}
                onChange={(event) => {
                    this.setState({
                        name: event.target.value
                    });
                }}
            />
            </span>
                  </div>
                  <div className="form-group">
                      <span>CARD NUMBER</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="CARD NUMBER"
                placeholder="CARD NUMBER"
                value={this.state.cardnumber}
                onChange={(event) => {
                    this.setState({
                        cardnumber: event.target.value
                    });
                }}
            />
            </span>
                  </div>
              </div>
              <div className="col-md-6">

                  <div className="form-group">
                      <span>EXPIRY DATE</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="EXPIRY DATE"
                placeholder="EXPIRY DATE"
                value={this.state.expirydate}
                onChange={(event) => {
                    this.setState({
                        expirydate: event.target.value
                    });
                }}
            />
            </span>
                  </div>
                  <div className="form-group">
                      <span>SECURITY CODE</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="CVV"
                placeholder="CVV"
                value={this.state.cvv}
                onChange={(event) => {
                    this.setState({
                        cvv: event.target.value
                    });
                }}
            />
            </span>
                  </div>
              </div>
              <div className="form-group">
                  <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() =>
                          this.bookHotelAction()}>
                      <Ionicon icon="md-lock"
                               className="padding-right-3" fontSize="25px" color="#FFFFFF"/>
                      PROCEED TO PAY
                  </button>
              </div>
          </div>
      </form>
   </div>
</div>
    );
  }
}


function mapStateToProps(state){
    console.log(state)
    return {
        flightData: state.flights.flightData
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({SetFlight : SetFlight,SetFlightBookingId:SetFlightBookingId,SetComponent:SetComponent}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlightForm));

