import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import * as API from '../api/API';
import Ionicon from 'react-ionicons';



const data = {
    labels: [

    ],
    datasets: [{
        data: {},
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'red',
            'yellow'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'crimson red',
            'light yellow'
        ]
    }]
};

const data2 = {
    labels: [

    ],
    datasets: [{
        data: [],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'red',
            'yellow'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'crimson red',
            'light yellow'
        ]
    }]
};


const data3 = {
    labels: [

    ],
    datasets: [{
        data: [],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'red',
            'yellow'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'crimson red',
            'light yellow'
        ]
    }]
};

var data123={};

const data4 = {
    labels: [

    ],
    datasets: [{
        data: [],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'red',
            'yellow'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'crimson red',
            'light yellow'
        ]
    }]
};






var ModalHeader = React.createClass({
    render: function () {
        return (
            <div className="modal-header">
                {this.props.title}
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
});

var ModalBody = React.createClass({
    render: function () {
        return (
            <div className="modal-body">
                {this.props.content}
            </div>
        )
    }
});

var ModalFooter = React.createClass({
    render: function () {
        return (
            <div className="modal-footer">
                <button type="button" className="btn btn-primary">Submit</button>
            </div>
        )
    }
});

var Modal = React.createClass({
    render: function () {
        return (<div className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ModalHeader title="Modal Title"/>
                    <ModalBody content = "Modal Content" />
                    <ModalFooter />
                </div>
            </div>
        </div>)
    }
});









class hotelsdata extends Component {



    constructor(props){
        super(props);
        this.state = {
            view:true,
            FlightID:"",
            AirlinesName:"",
            SourceAirport:"",
            DestinationAirport:"",
            FirstClassSeats:"",
            BusinessClassSeats:"",
            cardnumber: "",
            EconomyClassSeats: "",
            FirstClassFares: "",
            BusinessClassFares: "",
            EconomyClassFares :"",
            TakeOffTime :"",
            LandingTime:"",
            Description:"",
            Plane:"",
            data:{}


        };



    };















    handleclick() {









             var tab=document.getElementById('one');
        var tr=document.createElement('tr');
        var td=document.createElement('td');
        var text2=document.createElement('input');
        text2.type='text';
        text2.placeholder="HOTEL NAME";
        td.appendChild(text2);
        tr.appendChild(td);
        var td2=document.createElement('td');
        var text3=document.createElement('input');
        text3.type='text';
        text3.placeholder="Location";
        td2.appendChild(text3);
        // text3.value=this.state.AirlinesName;
        tr.appendChild(td2);

        var text4=document.createElement('input');
        var td3=document.createElement('td');
        text4.type='text';
        text4.placeholder="Review Score";
        //  text3.value=this.state.SourceAirport;
        td3.appendChild(text4);
        // text3.value=this.state.AirlinesName;
        tr.appendChild(td3);
        // e.srcElement.closest("li").children[4].style.='nowrap';

        var text5=document.createElement('input');
        var td4=document.createElement('td');
        text5.type='text';
        text5.placeholder="Phone";
        td4.appendChild(text5);
        //   text5.value=this.state.DestinationAirport;
        tr.appendChild(td4);
        //   e.srcElement.closest("li").children[4].style.display='unset';

        var text6=document.createElement('input');
        var td5=document.createElement('td');
        text6.type='text';
        text6.placeholder="Address";
        td5.appendChild(text6);
        //   text5.value=this.state.DestinationAirport;
        tr.appendChild(td5);
        // text6.value=this.state.FirstClassSeats;

        // e.srcElement.closest("li").children[4].style.='nowrap';

        var text7=document.createElement('input');
        var td6=document.createElement('td');
        text7.type='text';
        text7.placeholder="Longitde";
        td6.appendChild(text7);
        //   text5.value=this.state.DestinationAirport;
        tr.appendChild(td6);
        //   text7.value=this.state.BusinessClassSeats;

        //   e.srcElement.closest("li").children[4].style.display='unset';
        var text8=document.createElement('input');
        var td7=document.createElement('td');

        // e.srcElement.closest("li").children[4].style.='nowrap';
        text8.type='text';
        text8.placeholder="Latitude";
        td7.appendChild(text8);


        tr.appendChild(td7);


        var text18=document.createElement('input');
        var td17=document.createElement('td');

        // e.srcElement.closest("li").children[4].style.='nowrap';
        text18.type='text';
        text18.placeholder="State";
        td17.appendChild(text18);


        tr.appendChild(td17);


        //    text8.value=this.state.EconomyClassSeats;

        var td8=document.createElement('td');
        var text9=document.createElement('input');
        var td8=document.createElement('td');
        text9.type='text';
        text9.placeholder="Zip";

        td8.appendChild(text9);


        tr.appendChild(td8);

        //   text9.value=this.state.TakeOffTime;

        //   e.srcElement.closest("li").children[4].style.display='unset';

        // e.srcElement.closest("li").children[4].style.='nowrap';
        var td9=document.createElement('td');
        var text123=document.createElement('input');
        text123.type='text';
        text123.placeholder="Stars";
        td9.appendChild(text123);
        tr.appendChild(td9);
        //     text123.value=this.state.LandingTime;







        var td11=document.createElement('td');
        var text11=document.createElement('input');
        text11.type='text';
        text11.placeholder="Description";
        td11.appendChild(text11);
        tr.appendChild(td11);
        //    text11.value=this.state.Plane;


        var td12=document.createElement('td');
        var text12=document.createElement('input');
        text12.type='text';
        text12.placeholder="Deluxe Room Count";
        td12.appendChild(text12);

        tr.appendChild(td12);
        //   text12.value=this.state.FirstClassFares;
        var td13=document.createElement('td');
        var text13=document.createElement('input');
        text13.type='text';
        text13.placeholder="Standard Room Count";
        text13.title = "Standard Room Count";
        td13.appendChild(text13);
        tr.appendChild(td13);



        var td14=document.createElement('td');
        var text14=document.createElement('input');
        text14.type='text';
        text14.placeholder="King Room Count";
        text14.title = "King Room Count";
        td14.appendChild(text14);
        tr.appendChild(td14);


        var td15=document.createElement('td');
        var text15=document.createElement('input');
        text15.type='text';
        text15.placeholder="Queen Room Count";
        text15.title = "Queen Room Count";
        td15.appendChild(text15);
        tr.appendChild(td15);


        var td16=document.createElement('td');
        var text16=document.createElement('input');
        text16.type='text';
        text16.placeholder="Double Room Count";
        text16.title = "Double Room Count";
        td16.appendChild(text16);
        tr.appendChild(td16);



        

        var td19=document.createElement('td');
        var text19=document.createElement('input');
        text19.type='text';
        text19.placeholder="Deluxeprice";
        text19.title="Deluxe price";
        td19.appendChild(text19);
        tr.appendChild(td19);

        var td20=document.createElement('td');
        var text20=document.createElement('input');
        text20.type='text';
        text20.placeholder="Standard price";
        text20.title="Standard price";
        td20.appendChild(text20);
        tr.appendChild(td20);

        var td212=document.createElement('td');
        var text212=document.createElement('input');
        text212.type='text';
        text212.placeholder="King room price";
        text212.title="King room price";
        td212.appendChild(text212);
        tr.appendChild(td212);

        var td22=document.createElement('td');
        var text22=document.createElement('input');
        text22.type='text';
        text22.placeholder="Queen room price";
        text22.title="Queen room price";
        td22.appendChild(text22);
        tr.appendChild(td22);

        var td23=document.createElement('td');
        var text23=document.createElement('input');
        text23.type='text';
        text23.placeholder="Double room price";
        text23.title="Double room price";
        td23.appendChild(text23);
        tr.appendChild(td23);
        var td25=document.createElement('td');
        var text24=document.createElement('p');
        text24.innerHTML='Pool';



        td25.appendChild(text24);

        var td25=document.createElement('td');
        var text25=document.createElement('input');
        text25.type='checkbox';
        td25.appendChild(text25);


        var text27=document.createElement('p');
        text27.innerHTML='Pool';

        td25.appendChild(text27);

        var td26=document.createElement('td');
        var text26=document.createElement('input');
        text25.type='checkbox';
        td26.appendChild(text25);







        var td29=document.createElement('td');
        var text29=document.createElement('input');
        text29.type='checkbox';
        var text23=document.createElement('input');
        text23.type='text';
        text23.placeholder="image";
        td29.appendChild(text23);
        tr.appendChild(td29);

        // tr.appendChild(td24)
        // var td29=document.createElement('td');
        var text40=document.createElement('p');
        text40.innerHTML='Pool';
        var text35=document.createElement('input');
        text35.type='checkbox';
        var text41=document.createElement('p');
        text41.innerHTML='Gym';
        var text36=document.createElement('input');
        text36.type='checkbox';
        var text42=document.createElement('p');
        text42.innerHTML='Spa';
        var text37=document.createElement('input');
        text37.type='checkbox';
        var text43=document.createElement('p');
        text43.innerHTML='Bicycle';
        var text38=document.createElement('input');
        text38.type='checkbox';

        var text30=document.createElement('input');
        text30.type='text';
        text30.placeholder='free_cancel_standard';
        var text31=document.createElement('input');
        text31.type='text';
        text31.placeholder='free_cancel_deluxe';
        var text32=document.createElement('input');
        text32.type='text';
        text32.placeholder='free_cancel_King';
        var text33=document.createElement('input');
        text33.type='text';
        text33.placeholder='free_cancel_Queen';

        text29.type='text';
        text29.placeholder="FC";
        td29.appendChild(text40);
        td29.appendChild(text35);
        td29.appendChild(text41);
        td29.appendChild(text36);
        td29.appendChild(text42);
        td29.appendChild(text37);
        td29.appendChild(text43);
        td29.appendChild(text38);


        td29.appendChild(text30);
        td29.appendChild(text31);
        td29.appendChild(text32);
        td29.appendChild(text33);




        tr.appendChild(td29);





        //  text13.value=this.state.BusinessClassFares;

        //   text14.value=this.state.EconomyClassFares;

        var button123=document.createElement('button');
        button123.innerHTML='Save';
        tr.appendChild(button123);



        tab.appendChild(tr);

        button123.addEventListener("click",function(e) {
            if (e.srcElement.closest("tr").children[1]) {

              console.log(e.srcElement.closest("tr").children[22]);

                fetch('http://localhost:3001/posthotel', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        HotelName: e.srcElement.closest("tr").children[0].children[0].value,
                        Location: e.srcElement.closest("tr").children[1].children[0].value,
                        ReviewScore: e.srcElement.closest("tr").children[2].children[0].value,
                        Phone: e.srcElement.closest("tr").children[3].children[0].value,
                        StreetAddress: e.srcElement.closest("tr").children[4].children[0].value,
                        Longitude: e.srcElement.closest("tr").children[5].children[0].value,
                        Latitude : e.srcElement.closest("tr").children[6].children[0].value,
                        State: e.srcElement.closest("tr").children[7].children[0].value,
                        ZipCode: e.srcElement.closest("tr").children[8].children[0].value,
                        Stars: e.srcElement.closest("tr").children[9].children[0].value,
                        Description: e.srcElement.closest("tr").children[10].children[0].value,
                        DeluxRoomCount: e.srcElement.closest("tr").children[11].children[0].value,
                        StandardRoomCount:e.srcElement.closest("tr").children[12].children[0].value,
                        KingRoomCount:e.srcElement.closest("tr").children[13].children[0].value,
                        QueenRoomCount:e.srcElement.closest("tr").children[14].children[0].value,
                        DoubleRoomCount:e.srcElement.closest("tr").children[15].children[0].value,
                        DeluxRoomPrice:e.srcElement.closest("tr").children[16].children[0].value,
                        StandardRoomPrice:e.srcElement.closest("tr").children[17].children[0].value,
                        KingRoomPrice:e.srcElement.closest("tr").children[18].children[0].value,
                        QueenRoomPrice:e.srcElement.closest("tr").children[19].children[0].value,
                        DoubleRoomPrice:e.srcElement.closest("tr").children[20].children[0].value,
                        image :e.srcElement.closest("tr").children[21].children[0].value,
                        Pool:e.srcElement.closest("tr").children[21].children[2].checked,
                        Gym:e.srcElement.closest("tr").children[21].children[4].checked,
                        Spa:e.srcElement.closest("tr").children[21].children[6].checked,
                        Bicycle:e.srcElement.closest("tr").children[21].children[8].checked,
                        //  {"Pet-Friendly":"'"+document.getElementById("Pet-Friendly").checked+"'"}],
                        /*    {"Wi-Fi":"'"+document.getElementById("Wi-Fi").checked+"'"},
                         {"Parking":"'"+document.getElementById("Parking").checked+"'"},
                         {"Restaurant":"'"+document.getElementById("Restaurant").checked+"'"},
                         {"Disability-Friendly":"'"+document.getElementById("Disability-Friendly").checked+"'"},
                         {"24-Hour-Front-Desk":"'"+ document.getElementById("24-Hour-Front-Desk").checked+"'"}],*/

                        free_cancel_standard:e.srcElement.closest("tr").children[21].children[9].value,
                        free_cancel_king: e.srcElement.closest("tr").children[21].children[10].value,
                        free_cancel_queen: e.srcElement.closest("tr").children[21].children[11].value,
                        free_cancel_double: e.srcElement.closest("tr").children[21].children[12].value,



                        operation: 'insert'


                    })

                })
                    .then(function (response) {
                        alert("Update Completed")
                    }).then(function (body) {
                    console.log(body);
                });

            }

        });






    };

    componentWillMount() {



        var tab=document.getElementById('one');
        // this.state.render='Graphs';
        API.getHotels()
            .then((res) => {
                console.log('hi');
                var wert=0;
                data123=res.hotels;
                for(var hotel in res.hotels) {





                    var tr = document.createElement('tr');
                    var  inp = document.createElement('input');
                    inp.type='checkbox';
                    tr.appendChild(inp);
                    for (var k in res.hotels[hotel]) {


                        if (k === 'amenities') {
                            console.log(res.hotels[hotel][k][0]);

                         //   console.log(res.hotels[hotel][k][0]['Gym']);


                            console.log(res.hotels[hotel][k]);
                            if (res.hotels[hotel][k] !== 'NULL' || res.hotels[hotel][k] !== null || res.hotels[hotel][k] !== '') {
                                var res12='';

                                for (var j in res.hotels[hotel][k][0]) {
                                    var p;
                                    if (res.hotels[hotel][k][0][j]===true) {

                                       res12+=j+' ';

                                    }
                                    console.log(res12);


                                }

                                tr.appendChild(document.createTextNode(res12));
                            }

                        else {

                            var td = document.createElement('td');

                            td.innerHTML = 'NULL';


                            tr.appendChild(td);
                        }

                    }
                        else {

                            var td = document.createElement('td');
                            if (res.hotels[hotel][k] === null || res.hotels[hotel][k] === '')
                                td.innerHTML = 'NULL';
                            else
                                td.innerHTML = res.hotels[hotel][k];
                            if (k === 'amenities')
                                wert++;

                            tr.appendChild(td);
                        }
                    }
                     if(wert===0) {
                        var td1345 = document.createElement('td');
                        td1345.innerHTML = 'NULL';
                        tr.appendChild(td1345);
                     }
                    var span = document.createElement('span');
                    span.className = "glyphicon glyphicon-pencil";
                    var but2 = document.createElement('button');
                    but2.className = 'btn btn-primary btn-xs';
                    but2.appendChild(span);
                    //but2.onClick = changediv1();
                    tr.appendChild(but2);
                    span = document.createElement('span');
                    span.className = "glyphicon glyphicon-pencil";
                    var but3 = document.createElement('button');
                    but3.className = 'btn btn-primary btn-xs';
                    // but3.onClick = changediv1();
                    but3.appendChild(span);
                    tr.appendChild(but3);

                    document.getElementById('one').appendChild(tr);

                    but2.addEventListener("click",function(e)
                    {


                        // e.srcElement.closest("tr").children[1].appendChild(text2);
                        var text3=document.createElement('input');
                        text3.type='text';
                        text3.placeholder="Name";
                        // text3.value=this.state.AirlinesName;


                        e.srcElement.closest("tr").children[2].appendChild(text3);
                        var text4=document.createElement('input');
                        text4.type='text';
                        text4.placeholder="Loc";
                        //  text3.value=this.state.SourceAirport;

                        // e.srcElement.closest("li").children[4].style.='nowrap';
                        e.srcElement.closest("tr").children[3].appendChild(text4);
                        var text5=document.createElement('input');
                        text5.type='text';
                        text5.placeholder="Score";
                        //   text5.value=this.state.DestinationAirport;
                        //   e.srcElement.closest("li").children[4].style.display='unset';
                        e.srcElement.closest("tr").children[4].appendChild(text5);
                        var text6=document.createElement('input');
                        text6.type='text';
                        text6.placeholder="Phone";
                        // text6.value=this.state.FirstClassSeats;

                        // e.srcElement.closest("li").children[4].style.='nowrap';
                        e.srcElement.closest("tr").children[5].appendChild(text6);
                        var text7=document.createElement('input');
                        text7.type='text';
                        text7.placeholder="Address";
                        //   text7.value=this.state.BusinessClassSeats;

                        //   e.srcElement.closest("li").children[4].style.display='unset';
                        e.srcElement.closest("tr").children[6].appendChild(text7);
                        var text8=document.createElement('input');

                        // e.srcElement.closest("li").children[4].style.='nowrap';
                        text8.type='text';
                        text8.placeholder="Long";
                        //    text8.value=this.state.EconomyClassSeats;

                        e.srcElement.closest("tr").children[7].appendChild(text8);
                        var text9=document.createElement('input');
                        text9.type='text';
                        text9.placeholder="Lati";
                        //   text9.value=this.state.TakeOffTime;

                        //   e.srcElement.closest("li").children[4].style.display='unset';
                        e.srcElement.closest("tr").children[8].appendChild(text9);
                        // e.srcElement.closest("li").children[4].style.='nowrap';
                        var text123=document.createElement('input');
                        text123.type='text';
                        text123.placeholder="State";
                        //     text123.value=this.state.LandingTime;






                        e.srcElement.closest("tr").children[9].appendChild(text123);
                        var text11=document.createElement('input');
                        text11.type='text';
                        text11.placeholder="Zip";
                        //    text11.value=this.state.Plane;


                        e.srcElement.closest("tr").children[10].appendChild(text11);
                        var text12=document.createElement('input');
                        text12.type='text';
                        text12.placeholder="Stars";
                        //   text12.value=this.state.FirstClassFares;

                        e.srcElement.closest("tr").children[11].appendChild(text12);
                        var text13=document.createElement('input');
                        text13.type='text';
                        text13.placeholder="Desc";
                        //  text13.value=this.state.BusinessClassFares;


                        //   text14.value=this.state.EconomyClassFares;

                        e.srcElement.closest("tr").children[12].appendChild(text13);




                        var text14=document.createElement('input');
                        text14.type='text';
                        text14.placeholder="DeluxeRcnt";
                        e.srcElement.closest("tr").children[13].appendChild(text14);
                        text14.disabled = true;


                        var text15=document.createElement('input');
                        text15.type='text';
                        text15.placeholder="SRCnt";
                        e.srcElement.closest("tr").children[14].appendChild(text15);
                        text15.disabled = true;



                        var text16=document.createElement('input');
                        text16.type='text';
                        text16.placeholder="KRCnt";
                        e.srcElement.closest("tr").children[15].appendChild(text16);
                        text16.disabled = true;


                        var text17=document.createElement('input');
                        text17.type='text';
                        text17.placeholder="QRCnt";
                        e.srcElement.closest("tr").children[16].appendChild(text17);
                        text17.disabled = true;



                        var text18=document.createElement('input');
                        text18.type='text';
                        text18.placeholder="Doubleroomcnt";
                        e.srcElement.closest("tr").children[17].appendChild(text18);
                        text18.disabled = true;


                        var text19=document.createElement('input');
                        text19.type='text';
                        text19.placeholder="Delprice";
                        e.srcElement.closest("tr").children[18].appendChild(text19);



                        var text20=document.createElement('input');
                        text20.type='text';
                        text20.placeholder="Sroomprice";
                        e.srcElement.closest("tr").children[19].appendChild(text20);




                        var text21=document.createElement('input');
                        text21.type='text';
                        text21.placeholder="Kingroomprice";
                        e.srcElement.closest("tr").children[20].appendChild(text21);

                        var text22=document.createElement('input');
                        text22.type='text';
                        text22.placeholder="QueenRPr";
                        e.srcElement.closest("tr").children[21].appendChild(text22);




                        var text239=document.createElement('input');
                        text239.type='text';
                        text239.placeholder="DoubleRPr";
                        e.srcElement.closest("tr").children[22].appendChild(text239);

                        var text234=document.createElement('input');
                        text234.type='text';
                        text234.placeholder="image";
                        text234.label="image";
                        e.srcElement.closest("tr").children[23].appendChild(text234);





                        var tr345=document.createElement('tr');
                        var text345x=document.createElement('p');
                        text345x.innerText='Pool';
                        var text345y=document.createElement('input');
                        text345y.type='checkbox';
                        tr345.appendChild(text345x);
                        tr345.appendChild(text345y);
                        e.srcElement.closest("tr").children[23].appendChild(tr345);

                        var tr345a=document.createElement('tr');
                        var text345xa=document.createElement('p');
                        text345xa.innerText='Gym';
                        var text345ya=document.createElement('input');
                        text345ya.type='checkbox';
                        tr345a.appendChild(text345xa);
                        tr345a.appendChild(text345ya);
                        e.srcElement.closest("tr").children[23].appendChild(tr345a);

                        var tr345b=document.createElement('tr');
                        var text345xb=document.createElement('p');
                        text345xb.innerText='Spa';
                        var text345yb=document.createElement('input');
                        text345yb.type='checkbox';
                        tr345b.appendChild(text345xb);
                        tr345b.appendChild(text345yb);
                        e.srcElement.closest("tr").children[23].appendChild(tr345b);

                        var tr345c=document.createElement('tr');
                        var text345xc=document.createElement('p');
                        text345xc.innerText='Bicyrental';
                        var text345yc=document.createElement('input');
                        text345yc.type='checkbox';
                        tr345c.appendChild(text345xc);
                        tr345c.appendChild(text345yc);
                        e.srcElement.closest("tr").children[23].appendChild(tr345c);

                        var tr345d=document.createElement('tr');
                        var text345xd=document.createElement('input');
                        text345xd.placeholder='free_cancel_delux';

                        e.srcElement.closest("tr").children[23].appendChild(tr345d);

                        var tr345e=document.createElement('tr');
                        var text345xe=document.createElement('input');
                        text345xe.placeholder='free_cancel_standard';

                        e.srcElement.closest("tr").children[23].appendChild(text345xe);

                        var tr345f=document.createElement('tr');
                        var text345xf=document.createElement('input');
                        text345xf.placeholder='free_cancel_king';

                        e.srcElement.closest("tr").children[23].appendChild(text345xf);

                        var tr345g=document.createElement('tr');
                        var text345xg=document.createElement('input');
                        text345xg.placeholder='free_cancel_queen';

                        e.srcElement.closest("tr").children[23].appendChild(text345xg);

                        var tr345h=document.createElement('tr');
                        var text345xh=document.createElement('input');
                        text345xh.placeholder='free_cancel_double';

                        e.srcElement.closest("tr").children[23].appendChild(text345xh);






























                        var button123=document.createElement('button');
                        button123.innerHTML='Save';
                        e.srcElement.closest("tr").appendChild(button123);

                        button123.addEventListener("click",function(e,document)
                        {
                            //console.log(document.getElementById('myModal').children[0].children[1].children[0].children[0].value);

                            // var xyz=document.getElementById('pool').checked;
                            //console.log(document.getElementById('image'));

                            if( e.srcElement.closest("tr").children[1].innerText) {
                                console.log(e.srcElement.closest("tr").children[23].children[0].value);

                                console.log(e.srcElement.closest("tr").children[23].children[6].value);
                                console.log(e.srcElement.closest("tr").children[23].children[7].value);
                                console.log(e.srcElement.closest("tr").children[23].children[8].value);
                                console.log(e.srcElement.closest("tr").children[23].children[9].value);

                                console.log(e.srcElement.closest("tr").children[23].children[1].children[1].checked);
                                console.log(e.srcElement.closest("tr").children[23].children[2].children[1].checked);
                                console.log(e.srcElement.closest("tr").children[23].children[3].children[1].checked);
                                console.log(e.srcElement.closest("tr").children[23].children[4].children[1].checked);


                                console.log(e.srcElement.closest("tr").children[24].children);

                                fetch('http://localhost:3001/posthotel' , {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify( {
                                        HotelId:e.srcElement.closest("tr").children[1].innerText,
                                        HotelName:e.srcElement.closest("tr").children[2].children[0].value,
                                        Location:e.srcElement.closest("tr").children[3].children[0].value,
                                        ReviewScore:e.srcElement.closest("tr").children[4].children[0].value,
                                        Phone:e.srcElement.closest("tr").children[5].children[0].value,
                                        StreetAddress:e.srcElement.closest("tr").children[6].children[0].value,

                                        Longitude:e.srcElement.closest("tr").children[7].children[0].value,
                                        Latitude:e.srcElement.closest("tr").children[8].children[0].value,
                                        State:e.srcElement.closest("tr").children[9].children[0].value,
                                        ZipCode:e.srcElement.closest("tr").children[10].children[0].value,
                                        Stars:e.srcElement.closest("tr").children[11].children[0].value,
                                        Description:e.srcElement.closest("tr").children[12].children[0].value,
                                        DeluxRoomCount:'',
                                        StandardRoomCount:'',
                                        KingRoomCount:'',
                                        QueenRoomCount:'',
                                        DoubleRoomCount:'',
                                        DeluxRoomPrice:e.srcElement.closest("tr").children[18].children[0].value,
                                        StandardRoomPrice:e.srcElement.closest("tr").children[19].children[0].value,
                                        KingRoomPrice:e.srcElement.closest("tr").children[20].children[0].value,
                                        QueenRoomPrice:e.srcElement.closest("tr").children[21].children[0].value,
                                        DoubleRoomPrice:e.srcElement.closest("tr").children[22].children[0].value,
                                        operation:'update',


                                        image :e.srcElement.closest("tr").children[23].children[0].value,
                                        Pool:e.srcElement.closest("tr").children[23].children[1].children[1].checked,
                                        Gym:e.srcElement.closest("tr").children[23].children[2].children[1].checked,
                                        Spa:e.srcElement.closest("tr").children[23].children[3].children[1].checked,
                                        Bicycle:e.srcElement.closest("tr").children[23].children[4].children[1].checked,
                                        //  {"Pet-Friendly":"'"+document.getElementById("Pet-Friendly").checked+"'"}],
                                        /*    {"Wi-Fi":"'"+document.getElementById("Wi-Fi").checked+"'"},
                                         {"Parking":"'"+document.getElementById("Parking").checked+"'"},
                                         {"Restaurant":"'"+document.getElementById("Restaurant").checked+"'"},
                                         {"Disability-Friendly":"'"+document.getElementById("Disability-Friendly").checked+"'"},
                                         {"24-Hour-Front-Desk":"'"+ document.getElementById("24-Hour-Front-Desk").checked+"'"}],*/

                                        free_cancel_standard:e.srcElement.closest("tr").children[23].children[6].value,
                                        free_cancel_king: e.srcElement.closest("tr").children[23].children[7].value,
                                        free_cancel_queen: e.srcElement.closest("tr").children[23].children[8].value,
                                        free_cancel_double: e.srcElement.closest("tr").children[23].children[9].value,
                                        /* "delux_bed_type":"'"+ e.srcElement.closest("tr").children[23].children[9].value+"'",
                                         "standard_bed_type":"'"+ e.srcElement.closest("tr").children[23].children[9].value+"'",
                                         "king_bed_type":"'"+ document.getElementById("king_bed_type").value+"'",
                                         "queen_bed_type": "'"+document.getElementById("queen_bed_type").value+"'",
                                         "double_bed_type": "'"+document.getElementById("double_bed_type").value+"'",
                                         */


                                    } )

                                })
                                    .then(function (response) {
                                        alert("Update Completed")
                                    }).then(function (body) {
                                    console.log(body);
                                });

                            }
                            else
                            {
                                this.state.HotelId=e.srcElement.closest("tr").children[0].children[0].value;
                                this.state.HotelName=e.srcElement.closest("tr").children[2].children[0].value;
                                this.state.Location=e.srcElement.closest("tr").children[3].children[0].value;
                                this.state.ReviewScore=e.srcElement.closest("tr").children[4].children[0].value;
                                this.state.Phone=e.srcElement.closest("tr").children[5].children[0].value;
                                this.state.StreetAddress=e.srcElement.closest("tr").children[6].children[0].value;
                                this.state.State=e.srcElement.closest("tr").children[7].children[0].value;
                                this.state.Longitude=e.srcElement.closest("tr").children[8].children[0].value;
                                this.state.Latitude=e.srcElement.closest("tr").children[9].children[0].value;
                                this.state.ZipCode=e.srcElement.closest("tr").children[10].children[0].value;
                                this.state.Stars=e.srcElement.closest("tr").children[11].children[0].value;
                                this.state.Description=e.srcElement.closest("tr").children[12].children[0].value;


                                //this.props.handleSubmit1(this.state);

                                fetch('http://localhost:3001/posthotel' , {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify( {
                                        state:this.state,

                                    } )

                                })
                                    .then(function (response) {
                                        alert("Update Completed")
                                    }).then(function (body) {
                                    console.log(body);
                                });

                            }


                        });

                    });
                    /*    but3.addEventListener("click",function(e)
                     {
                     if( e.srcElement.closest("li").children[0].innerText===this.state.FlightID) {


                     fetch('http://localhost:3001/postflight' , {
                     method: 'POST',
                     headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     },
                     body: JSON.stringify( {
                     state:this.state,

                     } )

                     })
                     .then(function (response) {
                     alert("Update Completed")
                     }).then(function (body) {
                     console.log(body);
                     });

                     }
                     else
                     {
                     this.state.FlightID=e.srcElement.closest("tr").children[0].children[0].value;
                     this.state.AirlinesName=e.srcElement.closest("tr").children[2].children[0].value;
                     this.state.SourceAirport=e.srcElement.closest("tr").children[3].children[0].value;
                     this.state.DestinationAirport=e.srcElement.closest("tr").children[4].children[0].value;
                     this.state.FirstClassSeats=e.srcElement.closest("tr").children[5].children[0].value;
                     this.state.BusinessClassSeats=e.srcElement.closest("tr").children[6].children[0].value;
                     this.state.EconomyClassSeats=e.srcElement.closest("tr").children[7].children[0].value;
                     this.state.TakeOffTime=e.srcElement.closest("tr").children[8].children[0].value;
                     this.state.LandingTime=e.srcElement.closest("tr").children[9].children[0].value;
                     this.state.Description=e.srcElement.closest("tr").children[10].children[0].value;
                     this.state.Plane=e.srcElement.closest("tr").children[11].children[0].value;
                     this.state.FirstClassFares=e.srcElement.closest("tr").children[12].children[0].value;
                     this.state.BusinessClassFares=e.srcElement.closest("tr").children[13].children[0].value;
                     this.state.EconomyClassFares=e.srcElement.closest("tr").children[14].children[0].value;

                     //this.props.handleSubmit1(this.state);

                     fetch('http://localhost:3001/postflight' , {
                     method: 'POST',
                     headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     },
                     body: JSON.stringify( {
                     state:this.state,

                     } )

                     })
                     .then(function (response) {
                     alert("Update Completed")
                     }).then(function (body) {
                     console.log(body);
                     });

                     }

                     });*/


                }



            });


        //tab.appendChild(tr);

    }




    //var count3=0;

    //console.log(json[i]);

    //count1=0;





    componentDidMount() {
        this.state.render='Graphs';

        document.getElementById('myModal').style.position='fixed';
        document.getElementById('myModal').style.display='none';
        document.getElementById('myModal').style.left='10';
        document.getElementById('myModal').style.top='10';
        document.getElementById('myModal').style.width='50%';
        document.getElementById('myModal').style.height='50%';
        document.getElementById('image').style="margin: 2px";


        /* Wi-Fi




         <input  type="text" id="image" placeholder="image"></input>
         Pool
         <input  type="checkbox" id="'pool" ></input>
         </tr>
         <tr className="form-control">
         Gym
         <input  type="checkbox" id="'Gym" ></input>
         Spa
         <input type="checkbox" id="Spa" ></input>
         Bicycle-Rental
         <input type="checkbox" id="Bicycle-Rental" ></input>
         </tr>
         <tr className="form-control">
         Pet-Friendly
         <input type="checkbox" id="Pet-Friendly" ></input>
         Wi-Fi
         <input type="checkbox" id="Wi-Fi" ></input>
         Parking
         <input type="checkbox" id="Parking" ></input>
         Disability-Friendly
         <input type="checkbox" id="Disability-Friendly" ></input>
         </tr>
         <tr className="form-control">

         24-Hour-Front-Desk
         <input type="checkbox" id="24-Hour-Front-Desk" ></input>
         free_cancel_delux
         <input type="checkbox" id="free_cancel_delux" ></input>
         free_cancel_standard
         <input type="checkbox" id="free_cancel_standard" ></input>
         </tr>
         <tr className="form-control">


         free_cancel_king
         <input type="checkbox" id="free_cancel_king" ></input>
         free_cancel_queen
         <input type="checkbox" id="free_cancel_queen" ></input>
         free_cancel_double
         <input type="checkbox" id="free_cancel_double" ></input>
         </tr>
         <tr className="form-control">

         delux_bed_type
         <input type="text" id="delux_bed_type" ></input>
         standard_bed_type
         <input type="text" id="standard_bed_type" ></input>
         </tr>
         <tr className="form-control">
         king_bed_type
         <input type="text" id="king_bed_type" ></input>
         queen_bed_type
         <input type="text" id="queen_bed_type" ></input>
         double_bed_type
         <input type="text" id="double_bed_type" ></input>
         </tr>
         */

    }

    changediv1() {

        this.setState({
            view: false,
        });

    };


    render() {
        return (
            <div className="pad-top-10  margin-right-40">
                <div className="row">


                    <div className="col-md-12">

                        <div className="table-responsive">


                            <table id="mytable" className="table  table-striped">

                                <thead>

                                <th><input type="checkbox" className="checkthis" /></th>
                                <th>Id</th>
                                <th>HName</th>
                                <th>Loc</th>
                                <th>Score</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Long</th>

                                <th>Lati</th>
                                <th>State</th>
                                <th>Zip</th>
                                <th>Stars</th>
                                <th>Desc</th>
                                <th>DeRcnt..</th>
                                <th>SRCnt..</th>
                                <th>KRCnt..</th>
                                <th>QRCnt..</th>
                                <th>DRCnt..</th>
                                <th>DePr..</th>
                                <th>SRPr..</th>
                                <th>KRPr..</th>
                                <th>QRPr..</th>
                                <th>DRPr..</th>
                                <th>amenities</th>
                                <th>image</th>

                                </thead>
                                <tbody id="one">




                                </tbody>

                            </table>


                            <button className ="btn btn primary" onClick={()=>this.handleclick()}>Insert new Hotel entry</button>

                            <div className="clearfix"></div>
                            <ul className="pagination pull-right">
                                <li className="disabled"><a href="#"><span className="glyphicon glyphicon-chevron-left"></span></a></li>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-chevron-right"></span></a></li>
                            </ul>

                        </div>

                    </div>




                    <div id="myModal"   className="modal">


                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <table>

                                <tr className="form-control">

                                    image:
                                    <input  type="text" id="image" placeholder="image"></input>
                                    Pool
                                    <input  type="checkbox" id="pool" value="on" checked="false" ></input>
                                </tr>
                                <tr className="form-control">
                                    Gym
                                    <input  type="checkbox" id="Gym"  checked="false" ></input>
                                    Spa
                                    <input type="checkbox" id="Spa" ></input>
                                    Bicycle-Rental
                                    <input type="checkbox" id="Bicycle-Rental" checked="false"  ></input>
                                </tr>
                                <tr className="form-control">
                                    Pet-Friendly
                                    <input type="checkbox" id="Pet-Friendly" checked="false"  ></input>
                                    Wi-Fi
                                    <input type="checkbox" id="Wi-Fi" checked="false" ></input>
                                    Parking
                                    <input type="checkbox" id="Parking"  checked="false"></input>
                                    Disability-Friendly
                                    <input type="checkbox" id="Disability-Friendly" checked="false" ></input>
                                </tr>
                                <tr className="form-control">

                                    24-Hour-Front-Desk
                                    <input type="checkbox" id="24-Hour-Front-Desk" checked="false"></input>
                                    free_cancel_delux
                                    <input type="checkbox" id="free_cancel_delux" checked="false"></input>
                                    free_cancel_standard
                                    <input type="checkbox" id="free_cancel_standard" checked="false"></input>
                                </tr>
                                <tr className="form-control">


                                    free_cancel_king
                                    <input type="checkbox" id="free_cancel_king" checked="false"></input>
                                    free_cancel_queen
                                    <input type="checkbox" id="free_cancel_queen" checked="false"></input>
                                    free_cancel_double
                                    <input type="checkbox" id="free_cancel_double" checked="false"></input>
                                </tr>
                                <tr className="form-control">

                                    delux_bed_type
                                    <input type="text" id="delux_bed_type" ></input>
                                    standard_bed_type
                                    <input type="text" id="standard_bed_type" ></input>
                                </tr>
                                <tr className="form-control">
                                    king_bed_type
                                    <input type="text" id="king_bed_type" ></input>
                                    queen_bed_type
                                    <input type="text" id="queen_bed_type" ></input>
                                    double_bed_type
                                    <input type="text" id="double_bed_type" ></input>
                                </tr>


                            </table>



                        </div>

                    </div>

                </div>
            </div>


        );
    }
}

export default withRouter(hotelsdata);

