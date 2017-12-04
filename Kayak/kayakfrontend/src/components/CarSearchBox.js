import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetCarCriteria} from '../actions/actionsAll';

var divStyle = {
    position: "relative",
    top: "-40px",
    left: "27px"

};
var checkBoxStyle={
    fontSize: "smaller"
}
var radiobuttonfloat={
    float:"left"
}
var sliderStyle = {
    backgroundColor: "rgb(95, 204, 199)"
};

var imgStyle = {
    width: "50px",
    height:"63px",
    cursor:"pointer"


};
var timeSpanStyle={
    width:"10%",
    display:"none"
};
var places = [
    "San Jose, CA",
    "San Fransisco, CA",
    "New York, NY",
    "Dallas, TX",
    "Nevada, CA",
    "Milpitas, CA",
    "Colonnade, CA",
    "Stanford, CA",
    "Newark, CA",
    "Erlang, CA",
    "Fortran, AZ",
    "Groovy, AZ",
    "Haskell, AZ"
];
class CarSearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            criteria: {
                city: "sf",
                cityDes: "",
                multi_city: "false",
                s_date: "2018-01-17",
                e_date: "2018-01-28",
                to_time: "8:00 PM",
                from_time: "8:00 PM",
            }
        }
    }

    componentDidMount() {
        var options = '';
        document.getElementById('sameDropRadioBtn').checked = true;
        for(var i = 0; i < places.length; i++)
            options += '<option value="'+places[i]+'" />';

        document.getElementById('placeList').innerHTML = options;
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
    sameDropClickFunction(){
        document.getElementById('diffDropRadioBtn').checked = false;
        document.getElementById("carTo").disabled = true;
        this.setState({
            criteria:{
                ...this.state.criteria,
                multi_city: "false",
                cityDes: ''
            }
        });
    }
    diffDropClickFunction(){
        document.getElementById('sameDropRadioBtn').checked = false;
        document.getElementById("carTo").disabled = false;
        var desCity =this.state.criteria.city;
        this.setState({
            criteria:{
                ...this.state.criteria,
                multi_city: "true",
                cityDes: desCity
            }
        });
    }


    updateTextInput(txtid,spanid,textboxid) {
        debugger;
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
    searchCar = () =>{

        var CarToTime=document.getElementById("CarToTime").value;
        var CarFromTime=document.getElementById("CarFromTime").value;

        this.setState({
            criteria:{
                ...this.state.criteria,
                to_time: CarToTime
            }
        });
        this.setState({
            criteria:{
                ...this.state.criteria,
                from_time: CarFromTime
            }

        });
        
        
          //validation for date
      
        
        var Fromdates= document.getElementById("datePicker1").value.split('-');
        var FromDateYear=Fromdates[0];
        var FromDateMonth=Fromdates[1];
        var FromDateDay=Fromdates[2];
var Todates=document.getElementById("datePicker2").value.split('-');
        var ToDateYear=Todates[0];
        var ToDateMonth=Todates[1];
        var ToDateDay=Todates[2];
        var Checkdate=true;
       
        if(FromDateYear>ToDateYear){
            Checkdate=false;
        }
        else if(FromDateMonth>ToDateMonth)
            {
                Checkdate=false;
            }
        else if(FromDateDay>ToDateDay)
            {
                Checkdate=false;
            }
        
        else{
            Checkdate=true;
        }
        
        debugger;
       
if(Checkdate==true){
    debugger;
       
        
        if(Checkdate==true && document.getElementById("datePicker1").value !="" && document.getElementById("datePicker2").value !="" &&((document.getElementById('diffDropRadioBtn').checked != true)|| document.getElementById("carTo").value !="" )&&document.getElementById("carFrom").value !=""){
        
             
        
        this.props.SetCarCriteria(this.state.criteria);
        this.props.clickSearchevent(this.state.criteria);
        }
        
        else{
              alert("please note all the editable fields are mandatory before proceeding furthur");
        }

        
        }

        else{
           alert("Booking dates are invalid");
               
        }
    }


    render() {

        return (

            <div className = "bootstrap-iso">
                <div className = "container-fluid" >
                    <div className = "row">
                        <div className = "col-sm-2 col-xs-2">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" id="sameDropRadioBtn" onClick={()=>this.sameDropClickFunction()}/>
                                    <span style={checkBoxStyle}>SAME DROP-OFF</span>
                                </label>
                            </div>

                        </ div>
                        <div className = "col-sm-3 col-xs-3">
                            <div className="form-check">
                                <label className="form-check-label" style={radiobuttonfloat}>
                                    <input type="radio" className="form-check-input" id="diffDropRadioBtn" onClick={()=>this.diffDropClickFunction()}  />
                                    <span style={checkBoxStyle}>DIFFERENT DROP-OFF</span>
                                </label>
                            </div>

                        </ div>



                    </ div>

                    <div className = "row">

                        <div className = "col-sm-2 col-xs-2 FlightAndCarFields">
                            <input type = "text" className = "form-control" list ="placeList" id = "carFrom"  onChange={(event) => {
                                var state_temp = this.state;
                                state_temp.criteria.city = event.target.value;
                                this.setState(state_temp);
                            }}/>
                            <datalist id="placeList"></datalist>
                        </div>
                        <div className = "col-sm-2 col-xs-2 FlightAndCarFields">
                            <input type = "text" className = "form-control" list ="placeList" disabled id = "carTo"
                                   value={this.state.criteria.cityDes}
                                   onChange={(event) => {
                                       var state_temp = this.state;
                                       state_temp.criteria.cityDes = event.target.value;
                                       this.setState(state_temp);
                                   }}/>
                            <datalist id="placeList"></datalist>
                        </div>

                        <div className = "col-sm- col-xs-3 FlightAndCarFields" id = "aaa">
                            <input className = "form-control datetimepicker" id = "datePicker1" name = "date" onChange={(event) => {
                                var state_temp = this.state;
                                state_temp.criteria.s_date = event.target.value;
                                this.setState(state_temp);
                            }}  placeholder = "MM/DD/YYYY   HH" type = "date" />

<span id="validationMsg"></span>

                        </div>
                        <div className = "col-sm-1 col-xs-1 FlightAndCarFields" style={timeSpanStyle}>
                            <input type = "text" className = "form-control" id = "CarToTime"/>
                            <i className = "glyphicon glyphicon-time calendariconTo" name = "date" style={divStyle} onClick={()=>this.popUpDisplay("div_change_qty1")}></i>
                            <div id = 'div_change_qty1' className="row" name = 'div_change_qty' >
                                <span id="idSpan">Change time</span> <span className="spanClose" onClick={()=>this.popUpClose("div_change_qty1")}>X</span>
                                <input type="range" id="rangeId1" name="rangeInput" min="0" max="24" style={sliderStyle} className="slider" onChange={()=>this.updateTextInput('textInput1','rangeId1','CarToTime')}/>

                                <input type="text" id="textInput1" className="carPopupTxt" value=""/>

                            </div>
                        </div>
                        <div className = "col-sm-3 col-xs-3 FlightAndCarFields">
                            <input className = "form-control datepicker" id = "datePicker2" name = "date" onChange={(event) => {
                                var state_temp = this.state;
                                state_temp.criteria.e_date = event.target.value;
                                this.setState(state_temp);
                            }} placeholder = "MM/DD/YYYY    HH" type = "date"/>
                        </div>
                        <div className = "col-sm-1 col-xs-1 FlightAndCarFields" style={timeSpanStyle}>
                            <input type = "text" className = "form-control" id = "CarFromTime"/>
                            <i className = "glyphicon glyphicon-time calendariconFrom"name = "date" style={divStyle} onClick={()=>this.popUpDisplay("div_change_qty2")}></i>
                            <div id = 'div_change_qty2' name = 'div_change_qty' >
                                <span className="spanClose" onClick={()=>this.popUpClose("div_change_qty2")}>X</span>
                                <input type="range" id="rangeId2" name="rangeInput" min="0" max="24" style={sliderStyle} className="slider" onChange={()=>this.updateTextInput('textInput2','rangeId2','CarFromTime')}/>
                                <input type="text" id="textInput2" className="carPopupTxt" value=""/>
                            </div>
                        </div>

                        <div className = "col-sm-1 col-xs-1 FlightAndCarFields">
                            <span><img src="Search.png" style={imgStyle} onClick={this.searchCar}/></span>

                        </div>
                    </div>
                </div>
            </div>

        );
    }


}

function mapStateToProps(state){
    return {
        criteria: state.cars.criteria
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({SetCarCriteria : SetCarCriteria}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarSearchBox));

