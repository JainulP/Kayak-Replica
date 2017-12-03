import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import * as API from '../api/API';

const data = {
    labels: [],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
        }
    ]
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



API.getGraphs1()
    .then((res) => {
        console.log('hi');
        console.log(res);


        for(var  i in res.Data)
        {
            console.log(i);




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

                        <span className="font-size-19"> <h2>Cars most searched</h2></span>



                        <HorizontalBar data={data} />

                    </div>
                    <div className="col-md-5">

                        <span className="font-size-19"> <h2>Hotels most searched</h2></span>

                        <Doughnut data={data}   />

                    </div>

                    <div className="col-md-5">
                        <h2>Flights searched from</h2>
                        <Doughnut data={data3}   />
                    </div>

                    <div className="col-md-5">
                        <h2>Flights searched to</h2>
                        <Doughnut data={data4}   />
                    </div>


                </div>

            </div>



        );
    }
}

export default withRouter(GraphUnit);

