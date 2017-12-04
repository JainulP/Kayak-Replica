import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import * as API from '../api/API';
import {Polar} from 'react-chartjs-2';


import {Radar} from 'react-chartjs-2';

const data = {
    labels: [],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(0,100,250,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
        }
    ]
};

const data2 = {
    datasets: [{
        data: [

        ],
        backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
    ]
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

const data5 = {
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



const data6 = {
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


API.getGraphs1()
    .then((res) => {
        for(var k in res.graphs) {
            data.datasets[0].data.push((res.graphs[k].count));
            data.labels.push(res.graphs[k].city);

        }

        for(var k in res.graphs2) {
            data2.datasets[0].data.push((res.graphs2[k].count));
            data2.labels.push(res.graphs2[k].city);

        }

        for(var k in res.graphs3) {
            data3.datasets[0].data.push((res.graphs3[k].count));
            data3.labels.push(res.graphs3[k].FlightIdTo);

        }

        for(var k in res.graphs4) {
            data4.datasets[0].data.push((res.graphs4[k].count));
            data4.labels.push(res.graphs4[k].city);

        }

        for(var k in res.graphs5) {
            data5.datasets[0].data.push((res.graphs5[k].count));
            data5.labels.push(res.graphs5[k].carName);

        }

        for(var k in res.graphs6) {
            data6.datasets[0].data.push((res.graphs6[k].count));
            data6.labels.push(res.graphs6[k].HotelName);

        }

    });








class GraphUnit extends Component {
    constructor(props) {
        super(props);

    }

















    componentWillMount(){






    }


    bookCar = () =>{
        this.props.history.push("/carForm");
    }
    render() {




        //if(data==)


        return (
            <div className="pad-top-10  margin-right-40 margin-bottom-none">
                <div className="row backgroud-white margin-bottom-5">

                    <div className="col-md-5">

                        <span className="font-size-19"> <h2>Revenue city cars</h2></span>



                        <HorizontalBar data={data} />

                    </div>
                    <div className="col-md-5">

                        <span className="font-size-19"> <h2>Hotels city revenue</h2></span>

                        <Polar data={data2}    />

                    </div>

                    <div className="col-md-5">
                        <h2>flights city revenue</h2>
                        <Doughnut data={data3}   />
                    </div>

                    <div className="col-md-5">
                        <h2>Flight property revenue</h2>
                        <Doughnut data={data4}   />
                    </div>


                    <div className="col-md-5">
                        <h2>Car property revenue</h2>
                        <Polar data={data5}   />
                    </div>

                    <div className="col-md-5">
                        <h2>Hotel property revenue</h2>
                        <Polar data={data6}   />
                    </div>


                </div>

            </div>



        );
    }
}

export default withRouter(GraphUnit);

