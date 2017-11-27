import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
var divStyle = {
  width: "50%",
    marginTop: "15px",
  marginLeft: "220px"
  
};
var headStyle = {

  marginLeft: "400px"
  
};
var containerStyle = {

  height: "100px"
  
};
var BookingResults;

class Payments extends Component {
    constructor(props){
        super(props);
         this.state ={BookingResults : [{
             "CardName":"visa",
        "PersonName":"Sri Harsha",
        "CardNumber":"8880-8880-8880-8880",
         "cvv":"202",
             "expiry":"08/19"
    },{
         "CardName":"visa",
        "PersonName":"Sri Harsha",
        "CardNumber":"8880-8880-8880-8880",
         "cvv":"202",
             "expiry":"08/19"

    }
    ]
            }
    }
    
      showbookingactivity(para){
          debugger;
         alert(para);
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
      
       
                BookingDetailList.push(
                    <div className="w3-container" style={divStyle}>


  <div className="w3-card-4" >
    <header className="w3-container  w3-blue">
      <h4>{lis.CardName}--{lis.CardNumber} </h4>
            <h4>{lis.PersonName}-{lis.cvv}-{lis.expiry}</h4>        
    </header>

    <div className="w3-container"style={containerStyle}>
      <p><br/><br/></p>
    </div>

  </div>
</div>
)
           });
        
         
    return ( 
        <div>
        <h4 style={headStyle}>Stored Cards</h4>
        {BookingDetailList}
        <br/>
        
                </div>


    );
  };
}

export default withRouter(Payments);

