import {Route, withRouter, BrowserRouter} from 'react-router-dom';
import '../App.css';
import React, {Component} from 'react';
import Footer from './Footer';
import * as AdminAPI from '../api/AdminAPI';
import Ionicon from 'react-ionicons';
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
var divStyle = {
    width: "200px"

};

class FlightsListInAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal : false,
            flightsList: [],
            originalData :[],
            usernameDisplay:null,
            index:null,
            action: null,
            car:{
                "FlightID": null,
                "AirlinesName": null,
                "SourceAirport": null,
                "DestinationAirport": null,
                "FirstClassFares": null,
                "BusinessClassFares": null,
                "EconomyClassFares": null,
                "TakeOffTime": null,
                "LandingTime": null,
                "Description": null,
                "Plane": null,
                "FirstClassSeats": null,
                "BusinessClassSeats": null,
                "EconomyClassSeats": null,
                "duration": null,
                "durationminutes": null,
                "action" : null
            }
        }
    }
    getInitialState = () => {
        return { showModal: false ,
            shareWith : ''};
    };

    close = () => {
        var a = this.state;
        a.showModal = false;
        this.setState(a);
    };

    openModalShare = (temp,index) => {
        var state_temp = this.state;
        state_temp.usernameDisplay =  temp.carName;
        state_temp.index = index;
        this.setState(state_temp);
        var a = this.state;
        a.showModal = true;
        a.car = temp;
        a.car.FlightID = a.car.FlightId;
        a.action = "edit";
        this.setState(a);
        console.log(this.state)
    }
    openModalShareAdd = () =>{
        var a = this.state;
        a.showModal = true;
        a.action = "add";
        a.car = {
            "FlightID": null,
            "AirlinesName": null,
            "SourceAirport": null,
            "DestinationAirport": null,
            "FirstClassFares": null,
            "BusinessClassFares": null,
            "EconomyClassFares": null,
            "TakeOffTime": null,
            "LandingTime": null,
            "Description": null,
            "Plane": null,
            "FirstClassSeats": null,
            "BusinessClassSeats": null,
            "EconomyClassSeats": null,
            "duration": null,
            "durationminutes": null,
            "action" : null
        }
        this.setState(a);
        console.log(this.state)
    }
    componentWillMount() {
        var self = this;
        var state_temp = this.state;
        AdminAPI.getFlights()
            .then((res) => {
                console.log(res.flights);
                state_temp.flightsList = res.flights;
                state_temp.originalData = res.flights;
                self.setState(state_temp);
            });
    }

    editUser = (data) =>{
        var data = this.state.car;
        var state_temp = this.state;
        var index = this.state.index;
        if(this.state.action === "add"){
            var flight = this.state.car;
           // flight.action="add";
            flight.operation="insert";
           // flight.FlightID = flight.FlightId;
            AdminAPI.addFlight(flight)
                .then((res) => {
                    console.log(res);
                    if(res.message){

                        state_temp.flightsList.push(flight);
                    }
                    else{
                        alert("failure")
                    }
                    this.close();


                });
        }
        else{
            var flight = this.state.car;
           // flight.action="edit";
            flight.operation="update";
            flight.FlightID = flight.FlightId;
            AdminAPI.editFlight(flight)
                .then((res) => {
                    console.log(res);
                    if(res.message){
                        state_temp.flightsList[index] = flight;
                    }
                    else{
                        alert("failure")
                    }
                    this.close();


                });
        }

        /*var data = this.state.user;
        var state_temp = this.state;
        var index = this.state.index;
        AdminAPI.editUserInfo(this.state.user)
            .then((res) => {
                console.log(res);
                if(res.value === "Success UserInfo Update"){

                    this.setState(state_temp);
                    this.close();
                }
                else{
                    alert("error. Please try again later!");
                    this.close();
                }

            });*/
    }
    filterUsersById = () =>{
        var useridtemp = this.state.userid;
        var state_temp = this.state;
        state_temp.firstname = '';
        state_temp.lastname = '';
        this.setState(state_temp);
        if(!useridtemp){
            var state_temp = this.state;
            state_temp.flightsList = this.state.originalData;
            this.setState(state_temp);
            return;
        }

        var newArray = this.state.originalData.filter(function (el) {
            return el.FlightId == useridtemp;
        });
        var state_temp = this.state;
        state_temp.flightsList = newArray;
        this.setState(state_temp);
    }
    filterUsersByFirstName = () =>{
        var useridtemp = this.state.firstname;
        var state_temp = this.state;
        state_temp.userid = '';
        state_temp.lastname = '';
        this.setState(state_temp);
        if(!useridtemp){
            var state_temp = this.state;
            state_temp.flightsList = this.state.originalData;
            this.setState(state_temp);
            return;
        }

        var newArray = this.state.originalData.filter(function (el) {
            return el.AirlinesName == useridtemp;
        });
        var state_temp = this.state;
        state_temp.flightsList = newArray;
        this.setState(state_temp);


    }
    filterUsersByEmail = () =>{
        var useridtemp = this.state.lastname;

        var state_temp = this.state;
        state_temp.userid = '';
        state_temp.firstname = '';
        this.setState(state_temp);
        if(!useridtemp){
            var state_temp = this.state;
            state_temp.flightsList = this.state.originalData;
            this.setState(state_temp);
            return;
        }
        var newArray = this.state.originalData.filter(function (el) {
            return el.Plane == useridtemp;
        });
        var state_temp = this.state;
        state_temp.flightsList = newArray;
        this.setState(state_temp);
    }

    render() {
        var flightsList = [];
        if(this.state.flightsList != "No Users found" || this.state.flightsList.length ===0)
        {
            var flightsList = [];
            var data = this.state.flightsList;
            data.map(function (temp, index) {
                flightsList.push(
                    <div className="pad-top-10  margin-right-40">
                        <div className="row backgroud-white">
                            <div className="col-md-4 text-align-left"><span>
                                <Ionicon icon="md-plane"
                                         className="cursor-pointer padding-right-3 pad-top-acc" fontSize="20px"
                                         color="#000000"/>
                            </span>{temp.FlightId || ''}</div>
                            <div className="col-md-4 text-align-left">{temp.AirlinesName || ''}</div>
                            <div className="col-md-4 text-align-left">{temp.Plane || ''}

                                <Ionicon icon="md-brush" onClick={() => this.openModalShare(temp, index)}
                                         className="cursor-pointer padding-right-3 pad-top-acc pull-right padding-right-3"
                                         fontSize="20px" color="#000000"/>

                            </div>
                        </div>
                    </div>
                );
            }.bind(this));
        }
        else{
            flightsList = <div className="no-results">NO FLIGHTS AVAILABLE</div>;
        }
        return (
            <div>
                <div className="row">
                    <div className="row  background-gray">
                        <div className="row">
                            <div className="col-md-12">
                                <form id="demoForm">
                                    {/* FILTERS */}
                                    <div>
                                        <div className="background-color-white">
                                            {/* USER ID FILTER */}
                                            <div className="col-md-4">
                                                <div>
                                                    <p className="filter-heading-style">Flight Id</p>
                                                    <p className="filter-content-style">
                                                        <input   type="text" id="hotelname" value={this.state.userid}
                                                                 onBlur={()=>this.filterUsersById()}
                                                                 onChange={(event) => {
                                                                     this.setState({
                                                                         ...this.state,
                                                                         userid: event.target.value

                                                                     });

                                                                 }}/>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* First NAME FILTER */}
                                            <div className="col-md-4">
                                                <div>
                                                    <p className="filter-heading-style">Airlines</p>
                                                    <p className="filter-content-style">
                                                        <input type="text" id="hotelname" value={this.state.firstname}
                                                               onBlur={()=>this.filterUsersByFirstName()}
                                                               onChange={(event) => {
                                                                   this.setState({
                                                                       ...this.state,
                                                                       firstname: event.target.value

                                                                   });
                                                               }}/>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* LAST NAME FILTER */}
                                            <div className="col-md-4">
                                                <div>
                                                    <p className="filter-heading-style">Plane Type</p>
                                                    <p className="filter-content-style">
                                                        <input type="text" id="hotelname" value={this.state.lastname}
                                                               onBlur={()=>this.filterUsersByEmail()}
                                                               onChange={(event) => {
                                                                   this.setState({
                                                                       ...this.state,
                                                                       lastname: event.target.value

                                                                   });
                                                               }}/>
                                                        
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* LIST OF USERS */}
                        <div className="row">
                            <div className="col-md-12 padding-none">
                                <div className="pad-top-10  margin-right-40">
                                    <div className="row backgroud-white">
                                        <div className="col-md-4 text-align-left bold">
                                            <Ionicon icon="md-add"
                                                     onClick={() => this.openModalShareAdd()}
                                                     className="cursor-pointer padding-right-3 pad-top-acc" fontSize="20px"
                                                     color="#000000"/>
                                            Fight Id
                                        </div>
                                        <div className="col-md-4 text-align-left bold">Airlines</div>
                                        <div className="col-md-4 text-align-left bold">Plane Type
                                        </div>
                                    </div>
                                </div>
                                {flightsList}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER */}
                    <Footer/>
                </div>

                <div className="react-modal-custom">
                    <Modal className ="react-modal-custom" show={this.state.showModal} onHide={this.close}>
                        <Modal.Header>
                            <Modal.Title className="modal-head-style">{this.state.usernameDisplay}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>






                            <div className="container">
                                <form className="form-horizontal" role="form">

                                    <div className="row">


                                        <div className="col-md-6 personal-info">

                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Flight Id</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control"
                                                           type="text"
                                                           id="carName"
                                                           value={this.state.car.FlightID}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       FlightID: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /* onBlur={()=>this.validateName('carName','addValiadationcarname')}*/
                                                    />
                                                    <span id="addValiadationcarname"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Airlines Name</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           id="carType"
                                                           value={this.state.car.AirlinesName}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       AirlinesName: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /*onBlur={()=>this.validateName('carType','addValiadationcartype')}*/  />
                                                    <span id="addValiadationcartype"></span>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Source Airport:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           id = "capacity"
                                                           value={this.state.car.SourceAirport}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       SourceAirport: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /* onBlur={()=>this.validateNumber('capacity','addValiadationcapacity')}*/  />
                                                    <span id="addValiadationcapacity"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Destination Airport:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           id ="luggageCapacity"
                                                           value={this.state.car.DestinationAirport}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       DestinationAirport: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /*onBlur={()=>this.validateNumber('capacity','addValiadationluggageCapacity')}*/
                                                    />
                                                    <span id="addValiadationluggageCapacity"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">First Class Fares:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="number"
                                                           value={this.state.car.FirstClassFares}
                                                           id = "carDoors"
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       FirstClassFares: event.target.value
                                                                   }
                                                               });

                                                           }}
                                                        /* onBlur={()=>this.validateNumber('capacity','addValiadationcardoors')}*/
                                                    />

                                                    <span id="addValiadationcardoors"></span>
                                                </div>
                                            </div>



                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Business Class Fares:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="number"
                                                           value={this.state.car.BusinessClassFares}
                                                           id = "carDoors"
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       BusinessClassFares: event.target.value
                                                                   }
                                                               });

                                                           }}
                                                        /* onBlur={()=>this.validateNumber('capacity','addValiadationcardoors')}*/
                                                    />

                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Economy Class Fares</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="number"
                                                           value={this.state.car.EconomyClassFares}
                                                           id = "carDoors"
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       EconomyClassFares: event.target.value
                                                                   }
                                                               });

                                                           }}
                                                        /* onBlur={()=>this.validateNumber('capacity','addValiadationcardoors')}*/
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-md-3 control-label">Take Off Time:</label>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text"
                                                           value={this.state.car.TakeOffTime}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       TakeOffTime: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                           id="price" /*onBlur={()=>this.validateNumber('price','addValiadationprice')}*/
                                                    />
                                                    <span id="addValiadationprice"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-3 control-label">Landing Time:</label>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text"
                                                           id = "carnumber"
                                                           value={this.state.car.LandingTime}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       LandingTime: event.target.value
                                                                   }
                                                               });
                                                           }}

                                                    />
                                                </div>
                                            </div>



                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Description:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           value={this.state.car.Description}
                                                           id = "city"
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       Description: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /*onBlur={()=>this.validateName('city','addValiadationcity')}*/ />
                                                    <span id="addValiadationcity"></span>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Plane:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           value={this.state.car.Plane}
                                                           id = "city"
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       Plane: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /*onBlur={()=>this.validateName('city','addValiadationcity')}*/ />
                                                    <span id="addValiadationcity"></span>
                                                </div>
                                            </div>





                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">First Class Seats:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           value={this.state.car.FirstClassSeats}
                                                           id = "city"
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       FirstClassSeats: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /*onBlur={()=>this.validateName('city','addValiadationcity')}*/ />
                                                    <span id="addValiadationcity"></span>
                                                </div>
                                            </div>





                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Business Class Seats:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           value={this.state.car.BusinessClassSeats}
                                                           id = "city"
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       BusinessClassSeats: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /*onBlur={()=>this.validateName('city','addValiadationcity')}*/ />
                                                    <span id="addValiadationcity"></span>
                                                </div>
                                            </div>



                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Economy Class Seats:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           value={this.state.car.EconomyClassSeats}
                                                           id = "city"
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       EconomyClassSeats: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /*onBlur={()=>this.validateName('city','addValiadationcity')}*/ />
                                                    <span id="addValiadationcity"></span>
                                                </div>
                                            </div>



                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">duration minutes:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           value={this.state.car.durationminutes}
                                                           id = "city"
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       durationminutes: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /*onBlur={()=>this.validateName('city','addValiadationcity')}*/ />
                                                    <span id="addValiadationcity"></span>
                                                </div>
                                            </div>





                                            <div className="form-group">
                                                <label className="col-md-3 control-label"></label>
                                                <div className="col-md-8">
                                                    <input type="button"
                                                           className="btn btn-primary pad-left"
                                                           id="saveUsrInfo"
                                                           value="Save Changes"
                                                           onClick={this.editUser}
                                                    />
                                                    <input type="button"
                                                           className="btn btn-primary margin-top-10"
                                                           id="saveUsrInfo"
                                                           value="Close"
                                                           onClick={this.close}
                                                    />
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>











                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        );
    }
}
export default withRouter(FlightsListInAdmin);
