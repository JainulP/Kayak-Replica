

import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import * as BookingAPI from '../api/BookingAPI';
import * as HotelBookingAPI from '../api/HotelBookingAPI';
import * as FlightBookingAPI from '../api/FlightBookingAPI';
import Ionicon from 'react-ionicons';
import * as HotelAPI from '../api/HotelAPI';
import * as CarAPI from '../api/CarAPI';

var divStyle = {
    width: "75%"

};
var reviewStyle={
    color:"orange"
};
var hidereview={
    display:"none"
};
var buttonStyle = {
    width: "65px"
};
var hideIdStyle={
    display:"none"
};
var BookingResults;
var dropdownStyle={
    float:"left",
    marginBottom: "10px",
    marginTop: "10px",
    padding: "12px",
    fontSize: "16px",
    borderRadius:"5px",
    cursor: "pointer"
};

class MyAccount extends Component {
    constructor(props){
        super(props);
        this.state ={

            BookingResults : [],
            mode: undefined ,

            BookingResults : []

        };
        this.showbookingactivity=this.showbookingactivity.bind(this);
    }

    showReview=(para)=>{
        debugger;
        localStorage.setItem("hotelid",para.HotelId);
        localStorage.setItem("bookingid",para.BookingId);
        document.getElementById("reviewPopupId").innerHTML=para.userid;

        var x = document.getElementById("reviewactivity");

        x.style.display = "block";
    };

    reviewSave(val,reviewValId,reviewTxt){
        var id=document.getElementById('reviewPopupId').innerHTML;

        var reviewVal=document.getElementById(reviewValId).value;
        var reviewTxt=document.getElementById(reviewTxt).value;
        var data = {
            "booking_id":localStorage.getItem("bookingid"),
            "user_id":localStorage.getItem("userid"),
            "hotel_id":  localStorage.getItem("hotelid"),
            "rating": reviewVal,
            "review_content": reviewVal,
        }

        HotelAPI.addReview(data)
            .then((res) => {
                console.log(res);
               /* this.props.GetCars(res.value);
                this.props.history.push("/cars");*/
            });



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
    bookingactivityclose(){
        //$('#bookingactivity').hide("slow");
        var x = document.getElementById("bookingactivity");

        x.style.display = "none";
        debugger;
    }



    componentWillMount(){

        debugger;
        var data= {
            "userid": 1
        };
        BookingAPI.getAllBookings(data)
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

                var state_temp = this.state;
                state_temp.BookingResults = res.bookings;
                this.setState(state_temp);

            });
    }


    cancelBooking = (lis, type) =>{
        var data={
            bookingid : lis.BookingId
        }
        if(type == "hotel"){
            HotelBookingAPI.deleteBooking(data).then(function(res){
                console.log(res);
            });
        }
        if(type == "flight"){
            FlightBookingAPI.deleteBooking(data).then(function(res){
                console.log(res);
            });
        }
        if(type == "car"){
            var data={
                id : lis.BookingId
            }
            CarAPI.cancelcar(data).then(function(res){
                console.log(res);
            });
        }

    }
    render() {
        debugger;
        if(this.state.mode=='middle'){
            var BookingDetailList=[];
            var BookingResults = this.state.BookingResults;



            var hotelBookingResults=this.state.BookingResults.hotelBookings;
            var flightBookingResults=this.state.BookingResults.flightBookings;
            var carBookingResults=this.state.BookingResults.carBookings;


            var hotelBookingResults=this.state.BookingResults.hotelBookings;
            var flightBookingResults=this.state.BookingResults.flightBookings;
            var carBookingResults=this.state.BookingResults.carBookings;

            var pushIconType;
            var idval='1';
            debugger;

            this.state.BookingResults.hotelBookings.map(function(lis,index) {


                var CheckInDate=lis.CheckInDate.split('T')[0];
                var CheckOutDate=lis.CheckOutDate.split('T')[0];
                pushIconType='fa fa-hotel';

                BookingDetailList.push(<div style={divStyle} className="col-sm-12 b">

                        <div className="col-sm-3 a"><button type = 'button' className = 'btn btn-default'>
                            <span className = {pushIconType}></span>
                        </button> {lis.HotelName} {lis.Location}</div>
                        <div className="col-sm-3 a">{CheckInDate}-to-{CheckOutDate}</div>
                        <div className="col-sm-2 a  "><span className="hideid">{lis.userid}</span>
                            <a href = "#" className = "anchorTripTag" id={lis.userid} onClick={() => this.showbookingactivity(lis)}>
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
                                    <button type="button" className="btn btn-warning col-sm-4 bookingContent"  id="popupclose" onClick={()=>this.bookingactivityclose()} value="Close">Close</button>
                                </div>

                            </div>


                            <div id="reviewactivity">
                                <div id="reviewactivitycontent">
                                    <h5 style={reviewStyle} >Please enter your review here:</h5>
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

                                        <textarea placeholder="Enter your comments here...." className="form-control" id="reviewText" rows="4"></textarea>
                                        <span id="reviewPopupId" style={hideIdStyle}></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent"  style={buttonStyle} id="reviewpopupsave" onClick={()=>this.reviewSave(lis,'reviewVal','reviewText')} value="Save">Save</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent" style={buttonStyle}  id="reviewpopupclose" onClick={()=>this.reviewClose()} value="Close">Close</button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-2"> <a href = "#" className = "anchorTripTag" id={lis.userid} onClick={() => this.showReview(lis)}>
                            Reviews
                        </a></div>
                        <div className="col-sm-2 a  "><button type = "button" onClick={() => this.cancelBooking(lis, "hotel")}  className = "btn btn-warning">
                            Delete
                        </button></div>
                    </div>
                )
            },this);
            this.state.BookingResults.flightBookings.map(function(lis,index) {


                pushIconType='fa fa-plane';


                BookingDetailList.push(<div style={divStyle} className="col-sm-12 b">

                        <div className="col-sm-3 a"><button type = 'button' className = 'btn btn-default'>
                            <span className = {pushIconType}></span>
                        </button> {lis.SourceAirport}- {lis.NumberOfSeats} Seats</div>
                        <div className="col-sm-3 a">{lis.TravelDateTo}----{lis.checkoutdate}</div>
                        <div className="col-sm-2 a  "><span className="hideid">{lis.userid}</span>
                            <a href = "#" className = "anchorTripTag" id={lis.userid} onClick={() => this.showbookingactivity(lis)}>
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
                                    <button type="button" className="btn btn-warning col-sm-4 bookingContent"  id="popupclose" onClick={()=>this.bookingactivityclose()} value="Close">Close</button>
                                </div>

                            </div>


                            <div id="reviewactivity">
                                <div id="reviewactivitycontent">
                                    <h5 style={reviewStyle} >Please enter your review here:</h5>
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

                                        <textarea placeholder="Enter your comments here...." className="form-control" id="reviewText" rows="4"></textarea>
                                        <span id="reviewPopupId" style={hideIdStyle}></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent"  style={buttonStyle} id="reviewpopupsave" onClick={()=>this.reviewSave(lis,'reviewVal','reviewText')} value="Save">Save</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent" style={buttonStyle}  id="reviewpopupclose" onClick={()=>this.reviewClose()} value="Close">Close</button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-2"> <a href = "#" className = "anchorTripTag" style={hidereview} id={lis.userid} onClick={() => this.showReview(lis)}>
                            Reviews
                        </a></div>
                        <div className="col-sm-2 a  "><button type = "button" onClick={() => this.cancelBooking(lis, "flight")}  className = "btn btn-warning">
                            Delete
                        </button></div>
                    </div>
                )
            },this);
            this.state.BookingResults.carBookings.map(function(lis,index) {


                pushIconType='fa fa-car';
                var checkindate=lis.s_date.split('T')[0];
                var checkoutdate=lis.e_date.split('T')[0];
                BookingDetailList.push(<div style={divStyle} className="col-sm-12 b">

                        <div className="col-sm-3 a"><button type = 'button' className = 'btn btn-default'>
                            <span className = {pushIconType}></span>
                        </button> {lis.carName} {lis.car_number}</div>
                        <div className="col-sm-3 a">{checkindate}to{checkoutdate}</div>
                        <div className="col-sm-2 a  "><span className="hideid">{lis.userid}</span>
                            <a href = "#" className = "anchorTripTag" id={lis.userid} onClick={() => this.showbookingactivity(lis)}>
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
                                    <button type="button" className="btn btn-warning col-sm-4 bookingContent"  id="popupclose" onClick={()=>this.bookingactivityclose()} value="Close">Close</button>
                                </div>

                            </div>


                            <div id="reviewactivity">
                                <div id="reviewactivitycontent">
                                    <h5 style={reviewStyle} >Please enter your review here:</h5>
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

                                        <textarea placeholder="Enter your comments here...." className="form-control" id="reviewText" rows="4"></textarea>
                                        <span id="reviewPopupId" style={hideIdStyle}></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent"  style={buttonStyle} id="reviewpopupsave" onClick={()=>this.reviewSave(lis,'reviewVal','reviewText')} value="Save">Save</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning col-sm-4 bookingContent" style={buttonStyle}  id="reviewpopupclose" onClick={()=>this.reviewClose()} value="Close">Close</button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-2"> <a href = "#" className = "anchorTripTag" style={hidereview} id={lis.userid} onClick={() => this.showReview(lis)}>
                            Reviews
                        </a></div>
                        <div className="col-sm-2 a  "><button type = "button" onClick={() => this.cancelBooking(lis,"car")} className = "btn btn-warning">
                            Delete
                        </button></div>
                    </div>
                )
            },this);


        }
        return (
            <div>
                <h4>My Bookings</h4>
                {BookingDetailList}

            </div>


        );
    };
}

export default withRouter(MyAccount);


// {
//     "hotelBookings"
// :
//     [
//         {
//             "BookingId": 1,
//             "HotelName": "Fairmont San Jose",
//             "Location": "San Jose, CA",
//             "Phone": "66778897",
//             "StreetAddress": "170 South Market Street",
//             "State": "CA",
//             "RoomType": "2",
//             "TotalCost": 300,
//             "NumberOfRooms": 2,
//             "CheckInDate": "2017-12-22T08:00:00.000Z",
//             "CheckOutDate": "2017-12-24T08:00:00.000Z",
//             "DeleteFlag": 1
//         },
//         {
//             "BookingId": 2,
//             "HotelName": "Fairmont San Jose",
//             "Location": "San Jose, CA",
//             "Phone": "66778897",
//             "StreetAddress": "170 South Market Street",
//             "State": "CA",
//             "RoomType": "2",
//             "TotalCost": 300,
//             "NumberOfRooms": 2,
//             "CheckInDate": "2017-11-28T08:00:00.000Z",
//             "CheckOutDate": "2017-11-29T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 3,
//             "HotelName": "Fairmont San Jose",
//             "Location": "San Jose, CA",
//             "Phone": "66778897",
//             "StreetAddress": "170 South Market Street",
//             "State": "CA",
//             "RoomType": "2",
//             "TotalCost": 300,
//             "NumberOfRooms": 2,
//             "CheckInDate": "2017-11-28T08:00:00.000Z",
//             "CheckOutDate": "2017-11-29T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 4,
//             "HotelName": "Fairmont San Jose",
//             "Location": "San Jose, CA",
//             "Phone": "66778897",
//             "StreetAddress": "170 South Market Street",
//             "State": "CA",
//             "RoomType": "2",
//             "TotalCost": 300,
//             "NumberOfRooms": 2,
//             "CheckInDate": "2017-11-28T08:00:00.000Z",
//             "CheckOutDate": "2017-11-29T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 5,
//             "HotelName": "Fairmont San Jose",
//             "Location": "San Jose, CA",
//             "Phone": "66778897",
//             "StreetAddress": "170 South Market Street",
//             "State": "CA",
//             "RoomType": "2",
//             "TotalCost": 300,
//             "NumberOfRooms": 2,
//             "CheckInDate": "2017-11-28T08:00:00.000Z",
//             "CheckOutDate": "2017-11-29T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 6,
//             "HotelName": "Fairmont San Jose",
//             "Location": "San Jose, CA",
//             "Phone": "66778897",
//             "StreetAddress": "170 South Market Street",
//             "State": "CA",
//             "RoomType": "2",
//             "TotalCost": 300,
//             "NumberOfRooms": 2,
//             "CheckInDate": "2017-11-28T08:00:00.000Z",
//             "CheckOutDate": "2017-11-29T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 7,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "2",
//             "TotalCost": 300,
//             "NumberOfRooms": 2,
//             "CheckInDate": "2017-11-28T08:00:00.000Z",
//             "CheckOutDate": "2017-11-29T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 8,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 300,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 9,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 300,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 10,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 300,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 11,
//             "HotelName": "Sofitel New York",
//             "Location": "New York, NY",
//             "Phone": "343546",
//             "StreetAddress": "45 West 44TH Street",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 300,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 12,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 300,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 13,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 300,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 14,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 300,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 15,
//             "HotelName": "Hotel De Anza",
//             "Location": "San Jose, CA",
//             "Phone": "33445533",
//             "StreetAddress": "233 West Santa Clara Street",
//             "State": "CA",
//             "RoomType": "No bed specified",
//             "TotalCost": 300,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-23T08:00:00.000Z",
//             "CheckOutDate": "2017-11-30T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 16,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 300,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 17,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 300,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 18,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 0,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 19,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 0,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 20,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 0,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 21,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 0,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 22,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 0,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 23,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 0,
//             "NumberOfRooms": 0,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 24,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "No bed specified",
//             "TotalCost": 450,
//             "NumberOfRooms": 1,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 25,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "3",
//             "TotalCost": 500,
//             "NumberOfRooms": 1,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         },
//         {
//             "BookingId": 26,
//             "HotelName": "Row NYC",
//             "Location": "New York, NY",
//             "Phone": "4433243",
//             "StreetAddress": "700 8th Avenue",
//             "State": "NY",
//             "RoomType": "3",
//             "TotalCost": 500,
//             "NumberOfRooms": 1,
//             "CheckInDate": "2017-11-21T08:00:00.000Z",
//             "CheckOutDate": "2017-11-25T08:00:00.000Z",
//             "DeleteFlag": 0
//         }
//     ],
//         "flightBookings"
// :
//     [
//         {
//             "BookingId": 2,
//             "FlightId": "BA 230",
//             "SourceAirport": "NYC",
//             "DestinationAirport": "LAX",
//             "AirlinesName": "British Airways",
//             "BookingDateTime": "2017-11-30T03:35:25.722Z",
//             "TotalCost": 0,
//             "NumberOfSeats": 2,
//             "SeatType": "3",
//             "TravelDateTo": "2017-11-28",
//             "TravelDateFro": "null"
//         },
//         {
//             "BookingId": 2,
//             "FlightId": "EK 170",
//             "SourceAirport": "LAX",
//             "DestinationAirport": "NYC",
//             "AirlinesName": "Emirates",
//             "BookingDateTime": "2017-11-30T03:35:25.722Z",
//             "TotalCost": 0,
//             "NumberOfSeats": 2,
//             "SeatType": "3",
//             "TravelDateTo": "2017-11-28",
//             "TravelDateFro": "null"
//         },
//         {
//             "BookingId": 5,
//             "FlightId": "EK 170",
//             "SourceAirport": "LAX",
//             "DestinationAirport": "NYC",
//             "AirlinesName": "Emirates",
//             "BookingDateTime": "2017-11-30T06:21:04.363Z",
//             "TotalCost": 0,
//             "NumberOfSeats": 2,
//             "SeatType": "3",
//             "TravelDateTo": "2017-11-28",
//             "TravelDateFro": "undefined"
//         },
//         {
//             "BookingId": 6,
//             "FlightId": "EK 170",
//             "SourceAirport": "LAX",
//             "DestinationAirport": "NYC",
//             "AirlinesName": "Emirates",
//             "BookingDateTime": "2017-11-30T06:22:30.014Z",
//             "TotalCost": 0,
//             "NumberOfSeats": 2,
//             "SeatType": "3",
//             "TravelDateTo": "2017-11-28",
//             "TravelDateFro": "undefined"
//         },
//         {
//             "BookingId": 7,
//             "FlightId": "EK 170",
//             "SourceAirport": "LAX",
//             "DestinationAirport": "NYC",
//             "AirlinesName": "Emirates",
//             "BookingDateTime": "2017-11-30T06:33:36.821Z",
//             "TotalCost": 0,
//             "NumberOfSeats": 2,
//             "SeatType": "3",
//             "TravelDateTo": "2017-11-28",
//             "TravelDateFro": "undefined"
//         },
//         {
//             "BookingId": 8,
//             "FlightId": "EK 170",
//             "SourceAirport": "LAX",
//             "DestinationAirport": "NYC",
//             "AirlinesName": "Emirates",
//             "BookingDateTime": "2017-11-30T06:34:22.363Z",
//             "TotalCost": 0,
//             "NumberOfSeats": 1,
//             "SeatType": "3",
//             "TravelDateTo": "2017-12-06",
//             "TravelDateFro": "undefined"
//         },
//         {
//             "BookingId": 9,
//             "FlightId": "BA 222",
//             "SourceAirport": "LAX",
//             "DestinationAirport": "NYC",
//             "AirlinesName": "British Airways",
//             "BookingDateTime": "2017-11-30T06:35:16.342Z",
//             "TotalCost": 0,
//             "NumberOfSeats": 1,
//             "SeatType": "3",
//             "TravelDateTo": "2017-12-06",
//             "TravelDateFro": "2017-12-07"
//         },
//         {
//             "BookingId": 9,
//             "FlightId": "BA 230",
//             "SourceAirport": "NYC",
//             "DestinationAirport": "LAX",
//             "AirlinesName": "British Airways",
//             "BookingDateTime": "2017-11-30T06:35:16.342Z",
//             "TotalCost": 0,
//             "NumberOfSeats": 1,
//             "SeatType": "3",
//             "TravelDateTo": "2017-12-06",
//             "TravelDateFro": "2017-12-07"
//         },
//         {
//             "BookingId": 10,
//             "FlightId": "BA 230",
//             "SourceAirport": "NYC",
//             "DestinationAirport": "LAX",
//             "AirlinesName": "British Airways",
//             "BookingDateTime": "2017-11-30T07:14:44.258Z",
//             "TotalCost": 846,
//             "NumberOfSeats": 2,
//             "SeatType": "3",
//             "TravelDateTo": "2017-12-06",
//             "TravelDateFro": "2017-12-07"
//         },
//         {
//             "BookingId": 10,
//             "FlightId": "EK 170",
//             "SourceAirport": "LAX",
//             "DestinationAirport": "NYC",
//             "AirlinesName": "Emirates",
//             "BookingDateTime": "2017-11-30T07:14:44.258Z",
//             "TotalCost": 846,
//             "NumberOfSeats": 2,
//             "SeatType": "3",
//             "TravelDateTo": "2017-12-06",
//             "TravelDateFro": "2017-12-07"
//         },
//         {
//             "BookingId": 11,
//             "FlightId": "BA 230",
//             "SourceAirport": "NYC",
//             "DestinationAirport": "LAX",
//             "AirlinesName": "British Airways",
//             "BookingDateTime": "2017-11-30T07:20:18.241Z",
//             "TotalCost": 846,
//             "NumberOfSeats": 2,
//             "SeatType": "3",
//             "TravelDateTo": "2017-12-06",
//             "TravelDateFro": "2017-12-07"
//         },
//         {
//             "BookingId": 11,
//             "FlightId": "EK 170",
//             "SourceAirport": "LAX",
//             "DestinationAirport": "NYC",
//             "AirlinesName": "Emirates",
//             "BookingDateTime": "2017-11-30T07:20:18.241Z",
//             "TotalCost": 846,
//             "NumberOfSeats": 2,
//             "SeatType": "3",
//             "TravelDateTo": "2017-12-06",
//             "TravelDateFro": "2017-12-07"
//         },
//         {
//             "BookingId": 12,
//             "FlightId": "BA 230",
//             "SourceAirport": "NYC",
//             "DestinationAirport": "LAX",
//             "AirlinesName": "British Airways",
//             "BookingDateTime": "2017-11-30T07:41:36.416Z",
//             "TotalCost": 846,
//             "NumberOfSeats": 2,
//             "SeatType": "3",
//             "TravelDateTo": "2017-12-06",
//             "TravelDateFro": "2017-12-07"
//         },
//         {
//             "BookingId": 12,
//             "FlightId": "EK 170",
//             "SourceAirport": "LAX",
//             "DestinationAirport": "NYC",
//             "AirlinesName": "Emirates",
//             "BookingDateTime": "2017-11-30T07:41:36.416Z",
//             "TotalCost": 846,
//             "NumberOfSeats": 2,
//             "SeatType": "3",
//             "TravelDateTo": "2017-12-06",
//             "TravelDateFro": "2017-12-07"
//         }
//     ],
//         "carBookings"
// :
//     [
//         {
//             "bookingid": 2,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-10T08:00:00.000Z",
//             "e_date": "2018-01-12T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Toyota Corolla",
//             "car_number": "SAM123",
//             "carType": "Economy"
//         },
//         {
//             "bookingid": 3,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-01-10T08:00:00.000Z",
//             "e_date": "2018-01-12T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 4,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2017-01-26T08:00:00.000Z",
//             "e_date": "2017-01-29T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 5,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-14T08:00:00.000Z",
//             "e_date": "2018-01-15T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Toyota Corolla",
//             "car_number": "SAM123",
//             "carType": "Economy"
//         },
//         {
//             "bookingid": 6,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-20T08:00:00.000Z",
//             "e_date": "2018-01-25T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Hyundai Accent",
//             "car_number": "JON123",
//             "carType": "Intermediate"
//         },
//         {
//             "bookingid": 7,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-25T08:00:00.000Z",
//             "e_date": "2018-01-26T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Hyundai Accent",
//             "car_number": "JON123",
//             "carType": "Intermediate"
//         },
//         {
//             "bookingid": 8,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-26T08:00:00.000Z",
//             "e_date": "2018-01-28T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Hyundai Accent",
//             "car_number": "JON123",
//             "carType": "Intermediate"
//         },
//         {
//             "bookingid": 9,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-28T08:00:00.000Z",
//             "e_date": "2018-01-30T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Hyundai Accent",
//             "car_number": "JON123",
//             "carType": "Intermediate"
//         },
//         {
//             "bookingid": 10,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-20T08:00:00.000Z",
//             "e_date": "2018-01-23T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Hyundai Accent",
//             "car_number": "JON123",
//             "carType": "Intermediate"
//         },
//         {
//             "bookingid": 11,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-01-15T08:00:00.000Z",
//             "e_date": "2018-01-20T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 12,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-01-17T08:00:00.000Z",
//             "e_date": "2018-01-20T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 13,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-01-20T08:00:00.000Z",
//             "e_date": "2018-01-23T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 14,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-01-17T08:00:00.000Z",
//             "e_date": "2018-01-20T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 15,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-22T08:00:00.000Z",
//             "e_date": "2018-01-23T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Hyundai Accent",
//             "car_number": "JON123",
//             "carType": "Intermediate"
//         },
//         {
//             "bookingid": 17,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-01-27T08:00:00.000Z",
//             "e_date": "2018-01-28T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 19,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-27T08:00:00.000Z",
//             "e_date": "2018-01-28T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "BMW 3 series",
//             "car_number": "DAN123",
//             "carType": "Awesome"
//         },
//         {
//             "bookingid": 20,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-27T08:00:00.000Z",
//             "e_date": "2018-01-28T08:00:00.000Z",
//             "deleted": 1,
//             "carName": "BMW 3 series",
//             "car_number": "DAN123",
//             "carType": "Awesome"
//         },
//         {
//             "bookingid": 21,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-01-17T08:00:00.000Z",
//             "e_date": "2018-01-28T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 22,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-01-17T08:00:00.000Z",
//             "e_date": "2018-01-20T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 23,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-17T08:00:00.000Z",
//             "e_date": "2018-01-20T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "BMW 3 series",
//             "car_number": "DAN123",
//             "carType": "Awesome"
//         },
//         {
//             "bookingid": 24,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-17T08:00:00.000Z",
//             "e_date": "2018-01-20T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "BMW 3 series",
//             "car_number": "DAN123",
//             "carType": "Awesome"
//         },
//         {
//             "bookingid": 25,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-01-17T08:00:00.000Z",
//             "e_date": "2018-01-28T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Hyundai Accent",
//             "car_number": "JON123",
//             "carType": "Intermediate"
//         },
//         {
//             "bookingid": 26,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2017-12-17T08:00:00.000Z",
//             "e_date": "2018-01-10T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 27,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2017-01-26T16:00:00.000Z",
//             "e_date": "2018-01-17T16:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 28,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2017-01-01T16:00:00.000Z",
//             "e_date": "2018-01-17T16:00:00.000Z",
//             "deleted": 0,
//             "carName": "BMW 3 series",
//             "car_number": "DAN123",
//             "carType": "Awesome"
//         },
//         {
//             "bookingid": 29,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2017-01-06T16:00:00.000Z",
//             "e_date": "2018-01-17T16:00:00.000Z",
//             "deleted": 0,
//             "carName": "BMW 3 series",
//             "car_number": "DAN123",
//             "carType": "Awesome"
//         },
//         {
//             "bookingid": 30,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2017-01-20T16:00:00.000Z",
//             "e_date": "2018-01-17T16:00:00.000Z",
//             "deleted": 0,
//             "carName": "Hyundai Accent",
//             "car_number": "JON123",
//             "carType": "Intermediate"
//         },
//         {
//             "bookingid": 31,
//             "city": "Sf",
//             "s_city": null,
//             "s_date": "2018-01-28T16:00:00.000Z",
//             "e_date": "2019-01-02T16:00:00.000Z",
//             "deleted": 0,
//             "carName": "BMW 3 series",
//             "car_number": "DAN123",
//             "carType": "Awesome"
//         },
//         {
//             "bookingid": 32,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-12-17T08:00:00.000Z",
//             "e_date": "2019-01-01T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Toyota Corolla",
//             "car_number": "SAM123",
//             "carType": "Economy"
//         },
//         {
//             "bookingid": 35,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2017-01-07T16:00:00.000Z",
//             "e_date": "2017-12-17T16:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 36,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-01-10T16:00:00.000Z",
//             "e_date": "2018-01-17T16:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 37,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-02-15T08:00:00.000Z",
//             "e_date": "2018-02-16T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Hyundai Accent",
//             "car_number": "JON123",
//             "carType": "Intermediate"
//         },
//         {
//             "bookingid": 38,
//             "city": "sf",
//             "s_city": null,
//             "s_date": "2018-03-15T08:00:00.000Z",
//             "e_date": "2018-03-16T08:00:00.000Z",
//             "deleted": 1,
//             "carName": "Hyundai Accent",
//             "car_number": "JON123",
//             "carType": "Intermediate"
//         },
//         {
//             "bookingid": 39,
//             "city": "sf",
//             "s_city": "sj",
//             "s_date": "2018-03-25T08:00:00.000Z",
//             "e_date": "2018-03-26T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "Tesla model S",
//             "car_number": "JAY123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 40,
//             "city": "Sf",
//             "s_city": "sj",
//             "s_date": "2018-03-25T08:00:00.000Z",
//             "e_date": "2018-03-28T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "BMW 3 series",
//             "car_number": "DAN123",
//             "carType": "Awesome"
//         },
//         {
//             "bookingid": 41,
//             "city": "San Jose",
//             "s_city": null,
//             "s_date": "2017-11-02T08:00:00.000Z",
//             "e_date": "2017-11-08T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "ABC",
//             "car_number": "RAM123",
//             "carType": "SUV"
//         },
//         {
//             "bookingid": 42,
//             "city": "San Jose",
//             "s_city": null,
//             "s_date": "2017-11-08T08:00:00.000Z",
//             "e_date": "2018-01-26T08:00:00.000Z",
//             "deleted": 0,
//             "carName": "ABC",
//             "car_number": "RAM123",
//             "carType": "SUV"
//         }
//     ]
// }


