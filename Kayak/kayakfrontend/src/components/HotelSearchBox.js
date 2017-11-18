import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';

class HotelSearchBox extends Component {
    constructor(props){
        super(props);
     this.state = {
             flag:false
        }
    }
    componentWillMount(){
       // document.getElementById("removeChildrenBtn").disabled = //true;
     //document.getElementById("removeRoomBtn").disabled = true;
    document.getElementById("roomInfoTxtBox").value="1 room,3 guests";
    
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
    
    showHideChangePopUpjQ(m) {
    var disp = m === 'hide' ? 'none' : 'block';
    document.getElementById('div_change_qty').css("display", disp);
}
    spanCloseAction(){
       // debugger;
document.getElementById('div_change_qty').css("display", 'none');
};
      usericonClick(){
       // debugger;
document.getElementById('div_change_qty').css("display", 'block');
};
    
     
	/*document.addEventListener("DOMContentLoaded", function(event) { 
       // debugger;
		var date_input=$('input[name="date"]'); //our date input has the name "date"
		var container='#aaa'
		date_input.datepicker({
			format: 'D mm/dd',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})
	})*/
  /* function myFunction(a) {
        debugger;
    $('.datepicker datepicker-dropdown dropdown-menu datepicker-orient-right datepicker-orient-bottom').css({
      "top" :  "0px;"    
     }); 
}*/

  render() {
    return ( 
         <div class="bootstrap-iso">
<div class="container-fluid" >
<div class="row">
<div class="col-sm-4 col-xs-4 hotelFields">
<input type="text" class="form-control" id="usr"/>
</div>
<div class="col-sm-2 col-xs-2 hotelFields" id="aaa">
    <input class="form-control datepicker" id="date" name="date"  placeholder="MM/DD/YYYY" type="text" onclick="myFunction(this)"/><i class="glyphicon glyphicon-calendar calendariconTo"></i>

</div>
<div class="col-sm-2 col-xs-2 hotelFields">
    <input class="form-control datepicker" id="date1" name="date" placeholder="MM/DD/YYYY" type="text" onblur="myFunction(this)"/><i class="glyphicon glyphicon-calendar calendariconFrom"></i>

</div>

<div class="col-sm-3 col-xs-3 hotelFields">
 <input type="text" class="form-control" id="roomInfoTxtBox" readonly onfocus='showHideChangePopUpjQ("show")'/><i class="glyphicon glyphicon-user usericon"></i>
   <div id='div_change_qty' name='div_change_qty' style='display:none;width:280px;height:200px;position:relative;z-index:10;background:white' >
    <table width='100%' height='100%'>
        <tr><td width='50%'>Occupancy</td>
            <td width='20%'><button style="display: none;" type="button" class="btn btn-default">
           +
        </button>
            </td>
           
            <td width='20%'><button type="button" style="display: none;" class="btn btn-default">
           -
        </button>
            </td>
             <td width='10%'>
                 
                 <span onClick={this.spanCloseAction}class="spanClose"><b>X</b>
           
                </span></td>
        </tr>
        
        
        <tr class="borderClass"><td width='50%'>Rooms</td>
            <td width='10%'><button type="button" id="addRoomBtn" onclick="addRoom()" class="btn btn-default">
           +
        </button>
            </td>
            <td width='10%'><span id="roomTextBtn">1
           
        </span></td>
            <td width='10%'><button type="button" class="btn btn-default" id="removeRoomBtn" disabled onclick="removeRoom()">
           -
        </button>
            </td>
        </tr>
          
         <tr class="borderClass"><td width='50%'>Adults</td>
            <td width='10%'><button type="button" id="addAdultBtn" onclick="addAdult()" class="btn btn-default">
           +
        </button>
            </td>
            <td width='10%'><span id="adultTextBtn">3
           
        </span></td>
            <td width='10%'><button type="button" id="removeAdultBtn" class="btn btn-default" onclick="removeAdult()">
           -
        </button>
            </td>
        </tr>
        
         <tr><td width='50%'>Childrens</td>
            <td width='10%'><button type="button" id="addChildrenBtn" class="btn btn-default" onclick="addChildren()">
           +
        </button>
            </td>
            <td width='10%'><span id="childrenTextBtn" >
           0
        </span></td>
            <td width='10%'><button type="button" disabled id="removeChildrenBtn" class="btn btn-default" onclick="removeChildren()">
           -
        </button>
            </td>
        </tr>
        
    </table>    
</div>
</div>
<div class="col-sm-1 col-xs-1 hotelFields">
    <button type="button" class="btn btn-warning form-control buttonField ">
 <span class="glyphicon glyphicon-search"></span> 
</button>
</div>
</div>       
</div>
        </div>
    );
  }
}

export default withRouter(HotelSearchBox);

