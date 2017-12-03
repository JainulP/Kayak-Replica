import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import * as  TravellerAndPaymentAPI from '../api/TravellerAndPaymentAPI';
import Ionicon from 'react-ionicons';
var divStyle = {
  width: "50%",
    marginTop: "15px",
  marginLeft: "220px"
  
};
var popUpUsrLstClose={
    float: "right;",
fontSize: "large;",
cursor: "pointer;"
}
var divStyle1 = {
    width: "50%",
    marginTop: "15px",
    marginLeft:"0px"

};
var buttonStyle = {
    width: "65px"
};
var headStyle = {

  marginLeft: "400px"
  
};
var containerStyle = {

  height: "110px"
  
};
var travellerSpanStyle = {

    cursor: "pointer"

};
var deleteStyle={
    float: "right",
fontSize: "x-small",
color: "grey",
cursor: "pointer"
}
var BookingResults;

class AdminUsersList extends Component {
    constructor(props){
        super(props);
         this.state ={
             BookingResults : [{
            "id":"1",
            "PersonName":"Sri Harsha",
            "Contact":"8880986993",
            "email":"a@a.com"
        },{
            "id":"2",
                "PersonName":"Sriv",
                "Contact":"899986993",
                "email":"b@b.com"

        }]
            }
        /*{
            "id":"1",
            "PersonName":"Sri Harsha",
            "Contact":"8880986993",
            "email":"a@a.com"
        },{
            "id":"2",
                "PersonName":"Sriv",
                "Contact":"899986993",
                "email":"b@b.com"

        }*/
    }
    componentWillMount(){
        var data= {

            "userid": 1
        }
       /* TravellerAndPaymentAPI.getTravelerInfo(data)
            .then((res) => {
               var state_temp = this.state;
                state_temp.BookingResults = res.op;
                this.setState(state_temp);
            });*/
    }
    bookingactivitySave(data){
        debugger;
    }
      showbookingactivity(){
          debugger;
        
          var x = document.getElementById("bookingactivity");
   
        x.style.display = "block";
    
       //$('#bookingactivity').show("slow");
      debugger;
}
    bookingactivityclose(){
          //$('#bookingactivity').hide("slow");
        var x = document.getElementById("bookingactivity");
   
        x.style.display = "none";
       debugger;
}
    travellerDelete (data1){

        var data= {

            "userid": 8
        };

        TravellerAndPaymentAPI.deleteTravelerInfo(data)
            .then((res) => {
                console.log("Done Delete");
                console.log(res);
                var data= {

                    "userid": 1
                }
               /* TravellerAndPaymentAPI.getTravelerInfo(data)
                    .then((res) => {
                        var state_temp = this.state;
                        state_temp.BookingResults = res.op;
                        this.setState(state_temp);
                    });*/
            });
    }
    userinfoPopUp(data){

        var x = document.getElementById("usrlistactivity");

        x.style.display = "block";
    }
    userinfoPopUpClose(data){

        var x = document.getElementById("usrlistactivity");

        x.style.display = "none";
    }

    getTravelerInfo = () => {

    };
   
  render() {       
       var BookingDetailList=[];
      var BookingResults = this.state.BookingResults;
     var pushIconType;
      var idval='1';
      debugger;
         if(this.state.BookingResults != undefined)
             {
     this.state.BookingResults.map(function(lis,index) {
      
        var idval=lis.userid;

                BookingDetailList.push(
                    <div>
                    <div className="w3-container" style={divStyle}>


  <div className="w3-card-4" >
    <header className="w3-container w3-orange">
      <h4>{lis.PersonName}  </h4>

    </header>

    <div className="w3-container" style={containerStyle}>
        <h5>Email:{lis.email}</h5>
        <h5>Contact:{lis.Contact}</h5>
        <a href="#" onClick={()=>this.travellerDelete(lis.UserId)} style={deleteStyle}>Delete</a>
                                   <a href="#" onClick={()=>this.userinfoPopUp(lis)} style={deleteStyle}>edit</a>
    </div>

  </div>

                        <div id="usrlistactivity">
                            <div id="usrlistactivitycontent">

                                <div className="row">
                                    <span  onClick={()=>this.userinfoPopUpClose()} style={popUpUsrLstClose}>X</span>
                                    <div className="col-md-3">
                                        <div className="text-center">
                                            <img src="car.jpg" className="avatar img-circle" style={divStyle1} alt="avatar"/>
                                            <h6>Upload a different photo...</h6>

                                            <input type="file" className="form-control"/>
                                        </div>
                                    </div>


                                    <div className="col-md-6 personal-info">



                                <form className="form-horizontal" role="form">
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">First name:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control"
                                                   type="text"

                                                   id="firstNameId" />
                                            <span id="addValiadationfName"></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Last name:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" type="text"
                                                   id="lastNameId" /><span id="addValiadationlName"></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Address:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" type="text"

                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">City:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" type="text"

                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">State:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" type="text"/>

                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 control-label">Zip Code:</label>
                                        <div className="col-md-8">
                                            <input className="form-control" type="text"

                                                   id="zipcodeId"  /><span id="addValiadationZip"></span>
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
                                                    id="emailId"/><span id="addValiadationEmail"></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 control-label"></label>
                                        <div className="col-md-8">
                                            <input type="button"
                                                   className="btn btn-primary"
                                                   id="saveUsrInfo"
                                                   value="Save Changes"
                                                   onClick={()=>this.UserInfoAdd()}
                                            />
                                            <span></span>
                                        </div>
                                    </div>
                                </form>
                                </div>
                                </div>
                            </div>
                            </div>





                                   <div id="bookingactivity">
<div id="bookingactivitycontent">
<h4><b>Add Travellers</b></h4>
<h5 className="TravellerContent" id="text1"><input type="text" className="form-control" placeholder="First Name" id="fNamelUsr"/></h5>
<h5 className="TravellerContent" id="text2"><input type="text" className="form-control" placeholder="Last Name" id="lNameUsr"/></h5>
<h5 className="TravellerContent" id="text3"><input type="text" className="form-control" placeholder="Email" id="emailUsr"/></h5>
<h5 className="TravellerContent" id="text3"><input type="text" className="form-control" placeholder="Contact Info" id="contactInfoUsr"/></h5>

   <br/>
    <div className="row">
        <div className="col-sm-6">
            <button type="button" className="btn btn-warning col-sm-4 bookingContent"  style={buttonStyle} id="popupsave" onClick={()=>this.bookingactivitySave()} value="Save">Save</button>
        </div>
        <div className="col-sm-6">
    <button type="button" className="btn btn-warning col-sm-4 bookingContent" style={buttonStyle}  id="popupclose" onClick={()=>this.bookingactivityclose()} value="Close">Close</button>
        </div>

    </div>
</div>
                                   </div>
</div>
     </div>
)
           },this);
}
        
         
    return ( 
        <div>
        <h4 style={headStyle}>adminn list</h4>
        {BookingDetailList}
        <br/><br/>
        <a className = "travellerTripTag" style={travellerSpanStyle} onClick={() => this.showbookingactivity()}>Add Travellers</a>
                </div>


    );
  };
}

export default withRouter(AdminUsersList);
