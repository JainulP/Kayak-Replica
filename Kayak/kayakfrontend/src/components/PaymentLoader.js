import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetComponent} from '../actions/actionsAll';

class PaymentLoader extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        var self =this;
        setTimeout(function(){
            console.log(self.props);
            if(self.props.component === "hotel"){
                self.props.history.push("/hotelconfirmation");
            }
            if(self.props.component === "flight"){
                self.props.history.push("/flightconfirmation");
            }
            if(self.props.component === "car"){
                self.props.history.push("/carconfirmation");
            }
        }, 3000);
}
    render() {
        return (
            <div className="pad-top-10  margin-right-40">
                <div>
                    <spam>Please do not refresh your page. Payment Processing...</spam>
                </div>
                <div className="row backgroud-white">
                   <img src="http://localhost:3000/loading.gif"/>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    console.log(state)
    return {
        component: state.all.componentActive
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({GetComponent : GetComponent}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaymentLoader));