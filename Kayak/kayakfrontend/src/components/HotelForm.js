import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import * as BookHotelAPI from '../api/HotelBookingAPI';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetHotel} from '../actions/actionsAll';
import {SetHotelBookingId} from '../actions/actionsAll';
import {SetComponent} from '../actions/actionsAll';

class HotelForm extends Component {
    constructor(props){
        super(props);
     this.state = {
         expirydate:"",
         name:"",
         cardnumber: "",
         cvv: "",
         street :"",
         postalCode:"",
         city:"",
         region:"",
         country:"",
         password: "",
         firstname:"",
         lastname:"",
         phoneNumber:"",
         email:"",
         saveflag:"",
         middlename:"",
         age:"",
         gender:"",
         bill:0
        }
    }
    componentWillMount() {
        var bill = 0;
        var a = this.props.bookhotel.noRooms;
        var b = this.props.roomData.price;
        var c = this.props.roomData.days;
        bill = a*b*c;
        var stateTemp =this.state;
        stateTemp.bill = bill;
        this.setState(stateTemp);
        console.log(this.props)
    }

    bookHotelAction = () =>{
        var data={
            bookingData: this.state,
            hotelPageData: this.props.hotelPageData,
            bookhotel: this.props.bookhotel,
            roomData : this.props.roomData
        }


        if(document.getElementById("contactInfoUsr").value != "" && document.getElementById("cardnumber").value != "" && document.getElementById("expdate").value != "" && document.getElementById("firstNameId").value != ""
            && document.getElementById("middleNameId").value != "" && document.getElementById("lastNameId").value != "" && document.getElementById("state").value != ""
            && document.getElementById("city").value != ""
            && document.getElementById("country").value != ""
            && document.getElementById("name").value != ""
            && document.getElementById("phoneId").value != ""
            && document.getElementById("emailId").value != ""
            && document.getElementById("age").value != ""
            && document.getElementById("zipcodeId").value != ""
            && document.getElementById("age").value != ""
        ) {
            var bookingid = BookHotelAPI.submitBookingAction(data);
            this.props.SetHotelBookingId(bookingid);
            this.props.SetComponent("hotel");
            this.props.history.push("/loader")
           // this.props.history.push("/hotelconfirmation")
        }
        else
        {
            alert("Please fill all the details");
        }
    }

    setView = (view) => {
    console.log("view clicked")
        var stateTemp =this.state;
        stateTemp.view = view;
        this.setState(stateTemp);
    }

    validateCvv(){

        var val = document.getElementById("contactInfoUsr").value;
        if(val.length==0)
        {
            document.getElementById("addValiadationcvv").innerHTML="Field can  not be empty";
            document.getElementById("saveUsrInfo").disabled = true;
        }
        else{
            var RegExpression =new RegExp("^[0-9]{3}$");
            if( RegExpression.test(val))
            {
                document.getElementById("addValiadationcvv").innerHTML="Valid CVv";
                var x1 = document.getElementById("addValiadationcvv");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById("addValiadationcvv").innerHTML="Cvv number must be of 3 digits";
                var x1 = document.getElementById("addValiadationcvv");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }


    validateCard(){

        var val = document.getElementById("cardnumber").value;
        if(val.length==0)
        {
            document.getElementById("addValiadationcard").innerHTML="Field can  not be empty";
            document.getElementById("saveUsrInfo").disabled = true;
        }
        else{
            var RegExpression =new RegExp("^[0-9]{16}$");
            if( RegExpression.test(val))
            {
                document.getElementById("addValiadationcard").innerHTML="Valid Card Number";
                var x1 = document.getElementById("addValiadationcard");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById("addValiadationcard").innerHTML="Card number must be of 16 digits";
                var x1 = document.getElementById("addValiadationcard");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }

    validateexpdate(){

        var val = document.getElementById("expdate").value;
        if(val.length==0)
        {
            document.getElementById("addValiadationexpdate").innerHTML="Field can  not be empty";
            document.getElementById("saveUsrInfo").disabled = true;
        }
        else{
            var RegExpression =new RegExp("^(0[1-9]|1[0-2])\\/([0-9]{2})$");
            if( RegExpression.test(val))
            {
                document.getElementById("addValiadationexpdate").innerHTML="Valid CVv";
                var x1 = document.getElementById("addValiadationexpdate");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById("addValiadationexpdate").innerHTML="Expiry Date must be in MM/YY format";
                var x1 = document.getElementById("addValiadationexpdate");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }

    validateName(id,validationTxtId){
        var val = document.getElementById(id).value;
        if(val.length==0)
        {
            document.getElementById(validationTxtId).innerHTML="Field can  not be empty";
            document.getElementById("saveUsrInfo").disabled = true;
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
            document.getElementById("addValiadationPhone").innerHTML="Field can  not be empty";
            document.getElementById("saveUsrInfo").disabled = true;
        }
        else{
            var RegExpression =new RegExp("^[0-9]{10}$");
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

    validateEmail(){
        var x = document.getElementById("emailId").value;
        if(x.length==0)
        {
            document.getElementById("addValiadationEmail").innerHTML="Field can  not be empty";
            document.getElementById("saveUsrInfo").disabled = true;
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

    validateAge(){

        var val = document.getElementById("age").value;
        if(val.length==0)
        {
            document.getElementById("addValiadationage").innerHTML="Field can  not be empty";
            document.getElementById("saveUsrInfo").disabled = true;
        }
        else{
            var RegExpression =new RegExp("^[0-9]{2}$");
            if( RegExpression.test(val))
            {
                document.getElementById("addValiadationage").innerHTML="Valid Age";
                var x1 = document.getElementById("addValiadationage");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById("addValiadationage").innerHTML="Age must be 2 digits";
                var x1 = document.getElementById("addValiadationage");
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
            document.getElementById("addValiadationZip").innerHTML="Field can  not be empty";
            document.getElementById("saveUsrInfo").disabled = true;
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

    validateStreet(id,validationTxtId){
        var val = document.getElementById(id).value;
        if(val.length==0)
        {
            document.getElementById(validationTxtId).innerHTML="Field can  not be empty";
            document.getElementById("saveUsrInfo").disabled = true;
        }
        else{
            var RegExpression = /^[a-zA-Z]*$/;
            if( RegExpression.test(val))
            {
                document.getElementById(validationTxtId).innerHTML="Valid Value";
                var x1 = document.getElementById(validationTxtId);
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById(validationTxtId).innerHTML="Value can accept only alphabets";
                var x1 = document.getElementById(validationTxtId);
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }










    render() {
    return ( 
        <div className="container-fluid-hotel">
   <div className="row text-align-left">
      <form>
         <div className="form-group">
            <h3>HOTEL BOOKING DETAILS</h3>
            <div>
               <span className="abc">HOTEL NAME: </span>
                <span>{this.props.hotelPageData.HotelName}</span>
               <br/>
               <span className="abc">CHECK IN DATE: </span>
                <span>{this.props.bookhotel.checkindate}</span>
               <br/>
               <span className="abc">CHECK OUT DATE: </span>
                <span>{this.props.bookhotel.checkoutdate}</span>
               <br/>
               <span className="abc">NUMBER OF ROOMS: </span>
                <span>{this.props.bookhotel.noRooms}</span>
               <br/>
               <span className="abc">ROOM TYPE: </span>
                <span>{this.props.roomData.id}</span>
               <br/>
               <span className="abc">NUMBER OF GUESTS: </span>
                <span>{this.props.bookhotel.noGuests}</span>
               <br/>
               <span className="abc">BILL: </span>
                <span>{this.state.bill}</span>
               <br/>
               <br/>
               <br/>
            </div>
         </div>

          <h3>TRAVELLER INFORMATION</h3>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <span>FIRST NAME</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="FIRST NAME"
                id="firstNameId"
                value={this.state.firstname}
                onChange={(event) => {
                    this.setState({
                        firstname: event.target.value
                    });
                }}
                onBlur={()=>this.validateName('firstNameId','addValiadationfName')}
            />
            </span>
                      <span id="addValiadationfName"></span>
                  </div>
                  <div className="form-group">
                      <span>MIDDLE NAME</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="MIDDLE NAME"
                id="middleNameId"
                placeholder="NAME"
                value={this.state.middlename}
                onChange={(event) => {
                    this.setState({
                        middlename: event.target.value
                    });
                }}
                onBlur={()=>this.validateName('middleNameId','addValiadationmName')}
            />
            </span>
                      <span id="addValiadationmName"></span>
                  </div>
                  <div className="form-group">
                      <span>AGE</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                id = "age"
                placeholder="AGE"
                value={this.state.age}
                onChange={(event) => {
                    this.setState({
                        age: event.target.value
                    });
                }}
                onBlur={()=>this.validateAge('AGE','addValiadationage')}
            />
            </span>
                      <span id="addValiadationage"></span>
                  </div>
                  <div className="form-group">
                      <span>PHONE NUMBER</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                id="phoneId"
                placeholder="PHONE"
                value={this.state.phoneNumber}
                onChange={(event) => {
                    this.setState({
                        phoneNumber: event.target.value
                    });
                }}
                onBlur={()=>this.validateNumber()}
            />
            </span>
                      <span id="addValiadationPhone"></span>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <span>LAST NAME</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                id="lastNameId"
                placeholder="LAST NAME"
                value={this.state.lastname}
                onChange={(event) => {
                    this.setState({
                        lastname: event.target.value
                    });
                }}
                onBlur={()=>this.validateName('lastNameId','addValiadationlName')}
            />
            </span>
                      <span id="addValiadationlName"></span>
                  </div>
                  <div className="form-group">
                      <span>GENDER</span><p></p>
                      <span>

            <input type="radio" name="gender" value="male" onChange={(event) => {
                this.setState({
                    gender: "male"
                });
            }}/> Male
  <input type="radio" name="gender" value="female" onChange={(event) => {
      this.setState({
          gender: "female"
      });
  }}/> Female
            </span>
                  </div>
                  <div className="form-group">
                      <span>EMAIL</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                id="emailId"
                placeholder="EMAIL"
                value={this.state.email}
                onChange={(event) => {
                    this.setState({
                        email: event.target.value
                    });
                }}
                onBlur={()=>this.validateEmail()}
            />
            </span>
                      <span id="addValiadationEmail"></span>
                  </div>
              </div>
          </div>


          <h3>BILLING INFORMATION</h3>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <span>STREET</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                id = "street"
                placeholder="STREET"
                value={this.state.street}
                onChange={(event) => {
                    this.setState({
                        street: event.target.value
                    });
                }}

            />
            </span>
                      <span id="addValiadationstreet"></span>
                  </div>
                  <div className="form-group">
                      <span>POSTAL CODE</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                id="zipcodeId"
                placeholder="POSTAL CODE"
                value={this.state.postalCode}
                onChange={(event) => {
                    this.setState({
                        postalCode: event.target.value
                    });
                }}
                onBlur={()=>this.validateZip()}
            />
            </span>
                      <span id="addValiadationZip"></span>
                  </div>
                  <div className="form-group">
                      <span>STATE / REGION</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                id = "state"
                placeholder="STATE/REGION"
                value={this.state.region}
                onChange={(event) => {
                    this.setState({
                        region: event.target.value
                    });
                }}
                onBlur={()=>this.validateName('state','addValiadationstate')}
            />
            </span>
                      <span id="addValiadationstate"></span>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <span>CITY</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                id = "city"
                placeholder="CITY"
                value={this.state.city}
                onChange={(event) => {
                    this.setState({
                        city: event.target.value
                    });
                }}
                onBlur={()=>this.validateName('city','addValiadationcity')}
            />
            </span>
                      <span id="addValiadationcity"></span>
                  </div>
                  <div className="form-group">
                      <span>COUNTRY</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                id = "country"
                placeholder="COUNTRY"
                value={this.state.country}
                onChange={(event) => {
                    this.setState({
                        country: event.target.value
                    });
                }}
                onBlur={()=>this.validateName('country','addValiadationcountry')}
            />
            </span>
                      <span id="addValiadationcountry"></span>
                  </div>
              </div>
          </div>
          <h3>PAYMENT INFORMATION</h3>
          <div className="row">
              <div className="col-md-12">
                  <span>ACCEPTED CARDS</span>
                  <img src="card.png" className="pad-left card-img"/>
              </div>
          </div>
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                      <span>NAME ON CARD</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                id = "name"
                placeholder="NAME ON CARD"
                value={this.state.name}
                onChange={(event) => {
                    this.setState({
                        name: event.target.value
                    });
                }}
                onBlur={()=>this.validateName('name','addValiadationname')}
            />
            </span>
                      <span id="addValiadationname"></span>
                  </div>
                  <div className="form-group">
                      <span>CARD NUMBER</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="CARD NUMBER"
                placeholder="CARD NUMBER"
                id = "cardnumber"
                value={this.state.cardnumber}
                onChange={(event) => {
                    this.setState({
                        cardnumber: event.target.value
                    });
                }}
                onBlur={()=>this.validateCard('cardnumber','addValiadationcard')}
            />
            </span>
                  </div>
                  <span id="addValiadationcard"></span>
              </div>
              <div className="col-md-6">

                  <div className="form-group">
                      <span>EXPIRY DATE</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="EXPIRY DATE"
                placeholder="EXPIRY DATE"
                id = "expdate"
                value={this.state.expirydate}
                onChange={(event) => {
                    this.setState({
                        expirydate: event.target.value
                    });
                }}
                onBlur={()=>this.validateexpdate('expdate','addValiadationexpdate')}
            />
            </span>
                      <span id="addValiadationexpdate"></span>
                  </div>
                  <div className="form-group">
                      <span>SECURITY CODE</span><p></p>
                      <span>
            <input
                className="def form-control"
                type="text"
                label="CVV"
                placeholder="CVV"
                id = "contactInfoUsr"
                value={this.state.cvv}
                onChange={(event) => {
                    this.setState({
                        cvv: event.target.value
                    });
                }}
                onBlur={()=>this.validateCvv('contactInfoUsr','addValiadationcvv')}
            />
            </span>
                      <span id="addValiadationcvv"></span>
                  </div>
              </div>
              <div className="form-group">
                  <button
                      className="btn btn-primary"
                      type="button"
                      id = "saveUsrInfo"
                      onClick={() =>
                          this.bookHotelAction()}>
                      <Ionicon icon="md-lock"
                               className="padding-right-3" fontSize="25px" color="#FFFFFF"/>
                      PROCEED TO PAY
                  </button>
              </div>
          </div>
      </form>
   </div>
</div>
    );
  }
}


function mapStateToProps(state){
    return {
        hotelPageData: state.hotels.hotelPageData,
        bookhotel: state.hotels.bookhotel,
        roomData : state.hotels.roomData
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({SetHotel : SetHotel,SetHotelBookingId:SetHotelBookingId, SetComponent:SetComponent}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelForm));

