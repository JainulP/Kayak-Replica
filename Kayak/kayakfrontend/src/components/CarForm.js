import {Route, withRouter, BrowserRouter} from 'react-router-dom';
import '../App.css';
import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BookCar} from '../actions/actionsAll';
import * as CarAPI from '../api/CarAPI';
import {SetCarBookingId} from '../actions/actionsAll';
import {SetComponent} from '../actions/actionsAll';

class CarForm extends Component {
    constructor(props) {
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
            gender:""
        }
    }

    componentWillMount() {
        console.log(this.props)
    }
    bookCarAction = () =>{
        var data={
            bookingData: this.state,
            carData: this.props.carBook
        }
        var bookingid = CarAPI.submitBookingAction(data);
        this.props.SetCarBookingId(bookingid);
        this.props.SetComponent("car");
        this.props.history.push("/loader")
        //this.props.history.push("/carconfirmation");
    }
    setView = (view) => {
        console.log("view clicked")
        var stateTemp = this.state;
        stateTemp.view = view;
        this.setState(stateTemp);
    }

    validateCvv(){

        var val = document.getElementById("contactInfoUsr").value;
        if(val.length==0)
        {
            document.getElementById("addValiadationcvv").innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
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
            document.getElementById("addValiadationcard").innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
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
            document.getElementById("addValiadationexpdate").innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
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


    render() {
        return (
            <div className="container-fluid-hotel">
                <div className="row text-align-left">
                    <form>
                        <div className="form-group">

                            <h3>CAR BOOKING DETAILS</h3>
                            <div>
                                <span className="abc">CITY: </span>
                                <br/>
                                <span className="abc">CAR TYPE: </span>
                                <span>{this.props.carBook.carName}</span>
                                <br/>
                                <span className="abc">CAR TYPE: </span>
                                <span>{this.props.carBook.carType}</span>
                                <br/>
                                <span className="abc">PICK-UP DATE: </span>
                                <br/>
                                <span className="abc">PICK-UP LOCATION: </span>
                                <br/>
                                <span className="abc">DROP-OFF DATE: </span>
                                <br/>
                                <span className="abc">DROP-OFF LOCATION: </span>
                                <br/>
                                <span className="abc">BILL: </span>
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
                placeholder="NAME"
                value={this.state.firstname}
                onChange={(event) => {
                    this.setState({
                        firstname: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                                <div className="form-group">
                                    <span>MIDDLE NAME</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.middlename}
                onChange={(event) => {
                    this.setState({
                        middlename: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                                <div className="form-group">
                                    <span>AGE</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.age}
                onChange={(event) => {
                    this.setState({
                        age: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                                <div className="form-group">
                                    <span>PHONE NUMBER</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.phoneNumber}
                onChange={(event) => {
                    this.setState({
                        phoneNumber: event.target.value
                    });
                }}
            />
            </span>
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
                placeholder="NAME"
                value={this.state.lastname}
                onChange={(event) => {
                    this.setState({
                        lastname: event.target.value
                    });
                }}
            />
            </span>
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
                placeholder="NAME"
                value={this.state.email}
                onChange={(event) => {
                    this.setState({
                        email: event.target.value
                    });
                }}
            />
            </span>
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
                placeholder="NAME"
                value={this.state.street}
                onChange={(event) => {
                    this.setState({
                        street: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                                <div className="form-group">
                                    <span>POSTAL CODE</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.postalCode}
                onChange={(event) => {
                    this.setState({
                        postalCode: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                                <div className="form-group">
                                    <span>STATE / REGION</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.region}
                onChange={(event) => {
                    this.setState({
                        region: event.target.value
                    });
                }}
            />
            </span>
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
                placeholder="NAME"
                value={this.state.city}
                onChange={(event) => {
                    this.setState({
                        city: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                                <div className="form-group">
                                    <span>COUNTRY</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.country}
                onChange={(event) => {
                    this.setState({
                        country: event.target.value
                    });
                }}
            />
            </span>
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
                placeholder="NAME"
                value={this.state.name}
                onChange={(event) => {
                    this.setState({
                        name: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                                <div className="form-group">

                                    <span>CARD NUMBER</span><p></p>

                                    <span>

            <input
                className="def form-control"
                type="text"
                label="CARD NUMBER"
                id = "cardnumber"
                placeholder="CARD NUMBER"
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
                                        this.bookCarAction()}>
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


function mapStateToProps(state) {
    console.log(state);
    return {
        carBook: state.cars.carBook
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({BookCar: BookCar, SetCarBookingId:SetCarBookingId, SetComponent: SetComponent}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarForm));

