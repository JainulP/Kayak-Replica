import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import * as  API from '../api/API';
import * as AdminAPI from '../api/AdminAPI';

var divStyle = {
    width: "200px"

};
var headStyle = {

    marginLeft: "400px"

};
var containerStyle = {

    height: "100px"

};
var UserResults;

class UserInfo extends Component {
    constructor(props){
        super(props);
        this.state ={
            UserResults : [],
            firstname: "",
            lastname: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
            phone: "",
            email: "",
            payload:null,
            isDeleted:null
        }
    }
    validateName(id,validationTxtId){
        var val = document.getElementById(id).value;
        if(val.length==0)
        {
            document.getElementById(validationTxtId).innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
        }
        else{
            var RegExpression = /^[a-zA-Z\s]*$/;
            if( RegExpression.test(val))
            {
                document.getElementById(validationTxtId).innerHTML="Valid name";
                var x1 = document.getElementById(validationTxtId);
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById(validationTxtId).innerHTML="Name can accept only alphabets and empty space";
                var x1 = document.getElementById(validationTxtId);
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }
    validateNumber(){
        var val = document.getElementById("phoneId").value;
        if(val.length==0)
        {
            document.getElementById("addValiadationPhone").innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
        }
        else{
            var RegExpression =new RegExp("^[0-9]{10}$");
            if( RegExpression.test(val))
            {
                document.getElementById("addValiadationPhone").innerHTML="Valid PhoneNumber";
                var x1 = document.getElementById("addValiadationPhone");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById("addValiadationPhone").innerHTML="Phone number must be of 10 digits";
                var x1 = document.getElementById("addValiadationPhone");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }
    validateZip(){
        var x = document.getElementById("zipcodeId").value;
        if(x.length==0)
        {
            document.getElementById("addValiadationZip").innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
        }
        else{
            var validFlag=true;
            if(!(x.length==5 || x.length==10 ))
            {
                validFlag=false;
            }
            for(var i=0;i<x.length;i++)
            {
                if(isNaN(x[i]))
                {
                    if(i!=5)
                    {
                        validFlag=false;
                    }
                    if(i==5 && x[i] !='-')
                    {
                        validFlag=false;
                    }
                }
            }
            if( validFlag)
            {
                document.getElementById("addValiadationZip").innerHTML="Valid zip";
                var x1 = document.getElementById("addValiadationZip");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById("addValiadationZip").innerHTML="Invalid zip";
                var x1 = document.getElementById("addValiadationZip");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";

                document.getElementById("saveUsrInfo").disabled = true;
            }

        }
    }




    validateEmail(){
        var x = document.getElementById("emailId").value;
        if(x.length==0)
        {
            document.getElementById("addValiadationEmail").innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
        }
        else{
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if( re.test(x))
            {
                document.getElementById("addValiadationEmail").innerHTML="Valid Email";
                var x1 = document.getElementById("addValiadationEmail");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById("addValiadationEmail").innerHTML="Invalid Email";
                var x1 = document.getElementById("addValiadationEmail");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }
    addImage = (event) =>{

        const payload = new FormData();
        console.log(event.target.files[0].name);
        payload.append('myfile', event.target.files[0]);
        var state_temp = this.state;
        state_temp.filename = event.target.files[0].name;
        this.setState(state_temp);

        API.uploadFile(payload)
            .then((status) => {
                if(status == 204) {
                    console.log("PIC UPLOADED");
                    console.log(state_temp.filename);
                }
            });


    }


    deleteUser = () => {
        var xyz= {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            phone: this.state.phone,
            email: this.state.email,
            id: localStorage.getItem("userid"),
            imageprofile : this.state.image,
            deleteflag : 1
        };
        // data.IsDeleted  = 1;
        var state_temp = this.state;
        AdminAPI.editUserInfo(xyz)
            .then((res) => {
                console.log(res);
                this.props.history.push("/");
                //this.setState(state_temp);
            });
    }

    UserInfoAdd = () =>{
        var data= {
            "id": "1",
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "address" : this.state.address,
            "city": this.state.city,
            "state": this.state.state,
            "zipcode": this.state.zipcode,
            "phone": this.state.phone,
            "image": this.state.filename,
            "deleteflag" : this.state.isDeleted
        };
        API.userinfo(data)
            .then((res) => {
                var state_temp = this.state;
                state_temp.BookingResults = res.value;
                this.setState(state_temp);
                alert("saved succesfully...")
            });
        //}

    }

    componentWillMount(){
        var data= {
            "Id": localStorage.getItem("userid")
        };
        API.getuserinfo(data)
            .then((res) => {
                var xyz= {
                    firstname: res.user.FirstName,
                    lastname: res.user.LastName,
                    address: res.user.Address,
                    city: res.user.City,
                    state: res.user.State,
                    zipcode: res.user.ZipCode,
                    phone: res.user.Phone,
                    email: res.user.Email,
                    image : res.user.ProfileImage,
                    isDeleted:res.user.IsDeleted
                };
debugger;
                this.setState(xyz);
            });
    }

    render() {
        var UserDetailList=[];
        var UserResults = this.state.UserResults;
        var pushIconType;
        var idval='1';
        UserDetailList.push(
            <div className="container">
                <form className="form-horizontal" role="form">

                    <div className="row">

                        <div className="col-md-3">
                            <div className="text-center">
                                <img src= {"http://localhost:3001/uploads/"+this.state.image} className="avatar img-circle" style={divStyle} alt="avatar"/>
                                <h6>Upload a different photo...</h6>
                                <input type="file"    className="form-control"
                                       id="file-input"  name="myfile" onChange={this.addImage}/>
                            </div>
                        </div>


                        <div className="col-md-6 personal-info">




                            <div className="form-group">
                                <label className="col-lg-3 control-label">First name:</label>
                                <div className="col-lg-8">
                                    <input className="form-control"
                                           type="text"
                                           value={this.state.firstname}
                                           onChange={(event) => {
                                               this.setState({
                                                   firstname: event.target.value
                                               });
                                           }}
                                           onBlur={()=>this.validateName('firstNameId','addValiadationfName')}
                                           id="firstNameId" />
                                    <span id="addValiadationfName"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Last name:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text"
                                           value={this.state.lastname}
                                           onChange={(event) => {
                                               this.setState({
                                                   lastname: event.target.value
                                               });
                                           }}
                                           onBlur={()=>this.validateName('lastNameId','addValiadationlName')} id="lastNameId" /><span id="addValiadationlName"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Address:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text"
                                           value={this.state.address}
                                           onChange={(event) => {
                                               this.setState({
                                                   address: event.target.value
                                               });
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">City:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text"
                                           value={this.state.city}
                                           onChange={(event) => {
                                               this.setState({
                                                   city: event.target.value
                                               });
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">State:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text"
                                           value={this.state.state}
                                           onChange={(event) => {
                                               this.setState({
                                                   state: event.target.value
                                               });
                                           }}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Zip Code:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text"
                                           value={this.state.zipcode}
                                           onChange={(event) => {
                                               this.setState({
                                                   zipcode: event.target.value
                                               });
                                           }}
                                           id="zipcodeId" onBlur={()=>this.validateZip()} /><span id="addValiadationZip"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Phone:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text"
                                           value={this.state.phone}
                                           onChange={(event) => {
                                               this.setState({
                                                   phone: event.target.value
                                               });
                                           }}
                                           onBlur={()=>this.validateNumber()} id="phoneId" /><span id="addValiadationPhone"></span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-lg-3 control-label">Email:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text"
                                           value={this.state.email}
                                           onChange={(event) => {
                                               this.setState({
                                                   email: event.target.value
                                               });
                                           }}
                                           onBlur={()=>this.validateEmail()} id="emailId"/><span id="addValiadationEmail"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label"></label>
                                <div className="col-md-8">
                                    <input type="button"
                                           className="btn btn-primary"
                                           id="saveUsrInfo"
                                           value="Save Changes"
                                           onClick={this.UserInfoAdd}
                                    />
                                    <span></span>
                                </div>
                            </div>

                        </div>



                        <div className="form-group">
                            <label className="col-md-3 control-label"></label>
                            <div className="col-md-8">
                                <input type="button"
                                       className="btn btn-primary"
                                       id="saveUsrInfo"
                                       value="Deactivate User"
                                       onClick={this.deleteUser}
                                />
                                <span></span>
                            </div>
                        </div>





                    </div>
                </form>
            </div>

        )
        // },this);


        return (
            <div>
                <h4 style={headStyle}>User Info</h4>
                {UserDetailList}

            </div>


        );
    };
}

export default withRouter(UserInfo);