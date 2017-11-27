import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import MyAccount from './MyAccount';
import Payments from './Payments';
import Travellers  from './Travellers';
import UserInfo  from './UserInfo';
class AccountPreferences extends Component {
    constructor(props){
        super(props);
         this.state = {
         view:"Travellers"
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
         <p className="padding-right-30 abc myAccountSideMenuBar" onClick={ () =>{this.setView("Travellers")}} >Travellers</p>  
            <p className="padding-right-30 abc myAccountSideMenuBar" onClick={ () =>{this.setView("Payments")}} >Payments</p>
<p className="padding-right-30 abc myAccountSideMenuBar" onClick={ () =>{this.setView("UserInfo")}} >User Info</p>
                   
         </div>
      </div>
      <div className="ta-jus">
         {(this.state.view === "Payments")?
        <span><Payments/></span>
         :null
         }
      </div>
     
      <div className="ta-jus">
         {(this.state.view === "Travellers")?
          <span><Travellers/></span>:null
         }
      </div>
      <div className="ta-jus">
         {(this.state.view === "UserInfo")?
          <span><UserInfo/></span>:null
         }
      </div>
   </div>
</div>
    );
  }
}

export default withRouter(AccountPreferences);

