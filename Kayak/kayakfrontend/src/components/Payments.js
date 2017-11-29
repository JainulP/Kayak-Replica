import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
var divStyle = {
  width: "50%",
    marginTop: "15px",
  marginLeft: "220px"
  
};
var headerStyle={
    backgroundColor:"#ff9900"
}
var travellerSpanStyle = {

    cursor: "pointer",
    color:"blue"

};
var imgStyle = {
  width: "25px",
    height:"25px",
    cursor:"pointer"
    
  
};
var deleteStyle={
    float: "right",
fontSize: "x-small",
color: "grey",
cursor: "pointer"
}
var dropdownStyle={
     
}
var buttonStyle = {
    width: "65px"
};
var headStyle = {

  marginLeft: "400px"
  
};
var containerStyle = {

  height: "110px"
  
};
var BookingResults;

class Payments extends Component {
    constructor(props){
        super(props);
         this.state ={BookingResults : [{
             "id":"1",
             "CardName":"visa",
        "PersonName":"Sri Harsha",
        "CardNumber":"8880-8880-8880-8880",
         "cvv":"202",
             "expiry":"08/19"
    },{
        "id":"2",
         "CardName":"visa",
        "PersonName":"Sri Harsha",
        "CardNumber":"8880-8880-8880-8880",
         "cvv":"202",
             "expiry":"08/19"

    }
    ]
            }
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
    travellerDelete(data){
        debugger;
    }
      showbookingactivity(para){
          debugger;
        
          //var x = document.getElementById("aa").previousSibling.innerHTML;
        /*  alert( showbookingactivity.caller.arguments[0].target.id);*/
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
   
  render() {       
       var BookingDetailList=[];
      var BookingResults = this.state.BookingResults;
     var pushIconType;
      var idval='1';
      debugger;
     this.state.BookingResults.map(function(lis,index) {
         var image;
      if(lis.CardName=="visa")
          {
              image="VISA.png"
          }
         if(lis.CardName=="mastercard")
          {
              image="MasterCard.png"
          }
       
                BookingDetailList.push(
                    <div className="w3-container" style={divStyle}>


  <div className="w3-card-4" >
    <header className="w3-container" style={headerStyle}>
      <h4><img src={image} style={imgStyle}/>   {lis.CardNumber} </h4>
                  
    </header>

    <div className="w3-container"style={containerStyle}>
              <h6>Person name:{lis.PersonName}</h6>
                    <h6>CVV Number:{lis.cvv}</h6>
                    <h6>Expiry(MM/YY):{lis.expiry}</h6>
                         
       <a href="#" onClick={()=>this.travellerDelete(lis)} style={deleteStyle}>Delete</a>
    </div>

  </div>
                     <div id="bookingactivity">
<div id="bookingactivitycontent">
<h4><b>Add Card</b></h4>
<h5 className="TravellerContent" id="text1"><span style={dropdownStyle} > CardType : </span>
                      <select name="cards" style={dropdownStyle}>
    <option value="visa">visa</option>
    <option value="mastercard">mastercard</option>

  </select></h5>
<h5 className="TravellerContent" id="text2"><input type="text" className="form-control" placeholder="Card Number" id="lNameUsr"/></h5>
<h5 className="TravellerContent" id="text3"><input type="text" className="form-control" placeholder="Name on card" id="emailUsr"/></h5>
<h5 className="TravellerContent" id="text3"><input type="text" className="form-control" placeholder="CVV" id="contactInfoUsr"/></h5>
                    <h5 className="TravellerContent" id="text3"><input type="text" className="form-control" placeholder="Expiry(MM/YY)" id="contactInfoUsr"/></h5>

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
        
         
    return ( 
        <div>
        <h4 style={headStyle}>Stored Cards</h4>
        {BookingDetailList}
         <br/><br/>
        <a className = "travellerTripTag" style={travellerSpanStyle} onClick={() => this.showbookingactivity()}>Add Cards</a>
        
                </div>


    );
  };
}

export default withRouter(Payments);

