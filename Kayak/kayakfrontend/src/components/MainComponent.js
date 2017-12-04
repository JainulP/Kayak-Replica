import React, { Component } from 'react';
import logo from '../logo.svg';
import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import SearchBar from './SearchBar.js';
import Ionicon from 'react-ionicons';
import * as  API from '../api/API';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetComponent} from '../actions/actionsAll';

var divStyle = {
    background: '#ff690f',
    borderRadius: '0px'

};

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: this.props.componentActive || 'hotels',
            flag:false,
            BookingResults:[],
            username:null,
            password: null,
            signOut: ""

        }
    }
    componentWillMount(){
        alert(localStorage.getItem("userid") + " "+localStorage.getItem("admin") )
    }
    componentDidMount(){
        /*document.getElementById("hotelButton").style.backgroundColor= '#e4e5ea';
        document.getElementById("carButton").style.backgroundColor= '#FFFFFF';
        document.getElementById("flightButton").style.backgroundColor= '#FFFFFF';*/
        if(this.state.type === "hotels"){
            document.getElementById("hotelButton").style.backgroundColor= '#e4e5ea';
            document.getElementById("carButton").style.backgroundColor= '#FFFFFF';
            document.getElementById("flightButton").style.backgroundColor= '#FFFFFF';
        }
        if(this.state.type === "flights"){
            document.getElementById("hotelButton").style.backgroundColor= '#FFFFFF';
            document.getElementById("carButton").style.backgroundColor= '#FFFFFF';
            document.getElementById("flightButton").style.backgroundColor= '#e4e5ea';
        }
        if(this.state.type === "cars"){
            document.getElementById("hotelButton").style.backgroundColor= '#FFFFFF';
            document.getElementById("carButton").style.backgroundColor= '#e4e5ea';
            document.getElementById("flightButton").style.backgroundColor= '#FFFFFF';
        }
    }
    setType = (type) => {
        var stateTemp =this.state;
        stateTemp.type = type;
        this.setState(stateTemp);
        if(type === "hotels"){
            document.getElementById("hotelButton").style.backgroundColor= '#e4e5ea';
            document.getElementById("carButton").style.backgroundColor= '#FFFFFF';
            document.getElementById("flightButton").style.backgroundColor= '#FFFFFF';
        }
        if(type === "flights"){
            document.getElementById("hotelButton").style.backgroundColor= '#FFFFFF';
            document.getElementById("carButton").style.backgroundColor= '#FFFFFF';
            document.getElementById("flightButton").style.backgroundColor= '#e4e5ea';
        }
        if(type === "cars"){
            document.getElementById("hotelButton").style.backgroundColor= '#FFFFFF';
            document.getElementById("carButton").style.backgroundColor= '#e4e5ea';
            document.getElementById("flightButton").style.backgroundColor= '#FFFFFF';
        }
    }
    setFlag = () => {
        var stateTemp =this.state;
        stateTemp.flag = !stateTemp.flag;
        this.setState(stateTemp);
    }
    gotodashboard = () =>{
        this.props.history.push("/adminDashboard");
    }
    navigateToTrips(){
        this.props.history.push("/myaccount");
    }
    navigateToAccountPreferences(){
        this.props.history.push("/AccountPreferences");
    }
    signupactivityshow=() =>{

        var x = document.getElementById("signupactivity");

        x.style.display = "block";

    }
    signupactivityclose(){

        var x = document.getElementById("signupactivity");

        x.style.display = "none";

    }
    infopopupclose(){

        var x = document.getElementById("infopopupclose");

        x.style.display = "none";

    }
    infopopupshow(){

        var x = document.getElementById("infopopupclose");

        x.style.display = "block";

    }

/*


    adduser (){

        var data= {
            "email": this.state.username,
            "password": this.state.password
        };
//debugger;
        API.signup(data)
            .then((res) => {
                // debugger;
                var state_temp = this.state;
                state_temp.BookingResults = res.op;
                this.setState(state_temp);
            });

    }

    loginUser = () =>{
        console.log("results");
        var data= {
            "username" :"jainul.patel@sjsu.edu",
            "password": "123123"
        };
        console.log(this.state)
        API.loginnew(data)
            .then((res) =>{
                localStorage.setItem("userid",res.user.user.UserId)
            });
    }
    signupUser = () =>{
        var data= {
            "email" :"soumya@gmail.com",
            "password": "123"
        };
        console.log(this.state)
        API.signup(data)
            .then((res) =>{

                alert("signup successful");
                console.log(res);
            });
    }
    signin (){
        var data= {
            "username": this.state.username,
            "password": this.state.password
        };
        API.login(data)
            .then((res) => {
                var state_temp = this.state;
                state_temp.BookingResults = res.op;
              //  this.setState(state_temp);
            });
    }
*/
    signout (){
        API.signout()
            .then((res) => {
                var state_temp = this.state;
                state_temp.signOut = res.value;
                this.setState(state_temp);
            });

    }
    render() {
        return (
            <div className="mc-background">
                <div className="topmenu-conatiner">
                    <div className="topmenu-content topmemu-style">
                        <img src="kayakLogo.png"  className="kayak-logo"/>
                        <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('hotels')}}>Hotels</a>
                        <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('flights')}}>Flights</a>
                        <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('cars')}}>Cars</a>
                        <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.gotodashboard('dashboard')}}>Dashboard</a>


                        <a className="s pull-right  cursor-pointer" onClick={ () =>{this.setFlag()}}>
                            <Ionicon icon="md-person"
                                     className="cursor-pointer padding-right-3 pad-top-acc" fontSize="25px" color="#FFFFFF"/>
                            <span className="vertical-align-s">My Account</span></a>
                    </div>
                    <br/>
                    <br/>
                </div>
                <a id="hotelButton" className="menu-style cursor-pointer" onClick={ () =>{this.setType('hotels')}}>
                    <span><Ionicon icon="md-home" className="cursor-pointer padding-right-3" fontSize="23px" color="#000000"/></span>
                    <span>HOTELS</span></a>


                <a id="flightButton" className="menu-style padding-left-25 cursor-pointer" onClick={ () =>{this.setType('flights')}}><span>
            <Ionicon icon="md-plane" className="cursor-pointer padding-right-3" fontSize="25px" color="#000000"/></span>
                    <span>  FLIGHTS</span></a>


                <a id="carButton" className="menu-style padding-left-25 cursor-pointer" onClick={ () =>{this.setType('cars')}}>
                    <span><Ionicon icon="md-car" className="cursor-pointer padding-right-3" fontSize="25px" color="#000000"/></span>
                    <span> CARS</span></a>
                <SearchBar type={this.state.type} searchHotel={this.props.searchHotel} searchCar={this.props.searchCar} searchFlight={this.props.searchFlight}/>
                {
                    this.state.flag
                        ?
                        <div className="login-popup" id="infopopupclose">
                            <span  className="signinpopupclose"  onClick={()=>this.infopopupclose()} value="Close">X</span>
                            <button className="login-popup-button" onClick={()=>this.signupactivityshow()}>Sign up</button>
                            <div id="signupactivity">
                                <div id="signupactivitycontent">
                                    <span  className="signinpopupclose" onClick={()=>this.signupactivityclose()} value="Close">X</span>
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
                                    <button  onClick={()=>this.signupUser()}>Sign up</button>
                                    <button onClick={()=>this.loginUser()}>Sign in</button>
                                </div>

                            </div>

                            <button className="login-popup-button margin-top-10" onClick={()=>this.signupactivityshow()}>Sign in</button>
                            <a className="margin-top-30 pull-left tripIconClass"  onClick={()=>this.navigateToTrips()}><span className = "glyphicon glyphicon-briefcase"></span> Trips</a><br/>
                            <a className="margin-top-30 pull-left tripIconClass"  onClick={()=>this.navigateToAccountPreferences()}><span className = "glyphicon glyphicon-cog"></span> Account Preferences</a>
                        </div>
                        : null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        componentActive: state.all.componentActive
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({GetComponent: GetComponent}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
