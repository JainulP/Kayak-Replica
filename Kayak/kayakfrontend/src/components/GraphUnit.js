import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import {HorizontalBar} from 'react-chartjs-2';
import * as API from '../api/API';

const data = {
    labels: ["Hotels Page","Flights Page", "Car Page","Booking Page"

    ],
    datasets: [{
        data: ["Hotels Page","Flights Page", "Car Page","Booking Page"],
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



API.getgraphs()
    .then((res) => {


        var count=0;
        var count1=0;
        var count2=0;
        //var count3=0;
    console.log(res);
    for(var j in res[3]) {
        console.log(j)


        if (!( data.labels.includes(res[3][j]))) {
            //  console.log(data.datasets);
            data.datasets[0].data.push(1);
            data.labels.push(res[3][j]);
            console.log(data.labels);
        }

    }



        //console.log(json[i]);

        //count1=0;

        for( j in res[4])
        {



            console.log(res[4][j]);
            console.log(  data.labels);

            if(!( data.labels.includes(res[4][j])) ) {
                //  console.log(data.datasets);
                data.datasets[0].data.push(1);
                data.labels.push(res[4][j]);
                console.log(data.labels);
            }
            if(data.labels.includes(res[4][j]))
            {

                for(var k=0;k<data.labels.length;k++)
                {
                    if(res[4][j]===data.labels[k])
                    {
                        console.log(data.datasets[0].data);
                        data.datasets[0].data[k]+=1;
                    }

                }
            }

        }



        for( var j in res[2])
        {



            console.log(res[2][j]);
            console.log(  data4.labels);

            if(!( data4.labels.includes(res[2][j])) ) {
                //  console.log(data.datasets);
                data4.datasets[0].data.push(1);
                data4.labels.push(res[2][j]);
                console.log(data4.labels);
            }
            if(data4.labels.includes(res[2][j]))
            {

                for( var k=0;k<data4.labels.length;k++)
                {
                    if(res[2][j]===data4.labels[k])
                    {
                        console.log(data4.datasets[0].data);
                        data4.datasets[0].data[k]+=1;
                    }

                }
            }

            //  console.log(res[i][j]);


        }

        for(var j in res[1])
        {



            console.log(res[1][j]);
            console.log(  data3.labels);

            if(!( data3.labels.includes(res[1][j])) ) {
                //  console.log(data.datasets);
                data3.datasets[0].data.push(1);
                data3.labels.push(res[1][j]);
                console.log(data3.labels);
            }
            if(data3.labels.includes(res[1][j]))
            {

                for(var  k=0;k<data3.labels.length;k++)
                {
                    if(res[1][j]===data3.labels[k])
                    {
                        console.log(data3.datasets[0].data);
                        data3.datasets[0].data[k]+=1;
                    }


                }
            }

            //  console.log(res[i][j]);


        }

        for( var j in res[0])
        {



            console.log(res[0][j]);
            console.log(  data2.labels);

            if(!( data2.labels.includes(res[0][j])) ) {
                //  console.log(data.datasets);
                data2.datasets[0].data.push(1);
                data2.labels.push(res[0][j]);
                console.log(data2.labels);
            }
            if(data2.labels.includes(res[3][j]))
            {

                for(var k=0;k<data2.labels.length;k++)
                {
                    if(res[0][j]===data2.labels[k])
                    {
                        console.log(data2.datasets[0].data);
                        data2.datasets[0].data[k]+=1;
                    }

                }
            }

            //  console.log(res[i][j]);


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

                            <span className="font-size-19"> <h2>Trace Diagram for a user</h2></span>



                            <HorizontalBar data={data}/>

                    </div>
                    <div className="col-md-5">

                        <span className="font-size-19"> <h2>Hotels most searched</h2></span>

                        <Doughnut data={data2}   />

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

