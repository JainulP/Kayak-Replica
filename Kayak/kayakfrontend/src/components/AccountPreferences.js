import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import MyAccount from './MyAccount';
import Payments from './Payments';
class AccountPreferences extends Component {
    constructor(props){
        super(props);
         this.state = {
         view:"Payments"
        }
    }
    setView = (view) => {
    console.log("view clicked")
        var stateTemp =this.state;
        stateTemp.view = view;
        this.setState(stateTemp);
    }
  render() {       
       
    return ( 
        <div className="container-fluid-hotel">
   <div className="row">
   </div>
   <div className="row pad-top-10">
      <div className="col-md-2">
         <div className="text-align-left pad-top-10">
            <p className="padding-right-30 abc" onClick={ () =>{this.setView("Payments")}} >Payments</p>
            <p className="padding-right-30 abc" onClick={ () =>{this.setView("rooms")}} >ROOMS</p>          
         </div>
      </div>
      <div className="col-md-10">
         {(this.state.view === "rooms")?
        <span><MyAccount/></span>
         :null
         }
      </div>
     
      <div className="ta-jus">
         {(this.state.view === "Payments")?
          <span><Payments/></span>:null
         }
      </div>
      
   </div>
</div>
    );
  }
}

export default withRouter(AccountPreferences);

