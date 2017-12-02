import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {HoteBbookingInfo} from '../actions/actionsAll';
import {GetHotels} from '../actions/actionsAll';
import * as HotelAPI from '../api/HotelAPI';
import {reactLocalStorage} from 'reactjs-localstorage';

var divStyle = {
    position: "relative",
    top: "-40px",
    left: "115px"

};
var imgStyle = {
    width: "50px",
    height:"63px",
    cursor:"pointer"


};
var places = [
    "San Jose,CA",
    "San Fransisco,CA",
    "New York,NY",
    "Dallas,TX",
    "Nevada,CA",
    "Milpitas,CA",
    "Colonnade,CA",
    "Stanford,CA",
    "Newark,CA",
    "Erlang,CA",
    "Fortran,AZ",
    "Groovy,AZ",
    "Haskell,AZ"
];
class HotelSearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            flag:false,
            criteria: {
                location:this.props.bookhotel.location,
                checkindate:this.props.bookhotel.checkindate,
                checkoutdate: this.props.bookhotel.checkoutdate,
                noGuests : this.props.bookhotel.noGuests,
                noRooms : this.props.bookhotel.noRooms,
                noAdults:this.props.bookhotel.noAdults,
                noOfChildren:this.props.bookhotel.noOfChildren
            }
        }
        console.log(this.state)
    }

    componentDidMount() {
        var options = '';

        for(var i = 0; i < places.length; i++)
            options += '<option value="'+places[i]+'" />';

        document.getElementById('placeList').innerHTML = options;
        var result=this.props.bookhotel.noRooms+" rooms,"+this.props.bookhotel.noGuests+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
        document.getElementById("adultTextBtn").value=this.props.bookhotel.noAdults;
        document.getElementById("childrenTextBtn").value=this.props.bookhotel.noOfChildren;
    }



    addRoom(){
        reactLocalStorage.set('criteriaChanged', true);
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
        reactLocalStorage.set('criteriaChanged', true);
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
        reactLocalStorage.set('criteriaChanged', true);
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
        reactLocalStorage.set('criteriaChanged', true);
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
        reactLocalStorage.set('criteriaChanged', true);
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
        reactLocalStorage.set('criteriaChanged', true);
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
    clickSearchevent
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


    searchHotel = () =>{
        reactLocalStorage.set('criteriaChanged', false);
        var roomTxtBoxVal=(document.getElementById("roomInfoTxtBox").value).split(',');
        var roomcount=parseInt((roomTxtBoxVal[0])[0]);
        var guestcount=parseInt((roomTxtBoxVal[1])[0]);
        var data={
            location:this.state.criteria.location,
            checkindate:this.state.criteria.checkindate,
            checkoutdate: this.state.criteria.checkoutdate,
            noGuests : guestcount,
            noRooms : roomcount
        }
        this.props.HoteBbookingInfo(data);
        // this.props.clickSearchevent(data);

        HotelAPI.getHotels(data)
            .then((res) => {
                console.log(res);
                this.props.GetHotels(res.hotels);
                this.props.history.push("/hotels");
            });
    }

    calendarDisplay() {
        debugger;
        // var date_input=$('input[name="date"]'); //our date input has the name "date"
        var date_input = document.getElementsByName("date")
        var container = '#aaa'
        date_input.datepicker({
            format: 'D mm/dd',
            container: container,
            todayHighlight: true,
            autoclose: true,
        })
    }


    render() {

        return (

            <div className = "Navbar">
                <div className = "container-fluid" >
                    <div className = "row">
                        <div className = "col-sm-4 col-xs-4">
                            <input type = "text" className = "form-control" list ="placeList" id = "usr" value={this.state.criteria.location} onChange={(event) => {
                                var state_temp = this.state;
                                reactLocalStorage.set('criteriaChanged', true);
                                state_temp.criteria.location = event.target.value;
                                this.setState(state_temp);
                            }}/>
                            <datalist id="placeList"></datalist>
                        </div>
                        <div className = "col-sm-2 col-xs-2" id = "aaa">
                            <input className = "form-control datepicker" id = "date" name = "date"  value={this.state.criteria.checkindate} placeholder = "MM/DD/YYYY" type = "date" onChange={(event) => {
                                var state_temp = this.state;
                                reactLocalStorage.set('criteriaChanged', true);
                                state_temp.criteria.checkindate = event.target.value;
                                this.setState(state_temp);
                            }}/>

                        </div>
                        <div className = "col-sm-2 col-xs-2">
                            <input className = "form-control datepicker" id = "date1" value={this.state.criteria.checkoutdate}  name = "date" placeholder = "MM/DD/YYYY" type = "date" onChange={(event) => {
                                var state_temp = this.state;
                                reactLocalStorage.set('criteriaChanged', true);
                                state_temp.criteria.checkoutdate = event.target.value;
                                this.setState(state_temp);
                            }}  />

                        </div>

                        <div className = "col-sm-3 col-xs-3">
                            <input type = "text" className = "form-control"  id = "roomInfoTxtBox" readOnly onFocus = {()=>this.showHideChangePopUpjQ("show")}/><i className = "glyphicon glyphicon-user usericon" style={divStyle} onClick={()=>this.popUpDisplay()} ></i>
                            <div id = 'div_change_qty' name = 'div_change_qty' >
                                <table width = '100%' height = '100%'>
                                    <tbody>
                                    <tr><td width = '50%'>Occupancy</td>
                                        <td width = '20%'><button  type = "button" className = "hideBtn">
                                            +
                                        </button>
                                        </td>

                                        <td width = '20%'><button  type = "button"  className = "hideBtn">
                                            -
                                        </button>
                                        </td>
                                        <td width = '10%'>

<span className = "spanClose" onClick ={()=>this.popUpClose()}><b>X</b>

</span></td>
                                    </tr>


                                    <tr className = "borderclassName"><td width = '50%'>Rooms</td>
                                        <td width = '10%'><button type = "button" id = "addRoomBtn" onClick ={()=>this.addRoom()} className = "btn btn-default">
                                            +
                                        </button>
                                        </td>
                                        <td width = '10%'><span id = "roomTextBtn">1

</span></td>
                                        <td width = '10%'><button type = "button" className = "btn btn-default" id = "removeRoomBtn" onClick ={()=>this.removeRoom()}>
                                            -
                                        </button>
                                        </td>
                                    </tr>

                                    <tr className = "borderclassName"><td width = '50%'>Adults</td>
                                        <td width = '10%'><button type = "button" id = "addAdultBtn" onClick ={()=>this.addAdult()} className = "btn btn-default">
                                            +
                                        </button>
                                        </td>
                                        <td width = '10%'><span id = "adultTextBtn">3

</span>
                                        </td>
                                        <td width = '10%'><button type = "button" id = "removeAdultBtn" className = "btn btn-default" onClick = {()=>this.removeAdult()}>
                                            -
                                        </button>
                                        </td>
                                    </tr>

                                    <tr><td width = '50%'>Childrens</td>
                                        <td width = '10%'><button type = "button" id = "addChildrenBtn" className = "btn btn-default" onClick = {()=>this.addChildren()}>
                                            +
                                        </button>
                                        </td>
                                        <td width = '10%'><span id = "childrenTextBtn" >
0
</span>
                                        </td>
                                        <td width = '10%'><button type = "button" id = "removeChildrenBtn" className = "btn btn-default"
                                                                  onClick ={()=>this.removeChildren()}>
                                            -
                                        </button>
                                        </td>
                                    </tr>
                                    </ tbody>
                                </table>
                            </div>
                        </div>
                        <div className = "col-sm-1 col-xs-1">
                            <span><img src="Search.png" style={imgStyle} onClick={this.searchHotel}/></span>
                        </div>
                    </div>
                </ div>
            </ div>

        );
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        bookhotel: state.hotels.bookhotel
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({HoteBbookingInfo : HoteBbookingInfo, GetHotels:GetHotels}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelSearchBox));