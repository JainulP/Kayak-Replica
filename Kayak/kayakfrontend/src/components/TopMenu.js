import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetComponent} from '../actions/actionsAll';

class TopMenu extends Component {
    setType = (type) =>{
        this.props.history.push("/");
        this.props.SetComponent(type);
    }
    gotodashboard = () =>{
        this.props.history.push("/adminDashboard");
    }
    gotToHome = () =>{
        this.props.history.push("/");
    }
    setFlag=()=>{

    }
    render() {
        return (
            <div className="topmenu-conatiner-menu">
                <div className="">
                    <img src="kayakLogo.png"  className="kayak-logo cursor-pointer" onClick={ () =>{this.gotToHome()}}/>
                    <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('hotels')}}>Hotels</a>
                    <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('flights')}}>Flights</a>
                    <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.setType('cars')}}>Cars</a>
                    <a className="s padding-left-25 cursor-pointer" onClick={ () =>{this.gotodashboard('dashboard')}}>Dashboard</a>
                    <a className="s pad-35 pull-right  cursor-pointer" onClick={ () =>{this.setFlag()}}>
                        <Ionicon icon="md-person"
                                 className="cursor-pointer padding-right-3 pad-top-acc" fontSize="25px" color="#FFFFFF"/>
                        <span className="vertical-align-s" onClick={ () =>{this.gotToHome()}}>My Account</span></a>
                </div>
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
    return bindActionCreators({SetComponent: SetComponent}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopMenu));