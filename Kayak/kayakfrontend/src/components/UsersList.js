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

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal : false,
            usersList: [],
            originalData :[],
            firstname:"",
            lastname:"",
            userid:"",
            usernameDisplay : null,
            useridDisplay:null,
            index : null,
            user:{
                firstname: "",
                lastname: "",
                address: "",
                city: "",
                state: "",
                zipcode: "",
                phone: "",
                email: "",
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
        state_temp.usernameDisplay =  temp.Email;
        state_temp.useridDisplay = temp.UserId;
        state_temp.index = index;
        var xyz= {
            firstname: temp.FirstName,
            lastname: temp.LastName,
            address: temp.Address,
            city: temp.City,
            state: temp.State,
            zipcode: temp.ZipCode,
            phone: temp.Phone,
            email: temp.Email,
            image : temp.ProfileImage,
            id: temp.UserId,
            imageprofile : temp.ProfileImage,
            deleteflag : temp.IsDeleted
        };
        state_temp.user = xyz;
        this.setState(state_temp);
        var a = this.state;
        a.showModal = true;
        this.setState(a);
        console.log(this.state)
    }
    componentWillMount() {
        var self = this;
        var state_temp = this.state;
        AdminAPI.getAllUsers()
            .then((res) => {
                console.log(res.users);
                state_temp.usersList = res.users;
                state_temp.originalData = res.users;
                self.setState(state_temp);

            });
    }
    deleteUser=(data, index)=>{
        // var data = this.state.user;
        var state_temp = this.state;
        var xyz= {
            firstname: data.FirstName,
            lastname: data.LastName,
            address: data.Address,
            city: data.City,
            state: data.State,
            zipcode: data.ZipCode,
            phone: data.Phone,
            email: data.Email,
            image : data.ProfileImage,
            id: data.UserId,
            imageprofile : data.ProfileImage,
            deleteflag : 1
        };

        AdminAPI.editUserInfo(xyz)
            .then((res) => {
                console.log(res);
                var state_temp;
                state_temp.usersList[index].IsDeleted = 1;
                state_temp.originalData[index].IsDeleted = 1;
                this.setState(state_temp);
            });
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
            state_temp.usersList = this.state.originalData;
            this.setState(state_temp);
            return;
        }
        if(useridtemp){
            useridtemp = parseInt(useridtemp);
        }
        var newArray = this.state.originalData.filter(function (el) {
            return el.UserId == useridtemp;
        });
        var state_temp = this.state;
        state_temp.usersList = newArray;
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
            state_temp.usersList = this.state.originalData;
            this.setState(state_temp);
            return;
        }

        var newArray = this.state.originalData.filter(function (el) {
            return el.FirstName == useridtemp;
        });
        var state_temp = this.state;
        state_temp.usersList = newArray;
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
            state_temp.usersList = this.state.originalData;
            this.setState(state_temp);
            return;
        }
        var newArray = this.state.originalData.filter(function (el) {
            return el.Email == useridtemp;
        });
        var state_temp = this.state;
        state_temp.usersList = newArray;
        this.setState(state_temp);
    }

    render() {
        var usersList = [];
        if(this.state.usersList != "No Users found" || this.state.usersList.length ===0)
        {
            var usersList = [];
            var data = this.state.usersList;
            data.map(function (temp, index) {
                if(temp.IsDeleted === 0){
                    usersList.push(
                        <div className="pad-top-10  margin-right-40">
                            <div className="row backgroud-white">
                                <div className="col-md-4 text-align-left"><span>
                                <Ionicon icon="md-person"
                                         className="cursor-pointer padding-right-3 pad-top-acc" fontSize="20px"
                                         color="#000000"/>
                            </span>{temp.UserId}</div>
                                <div className="col-md-4 text-align-left">{temp.Email}</div>
                                <div className="col-md-4 text-align-left">{temp.FirstName || ''}
                                    <Ionicon icon="md-trash" onClick={() => this.deleteUser(temp, index)}
                                             className="cursor-pointer padding-right-3 pad-top-acc pull-right"
                                             fontSize="20px" color="#000000"/>
                                    <Ionicon icon="md-brush" onClick={() => this.openModalShare(temp, index)}
                                             className="cursor-pointer padding-right-3 pad-top-acc pull-right padding-right-3"
                                             fontSize="20px" color="#000000"/>

                                </div>
                            </div>
                        </div>
                    );
                }
            }.bind(this));
        }
        else{
            usersList = <div className="no-results">NO USERS AVAILABLE</div>;
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
                                                    <p className="filter-heading-style">User Id</p>
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
                                                    <p className="filter-heading-style">First Name</p>
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
                                                    <p className="filter-heading-style">Email</p>
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
                                            User Id
                                        </div>
                                        <div className="col-md-4 text-align-left bold">Email</div>
                                        <div className="col-md-4 text-align-left bold">First Name
                                        </div>
                                    </div>
                                </div>
                                {usersList}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER */}
                    <Footer/>
                </div>

                <div className="react-modal-custom">
                    <Modal className ="react-modal-custom" show={this.state.showModal} onHide={this.close}>
                        <Modal.Header>
                            <Modal.Title className="modal-head-style">{this.state.useridDisplay} | {this.state.usernameDisplay}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form className="form-horizontal" role="form">

                                <div className="row">

                                    {/* <div className="col-md-3">
                                        <div className="text-center">
                                            <img src="car.jpg" className="avatar img-circle" style={divStyle} alt="avatar"/>
                                            <h6>Upload a different photo...</h6>
                                            <input type="file"    className="form-control"
                                                   id="file-input"  name="mypic" onChange={this.addImage}/>
                                        </div>
                                    </div>*/}
                                    <div className="col-md-6 personal-info">
                                        <div className="form-group">
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Email:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           value={this.state.user.email}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   user: {
                                                                       ...this.state.user,
                                                                       email: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /*onBlur={()=>this.validateEmail()}*/ id="emailId"/><span id="addValiadationEmail"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">First name:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control mar-top-10"
                                                           type="text"
                                                           value={this.state.user.firstname || ''}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   user: {
                                                                       ...this.state.user,
                                                                       firstname: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /*onBlur={()=>this.validateName('firstNameId','addValiadationfName')}*/
                                                           id="firstNameId" />
                                                    <span id="addValiadationfName"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Last name:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           value={(this.state.user.lastname === 'null') ?'':this.state.user.lastname}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   user: {
                                                                       ...this.state.user,
                                                                       lastname: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /*onBlur={()=>this.validateName('lastNameId','addValiadationlName')} */ id="lastNameId" /><span id="addValiadationlName"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Address:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" id="address"
                                                           value={(this.state.user.address === 'null') ?'':this.state.user.address}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   user: {
                                                                       ...this.state.user,
                                                                       address: event.target.value
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
                                                           value={(this.state.user.city === 'null') ?'':this.state.user.city}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   user: {
                                                                       ...this.state.user,
                                                                       city: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">State:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text"
                                                           value={(this.state.user.state === 'null') ?'':this.state.user.state}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   user: {
                                                                       ...this.state.user,
                                                                       state: event.target.value
                                                                   }
                                                               });
                                                           }}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-3 control-label">Zip Code:</label>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text"
                                                           value={(this.state.user.zipcode === 'null') ?'':this.state.user.zipcode}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   user: {
                                                                       ...this.state.user,
                                                                       zipcode: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                           id="zipcodeId" /*onBlur={()=>this.validateZip()}*/ /><span id="addValiadationZip"></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-3 control-label">Phone:</label>
                                                <div className="col-md-8">
                                                    <input className="form-control" type="text"
                                                           value={(this.state.user.phone === 'null') ?'':this.state.user.phone}
                                                           onChange={(event) => {
                                                               this.setState({
                                                                   user: {
                                                                       ...this.state.user,
                                                                       phone: event.target.value
                                                                   }
                                                               });
                                                           }}
                                                        /* onBlur={()=>this.validateNumber()} */ id="phoneId" /><span id="addValiadationPhone"></span>
                                                </div>
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
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        );
    }
}

export default withRouter(UsersList);
