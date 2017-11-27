import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetHotel} from '../actions/actionsAll';

class HotelForm extends Component {
    constructor(props){
        super(props);
     this.state = {
         cardnumber:"",
         cvv:"",
         expirydate:"",
         name:"",
         password:"",cardnumber: "",
         cvv: "",
         expirydate: "",
         name: "",
         street1 :"",
         street2 :"",
         postalCode:"",
         city:"",
         region:"",
         country:"",
         password: "",
         firstname:"",
         lastname:"",
         phoneNumber:"",
         email:"",
         saveflag:""
        }
    }
    componentWillMount() {
        console.log(this.props.hotelPageData)
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
            <h3>HOTEL BOOKING DETAILS</h3>
            <div>
               <span className="abc">HOTEL NAME: </span>
                <span>{this.props.hotelPageData.HotelName}</span>
               <br/>
               <span className="abc">CHECK IN DATE: </span>
               <br/>
               <span className="abc">CHECK OUT DATE: </span>
               <br/>
               <span className="abc">NUMBER OF ROOMS: </span>
               <br/>
               <span className="abc">ROOM TYPE: </span>
               <br/>
               <span className="abc">NUMBER OF GUESTS: </span>
               <br/>
               <span className="abc">BILL: </span>
               <br/>
               <br/>
               <br/>
            </div>
         </div>

          <h3>TRAVELLER INFORMATION</h3>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <span>STREET 1</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.street1}
                onChange={(event) => {
                    this.setState({
                        street1: event.target.value
                    });
                }}
            />
            </span>
                  </div>
                  <div className="form-group">
                      <span>STREET 1</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.street1}
                onChange={(event) => {
                    this.setState({
                        street1: event.target.value
                    });
                }}
            />
            </span>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <span>STREET 1</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.street1}
                onChange={(event) => {
                    this.setState({
                        street1: event.target.value
                    });
                }}
            />
            </span>
                  </div>
                  <div className="form-group">
                      <span>STREET 1</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.street1}
                onChange={(event) => {
                    this.setState({
                        street1: event.target.value
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
                      <span>STREET 1</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.street1}
                onChange={(event) => {
                    this.setState({
                        street1: event.target.value
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
                      <span>STREET 2</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.street2}

                onChange={(event) => {
                    this.setState({
                        street2: event.target.value
                    });
                }}
            />
            </span>
                  </div>
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
                          this.props.handleSubmit(this.state)}>
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
    return {
        hotelPageData: state.hotels.hotelPageData
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({SetHotel : SetHotel}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelForm));

