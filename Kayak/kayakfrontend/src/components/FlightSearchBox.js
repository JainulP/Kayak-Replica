import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';


class FlightSearchBox extends Component {
    constructor(props) {
            super(props);
        }
     componentDidMount() {
       /*  debugger;
         var date_input=$('input[name="date"]'); //our date input has the name "date"
		var container='#aaa'
		date_input.datepicker({
			format: 'D mm/dd',
			//container: container,
			todayHighlight: true,
			autoclose: true,
		})*/
    }
         
    
    
     addRoom(){
        document.getElementById("removeRoomBtn").disabled = false;
       document.getElementById("roomTextBtn").innerHTML= parseInt(document.getElementById("roomTextBtn").innerHTML)+parseInt("1");
if((parseInt(document.getElementById("roomTextBtn").innerHTML))>=8)
            {
    document.getElementById("addRoomBtn").disabled = true;
                document.getElementById("removeRoomBtn").disabled = false;
}
        var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
        
         var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
      if(parseInt(document.getElementById("roomTextBtn").innerHTML)>GuestCount)
          {
document.getElementById("adultTextBtn").innerHTML= parseInt(document.getElementById("adultTextBtn").innerHTML)+parseInt("1");
              var result1=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result1; 
          }
        
    }
    
     removeRoom(){
         if((parseInt(document.getElementById("roomTextBtn").innerHTML))!=1)
            {
         document.getElementById("addRoomBtn").disabled = false;
       document.getElementById("roomTextBtn").innerHTML= parseInt(document.getElementById("roomTextBtn").innerHTML)-parseInt("1");
if((parseInt(document.getElementById("roomTextBtn").innerHTML))<=1)
            {
    document.getElementById("removeRoomBtn").disabled = true;
}
         var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
            }
         else{
            document.getElementById("removeRoomBtn").disabled = true; 
}
        
    }
    
     addAdult(){
        document.getElementById("removeAdultBtn").disabled = false;
      debugger;
        if(((parseInt(document.getElementById("adultTextBtn").innerHTML))+(parseInt(document.getElementById("childrenTextBtn").innerHTML)))<32)
            {
                 document.getElementById("adultTextBtn").innerHTML= parseInt(document.getElementById("adultTextBtn").innerHTML)+parseInt("1");
                
}
       
if(((parseInt(document.getElementById("adultTextBtn").innerHTML))+(parseInt(document.getElementById("childrenTextBtn").innerHTML)))>=32)
            {
                
                  document.getElementById("addAdultBtn").disabled = true;
                document.getElementById("removeAdultBtn").disabled = false;
}
            if((parseInt(document.getElementById("roomTextBtn").innerHTML)*4)<((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML))))
             {
          var a=Math.ceil(((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)))/4) ;
                 
                 document.getElementById("roomTextBtn").innerHTML=a;
                 
}
         var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
    }
    
     removeAdult(){
        document.getElementById("addChildrenBtn").disabled = false;
        document.getElementById("addAdultBtn").disabled = false;
       document.getElementById("adultTextBtn").innerHTML= parseInt(document.getElementById("adultTextBtn").innerHTML)-parseInt("1");
if((parseInt(document.getElementById("adultTextBtn").innerHTML))<=0)
            {
    document.getElementById("removeAdultBtn").disabled = true;
}
         var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
    }
    
    
      addChildren(){
          document.getElementById("removeChildrenBtn").disabled = false;
         if(((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)))<32)
            {
                document.getElementById("childrenTextBtn").innerHTML= parseInt(document.getElementById("childrenTextBtn").innerHTML)+parseInt("1");
                 document.getElementById("removeChildrenBtn").disabled = false;
            }
       
if(((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)))>=32)
            {
                
    document.getElementById("addChildrenBtn").disabled = true;
                document.getElementById("removeChildrenBtn").disabled = false;
}
         
         if((parseInt(document.getElementById("roomTextBtn").innerHTML)*4)<((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML))))
             {
              var a=Math.ceil(((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)))/4) ;
                 
                 document.getElementById("roomTextBtn").innerHTML=a;
                 
}
          var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
         
    }
    
     removeChildren(){
        if((parseInt(document.getElementById("childrenTextBtn").innerHTML))!=0)
            {
         document.getElementById("addChildrenBtn").disabled = false;
        document.getElementById("addAdultBtn").disabled = false;
       document.getElementById("childrenTextBtn").innerHTML= parseInt(document.getElementById("childrenTextBtn").innerHTML)-parseInt("1");
if((parseInt(document.getElementById("childrenTextBtn").innerHTML))<=0)
            {
    document.getElementById("removeChildrenBtn").disabled = true;
}
         var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
            }
         else{
             document.getElementById("removeChildrenBtn").disabled = true;
}
    }
    

  showHideChangePopUpjQ(m) {
    var disp = m === 'hide' ? 'none' : 'block';
    //$('#div_change_qty').css("display", disp);
          document.getElementById("div_change_qty").style.display=disp;
}
    popUpClose(){
       //$('#div_change_qty').css("display", 'none'); 
       // document.getElementById("div_change_qty").css("display", 'none');
        document.getElementById("div_change_qty").style.display='none';
}
    popUpDisplay(){
        //$('#div_change_qty').css("display", 'block');
         document.getElementById("div_change_qty").style.display= 'block';
}
    
     
	
    myFunction() {
   }
calendarDisplay(){
  /*  debugger;
      var date_input=$('input[name="date"]'); //our date input has the name "date"
		var container='#aaa'
		date_input.datepicker({
			format: 'D mm/dd',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})*/
}
    swapValues(){
        debugger;
        var valFrom;
        var valTo;
     
        valFrom=document.getElementById("flightFrom").value;
        valTo=document.getElementById("flightTo").value;
        document.getElementById("flightFrom").value=valTo;
        document.getElementById("flightTo").value=valFrom;
    }
    changeFlightClass(txt){
           
       var flightInfoVal=document.getElementById("FlightInfoTxtBox").value;
       var val=flightInfoVal.split(",");
       var result=val[0]+","+txt;
        document.getElementById("FlightInfoTxtBox").value=result;
        //$('#FlightInfoTxtBox').val(result);
        //alert($('#FlightInfoTxtBox').val())
    }


        render() {
         
                          return (
                              
         <div className = "flightbootstrap-iso">
<div className = "container-fluid" >
<div className = "row">
<div className = "col-sm-2 col-xs-2 hotelFields">
<input type = "text" className = "form-control" id = "flightFrom"/>
< / div>
    <div className = "col-sm-2 col-xs-2 hotelFields">
<input type = "text" className = "form-control" id = "flightTo"/>
< / div>
<button  type = "button" className = "btn btn-default transferStyling" onClick={()=>this.swapValues()}>
<span className = "glyphicon glyphicon-transfer" >< / span>
< / button>
<div className = "col-sm-2 col-xs-2 hotelFields" id = "aaa">
<input className = "form-control datepicker" id = "date" name = "date"  placeholder = "MM/DD/YYYY" type = "date" onClick={()=>this.myFunction()} / >

< / div>
<div className = "col-sm-2 col-xs-2 hotelFields">
<input className = "form-control datepicker" id = "date1" name = "date" placeholder = "MM/DD/YYYY" type = "date" onClick={()=>this.myFunction()}  / >

< / div>

<div className = "col-sm-2 col-xs-2 hotelFields">
<input type = "text" className = "form-control" value="1 adult,Economy" id = "FlightInfoTxtBox" readOnly onFocus = {()=>this.showHideChangePopUpjQ("show")}/ ><i className = "glyphicon glyphicon-menu-down flightpopIcon" onClick={()=>this.popUpDisplay()} >< / i>
<div id = 'div_change_qty' name = 'div_change_qty' >
<table width = '100%' height = '100%'>
    <tbody>
<tr><td width = '50%'><b>Cabin Class</b>< / td>
<td width = '20%'><button  type = "button" className = "hideBtn btn btn-default">
+
< / button>
< / td>

<td width = '20%'><button  type = "button"  className = "hideBtn btn btn-default">
-
< / button>
< / td>
<td width = '10%'>

<span className = "spanClose" onClick ={()=>this.popUpClose()}><b>X< / b>

< / span>< / td>
< / tr>
    
    
<tr >
    <td width = '50%'><span className="hoverClassFlightType" onClick ={()=>this.changeFlightClass('Economy')}>Economy</span>< / td>
        
    <td width = '50%'><span className="spanClassFlightType" onClick ={()=>this.changeFlightClass('Business')}>Business</span>< / td>
< / tr> 
    <tr >
    <td width = '50%'><span className="hoverClassFlightType" onClick ={()=>this.changeFlightClass('Premium Economy')}>Premium Economy</span>< / td>
        
    <td width = '50%'><span className="spanClassFlightType" onClick ={()=>this.changeFlightClass('First')}>First</span>< / td>
< / tr> 
    <tr >
    <td width = '50%'><span className="hoverClassFlightType" onClick ={()=>this.changeFlightClass('Multiple')}>Multiple</span>< / td>
    
< / tr> 

   
   


</ tbody>
< / table>
    
    
    <table width = '100%' height = '100%'>
    <tbody>
<tr><td width = '50%'><b>Travellers</b>< / td>

< / tr>


<tr className = "borderclassName"><td width = '50%'>Adults <span className="ageSpan">  18-64</span>< / td>
<td width = '10%'><button type = "button" id = "addAdultBtn" onClick ={()=>this.addAdult()} className = "btn btn-default">
+
< / button>
< / td>
<td width = '10%' className="spanText"><span id = "adultTextBtn" className="spanText">1

< / span>< / td>
<td width = '10%'><button type = "button" className = "btn btn-default" id = "removeAdultBtn" onClick ={()=>this.removeAdult()}>
-
< / button>
< / td>
< / tr>

<tr className = "borderclassName"><td width = '50%'>Seniors <span className="ageSpan">  65+</span>< / td>
<td width = '10%'><button type = "button" id = "addSeniorBtn" onClick ={()=>this.addSenior()} className = "btn btn-default">
+
< / button>
< / td>
<td width = '10%' className="spanText"><span id = "seniorTextBtn" className="spanText">0

< / span>
< / td>
<td width = '10%'><button type = "button" id = "removeSeniorBtn" className = "btn btn-default" onClick = {()=>this.removeSenior()}>
-
< / button>
< / td>
< / tr>

<tr className = "borderclassName"><td width = '50%'>Youth <span className="ageSpan">  12-17</span>< / td>
<td width = '10%'><button type = "button" id = "addYouthBtn" className = "btn btn-default" onClick = {()=>this.addYouth()}>
+
< / button>
< / td>
<td width = '10%' className="spanText"><span id = "youthTextBtn" className="spanText" >
0
< / span>
</td>
<td width = '10%'><button type = "button" id = "removeYouthBtn" className = "btn btn-default" 
                      onClick ={()=>this.removeYouth()}>
-
< / button>
< / td>
< / tr>
    <tr ><td width = '50%'>Child <span className="ageSpan">  0-11</span>< / td>
<td width = '10%'><button type = "button" id = "addChildrenBtn" className = "btn btn-default" onClick = {()=>this.addChildren()}>
+
< / button>
< / td>
<td width = '10%' className="spanText"><span id = "childrenTextBtn"  >
0
< / span>
</td>
<td width = '10%'><button type = "button" id = "removeChildrenBtn" className = "btn btn-default" 
                      onClick ={()=>this.removeChildren()}>
-
< / button>
< / td>
< / tr>
</ tbody>
< / table>
    
    
< / div>
< / div>
<div className = "col-sm-1 col-xs-1 hotelFields">
<button type = "button" className = "btn btn-warning form-control buttonField ">
<span className = "glyphicon glyphicon-search">< / span>
< / button>
< / div>
< / div>
< / div>
< / div>
   
                 );
}
                         
                 
            }  

export default withRouter(FlightSearchBox);

