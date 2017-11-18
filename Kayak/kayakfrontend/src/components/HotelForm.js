import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
class HotelForm extends Component {
    constructor(props){
        super(props);
     this.state = {
         cardnumber:"",
         cvv:"",
         expirydate:"",
         name:"",
         zip:"",
         password:"",
          view:"rooms"
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
        <div className="row text-align-left">
    <form>
                        <div className="form-group">
                            <h3>BOOKING DETAILS</h3>
        <div>
        <span className="abc">HOTEL NAME:</span>
        <br/>
        <span className="abc">CHECK IN DATE:</span>
        <br/>
        <span className="abc">CHECK OUT DATE:</span>
         <br/>
        <span className="abc">NUMBER OF ROOMS:</span>
        <br/>
        <span className="abc">ROOM TYPE:</span>
        <br/>
        <span className="abc">NUMBER OF GUESTS:</span>
        <br/>
        <span className="abc">BILL:</span>
        <br/>
        <br/>
        <br/>
        </div>
                        </div>
         <h3>PAYMENT</h3>
       <span>ACCEPTED CARDS</span> 
        <img src="card.png"  className="pad-left card-img"/>
        <div className="form-group">
       
        <span>NAME ON CARD</span>
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
       
        <span>CARD NUMBER</span>
        <span>
                            <input
                                className="def form-control"
                                type="text"
                                label="CARD NUMBER"
                                placeholder="CARD NUMBER"
                                value={this.state.cardnumber}
                                onChange={(event) => {
                                    this.setState({
                                        cardnumber: event.target.value
                                    });
                                }}
                            />
</span>
                        </div>
<div className="form-group">
       
        <span>EXPIRY DATE</span>
        <span>
                            <input
                                className="def form-control"
                                type="text"
                                label="EXPIRY DATE"
                                placeholder="EXPIRY DATE"
                                value={this.state.expirydate}
                                onChange={(event) => {
                                    this.setState({
                                        expirydate: event.target.value
                                    });
                                }}
                            />
</span>
                        </div>


 <div className="form-group">
       
        <span>SECURITY CODE</span>
        <span>
                            <input
                                className="def form-control"
                                type="text"
                                label="CVV"
                                placeholder="CVV"
                                value={this.state.cvv}
                                onChange={(event) => {
                                    this.setState({
                                        cvv: event.target.value
                                    });
                                }}
                            />
</span>
                        </div>
<div className="form-group">
       
        <span>ZIP/POSTAL CODE</span>
        <span>
                            <input
                                className="def form-control"
                                type="text"
                                label="ZIP/POSTAL CODE"
                                placeholder="ZIP/POSTAL CODE"
                                value={this.state.zip}
                                onChange={(event) => {
                                    this.setState({
                                        zip: event.target.value
                                    });
                                }}
                            />
</span>
                        </div>



                        
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}>
                                    <Ionicon icon="md-lock" 
                              className="padding-right-3" fontSize="25px" color="#FFFFFF"/>
                                PROCEED TO PAY
                            </button>
                        </div>
                    </form>
        
        
        </div>
        
            </div>
    );
  }
}

export default withRouter(HotelForm);

