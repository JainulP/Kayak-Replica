import React, { Component } from 'react';
import logo from '../logo.svg';
import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import SearchBar from './SearchBar.js';
import Ionicon from 'react-ionicons';
var divStyle = {
     background: '#ff690f',
    borderRadius: '0px',
    marginTop: '20px'
  
};
class MainComponent extends Component {
    constructor(props){
        super(props);
         this.state = {
            type:'hotels',
             flag:false
        }
    }
     componentDidMount() {
       
    }
    setType = (type) => {
        var stateTemp =this.state;
        stateTemp.type = type;
        this.setState(stateTemp);
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
 signupactivityshow(){
        
          var x = document.getElementById("signupactivity");
   
        x.style.display = "block";
      var x1 = document.getElementById("addValiadation");
   
        x1.style.display = "none";

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
validateEmail(){
    var x = document.getElementById("exampleInputEmail1").value;
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(x))
        {
          document.getElementById("addValiadation").innerHTML="Valid Email";
            var x1 = document.getElementById("addValiadation");
            x1.style.display = "block";
            x1.style.fontSize="small";
            x1.style.float="left";
            x1.style.color="green";
            document.getElementById("signUpBtn").disabled = false;
            document.getElementById("signInBtn").disabled = false;
}
    else{
        document.getElementById("addValiadation").innerHTML="Invalid Email";
        var x1 = document.getElementById("addValiadation");
            x1.style.display = "block";
            x1.style.fontSize="small";
            x1.style.float="left";
            x1.style.color="red";
          document.getElementById("signUpBtn").disabled = true;
            document.getElementById("signInBtn").disabled = true;
    }
}
validatePassword(){
     var x = document.getElementById("exampleInputPassword1").value;
     var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if( re.test(x))
        {
          document.getElementById("addPasswordValiadation").innerHTML="Valid password";
            var x1 = document.getElementById("addPasswordValiadation");
            x1.style.display = "block";
            x1.style.fontSize="small";
            x1.style.float="left";
            x1.style.color="green";
            document.getElementById("signUpBtn").disabled = false;
            document.getElementById("signInBtn").disabled = false;
}
    else{
        document.getElementById("addPasswordValiadation").innerHTML="Password must be atleast 8 characters with atleast one upper case,one lower case and one digit";
        var x1 = document.getElementById("addPasswordValiadation");
            x1.style.display = "block";
            x1.style.fontSize="small";
            x1.style.float="left";
            x1.style.color="red";
          document.getElementById("signUpBtn").disabled = true;
            document.getElementById("signInBtn").disabled = true;
    }
    
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
      <h1 className="topmemu-style">Search hundreds of travel sites at once.</h1>
   </div>
   <a className="menu-style cursor-pointer" onClick={ () =>{this.setType('hotels')}}>HOTELS</a>
   <a className="menu-style padding-left-25 cursor-pointer" onClick={ () =>{this.setType('flights')}}>FLIGHTS</a>
   <a className="menu-style padding-left-25 cursor-pointer" onClick={ () =>{this.setType('cars')}}>CARS</a>
   <SearchBar type={this.state.type} searchHotel={this.props.searchHotel} searchCar={this.props.searchCar} searchFlight={this.props.searchFlight}/>
   {
   this.state.flag
   ? 
   <div className="login-popup" id="infopopupclose">
        <span  className="signinpopupclose"  onClick={()=>this.infopopupclose()} value="Close">X</span>
      <button className="login-popup-button"  onClick={()=>this.signupactivityshow()}>Sign up</button>
                     <div id="signupactivity">
<div id="signupactivitycontent">
       <span  className="signinpopupclose" onClick={()=>this.signupactivityclose()} value="Close">X</span>
   <form>
  <div className="form-group resizedTextbox">
    
    <input type="email" className="form-control" id="exampleInputEmail1" onBlur={()=>this.validateEmail()} placeholder="Enter Email"/><span id="addValiadation"></span>
    
  </div>
  <div className="form-group resizedTextbox">
   
    <input type="password" className="form-control" id="exampleInputPassword1" onBlur={()=>this.validatePassword()} placeholder="Password"/><span id="addPasswordValiadation"></span>
  </div>
 <div className="form-group resizedTextbox">
   
   <button className="btn btn-warning signupbtnClass floatsignup" id="signUpBtn" disabled style={divStyle}>Sign up</button>
   <button className="btn btn-warning signupbtnClass" id="signInBtn" disabled style={divStyle}>Sign in</button>
  </div>
 
 
  
</form>
 </div>   
    
</div>
   
      <button className="login-popup-button margin-top-10"  onClick={()=>this.signupactivityshow()}>Sign in</button>
      <a className="margin-top-30 pull-left tripIconClass"  onClick={()=>this.navigateToTrips()}><span className = "glyphicon glyphicon-briefcase">< / span> Trips</a><br/>
       <a className="margin-top-30 pull-left tripIconClass"  onClick={()=>this.navigateToAccountPreferences()}><span className = "glyphicon glyphicon-cog">< / span> Account Preferences</a>
   </div>
   : null
   }
</div>
    );
  }
}

export default withRouter(MainComponent);
