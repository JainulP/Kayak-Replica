import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import MainComponent from './MainComponent.js';
import StaticContentComponent from './StaticContentComponent.js';
import HotelsList from './HotelsList.js';
import CarsList from './CarsList.js';
import FlightsList from './FlightsList.js';
import HotelPage from './HotelPage';
import HotelForm from './HotelForm';
import TopMenu from './TopMenu';
class HomePage extends Component {
  render() {
    return (                     
         <div>
        
                <Route exact path="/" render={() => (
                    <div>
           <MainComponent/>
        <div className="grey-content"></div>
        <StaticContentComponent/>                        
                    </div>
                )}/>

                <Route exact path="/hotels" render={() => (
                    <div>
                        <TopMenu/>
                       <HotelsList/>
                    </div>
                )}/>
                <Route exact path="/cars" render={() => (
                    <div>
                                                  <TopMenu/>
                            <CarsList/>                   
                    </div>
                )}/>
                <Route exact path="/flights" render={() => (
                                                       <div>
                                                     <TopMenu/>
                               <FlightsList/>                      
                                                     
                                                       </div>
                )}/>
<Route exact path="/hotelPage" render={() => (
       
                    <div>
                                       <TopMenu/>
                        <HotelPage/>
        </div>
                )}/>
<Route exact path="/hotelForm" render={() => (
       
                    <div>
                        <HotelForm/>
        </div>
                )}/>
            </div>
    );
  }
}

export default withRouter(HomePage);

