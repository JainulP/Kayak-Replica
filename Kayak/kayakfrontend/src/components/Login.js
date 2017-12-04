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

                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"
                                       onChange={(event) => {
                                           this.setState({
                                               username: event.target.value
                                           });
                                       }}
                                />

                            </div>
                            <div className="form-group resizedTextbox">

                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                       onChange={(event) => {
                                           this.setState({
                                               password: event.target.value
                                           });
                                       }}

                                />
                            </div>
                            <div className="form-group resizedTextbox">
                                 </div>
                        </form>
                        <button className="btn btn-warning signupbtnClass floatsignup" style={divStyle} onClick={()=>this.props.signupUser(this.state)}>Sign up</button>
                        <button className="btn btn-warning signupbtnClass" style={divStyle} onClick={()=>this.props.loginUser(this.state)}>Sign in</button>

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
