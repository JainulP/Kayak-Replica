import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import * as API from '../api/API';

const data = {
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






class GraphUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphData1: this.getState(),
            data: {
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
            }


        }
    }

    getState = () =>{

        var data = {
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
                console.log('hi');
                var json=JSON.parse(res.results);

                var count=0;
                var count1=0;
                var count2=0;
                //var count3=0;

                //console.log(json[i]);

                //count1=0;

                for(var j in json[3])
                {



                    console.log(json[3][j]);
                    console.log(  data.labels);

                    if(!( data.labels.includes(json[3][j])) ) {
                        //  console.log(data.datasets);
                        data.datasets[0].data.push(1);
                        data.labels.push(json[3][j]);
                        console.log(data.labels);
                    }
                    if(data.labels.includes(json[3][j]))
                    {

                        for(var k=0;k<data.labels.length;k++)
                        {
                            if(json[3][j]===data.labels[k])
                            {
                                console.log(data.datasets[0].data);
                                data.datasets[0].data[k]+=1;
                            }

                        }
                    }

                    //  console.log(res[i][j]);


                }

                /*
                 for( j in json[2])
                 {



                 console.log(json[2][j]);
                 console.log(  data2.labels);

                 if(!( data4.labels.includes(json[2][j])) ) {
                 //  console.log(data.datasets);
                 data4.datasets[0].data.push(1);
                 data4.labels.push(json[2][j]);
                 console.log(data4.labels);
                 }
                 if(data4.labels.includes(json[2][j]))
                 {

                 for( k=0;k<data4.labels.length;k++)
                 {
                 if(json[2][j]===data4.labels[k])
                 {
                 console.log(data4.datasets[0].data);
                 data4.datasets[0].data[k]+=1;
                 }

                 }
                 }

                 //  console.log(res[i][j]);


                 }


                 for( j in json[1])
                 {



                 console.log(json[1][j]);
                 console.log(  data3.labels);

                 if(!( data3.labels.includes(json[1][j])) ) {
                 //  console.log(data.datasets);
                 data3.datasets[0].data.push(1);
                 data3.labels.push(json[1][j]);
                 console.log(data3.labels);
                 }
                 if(data3.labels.includes(json[1][j]))
                 {

                 for( k=0;k<data3.labels.length;k++)
                 {
                 if(json[1][j]===data3.labels[k])
                 {
                 console.log(data3.datasets[0].data);
                 data3.datasets[0].data[k]+=1;
                 }


                 }
                 }

                 //  console.log(res[i][j]);


                 }

                 for( j in json[0])
                 {



                 console.log(json[0][j]);
                 console.log(  data2.labels);

                 if(!( data2.labels.includes(json[0][j])) ) {
                 //  console.log(data.datasets);
                 data2.datasets[0].data.push(1);
                 data2.labels.push(json[0][j]);
                 console.log(data2.labels);
                 }
                 if(data2.labels.includes(json[3][j]))
                 {

                 for( k=0;k<data2.labels.length;k++)
                 {
                 if(json[0][j]===data2.labels[k])
                 {
                 console.log(data2.datasets[0].data);
                 data2.datasets[0].data[k]+=1;
                 }

                 }
                 }

                 //  console.log(res[i][j]);


                 }




                 //  this.state.data.datasets[0].data.push(count2);
                 //  console.log(this.state.data.datasets[0]);
                 */
            });
// var state_temp=this.state;
//        state_temp.graphData1 = data;
//        this.setState(state_temp);
        return data;
    };


    getState2 = () =>{

        var data4 = {
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
                console.log('hi');
                var json=JSON.parse(res.results);

                var count=0;
                var count1=0;
                var count2=0;
                //var count3=0;

                //console.log(json[i]);

                //count1=0;



                //  console.log(res[i][j]);





                for( var j in json[2])
                {



                    console.log(json[2][j]);
                    console.log(  data4.labels);

                    if(!( data4.labels.includes(json[2][j])) ) {
                        //  console.log(data.datasets);
                        data4.datasets[0].data.push(1);
                        data4.labels.push(json[2][j]);
                        console.log(data4.labels);
                    }
                    if(data4.labels.includes(json[2][j]))
                    {

                        for( var k=0;k<data4.labels.length;k++)
                        {
                            if(json[2][j]===data4.labels[k])
                            {
                                console.log(data4.datasets[0].data);
                                data4.datasets[0].data[k]+=1;
                            }

                        }
                    }

                    //  console.log(res[i][j]);


                }

                /*


                 for( j in json[1])
                 {



                 console.log(json[1][j]);
                 console.log(  data3.labels);

                 if(!( data3.labels.includes(json[1][j])) ) {
                 //  console.log(data.datasets);
                 data3.datasets[0].data.push(1);
                 data3.labels.push(json[1][j]);
                 console.log(data3.labels);
                 }
                 if(data3.labels.includes(json[1][j]))
                 {

                 for( k=0;k<data3.labels.length;k++)
                 {
                 if(json[1][j]===data3.labels[k])
                 {
                 console.log(data3.datasets[0].data);
                 data3.datasets[0].data[k]+=1;
                 }


                 }
                 }

                 //  console.log(res[i][j]);


                 }

                 for( j in json[0])
                 {



                 console.log(json[0][j]);
                 console.log(  data2.labels);

                 if(!( data2.labels.includes(json[0][j])) ) {
                 //  console.log(data.datasets);
                 data2.datasets[0].data.push(1);
                 data2.labels.push(json[0][j]);
                 console.log(data2.labels);
                 }
                 if(data2.labels.includes(json[3][j]))
                 {

                 for( k=0;k<data2.labels.length;k++)
                 {
                 if(json[0][j]===data2.labels[k])
                 {
                 console.log(data2.datasets[0].data);
                 data2.datasets[0].data[k]+=1;
                 }

                 }
                 }

                 //  console.log(res[i][j]);


                 }




                 //  this.state.data.datasets[0].data.push(count2);
                 //  console.log(this.state.data.datasets[0]);
                 */
            });

        return data4;
    };



    getState3 = () =>{

        var data3 = {
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
                console.log('hi');
                var json=JSON.parse(res.results);

                var count=0;
                var count1=0;
                var count2=0;
                //var count3=0;

                //console.log(json[i]);

                //count1=0;





                for(var j in json[1])
                {



                    console.log(json[1][j]);
                    console.log(  data3.labels);

                    if(!( data3.labels.includes(json[1][j])) ) {
                        //  console.log(data.datasets);
                        data3.datasets[0].data.push(1);
                        data3.labels.push(json[1][j]);
                        console.log(data3.labels);
                    }
                    if(data3.labels.includes(json[1][j]))
                    {

                        for(var  k=0;k<data3.labels.length;k++)
                        {
                            if(json[1][j]===data3.labels[k])
                            {
                                console.log(data3.datasets[0].data);
                                data3.datasets[0].data[k]+=1;
                            }


                        }
                    }

                    //  console.log(res[i][j]);


                }
                /*
                 for( j in json[0])
                 {



                 console.log(json[0][j]);
                 console.log(  data2.labels);

                 if(!( data2.labels.includes(json[0][j])) ) {
                 //  console.log(data.datasets);
                 data2.datasets[0].data.push(1);
                 data2.labels.push(json[0][j]);
                 console.log(data2.labels);
                 }
                 if(data2.labels.includes(json[3][j]))
                 {

                 for( k=0;k<data2.labels.length;k++)
                 {
                 if(json[0][j]===data2.labels[k])
                 {
                 console.log(data2.datasets[0].data);
                 data2.datasets[0].data[k]+=1;
                 }

                 }
                 }

                 //  console.log(res[i][j]);


                 }




                 //  this.state.data.datasets[0].data.push(count2);
                 //  console.log(this.state.data.datasets[0]);
                 */
            });

        return data3;
    };


    getState4 = () =>{

        var data2 = {
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
                console.log('hi');
                var json=JSON.parse(res.results);

                var count=0;
                var count1=0;
                var count2=0;
                //var count3=0;

                //console.log(json[i]);

                //count1=0;







                for( var j in json[0])
                {



                    console.log(json[0][j]);
                    console.log(  data2.labels);

                    if(!( data2.labels.includes(json[0][j])) ) {
                        //  console.log(data.datasets);
                        data2.datasets[0].data.push(1);
                        data2.labels.push(json[0][j]);
                        console.log(data2.labels);
                    }
                    if(data2.labels.includes(json[3][j]))
                    {

                        for(var k=0;k<data2.labels.length;k++)
                        {
                            if(json[0][j]===data2.labels[k])
                            {
                                console.log(data2.datasets[0].data);
                                data2.datasets[0].data[k]+=1;
                            }

                        }
                    }

                    //  console.log(res[i][j]);


                }




                //  this.state.data.datasets[0].data.push(count2);
                //  console.log(this.state.data.datasets[0]);

            });

        return data2;
    };





    componentWillMount(){


        console.log(this.getState());



    }


    bookCar = () =>{
        this.props.history.push("/carForm");
    }
    render() {
        console.log(this.getState());

        console.log(data);

        //if(data==)


        return (
            <div className="pad-top-10  margin-right-40 margin-bottom-none">
                <div className="row backgroud-white margin-bottom-5">

                    <div className="col-md-6">

                        <span className="font-size-19"> <h2>Cars most searched</h2></span>



                        <Doughnut data={data}/>
                        {this.props.graphData1.datasets[0].backgroundColor}

                    </div>
                    <div className="col-md-6">

                        <span className="font-size-19"> <h2>Hotels most searched</h2></span>

                        <Doughnut data={this.getState4()}   />

                    </div>

                    <div className="col-md-6">
                        <h2>Flights searched from</h2>
                        <Doughnut data={this.getState3()}   />
                    </div>

                    <div className="col-md-6">
                        <h2>Flights searched to</h2>
                        <Doughnut data={this.getState2()}   />
                    </div>


                </div>

            </div>



        );
    }
}

export default withRouter(GraphUnit);

