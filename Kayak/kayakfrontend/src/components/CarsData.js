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






class CarsData extends Component {



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
        text2.placeholder="FID";
        td.appendChild(text2);
        tr.appendChild(td);
        var td2=document.createElement('td');
        var text3=document.createElement('input');
        text3.type='text';
        text3.placeholder="Name";
        td2.appendChild(text2);
        // text3.value=this.state.AirlinesName;
        tr.appendChild(td2);

        var text4=document.createElement('input');
        var td3=document.createElement('td');
        text4.type='text';
        text4.placeholder="SA";
        //  text3.value=this.state.SourceAirport;
        td3.appendChild(text4);
        // text3.value=this.state.AirlinesName;
        tr.appendChild(td3);
        // e.srcElement.closest("li").children[4].style.='nowrap';

        var text5=document.createElement('input');
        var td4=document.createElement('td');
        text5.type='text';
        text5.placeholder="DA";
        td4.appendChild(text5);
        //   text5.value=this.state.DestinationAirport;
        tr.appendChild(td4);
        //   e.srcElement.closest("li").children[4].style.display='unset';

        var text6=document.createElement('input');
        var td5=document.createElement('td');
        text6.type='text';
        text6.placeholder="FC";
        td5.appendChild(text6);
        //   text5.value=this.state.DestinationAirport;
        tr.appendChild(td5);
        // text6.value=this.state.FirstClassSeats;

        // e.srcElement.closest("li").children[4].style.='nowrap';

        var text7=document.createElement('input');
        var td6=document.createElement('td');
        text7.type='text';
        text7.placeholder="FC";
        td6.appendChild(text7);
        //   text5.value=this.state.DestinationAirport;
        tr.appendChild(td6);
        //   text7.value=this.state.BusinessClassSeats;

        //   e.srcElement.closest("li").children[4].style.display='unset';
        var text8=document.createElement('input');
        var td7=document.createElement('td');

        // e.srcElement.closest("li").children[4].style.='nowrap';
        text8.type='text';
        text8.placeholder="FC";
        td7.appendChild(text8);


        tr.appendChild(td7);


        var text18=document.createElement('input');
        var td17=document.createElement('td');

        // e.srcElement.closest("li").children[4].style.='nowrap';
        text18.type='text';
        text18.placeholder="FC";
        td17.appendChild(text18);


        tr.appendChild(td17);


        //    text8.value=this.state.EconomyClassSeats;


        var text9=document.createElement('input');
        var td8=document.createElement('td');
        text9.type='time';
        text9.placeholder="FC";

        td8.appendChild(text9);


        tr.appendChild(td8);
        var td9=document.createElement('td');
        //   text9.value=this.state.TakeOffTime;

        //   e.srcElement.closest("li").children[4].style.display='unset';

        // e.srcElement.closest("li").children[4].style.='nowrap';
        var text123=document.createElement('input');
        text123.type='time';
        text123.placeholder="FC";
        td9.appendChild(text123);
        tr.appendChild(td9);
        //     text123.value=this.state.LandingTime;





        var textarea=document.createElement('textarea');
        var td10=document.createElement('td');
        //     textarea.value=this.state.Description;
   td10.appendChild(textarea);
        tr.appendChild(td10);

        var td11=document.createElement('td');
        var text11=document.createElement('input');
        text11.type='text';
        text11.placeholder="FC";
        td11.appendChild(text11);
        tr.appendChild(td11);
        //    text11.value=this.state.Plane;


        var td12=document.createElement('td');
        var text12=document.createElement('input');
        text12.type='text';
        text12.placeholder="FC";
        td12.appendChild(text12);
        tr.appendChild(td12);
        //   text12.value=this.state.FirstClassFares;
        var td13=document.createElement('td');
                var text13=document.createElement('input');
        text13.type='text';
        text13.placeholder="FC";
        td13.appendChild(text13);
        tr.appendChild(td13);
        //  text13.value=this.state.BusinessClassFares;
        var td14=document.createElement('td');
                var text14=document.createElement('input');
        text14.type='text';
        text14.placeholder="FC";
        td14.appendChild(text14);
        tr.appendChild(td14);
        //   text14.value=this.state.EconomyClassFares;

        var button123=document.createElement('button');
        button123.innerHTML='Save';
        tr.appendChild(button123);



        tab.appendChild(tr);

        button123.addEventListener("click",function(e) {
            if (e.srcElement.closest("tr").children[1]) {

console.log(e.srcElement.closest("tr").children[10].children[0].value);

                fetch('http://localhost:3001/postflight', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        FlightID: e.srcElement.closest("tr").children[1].children[0].value,
                        AirlinesName: e.srcElement.closest("tr").children[2].children[0].value,
                        SourceAirport: e.srcElement.closest("tr").children[3].children[0].value,
                        DestinationAirport: e.srcElement.closest("tr").children[4].children[0].value,
                        FirstClassSeats: e.srcElement.closest("tr").children[5].children[0].value,
                        BusinessClassSeats: e.srcElement.closest("tr").children[6].children[0].value,
                        EconomyClassSeats: e.srcElement.closest("tr").children[7].children[0].value,
                        TakeOffTime: e.srcElement.closest("tr").children[8].children[0].value,
                        LandingTime: e.srcElement.closest("tr").children[9].children[0].value,
                        Description: e.srcElement.closest("tr").children[10].children[0].value,
                        Plane: e.srcElement.closest("tr").children[11].children[0].value,
                        FirstClassFares: e.srcElement.closest("tr").children[12].children[0].value,
                        BusinessClassFares: e.srcElement.closest("tr").children[13].children[0].value,
                        EconomyClassFares: e.srcElement.closest("tr").children[14].children[0].value,
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
        API.getFlights()
            .then((res) => {
                console.log('hi');

                data123=res.flights;
for(var flight in res.flights) {
    var tr = document.createElement('tr');
    var  inp = document.createElement('input');
    inp.type='checkbox';
    tr.appendChild(inp);
    for (var k in res.flights[flight]) {

        var td = document.createElement('td');
        td.innerHTML = res.flights[flight][k];

        tr.appendChild(td);
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
        text3.onChange=(event) => {
        this.setState({
            AirlinesName: event.target.value,
            FlightID:e.srcElement.closest("tr").children[1].innerText

        });
            console.log(this.state.FlightID);
    };
        e.srcElement.closest("tr").children[2].appendChild(text3);
        var text4=document.createElement('input');
        text4.type='text';
        text4.placeholder="SA";
      //  text3.value=this.state.SourceAirport;
        text3.onChange=(event) => {
            this.setState({
                SourceAirport: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
        };
        // e.srcElement.closest("li").children[4].style.='nowrap';
        e.srcElement.closest("tr").children[3].appendChild(text4);
        var text5=document.createElement('input');
        text5.type='text';
        text5.placeholder="DA";
     //   text5.value=this.state.DestinationAirport;
        text5.onChange=(event) => {
            this.setState({
                DestinationAirport: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
        };
        //   e.srcElement.closest("li").children[4].style.display='unset';
        e.srcElement.closest("tr").children[4].appendChild(text5);
        var text6=document.createElement('input');
        text6.type='text';
        text6.placeholder="FC";
       // text6.value=this.state.FirstClassSeats;
        text6.onChange=(event) => {
            this.setState({
                FirstClassSeats: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
            console.log(this.state.FlightID);
        };
        // e.srcElement.closest("li").children[4].style.='nowrap';
        e.srcElement.closest("tr").children[5].appendChild(text6);
        var text7=document.createElement('input');
        text7.type='text';
        text7.placeholder="FC";
     //   text7.value=this.state.BusinessClassSeats;
        text7.onChange=(event) => {
            this.setState({
                BusinessClassSeats: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
        };
        //   e.srcElement.closest("li").children[4].style.display='unset';
        e.srcElement.closest("tr").children[6].appendChild(text7);
        var text8=document.createElement('input');

        // e.srcElement.closest("li").children[4].style.='nowrap';
        text8.type='text';
        text8.placeholder="FC";
    //    text8.value=this.state.EconomyClassSeats;
        text8.onChange=(event) => {
            this.setState({
                EconomyClassSeats: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
        };
        e.srcElement.closest("tr").children[7].appendChild(text8);
        var text9=document.createElement('input');
        text9.type='time';
        text9.placeholder="FC";
     //   text9.value=this.state.TakeOffTime;
        text9.onChange=(event) => {
            this.setState({
                TakeOffTime: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
        };
        //   e.srcElement.closest("li").children[4].style.display='unset';
        e.srcElement.closest("tr").children[8].appendChild(text9);
        // e.srcElement.closest("li").children[4].style.='nowrap';
        var text123=document.createElement('input');
        text123.type='time';
        text123.placeholder="FC";
   //     text123.value=this.state.LandingTime;
        text123.onChange=(event) => {
            this.setState({
                LandingTime: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
        };


        e.srcElement.closest("tr").children[9].appendChild(text123);

        var textarea=document.createElement('textarea');
   //     textarea.value=this.state.Description;
        textarea.onChange=(event) => {
            this.setState({
                Description: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
        };

        e.srcElement.closest("tr").children[10].appendChild(textarea);
        var text11=document.createElement('input');
        text11.type='text';
        text11.placeholder="FC";
    //    text11.value=this.state.Plane;
        text11.onChange=(event) => {
            this.setState({
                Plane: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
        };

        e.srcElement.closest("tr").children[11].appendChild(text11);
        var text12=document.createElement('input');
        text12.type='text';
        text12.placeholder="FC";
     //   text12.value=this.state.FirstClassFares;
        text12.onChange=(event) => {
            this.setState({
                FirstClassFares: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
        };
        e.srcElement.closest("tr").children[12].appendChild(text12);
        var text13=document.createElement('input');
        text13.type='text';
        text13.placeholder="FC";
      //  text13.value=this.state.BusinessClassFares;
        text13.onChange=(event) => {
            this.setState({
                BusinessClassFares: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
        };
        e.srcElement.closest("tr").children[13].appendChild(text13);
        var text14=document.createElement('input');
        text14.type='text';
        text14.placeholder="FC";
     //   text14.value=this.state.EconomyClassFares;
        text14.onChange=(event) => {
            this.setState({
                EconomyClassFares: event.target.value,
                FlightID:e.srcElement.closest("tr").children[1].innerText
            });
        };
        e.srcElement.closest("tr").children[14].appendChild(text14);
        var button123=document.createElement('button');
       button123.innerHTML='Save';
        e.srcElement.closest("tr").children[15].appendChild(button123);

        button123.addEventListener("click",function(e)
        {
            if( e.srcElement.closest("tr").children[1].innerText) {


            fetch('http://localhost:3001/postflight' , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                    FlightID:e.srcElement.closest("tr").children[1].innerText,
                    AirlinesName:e.srcElement.closest("tr").children[2].children[0].value,
                    SourceAirport:e.srcElement.closest("tr").children[3].children[0].value,
               DestinationAirport:e.srcElement.closest("tr").children[4].children[0].value,
              FirstClassSeats:e.srcElement.closest("tr").children[5].children[0].value,
               BusinessClassSeats:e.srcElement.closest("tr").children[6].children[0].value,
               EconomyClassSeats:e.srcElement.closest("tr").children[7].children[0].value,
            TakeOffTime:e.srcElement.closest("tr").children[8].children[0].value,
              LandingTime:e.srcElement.closest("tr").children[9].children[0].value,
         Description:e.srcElement.closest("tr").children[10].children[0].value,
               Plane:e.srcElement.closest("tr").children[11].children[0].value,
              FirstClassFares:e.srcElement.closest("tr").children[12].children[0].value,
               BusinessClassFares:e.srcElement.closest("tr").children[13].children[0].value,
                EconomyClassFares:e.srcElement.closest("tr").children[14].children[0].value,
                operation:'update'


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
                                <th>AirlinesName</th>
                                <th>SA</th>
                                <th>DA</th>
                                <th>FC</th>
                                <th>BC</th>
                                <th>EC</th>

                                <th>TakeOff</th>
                                <th>Landing</th>
                                <th>Desc</th>
                                <th>Plane</th>
                                <th>FC Fares</th>
                                <th>BC Fares</th>
                                <th>EC Fares</th>

                                <th>duration</th>

                                </thead>
                                <tbody id="one">




                                </tbody>

                            </table>


<button classNmae ="btn btn primary" onClick={()=>this.handleclick()}>Insert new flight entry</button>

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




                    <div className="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                                    <h4 className="modal-title custom_align" id="Heading">Edit Your Detail</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <input className="form-control " type="text" placeholder="Mohsin">
                                        </input>
                                    </div>
                                    <div className="form-group">

                                        <input className="form-control " type="text" placeholder="Irshad"></input>
                                    </div>
                                    <div className="form-group">
                                        <textarea rows="2" className="form-control" placeholder="CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan"></textarea>


                                    </div>
                                </div>
                                <div className="modal-footer ">
                                    <button type="button" className="btn btn-warning btn-lg"><span className="glyphicon glyphicon-ok-sign"></span> Update</button>
                                </div>
                            </div>

                        </div>

                    </div>



                    <div className="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                                    <h4 className="modal-title custom_align" id="Heading">Delete this entry</h4>
                                </div>
                                <div className="modal-body">

                                    <div className="alert alert-danger"><span className="glyphicon glyphicon-warning-sign"></span> Are you sure you want to delete this Record?</div>

                                </div>
                                <div className="modal-footer ">
                                    <button type="button" className="btn btn-success" ><span className="glyphicon glyphicon-ok-sign"></span> Yes</button>
                                    <button type="button" className="btn btn-default" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span> No</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(CarsData) ;

