import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';

var BookingResults = [{
             "id":"1",
             
        "PersonName":"Sri Harsha",
    "Address":"205 colonnade",
    "email":"sriharshav1@gmail.com",
    "hotelname":"The Westin",
     "numberofrooms": "2",
        "numberofadults":"3",
        "numberofchildren":"2",
        "bookingdate": "2017-11-23",
        "checkindate": "2017-12-22",
        "checkoutdate": "2017-12-24",
    "bookingamount":"390",
        "CardNumber":"8880-8880-8880-8880",
        "cvv":"202",
        "expiry":"08/19"
    }
    ]
 var cardNumber=BookingResults[0].CardNumber;
var str = cardNumber.split('-');
var resulcard=str[0]+'xxxx'+'xxxx'+str[3];
class CarBookingConfirmation extends Component {
     render() {
        return ( 
        <div className="pay1">
   <div className="pay2">
	Invoice(Car)
   </div>
    <div className="pay3">
        <div className="pay4">
           
            <span className="pay5">
                {BookingResults[0].PersonName}
            </span>
			 <span className="pay6">
               {BookingResults[0].Address}
            </span>
			<span className="pay7">
			{BookingResults[0].email}
			</span>
        </div>
		
        <div className="pay8">
            <span className="pay9">
                <b>Date : </b>{BookingResults[0].bookingdate}
            </span>
			<span className="pay10">
               <b>Invoice# : </b> 
        {BookingResults[0].id}
            </span>
        </div>
    </div>
    

         <div className="pay11">
     
          <div className="pay12">
            <span className="pay13">
            Booking Details
           </span>
      </div>
	  
      <div className="pay15">
            <span className="pay16">
           Hotel Name
        </span>
         <span className="pay18">
            {BookingResults[0].hotelname}
        </span>
      </div>
	   <div className="pay19">
            <span className="pay20" >
            Check-In Date            
        </span>
         <span className="pay22">
            {BookingResults[0].checkindate}
        </span>
      </div>
        <div className="pay15">
            <span className="pay16">
            Check-Out Date
        </span>
         <span className="pay18">
           {BookingResults[0].checkoutdate}
        </span>
      </div>
	   <div className="pay19">
            <span className="pay20" >
            Rooms Booked           
        </span>
         <span className="pay22">
           {BookingResults[0].numberofrooms}
        </span>
      </div>
        <div className="pay15">
            <span className="pay16">
            Adults
        </span>
         <span className="pay18">
           {BookingResults[0].numberofadults}
        </span>
      </div>
	   <div className="pay19">
            <span className="pay20" >
           Children           
        </span>
         <span className="pay22">
            {BookingResults[0].numberofchildren}
        </span>
      </div>

    </div>

    
    
    <div className="pay11">
     
          <div className="pay12">
            <span className="pay13">
            Payment Info
           </span>
         <span className="pay14">
         Amount
        </span>
      </div>
	  
      <div className="pay15">
            <span className="pay16">
            Payment made
          
            
            <span className="pay17">
                (inc all taxes)
            </span>
        </span>
         <span className="pay18">
            {BookingResults[0].bookingamount} USD
        </span>
      </div>
       <div className="pay15">
            <span className="pay16">
            Payment made through
        </span>
         <span className="pay18">
            {resulcard}
        </span>
      </div>
	   <div className="pay19">
            <span className="pay20" >
            Promotional Code            
            <span className="pay21">
                (0%)
            </span>
        </span>
         <span className="pay22">
            0 USD
        </span>
      </div>
	  
	  	   <div className="pay23">
           
         <span className="pay24">
           Total : {BookingResults[0].bookingamount} USD
        </span>
      </div>

    </div>
</div>


    );
    }
}



export default withRouter(CarBookingConfirmation);
