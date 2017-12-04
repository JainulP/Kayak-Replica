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
            car:null
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
        a.action = "edit";
        this.setState(a);
        console.log(this.state)
    }
    openModalShareAdd = () =>{
        var a = this.state;
        a.showModal = true;
        a.action = "add";
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
    editCar = (data) =>{

    }
    editUser = (data) =>{
        var data = this.state.user;
        var state_temp = this.state;
        var index = this.state.index;
        AdminAPI.editUserInfo(this.state.user)
            .then((res) => {
                console.log(res);
                if(res.value === "Success UserInfo Update"){
                    state_temp.usersList[index].FirstName = data.firstname;
                    state_temp.usersList[index].LastName= data.lastname;
                    state_temp.usersList[index].Address= data.address;
                    state_temp.usersList[index].City= data.city;
                    state_temp.usersList[index].State= data.state;
                    state_temp.usersList[index].Zipcode= data.zipCode;
                    state_temp.usersList[index].Phone= data.phone;
                    state_temp.usersList[index].Email= data.email;
                    state_temp.usersList[index].UserId= data.id;
                    state_temp.originalData[index].FirstName = data.firstname;
                    state_temp.originalData[index].LastName= data.lastname;
                    state_temp.originalData[index].Address= data.address;
                    state_temp.originalData[index].City= data.city;
                    state_temp.originalData[index].State= data.state;
                    state_temp.originalData[index].Zipcode= data.zipCode;
                    state_temp.originalData[index].Phone= data.phone;
                    state_temp.originalData[index].Email= data.email;
                    state_temp.originalData[index].UserId= data.id;
                    this.setState(state_temp);
                    this.close();
                }
                else{
                    alert("error. Please try again later!");
                    this.close();
                }

            });
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
                            edit form
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
