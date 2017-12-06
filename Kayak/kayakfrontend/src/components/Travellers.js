import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import * as  TravellerAndPaymentAPI from '../api/TravellerAndPaymentAPI';
import * as  BookingAPI from '../api/BookingAPI';
import Ionicon from 'react-ionicons';
var divStyle = {
  width: "50%",
    marginTop: "15px",
  marginLeft: "220px"
  
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

class Travellers extends Component {
    constructor(props){
        super(props);
         this.state ={
             BookingResults : [],
             firstname: "",
             lastname : "",
             email: "",
             phone: ""
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

            "userid":localStorage.getItem("userid")
        }
        TravellerAndPaymentAPI.getTravelerInfo(data)
            .then((res) => {
               var state_temp = this.state;
                state_temp.BookingResults = res.op;
                this.setState(state_temp);
            });
    }
    bookingactivitySave(){
        var data={
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            userid: localStorage.getItem("userid")
        }

        BookingAPI.addTravelerInfo(data)
            .then((res) => {
                var state_temp = this.state;
                state_temp.BookingResults = res.op;
                this.setState(state_temp);
                var data= {

                    "userid":localStorage.getItem("userid")
                }
                TravellerAndPaymentAPI.getTravelerInfo(data)
                    .then((res) => {
                        var state_temp = this.state;
                        state_temp.BookingResults = res.op;
                        this.setState(state_temp);
                    });
            });

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

            "userid": localStorage.getItem("userid"),
            "TravelerId": data1.TravelerId
        };

        TravellerAndPaymentAPI.deleteTravelerInfo(data)
            .then((res) => {
                console.log("Done Delete");
                console.log(res);
                var data= {

                    "userid": localStorage.getItem("userid")
                }
                TravellerAndPaymentAPI.getTravelerInfo(data)
                    .then((res) => {
                        var state_temp = this.state;
                        state_temp.BookingResults = res.op;
                        this.setState(state_temp);
                    });
            });
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
               if(lis.BookingType=="hotel"){
                   pushIconType='glyphicon glyphicon-bed';
}
                              if(lis.BookingType=="flight"){
                 pushIconType='glyphicon glyphicon-plane';
}
                if(lis.BookingType=="car"){
                  pushIconType='glyphicon glyphicon-copyright-mark';
}
                BookingDetailList.push(
                    <div className="w3-container" style={divStyle}>


  <div className="w3-card-4" >
    <header className="w3-container w3-orange">
      <h4>{lis.FirstName} {lis.LastName} </h4>

    </header>

    <div className="w3-container" style={containerStyle}>
        <h5>Email:{lis.Email}</h5>
        <h5>Contact:{lis.Phone}</h5>
        <a href="#" onClick={()=>this.travellerDelete(lis)} style={deleteStyle}>Delete</a>
    </div>

  </div>
                                   <div id="bookingactivity">
<div id="bookingactivitycontent">
<h4><b>Add Travellers</b></h4>
<h5 className="TravellerContent" id="text1"><input type="text" className="form-control" placeholder="First Name" id="fNamelUsr"
                                                   onChange={(event) => {
                                                       this.setState({
                                                           firstname: event.target.value
                                                       });
                                                   }}/></h5>
<h5 className="TravellerContent" id="text2"><input type="text" className="form-control" placeholder="Last Name" id="lNameUsr"
                                                   onChange={(event) => {
                                                       this.setState({
                                                           lastname: event.target.value
                                                       });
                                                   }}
/></h5>
<h5 className="TravellerContent" id="text3"><input type="text" className="form-control" placeholder="Email" id="emailUsr"

                                                   onChange={(event) => {
                                                       this.setState({
                                                           email: event.target.value
                                                       });
                                                   }}/></h5>
<h5 className="TravellerContent" id="text3"><input type="text" className="form-control" placeholder="Contact Info" id="contactInfoUsr"
                                                   onChange={(event) => {
                                                       this.setState({
                                                           phone: event.target.value
                                                       });
                                                   }}
/></h5>

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
)
           },this);
}
        
         
    return ( 
        <div>
        <h4 style={headStyle}>Travellers</h4>
        {BookingDetailList}
        <br/><br/>
        <a className = "travellerTripTag" style={travellerSpanStyle} onClick={() => this.showbookingactivity()}>Add Travellers</a>
                </div>


    );
  };
}

export default withRouter(Travellers);
