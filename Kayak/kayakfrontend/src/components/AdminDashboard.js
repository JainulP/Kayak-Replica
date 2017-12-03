import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import CarUnit from './CarUnit';
import Footer from './Footer';
import GraphUnit from './GraphUnit'
import GraphUnit2 from './GraphUnit2'
import CarsData from './CarsData'
import HotelsData from './HotelData'
import FlightsData from './FlightsData';
import Reviewgraphs from './Reviewgraphs';
//import GraphsData2 from './GraphUnit2';
import RangeSlider from 'react-dual-rangeslider';
const GraphData1 = {
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
class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            view:"snapshot",
            render:"Hotels",

        };

        this.changediv1 = this.changediv1.bind(this);
        this.changediv2 = this.changediv2.bind(this);
        this.changediv3 = this.changediv3.bind(this);
        this.changediv4 = this.changediv4.bind(this);
        this.changediv5 = this.changediv5.bind(this);
    };
    setView = (view) => {
        console.log("view clicked");
        var stateTemp =this.state;
        stateTemp.view = view;
        this.setState(stateTemp);
    };


    changediv1() {

       this.setState({
           render: 'Graphs',
       });

    };
    changediv2() {

        this.setState({
            render: 'Hotels',
        });

    };
    changediv3() {

        this.setState({
            render: 'Flights',
        });

    };

    changediv4() {

        this.setState({
            render: 'Cars',
        });

    };

    changediv5(){
        this.setState({
                render:'Reviewgraphs',
        });
    };

    render() {



        return (
            <div>
                <div className="row">
                    <div className="row  background-gray">
                        <div className="col-md-3">


                            {/* FILTERS */}
                            <button   onClick={()=>this.changediv1()} className="btn btn-primary btn-block"> Graphs</button>
                            <button   onClick={()=>this.changediv5()} className="btn btn-primary btn-block"> Revenue Graphs</button>
                                <button  onClick={()=>this.changediv2()} className="btn btn-primary btn-block"> Hotels</button>
                                <button onClick={()=>this.changediv3()} className="btn btn-primary btn-block"> Flights</button>
                                <button onClick={()=>this.changediv4()} className="btn btn-primary btn-block"> Cars</button>



                        </div>



                            {this.state.render === 'Graphs' ? (
                                <div id='padding123' className="col-md-9 padding-none">
                                <GraphUnit graphData1={GraphData1}/>

                                </div>
                            ) : (
                                this.state.render === 'Cars' ?
                                    <div id='padding123' className="col-md-9 padding-none">
                                    <CarsData/>
                                </div>:(
                                    this.state.render === 'Hotels' ?
                                        <div id='padding123' className="col-md-9 padding-none">
                                            <HotelsData/>
                                        </div>:(
                                        this.state.render === 'Flights' ?
                                            <div id='padding123' className="col-md-9 padding-none">
                                                <FlightsData/>
                                            </div>:(
                                            this.state.render === 'Reviewgraphs' ?
                                                <div id='padding123' className="col-md-9 padding-none">
                                                    <GraphUnit2/>
                                                </div>:null

                                        )
                                    )

                                )
                            )}

                        {/* LIST OF CAR UNITS */}






                            </div>
                    </div>
                    {/* FOOTER */}
                    <Footer/>
                </div>


        );
    }
}

export default withRouter(AdminDashboard);

