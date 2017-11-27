import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
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
             UserResults : [
                 {
        "UserId": "1",
        "FirstName":"Sri Harsha",
        "LastName":"Vanga",
        "Address":"205 south",
        "City":"San Jose",
        "State":"CA",
        "ZipCode":"95112",
        "Phone":"8768978989",
        "Email":"sriv@gmail.com"
    }]
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
    var RegExpression =new RegExp("^[0-9]{16}$"); 
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
    
  render() {       
       var UserDetailList=[];
      var UserResults = this.state.UserResults;
     var pushIconType;
      var idval='1';
      debugger;
         
     this.state.UserResults.map(function(lis,index) {
      
       

                UserDetailList.push(
           <div className="container">
    
  
	<div className="row">
     
                  <div className="col-md-3">
        <div className="text-center">
          <img src="car.jpg" className="avatar img-circle" style={divStyle} alt="avatar"/>
          <h6>Upload a different photo...</h6>
          
          <input type="file" className="form-control"/>
        </div>
      </div>
      
    
      <div className="col-md-6 personal-info">
        
        
        
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label className="col-lg-3 control-label">First name:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" onBlur={()=>this.validateName('firstNameId','addValiadationfName')} id="firstNameId" /><span id="addValiadationfName"></span>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label">Last name:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" onBlur={()=>this.validateName('lastNameId','addValiadationlName')} id="lastNameId" /><span id="addValiadationlName"></span>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label">Address:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" />
            </div>
          </div>
                    <div className="form-group">
            <label className="col-lg-3 control-label">City:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" />
            </div>
          </div>
                    <div className="form-group">
            <label className="col-lg-3 control-label">State:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" />
            </div>
          </div>
                     <div className="form-group">
            <label className="col-md-3 control-label">Zip Code:</label>
            <div className="col-md-8">
              <input className="form-control" type="text" id="zipcodeId" onBlur={()=>this.validateZip()} /><span id="addValiadationZip"></span>
            </div>
          </div>
                     <div className="form-group">
            <label className="col-md-3 control-label">Phone:</label>
            <div className="col-md-8">
              <input className="form-control" type="text" onBlur={()=>this.validateNumber()} id="phoneId" /><span id="addValiadationPhone"></span>
            </div>
          </div>
                    
          <div className="form-group">
            <label className="col-lg-3 control-label">Email:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" onBlur={()=>this.validateEmail()} id="emailId"/><span id="addValiadationEmail"></span>
            </div>
          </div>
         
         
         
          <div className="form-group">
            <label className="col-md-3 control-label"></label>
            <div className="col-md-8">
              <input type="button" className="btn btn-primary" id="saveUsrInfo" value="Save Changes"/>
              <span></span>
            </div>
          </div>
        </form>
      </div>
        
                    
  </div>
</div>

)
           },this);
        
         
    return ( 
        <div>
        <h4 style={headStyle}>User Info</h4>
        {UserDetailList}
        
                </div>


    );
  };
}

export default withRouter(UserInfo);

