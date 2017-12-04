import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Footer from './Footer';
import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import Ionicon from 'react-ionicons';
import * as  API from '../api/API';

var divStyle = {
    background: '#ff690f',
    borderRadius: '0px'

};

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            username:null,
            password:null
        }
    }

    validateEmail(){
        var x = document.getElementById("emailId").value;
        if(x.length==0)
        {
            document.getElementById("addValiadationEmail").innerHTML="Can't be empty";
            var x1 = document.getElementById("addValiadationEmail");
            x1.style.display = "block";
            x1.style.fontSize="small";
            x1.style.float="left";
            x1.style.color="red";
            document.getElementById("saveUsrInfo").disabled = true;
            document.getElementById("saveUsrInfo1").disabled = true;

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
                document.getElementById("saveUsrInfo1").disabled = false;

            }
            else{
                document.getElementById("addValiadationEmail").innerHTML="Invalid Email";
                var x1 = document.getElementById("addValiadationEmail");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;
                document.getElementById("saveUsrInfo1").disabled = true;

            }
        }
    }


    validatePassword(){
        var val = document.getElementById("exampleInputPassword1").value;
        if(val.length==0)
        {
            document.getElementById("addValiadationPassword").innerHTML="Can't be empty";
            var x1 = document.getElementById("addValiadationPassword");
            x1.style.display = "block";
            x1.style.fontSize="small";
            x1.style.float="left";
            x1.style.color="red";
            document.getElementById("saveUsrInfo").disabled = true;
            document.getElementById("saveUsrInfo1").disabled = true;

        }
        else{
            var RegExpression =new RegExp("^[0-9]{8}$");
            if( RegExpression.test(val))
            {
                document.getElementById("addValiadationPassword").innerHTML="Valid Password";
                var x1 = document.getElementById("addValiadationPassword");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;
                document.getElementById("saveUsrInfo1").disabled = false;

            }
            else{
                document.getElementById("addValiadationPassword").innerHTML="Invalid Password should be 8";
                var x1 = document.getElementById("addValiadationPassword");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;
                document.getElementById("saveUsrInfo1").disabled = true;

            }
        }
    }



    render() {
        return (
            <div className="mc-background">
                <div className="row  pad-top-80">
                    <div className="row  pad-top-30">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">

                        <form>
                            <div className="form-group resizedTextbox">

                                <input type="email" className="form-control" id="emailId" aria-describedby="emailHelp" placeholder="Enter Email"
                                       onChange={(event) => {
                                           this.setState({
                                               username: event.target.value
                                           });
                                       }}
                                       onBlur={()=>this.validateEmail()}
                                />
                                <span id="addValiadationEmail"></span>
                            </div>
                            <div className="form-group resizedTextbox">

                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                       onChange={(event) => {
                                           this.setState({
                                               password: event.target.value
                                           });
                                       }}
                                        /*onBlur={()=>this.validatePassword()}*/
                                />
                                <span id="addValiadationPassword"></span>
                            </div>
                            <div className="form-group resizedTextbox">
                                 </div>
                        </form>
                        <button className="btn btn-warning signupbtnClass floatsignup" style={divStyle} id = "saveUsrInfo" onClick={()=>this.props.signupUser(this.state)}>Sign up</button>
                        <button className="btn btn-warning signupbtnClass" style={divStyle} id = "saveUsrInfo1" onClick={()=>this.props.loginUser(this.state)}>Sign in</button>

                    </div>
                    <div className="col-md-4">
                    </div>
                    </div>
                </div>
                <div className="pad-top-30"></div>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(Login);
