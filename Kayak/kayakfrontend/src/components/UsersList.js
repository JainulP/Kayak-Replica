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
            firstname:null,
            lastname:null,
            userid:null,
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

    openModalShare = (temp) => {
        var state_temp = this.state;

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
            imageprofile : temp.ProfileImage
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
                self.setState(state_temp);
            });
    }
    deleteUser=(data)=>{
        /* AdminAPI.editUserInfo()
             .then((res) => {
                 console.log(res);
             });*/
    }
    editUser = (data) =>{
        AdminAPI.editUserInfo(this.state.user)
            .then((res) => {
                console.log(res);
            });
    }

    render() {
        var usersList = [];
        if(this.state.usersList != "No cars found")
        {
            var usersList = [];
            var data = this.state.usersList;
            data.map(function (temp, index) {
                usersList.push(
                    <div className="pad-top-10  margin-right-40">
                        <div className="row backgroud-white">
                            <div className="col-md-4 text-align-left"><span>
                                <Ionicon icon="md-person" onClick={this.deleteUser(temp)}
                                         className="cursor-pointer padding-right-3 pad-top-acc" fontSize="20px" color="#000000"/>
                            </span>{temp.UserId}</div>
                            <div className="col-md-4 text-align-left">{temp.Email}</div>
                            <div className="col-md-4 text-align-left">{temp.FirstName + temp.LastName || ''}
                                <Ionicon icon="md-trash" onClick={this.deleteUser(temp)}
                                         className="cursor-pointer padding-right-3 pad-top-acc pull-right" fontSize="20px" color="#000000"/>
                                <Ionicon icon="md-brush" onClick={()=>this.openModalShare(temp)}
                                         className="cursor-pointer padding-right-3 pad-top-acc pull-right" fontSize="20px" color="#000000"/>

                            </div>
                        </div>
                    </div>
                );
            }.bind(this));
        }
        else{
            usersList = <div className="no-results">NO CARS AVAILABLE</div>;
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
                                                               onChange={(event) => {
                                                                   this.setState({
                                                                       filter: {
                                                                           ...this.state,
                                                                           userid: event.target.value
                                                                       }
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
                                                               onChange={(event) => {
                                                                   this.setState({
                                                                       filter: {
                                                                           ...this.state,
                                                                           firstname: event.target.value
                                                                       }
                                                                   });
                                                               }}/>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* LAST NAME FILTER */}
                                            <div className="col-md-4">
                                                <div>
                                                    <p className="filter-heading-style">Last Name</p>
                                                    <p className="filter-content-style">
                                                        <input type="text" id="hotelname" value={this.state.lastname}
                                                               onChange={(event) => {
                                                                   this.setState({
                                                                       filter: {
                                                                           ...this.state,
                                                                           lastname: event.target.value
                                                                       }
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
                            <Modal.Title className="modal-head-style">{this.state.user.id} | {this.state.user.email}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form className="form-horizontal" role="form">

                                <div className="row">

                                    <div className="col-md-3">
                                        <div className="text-center">
                                            <img src="car.jpg" className="avatar img-circle" style={divStyle} alt="avatar"/>
                                            <h6>Upload a different photo...</h6>
                                            <input type="file"    className="form-control"
                                                   id="file-input"  name="mypic" onChange={this.addImage}/>
                                        </div>
                                    </div>
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
                                                           value={this.state.user.firstname}
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
                                                           value={this.state.user.lastname}
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
                                                           value={this.state.user.address}
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
                                                           value={this.state.user.city}
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
                                                           value={this.state.user.state}
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
                                                           value={this.state.user.zipcode}
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
