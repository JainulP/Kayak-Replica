import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';

class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            view:"snapshot"
        }
    }
    setView = (view) => {
        console.log("view clicked")
        var stateTemp =this.state;
        stateTemp.view = view;
        this.setState(stateTemp);
    }
    render() {
        return (
            <div className="row pad-top-10">
                <div className="col-md-2">
                    <div className="text-align-left pad-top-10">
                        <p className="padding-right-30 abc" onClick={ () =>{this.setView("snapshot")}} >OVERVIEW</p>
                        <p className="padding-right-30 abc" onClick={ () =>{this.setView("rooms")}} >ROOMS</p>
                        <p className="padding-right-30 abc" onClick={ () =>{this.setView("map")}} >LOCATION</p>
                        <p className="padding-right-30 abc" onClick={ () =>{this.setView("reviews")}} >REVIEWS</p>
                        <p className="padding-right-30 abc" onClick={ () =>{this.setView("details")}} >POLICIES</p>
                    </div>
                </div>
            <div className="col-md-10">
                {(this.state.view === "rooms")?
                    <div>
                        roomsss
                    </div>
                    :null
                }
            </div>
            <div>
            {(this.state.view === "details")?
                <div>
                    <div>Excellent hotel. Great rooms in excellent location. Awesome vibe.</div>
                </div>
                :null
    }
    </div>
        <div>
            {(this.state.view === "map")?
                <span>map</span>:null
            }
        </div>
        <div className="ta-jus">
            {(this.state.view === "snapshot")?
                <span>Hotel Jackson Hotel Jackson a Forbes Four Star and AAA Four Diamond award winning hotelwelcomes guests with distinctive service and inspiring surroundings that meld a contemporary play on nature and the west, with a rich history of Jackson. The luxury boutique hotel features 55 rooms with 4 suites. It is a LEED Building with underground parking.Hotel Jacksons award-winning dining and lounge areas provide a welcoming place to unwind while enjoying locally crafted beers, wine, specialty cocktails and farm-to-table culinary experiences featuring fresh fare made to share. Guests are steps from the famed antler arches on the Jackson Hole Town Square, countless galleries, specialty shops, restaurants and the best night life.</span>:null
            }
        </div>
        <div>
            {(this.state.view === "reviews")?
                <span>reviews</span>:null
            }
        </div>
    </div>

        );
    }
}

export default withRouter(AdminDashboard);

