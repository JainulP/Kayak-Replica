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

class Travellers extends Component {
    constructor(props){
        super(props);
         this.state ={BookingResults : [{
        "PersonName":"Sri Harsha",
        "Contact":"8880986993",
         "email":"a@a.com"
    },{
        "PersonName":"Sriv",
        "Contact":"899986993",
         "email":"b@b.com"

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
      
        var idval=lis.userid;
               if(lis.BookingType=="hotel"){
                   pushIconType='glyphicon glyphicon-bed';
}
                              if(lis.BookingType=="flight"){
                 pushIconType='glyphicon glyphicon-plane';
}
                if(lis.BookingType=="car"){
                  pushIconType='glyphicon glyphicon-copyright-mark';
}
                BookingDetailList.push(
                    <div className="w3-container" style={divStyle}>


  <div className="w3-card-4" >
    <header className="w3-container w3-green">
      <h4>{lis.PersonName} </h4>
            <h4>{lis.email},{lis.Contact}</h4>        
    </header>

    <div className="w3-container" style={containerStyle}>
      <p><br/><br/></p>
    </div>

  </div>
</div>
)
           });
        
         
    return ( 
        <div>
        <h4 style={headStyle}>Travellers</h4>
        {BookingDetailList}
        
                </div>


    );
  };
}

export default withRouter(Travellers);

