import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
var divStyle = {
  width: "75%"
  
};
var BookingResults;

class MyAccount extends Component {
    constructor(props){
        super(props);
         this.state ={
             
             abc: 'llll',
             BookingResults : [{
        "userid":"1",
        "hotelid":"1",
    "BookingType":"hotel",
        "hotelname":"The Westin",
        "roomtype":"2",
        "travelerid": "1",
        "cardid": "1",
        "street": "201 S 4th Street",
        "city": "San Jose",
        "state": "CA",
        "country": "USA",
        "zip": "95112",
        "totalcost":"300",
        "numberofrooms": "2",
        "numberofadults":"3",
        "numberofchildren":"2",
        "bookingdate": "2017-11-23 23:50",
        "checkindate": "2017-12-22",
        "checkoutdate": "2017-12-24"

    },{
        "userid":"2",
        "hotelid":"1",
         "BookingType":"car",
        "hotelname":"Four Points",
        "roomtype":"2",
        "travelerid": "1",
        "cardid": "1",
        "street": "201 S 4th Street",
        "city": "San Jose",
        "state": "CA",
        "country": "USA",
        "zip": "95112",
        "totalcost":"300",
        "numberofrooms": "2",
        "numberofadults":"3",
        "numberofchildren":"2",
        "bookingdate": "2017-11-23 23:50",
        "checkindate": "2017-12-22",
        "checkoutdate": "2017-12-24"

    }
               ,{
        "userid":"3",
        "hotelid":"1",
         "BookingType":"flight",
        "hotelname":"Air India",
        "roomtype":"2",
        "travelerid": "1",
        "cardid": "1",
        "street": "201 S 4th Street",
        "city": "San Jose",
        "state": "CA",
        "country": "USA",
        "zip": "95112",
        "totalcost":"300",
        "numberofrooms": "2",
        "numberofadults":"3",
        "numberofchildren":"2",
        "bookingdate": "2017-11-23 23:50",
        "checkindate": "2017-12-22",
        "checkoutdate": "2017-12-24"

    }]
            };
        this.showbookingactivity=this.showbookingactivity.bind(this);
    }
    
      showbookingactivity=(para)=>{
          debugger;
        // alert(para);
       //   document.getElementById("hotelidd").innerHTML = para.hotelname;
          
          //var x = document.getElementById("aa").previousSibling.innerHTML;
        /*  alert( showbookingactivity.caller.arguments[0].target.id);*/
          
          if(para.BookingType=="hotel")
              {
                document.getElementById("text1").innerHTML = "Hotel Name :"+ para.hotelname;
                document.getElementById("text2").innerHTML = "Address :"+ para.street +","+para.city+","+para.state+","+para.country+","+para.zip;
                document.getElementById("text3").innerHTML = "Rooms Booked : "+para.numberofrooms;
                document.getElementById("text4").innerHTML = "Adults : "+para.numberofadults;
                document.getElementById("text5").innerHTML = "Children : "+para.numberofchildren;
                document.getElementById("text6").innerHTML = "Checkindate : " + para.checkindate;
                document.getElementById("text7").innerHTML = "Checkoutdate : "+ para.checkoutdate;
                document.getElementById("text8").innerHTML = "totalcost : "+ para.totalcost;
              }
          else{
                document.getElementById("text1").innerHTML = "";
                document.getElementById("text2").innerHTML = "";
                document.getElementById("text3").innerHTML = "";
                document.getElementById("text4").innerHTML = "";
                document.getElementById("text5").innerHTML = "";
                document.getElementById("text6").innerHTML = "";
                document.getElementById("text7").innerHTML = "";
                document.getElementById("text8").innerHTML = "";
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
   
  render() {       
       var BookingDetailList=[];
      var BookingResults = this.state.BookingResults;
     var pushIconType;
      var idval='1';
      debugger;
     this.state.BookingResults.map(function(lis,index) {
      
        var idval=lis.userid;
               if(lis.BookingType=="hotel"){
                   pushIconType='fa fa-hotel';
}
                              if(lis.BookingType=="flight"){
                 pushIconType='fa fa-plane';
}
                if(lis.BookingType=="car"){
                  pushIconType='fa fa-car';
}
                BookingDetailList.push(<div style={divStyle} className="col-sm-12 b">
  
  <div className="col-sm-3 a"><button type = 'button' className = 'btn btn-default'>
<span className = {pushIconType}>< / span>
< / button> {lis.city} {lis.state}</div>
  <div className="col-sm-4 a">{lis.checkindate}----{lis.checkoutdate}</div>
<div className="col-sm-2 a  "><span className="hideid">{lis.userid}</span>
                                       <a href = "#" className = "anchorTripTag" id={lis.userid} onClick={() => this.showbookingactivity(lis)}>
Details
< / a>
                                       
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
                                       
</div>
 <div className="col-sm-2 a  "><button type = "button" className = "btn btn-warning">
Delete
< / button></div>
</div>
)
           },this);
        
         
    return ( 
        <div>
        <h4>My Bookings</h4>
        {BookingDetailList}
        
                </div>


    );
  };
}

export default withRouter(MyAccount);

