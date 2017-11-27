import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
var carToStyle = {
 position: "relative",
    top: "-40px",
    left: "24px"
  
};

var places = [
      "San Jose",
      "San Fransisco",
      "New York",
      "Dallas",
      "Nevada",
      "Milpitas",
      "Colonnade",
      "Stanford",
      "Newark",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell"
    ];
class CarSearchBox extends Component {
    constructor(props) {
            super(props);
        }
     //componentDidMount() {
      /*   debugger;
         var date_input=$('input[name="date"]'); //our date input has the name "date"
		var container='#aaa'
		date_input.datepicker({
			format: 'D mm/dd',
            position:'bottom',
			//container: container,
			todayHighlight: true,
			autoclose: true,
		})*/
  //  }
          componentDidMount() {
          var options = '';

  for(var i = 0; i < places.length; i++)
    options += '<option value="'+places[i]+'" />';

  document.getElementById('placeList').innerHTML = options;
    }
    
    

    
     showHideChangePopUpjQ(m,id) {
         var disp = m === 'hide' ? 'none' : 'block';
    //$('#div_change_qty').css("display", disp);
          document.getElementById(id).style.display=disp;
}
    popUpClose(id){
        document.getElementById(id).style.display='none';
}
    popUpDisplay(id){
       document.getElementById(id).style.display='block';
}

        updateTextInput(txtid,spanid,textboxid) {
        
            var tempVal=parseInt(document.getElementById(spanid).value);
            var daytext;
            var result;
            if(tempVal/12 < 1)
                {
                    daytext='AM';
                    result=tempVal+':00'+daytext;
                }
            else if(tempVal/12==0 && tempVal%12==0)
                {
                    result='MidNight';
}
          else if(tempVal/12==1 && tempVal%12==0)
                {
                    result='Noon';
}
            else{
                if(tempVal/12 > 1)
                {
                daytext='PM';
                    result=(tempVal-12)+':00'+daytext;
                }
                if(result=='12:00PM')
                    {
                        result='MidNight';
}
}
          document.getElementById(txtid).value=result;
            document.getElementById(textboxid).value=result;
           /* if(document.getElementById(textboxid).value !="")
                {
                    if((document.getElementById(textboxid).value).includes(" - "))
                    {
                        var res=(document.getElementById(textboxid).value).split(" - ");
                        res[1]=result;
                        document.getElementById(textboxid).value=res[0] +" - "+res[1];
                    }
                    else{
                    document.getElementById(textboxid).value=document.getElementById(textboxid).value+" - "+result
                    }
                }*/
            
        }

        render() {
         
                          return (
                              
         <div className = "bootstrap-iso">
<div className = "container-fluid" >
<div className = "row">

    <div className = "col-sm-4 col-xs-4">
<input type = "text" className = "form-control" list ="placeList" id = "flightTo"/>
                              <datalist id="placeList"></datalist>
</div>

<div className = "col-sm-2 col-xs-2" id = "aaa">
<input className = "form-control datetimepicker" id = "datePicker1" name = "date"  placeholder = "MM/DD/YYYY   HH" type = "date" />

                             
     
</div>
                              <div className = "col-sm-1 col-xs-1">
<input type = "text" className = "form-control"  id = "CarToTime"/>
                               <i className = "glyphicon glyphicon-time calendariconTo" style={carToStyle} name = "date" onClick={()=>this.popUpDisplay("div_change_qty1")}></i>
<div id = 'div_change_qty1' className="row" name = 'div_change_qty' >
<span className="spanClose" onClick={()=>this.popUpClose("div_change_qty1")}>X</span>
<input type="range" id="rangeId1" name="rangeInput" min="0" max="24" className="slider" onChange={()=>this.updateTextInput('textInput1','rangeId1','CarToTime')}/>
    
<input type="text" id="textInput1" className="carPopupTxt" value=""/>
     
</div>
</div>
<div className = "col-sm-2 col-xs-2">
<input className = "form-control datepicker" id = "datePicker2" name = "date" placeholder = "MM/DD/YYYY    HH" type = "date"/>
</div>
  <div className = "col-sm-1 col-xs-1">
<input type = "text" className = "form-control" id = "CarFromTime"/>
    <i className = "glyphicon glyphicon-time calendariconFrom" name = "date" style={carToStyle} onClick={()=>this.popUpDisplay("div_change_qty2")}></i>
<div id = 'div_change_qty2' name = 'div_change_qty' >
    <span className="spanClose" onClick={()=>this.popUpClose("div_change_qty2")}>X</span>
<input type="range" id="rangeId2" name="rangeInput" min="0" max="24" className="slider" onChange={()=>this.updateTextInput('textInput2','rangeId2','CarFromTime')}/>
<input type="text" id="textInput2" className="carPopupTxt" value=""/>
</div>
</div>

<div className = "col-sm-1 col-xs-1">
<button type = "button" className = "btn btn-warning form-control buttonField " onClick={this.props.clickSearchevent}>
<span className = "glyphicon glyphicon-search"></span>
</button>
</div>
</div>
</div>
</div>
   
                 );
}
                         
                 
            }  

export default withRouter(CarSearchBox);

