import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Route, withRouter } from 'react-router-dom';
import HotelSearchBox from'./HotelSearchBox';
import FlightSearchBox from'./FlightSearchBox';
import * as  TravellerAndPaymentAPI from '../api/TravellerAndPaymentAPI';
import * as  BookingAPI from '../api/BookingAPI';
import CarSearchBox from'./CarSearchBox';
class SearchBills extends Component {
    constructor(props){
        super(props);
         this.state = {
          
        }
    }
   componentWillMount(){
        var data= {

            "userid": 1
        }

       BookingAPI.getAllBookingsForAdmin(data)
            .then((res) => {
               var state_temp = this.state;
                state_temp.BookingResults = res.op;
                this.setState(state_temp);
            });
    }
    
  render() {
      
    return (  
        <div>
        <h5>search bills</h5>
        </div>
    );
  }
        
  }


export default withRouter(SearchBills);
