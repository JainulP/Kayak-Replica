import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Route, withRouter } from 'react-router-dom';
import HotelSearchBox from'./HotelSearchBox';
import FlightSearchBox from'./FlightSearchBox';

import * as  TravellerAndPaymentAPI from '../api/TravellerAndPaymentAPI';

import * as  BookingAPI from '../api/BookingAPI';
import CarSearchBox from'./CarSearchBox';
var divStyle = {
    width: "75%"

};
var dropdownStyle={
    float:"left",
    marginBottom: "10px",
    marginTop: "10px",
    padding: "12px",
    fontSize: "16px",
    borderRadius:"5px",
    cursor: "pointer"
}
var reviewStyle={
    color:"orange"
}
var hidereview={
    display:"none"
}
var buttonStyle = {
    width: "65px"
};
var hideIdStyle={
    display:"none"
}
var BookingResults=[];

class SearchBills extends Component {
    constructor(props){
        super(props);
        this.state ={

            abc: 'llll',
            BookingResults:[]
       };
        this.showbookingactivity=this.showbookingactivity.bind(this);
    }
    componentWillMount(){
        var data= {

            "userid": 1
        }
        //var dateVal=document.getElementById("datePicker1").value;
       /* var data1={
            "date":dateVal
        }*/

        debugger;
        var aa;
        var state_temp = this.state;
        var self = this;
       

       BookingAPI.getAllBookingsForAdmin()

            .then((res) => {
                var state_temp = this.state;
                state_temp.BookingResults = res.bookings;
                this.setState(state_temp);
                console.log(state_temp);
             let mode;
    
      mode = 'middle';
    
    this.setState({ mode :mode});
            console.log(mode);
            console.log(this.state);

            });
    }
   /*     BookingAPI.getAllBookingsByDate(data1)
debugger;
            .then((res) => {
                var state_temp = this.state;
                state_temp.BookingResults = res.bookings;
                this.setState(state_temp);
                console.log(state_temp);
             let mode;
    
      mode = 'middle';
    
    this.setState({ mode :mode});
            console.log(mode);
            console.log(this.state);

            });
    }*/
    showReview=(para)=>{
        debugger;
        document.getElementById("reviewPopupId").innerHTML=para.userid;

        var x = document.getElementById("reviewactivity");

        x.style.display = "block";
    };

    reviewSave(val,reviewValId,reviewTxt){
        var id=document.getElementById('reviewPopupId').innerHTML;

        var reviewVal=document.getElementById(reviewValId).value;
        var reviewTxt=document.getElementById(reviewTxt).value;
    }

    reviewClose(){
        //$('#bookingactivity').hide("slow");
        var x = document.getElementById("reviewactivity");

        x.style.display = "none";
        debugger;
    }

    showbookingactivity=(para)=>{
        debugger;
        var bookType="hotel";
        if(para.city!=undefined)
        {
            bookType="car";
        }
        else if(para.SourceAirport!=undefined)
        {
            bookType="flight";
        }

        if(bookType=="hotel")
        {
            var checkindate=para.CheckInDate.split('T')[0];
            var checkoutdate=para.CheckOutDate.split('T')[0];
            document.getElementById("text1").innerHTML = "Hotel Name :"+ para.HotelName;
            document.getElementById("text2").innerHTML = "Location :"+ para.StreetAddress +","+para.Location;
            document.getElementById("text3").innerHTML = para.State;
            document.getElementById("text4").innerHTML = "Total Rooms Booked : "+para.NumberOfRooms;
            document.getElementById("text5").innerHTML = "Children : "+para.numberofchildren;
            document.getElementById("text6").innerHTML = "Check-in : " + checkindate;
            document.getElementById("text7").innerHTML = "Check-Out : "+ checkoutdate;
            document.getElementById("text8").innerHTML = "totalcost : "+ para.TotalCost;
        }
        else if(bookType=="flight")
        {
            var BookingDateTime=para.BookingDateTime.split('T')[0];
            var TravelDateTo=para.TravelDateTo.split('T')[0];
            document.getElementById("text1").innerHTML = "Flight Id :"+ para.FlightId;
            document.getElementById("text2").innerHTML = "Source Airport :"+ para.SourceAirport ;
            document.getElementById("text3").innerHTML = "Destination Airport :"+ para.DestinationAirport ;
            document.getElementById("text4").innerHTML = "Airlines Name : "+para.AirlinesName;
            document.getElementById("text5").innerHTML = "Booking Date Time : "+para.BookingDateTime;
            document.getElementById("text6").innerHTML = "TravelDate To : " + para.TravelDateTo;
            document.getElementById("text7").innerHTML = "Number Of Seats : "+ para.NumberOfSeats;
            document.getElementById("text8").innerHTML = "Total Cost : "+ para.TotalCost;
        }
        else
        {
            var s_date=para.s_date.split('T')[0];
            var e_date=para.e_date.split('T')[0];
            document.getElementById("text1").innerHTML = "Booked in  (City):"+ para.city;
            document.getElementById("text2").innerHTML = "Booked on :"+ para.s_date ;
            document.getElementById("text3").innerHTML = "Booked Till :"+ para.e_date ;
            document.getElementById("text4").innerHTML = "Car Name : "+para.carName;
            document.getElementById("text5").innerHTML = "Car Number : "+para.car_number;
            document.getElementById("text6").innerHTML = "Car Type : " + para.carType;

        }


        var x = document.getElementById("bookingactivity");

        x.style.display = "block";

        //$('#bookingactivity').show("slow");
        debugger;
    };

    searchBookingByDate(){
        var date1=document.getElementById("datePicker1").value;

         var data= {

            "date": date1
        }
        
        debugger;
        var aa=this.state.BookingResults;
        BookingAPI.getAllBookingsByDate(data)
             .then((res) => {
            debugger;
                var state_temp = this.state;
                state_temp.BookingResults = res.bookings;
                this.setState(state_temp);
                console.log(state_temp);
             let mode;
    
      mode = 'middle';
    
    this.setState({ mode :mode});
            console.log(mode);
            console.log(this.state);

            });
    }

searchBookingByMonthandYear(){
     var date1=document.getElementById("datePicker3").value;
var date2= document.getElementById("gMonth2").value;
         var data= {

            "month": date2,"year":date1
        }
        
        debugger;
        var aa=this.state.BookingResults;
        BookingAPI.getAllBookingsByMonthAndYear(data)
             .then((res) => {
            debugger;
                var state_temp = this.state;
                state_temp.BookingResults = res.bookings;
                this.setState(state_temp);
                console.log(state_temp);
             let mode;
    
      mode = 'middle';
    
    this.setState({ mode :mode});
            console.log(mode);
            console.log(this.state);

            });
}


    bookingactivityclose(){
        //$('#bookingactivity').hide("slow");
        var x = document.getElementById("bookingactivity");

        x.style.display = "none";
        debugger;
    }

    render() {
          debugger;
      if(this.state.mode=='middle'){
       var BookingDetailList=[];
      var BookingResults = this.state.BookingResults;
      var hotelBookingResults=this.state.BookingResults.hotelBookings;
      var flightBookingResults=this.state.BookingResults.flightBookings;
      var carBookingResults=this.state.BookingResults.carBookings;
   
        var pushIconType;
      var idval='1';
      
        debugger;
        
            this.state.BookingResults.hotelBookings.map(function (lis, index) {


                var CheckInDate = lis.CheckInDate.split('T')[0];
                var CheckOutDate = lis.CheckOutDate.split('T')[0];
                pushIconType = 'fa fa-hotel';

                BookingDetailList.push(<div style={divStyle} className="col-sm-12 b">

                        <div className="col-sm-3 a">
                            <button type='button' className='btn btn-default'>
                                <span className={pushIconType}></span>
                            </button>
                            {lis.HotelName} {lis.Location}</div>
                        <div className="col-sm-3 a">{CheckInDate}-to-{CheckOutDate}</div>
                        <div className="col-sm-2 a  "><span className="hideid">{lis.userid}</span>
                            <a href="#" className="anchorTripTag" id={lis.userid}
                               onClick={() => this.showbookingactivity(lis)}>
                                Details
                            </a>

                            <div id="bookingactivity">
                                <div id="bookingactivitycontent">
                                    <h4><b>Booking Details</b></h4>
                                    <h5 className="bookingContent" id="text1"></h5>
                                    <h5 className="bookingContent" id="text2"></h5>
                                    <h5 className="bookingContent" id="text3"></h5>
                                    <h5 className="bookingContent" id="text4"></h5>
                                    <h5 className="bookingContent" id="text5"></h5>
                                    <h5 className="bookingContent" id="text6"></h5>
                                    <h5 className="bookingContent" id="text7"></h5>
                                    <h5 className="bookingContent" id="text8"></h5>
                                    <br/>
                                    <button type="button" className="btn btn-warning col-sm-4 bookingContent"
                                            id="popupclose" onClick={() => this.bookingactivityclose()} value="Close">Close
                                    </button>
                                </div>

                            </div>


                            <div id="reviewactivity">
                                <div id="reviewactivitycontent">
                                    <h5 style={reviewStyle}>Please enter your review here:</h5>
                                    <select name="reviews" id="reviewVal" style={dropdownStyle}>
                                        <option title="Pretty Bad" value="1">1</option>
                                        <option title="Pretty Bad" value="2">2</option>
                                        <option title="Bad" value="3">3</option>
                                        <option title="Bad" value="4">4</option>
                                        <option title="OK" value="5">5</option>
                                        <option title="Good" value="6">6</option>
                                        <option title="Good" value="7">7</option>
                                        <option title="Better than most" value="8">8</option>
                                        <option title="Fantastic" value="9">9</option>
                                        <option title="Best" value="10">10</option>


                                    </select>
                                    <div className="form-group">

                                        <textarea placeholder="Enter your comments here...." className="form-control"
                                                  id="reviewText" rows="4"></textarea>
                                        <span id="reviewPopupId" style={hideIdStyle}></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent"
                                                    style={buttonStyle} id="reviewpopupsave"
                                                    onClick={() => this.reviewSave(lis, 'reviewVal', 'reviewText')}
                                                    value="Save">Save
                                            </button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent"
                                                    style={buttonStyle} id="reviewpopupclose"
                                                    onClick={() => this.reviewClose()} value="Close">Close
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-2"><a href="#" className="anchorTripTag" style={hideIdStyle} id={lis.userid}
                                                     onClick={() => this.showReview(lis)}>
                            Reviews
                        </a></div>
                        <div className="col-sm-2 a  ">
                            <button type="button" style={hideIdStyle} className="btn btn-warning">
                                Delete
                            </button>
                        </div>
                    </div>
                )
            }, this);
            this.state.BookingResults.flightBookings.map(function (lis, index) {


                pushIconType = 'fa fa-plane';


                BookingDetailList.push(<div style={divStyle} className="col-sm-12 b">

                        <div className="col-sm-3 a">
                            <button type='button' className='btn btn-default'>
                                <span className={pushIconType}></span>
                            </button>
                            {lis.SourceAirport}- {lis.NumberOfSeats} Seats
                        </div>
                        <div className="col-sm-3 a">{lis.TravelDateTo}----{lis.checkoutdate}</div>
                        <div className="col-sm-2 a  "><span className="hideid">{lis.userid}</span>
                            <a href="#" className="anchorTripTag" id={lis.userid}
                               onClick={() => this.showbookingactivity(lis)}>
                                Details
                            </a>

                            <div id="bookingactivity">
                                <div id="bookingactivitycontent">
                                    <h4><b>Booking Details</b></h4>
                                    <h5 className="bookingContent" id="text1"></h5>
                                    <h5 className="bookingContent" id="text2"></h5>
                                    <h5 className="bookingContent" id="text3"></h5>
                                    <h5 className="bookingContent" id="text4"></h5>
                                    <h5 className="bookingContent" id="text5"></h5>
                                    <h5 className="bookingContent" id="text6"></h5>
                                    <h5 className="bookingContent" id="text7"></h5>
                                    <h5 className="bookingContent" id="text8"></h5>
                                    <br/>
                                    <button type="button" className="btn btn-warning col-sm-4 bookingContent"
                                            id="popupclose" onClick={() => this.bookingactivityclose()} style={hideIdStyle} value="Close">Close
                                    </button>
                                </div>

                            </div>


                            <div id="reviewactivity">
                                <div id="reviewactivitycontent">
                                    <h5 style={reviewStyle}>Please enter your review here:</h5>
                                    <select name="reviews" id="reviewVal" style={dropdownStyle}>
                                        <option title="Pretty Bad" value="1">1</option>
                                        <option title="Pretty Bad" value="2">2</option>
                                        <option title="Bad" value="3">3</option>
                                        <option title="Bad" value="4">4</option>
                                        <option title="OK" value="5">5</option>
                                        <option title="Good" value="6">6</option>
                                        <option title="Good" value="7">7</option>
                                        <option title="Better than most" value="8">8</option>
                                        <option title="Fantastic" value="9">9</option>
                                        <option title="Best" value="10">10</option>


                                    </select>
                                    <div className="form-group">

                                        <textarea placeholder="Enter your comments here...." className="form-control"
                                                  id="reviewText" rows="4"></textarea>
                                        <span id="reviewPopupId" style={hideIdStyle}></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent"
                                                    style={buttonStyle} id="reviewpopupsave"
                                                    onClick={() => this.reviewSave(lis, 'reviewVal', 'reviewText')}
                                                    value="Save">Save
                                            </button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent"
                                                    style={buttonStyle} id="reviewpopupclose"
                                                    onClick={() => this.reviewClose()} value="Close">Close
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-2"><a href="#" className="anchorTripTag" style={hidereview} id={lis.userid}
                                                     onClick={() => this.showReview(lis)}>
                            Reviews
                        </a></div>
                        <div className="col-sm-2 a  ">
                            <button type="button" style={hideIdStyle} className="btn btn-warning">
                                Delete
                            </button>
                        </div>
                    </div>
                )
            }, this);
            this.state.BookingResults.carBookings.map(function (lis, index) {


                pushIconType = 'fa fa-car';
                var checkindate = lis.s_date.split('T')[0];
                var checkoutdate = lis.e_date.split('T')[0];
                BookingDetailList.push(<div style={divStyle} className="col-sm-12 b">

                        <div className="col-sm-3 a">
                            <button type='button' className='btn btn-default'>
                                <span className={pushIconType}></span>
                            </button>
                            {lis.carName} {lis.car_number}</div>
                        <div className="col-sm-3 a">{checkindate}to{checkoutdate}</div>
                        <div className="col-sm-2 a  "><span className="hideid">{lis.userid}</span>
                            <a href="#" className="anchorTripTag" id={lis.userid}
                               onClick={() => this.showbookingactivity(lis)}>
                                Details
                            </a>

                            <div id="bookingactivity">
                                <div id="bookingactivitycontent">
                                    <h4><b>Booking Details</b></h4>
                                    <h5 className="bookingContent" id="text1"></h5>
                                    <h5 className="bookingContent" id="text2"></h5>
                                    <h5 className="bookingContent" id="text3"></h5>
                                    <h5 className="bookingContent" id="text4"></h5>
                                    <h5 className="bookingContent" id="text5"></h5>
                                    <h5 className="bookingContent" id="text6"></h5>
                                    <h5 className="bookingContent" id="text7"></h5>
                                    <h5 className="bookingContent" id="text8"></h5>
                                    <br/>
                                    <button type="button" className="btn btn-warning col-sm-4 bookingContent"
                                            id="popupclose" onClick={() => this.bookingactivityclose()} value="Close">Close
                                    </button>
                                </div>

                            </div>


                            <div id="reviewactivity">
                                <div id="reviewactivitycontent">
                                    <h5 style={reviewStyle}>Please enter your review here:</h5>
                                    <select name="reviews" id="reviewVal" style={dropdownStyle}>
                                        <option title="Pretty Bad" value="1">1</option>
                                        <option title="Pretty Bad" value="2">2</option>
                                        <option title="Bad" value="3">3</option>
                                        <option title="Bad" value="4">4</option>
                                        <option title="OK" value="5">5</option>
                                        <option title="Good" value="6">6</option>
                                        <option title="Good" value="7">7</option>
                                        <option title="Better than most" value="8">8</option>
                                        <option title="Fantastic" value="9">9</option>
                                        <option title="Best" value="10">10</option>


                                    </select>
                                    <div className="form-group">

                                        <textarea placeholder="Enter your comments here...." className="form-control"
                                                  id="reviewText" rows="4"></textarea>
                                        <span id="reviewPopupId" style={hideIdStyle}></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent"
                                                    style={buttonStyle} id="reviewpopupsave"
                                                    onClick={() => this.reviewSave(lis, 'reviewVal', 'reviewText')}
                                                    value="Save">Save
                                            </button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent"
                                                    style={buttonStyle} id="reviewpopupclose"
                                                    onClick={() => this.reviewClose()} value="Close">Close
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-2"><a href="#" className="anchorTripTag" style={hidereview} id={lis.userid}
                                                     onClick={() => this.showReview(lis)}>
                            Reviews
                        </a></div>
                        <div className="col-sm-2 a  ">
                            <button type="button" style={hideIdStyle} className="btn btn-warning">
                                Delete
                            </button>
                        </div>
                    </div>
                )
            }, this);
}
        return (
            <div>
                <h4>User Bookings</h4>
                {BookingDetailList}
                <div className = "col-sm-12 col-xs-12" >
                  
                           <b> Search Bills with month and years</b>
      
                </div>
                <div className = "col-sm-6 col-xs-">
                    <input className = "form-control datetimepicker" id = "datePicker1" name = "date" placeholder = "MM/DD/YYYY" type = "date" />
                </div>


                <div className = "col-sm-6 col-xs-6" >
                    <button className = "btn-btn-info" id = "btn1" onClick={()=>this.searchBookingByDate()}>Search</button>
                </div>
<div className = "col-sm-12 col-xs-12" >
                           <b> Search Bills with month and years</b>
        </div>
          <div className = "col-sm-12 col-xs-12" >
                             <select id='gMonth2'>
   
    <option value='1'>Janaury</option>
    <option value='2'>February</option>
    <option value='3'>March</option>
    <option value='4'>April</option>
    <option value='5'>May</option>
    <option value='6'>June</option>
    <option value='7'>July</option>
    <option value='8'>August</option>
    <option value='9'>September</option>
    <option value='10'>October</option>
    <option value='11'>November</option>
    <option value='12'>December</option>
    </select> 
        </div>
        <div className = "col-sm-6 col-xs-6" >
                            <input className = "form-control datetimepicker" id = "datePicker3"  placeholder = "YYYY" type = "text" />
        </div>
       <div className = "col-sm-6 col-xs-6" >
                            <button className = "btn-btn-info" id = "btn1" onClick={()=>this.searchBookingByMonthandYear()}>Search</button>
        </div>

            </div>


        );
    };
}


export default withRouter(SearchBills);
