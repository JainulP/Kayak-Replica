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

class CarListInAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal : false,
            carsList: [],
            originalData :[],
            usernameDisplay:null,
            index:null,
            action: null,
            car:{
                "carId": null,
                "carName": null,
                "carType": null,
                "capacity": null,
                "luggageCapacity": null,
                "carDoors": null,
                "airportPickup": null,
                "airConditioning": null,
                "automatic": null,
                "hybrid": null,
                "price": null,
                "car_number": null,
                "image": null
            }
        }
    }
    getInitialState = () => {
        return { showModal: false ,
            shareWith : ''};
    };

    validateName(id,validationTxtId){
        var val = document.getElementById(id).value;
        if(val.length==0)
        {
            document.getElementById(validationTxtId).innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
        }
        else{
            var RegExpression = /^[a-zA-Z]*$/;
            if( RegExpression.test(val))
            {
                document.getElementById(validationTxtId).innerHTML="Valid Value";
                var x1 = document.getElementById(validationTxtId);
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById(validationTxtId).innerHTML="Value can accept only alphabets";
                var x1 = document.getElementById(validationTxtId);
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }


    validateNumber(id, validationTxtId){
        var val = document.getElementById("id").value;
        if(val.length==0)
        {
            document.getElementById("validationTxtId").innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
        }
        else{
            var RegExpression =new RegExp("^[0-9]{10}$");
            if( RegExpression.test(val))
            {
                document.getElementById("validationTxtId").innerHTML="Valid PhoneNumber";
                var x1 = document.getElementById("validationTxtId");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById("validationTxtId").innerHTML="Bumber must be of 10 digits";
                var x1 = document.getElementById("validationTxtId");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }

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
        a.car = temp;
        this.setState(a);
        console.log(this.state)
    }
    openModalShareAdd = () =>{
        var a = this.state;
        a.showModal = true;
        a.action = "add";
        var  car = {
            "carId": null,
            "carName": null,
            "carType": null,
            "capacity": null,
            "luggageCapacity": null,
            "carDoors": null,
            "airportPickup": null,
            "airConditioning": null,
            "automatic": null,
            "hybrid": null,
            "price": null,
            "car_number": null,
            "image": null
        }
        a.car = car;
        this.setState(a);
        console.log(this.state)
    }
    componentWillMount() {
        var self = this;
        var state_temp = this.state;
       AdminAPI.getCars()
            .then((res) => {
                console.log(res.cars);
                state_temp.carsList = res.cars;
                state_temp.originalData = res.cars;
                self.setState(state_temp);
            });
    }
    editUser = (data) =>{
        var data = this.state.car;
        var state_temp = this.state;
        var index = this.state.index;
        if(this.state.action === "add"){
         AdminAPI.addCar(this.state.car)
                .then((res) => {
                    console.log(res);
                    if(res.car){

                        state_temp.carsList.push(data);
                    }
                    else{
                        alert("failure")
                    }
                    this.close();


                });
        }
       else{
            AdminAPI.editCar(this.state.car)
                .then((res) => {
                    console.log(res);
                    if(res.car === "Updated car successfully"){
                       // data.caar = res.car;



                        state_temp.carsList[index] = data;
                    }
                    else{
                        alert("failure")
                    }
                    this.close();


                });
        }
    }
    filterUsersById = () =>{
        var useridtemp = this.state.userid;
        var state_temp = this.state;
        state_temp.firstname = '';
        state_temp.lastname = '';
        this.setState(state_temp);
        if(!useridtemp){
            var state_temp = this.state;
            state_temp.carsList = this.state.originalData;
            this.setState(state_temp);
            return;
        }

        var newArray = this.state.originalData.filter(function (el) {
            return el.car_number == useridtemp;
        });
        var state_temp = this.state;
        state_temp.carsList = newArray;
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
            state_temp.carsList = this.state.originalData;
            this.setState(state_temp);
            return;
        }

        var newArray = this.state.originalData.filter(function (el) {
            return el.carName == useridtemp;
        });
        var state_temp = this.state;
        state_temp.carsList = newArray;
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
            state_temp.carsList = this.state.originalData;
            this.setState(state_temp);
            return;
        }
        var newArray = this.state.originalData.filter(function (el) {
            return el.carType == useridtemp;
        });
        var state_temp = this.state;
        state_temp.carsList = newArray;
        this.setState(state_temp);
    }

    render() {
        var carsList = [];
        if(this.state.carsList != "No Users found" || this.state.carsList.length ===0)
        {
            var carsList = [];
            var data = this.state.carsList;
            data.map(function (temp, index) {
                    carsList.push(
                        <div className="pad-top-10  margin-right-40">
                            <div className="row backgroud-white">
                                <div className="col-md-4 text-align-left"><span>
                                <Ionicon icon="md-car"
                                         className="cursor-pointer padding-right-3 pad-top-acc" fontSize="20px"
                                         color="#000000"/>
                            </span>{temp.car_number || ''}</div>
                                <div className="col-md-4 text-align-left">{temp.carName || ''}</div>
                                <div className="col-md-4 text-align-left">{temp.carType || ''}

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
            carsList = <div className="no-results">NO USERS AVAILABLE</div>;
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
                                                    <p className="filter-heading-style">Car Number</p>
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
                                                    <p className="filter-heading-style">Car Name</p>
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
                                                    <p className="filter-heading-style">Car Type</p>
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
                                            Car Number
                                        </div>
                                        <div className="col-md-4 text-align-left bold">Car Name</div>
                                        <div className="col-md-4 text-align-left bold">Car Type
                                        </div>
                                    </div>
                                </div>
                                {carsList}
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
                                                <label className="col-lg-3 control-label">Car Name</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control"
                                                           type="text"
                                                           id="carName"
                                                           value={this.state.car.carName}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       carName: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                          /* onBlur={()=>this.validateName('carName','addValiadationcarname')}*/
                                                    />
                                                    <span id="addValiadationcarname"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Car Type</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           id="carType"
                                                           value={this.state.car.carType}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       carType: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                           /*onBlur={()=>this.validateName('carType','addValiadationcartype')}*/  />
                                                    <span id="addValiadationcartype"></span>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Capacity:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="number"
                                                           id = "capacity"
                                                           value={this.state.car.capacity}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       capacity: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                          /* onBlur={()=>this.validateNumber('capacity','addValiadationcapacity')}*/  />
                                                    <span id="addValiadationcapacity"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Luggage Capacity:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="number"
                                                           id ="luggageCapacity"
                                                           value={this.state.car.luggageCapacity}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       luggageCapacity: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                           /*onBlur={()=>this.validateNumber('capacity','addValiadationluggageCapacity')}*/
                                                    />
                                                    <span id="addValiadationluggageCapacity"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Car Doors:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="number"
                                                           value={this.state.car.carDoors}
                                                           id = "carDoors"
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       carDoors: event.target.value
                                                                   }
                                                               });

                                                           }}
                                                          /* onBlur={()=>this.validateNumber('capacity','addValiadationcardoors')}*/
                                                    />
                                                    <span id="addValiadationcardoors"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-3 control-label">Price:</label>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="number"
                                                           value={this.state.car.price}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       price: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                           id="price" /*onBlur={()=>this.validateNumber('price','addValiadationprice')}*/
                                                    />
                                                    <span id="addValiadationprice"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-3 control-label">Car Number:</label>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text"
                                                           id = "carnumber"
                                                           value={this.state.car.car_number}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       car_number: event.target.value
                                                                   }
                                                               });
                                                           }}

                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">City:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           value={this.state.car.city}
                                                           id = "city"
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       city: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                           /*onBlur={()=>this.validateName('city','addValiadationcity')}*/ />
                                                    <span id="addValiadationcity"></span>
                                                </div>
                                            </div>


                                            <div className="form-check">
                                                <label className="col-lg-8 form-check-label"> Airport Pickup</label>
                                                <div className="col-lg-16">
                                                    <input className="form-check-input" type="checkbox"
                                                           checked={this.state.car.airportPickup}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       airportPickup: event.target.checked
                                                                   }
                                                               });
                                                           }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-check">
                                                <label className="col-lg-8 form-check-label">Air Conditioning</label>
                                                <div className="col-lg-16">
                                                    <input className="form-check-input" type="checkbox"
                                                           checked={this.state.car.airConditioning}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       airConditioning: event.target.checked
                                                                   }
                                                               });
                                                           }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-check">
                                                <label className="col-lg-8 form-check-label">Automatic</label>
                                                <div className="col-lg-16">
                                                    <input className="form-check-input" type="checkbox"
                                                           checked={this.state.car.automatic}
                                                           onChange={(event) => {
                                                               this.setState({car: {
                                                                   ...this.state.car,
                                                                   automatic: event.target.checked
                                                               }
                                                               });
                                                           }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-check">
                                                <label className="col-lg-8 form-check-label">Hybrid</label>
                                                <div className="col-lg-16">
                                                    <input className="form-check-input" type="checkbox"
                                                           checked={this.state.car.hybrid}
                                                           onChange={(event) => {

                                                               this.setState({
                                                                   car: {
                                                                       ...this.state.car,
                                                                       hybrid: event.target.checked
                                                                   }
                                                               });
                                                           }}
                                                    />
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

export default withRouter(CarListInAdmin);
