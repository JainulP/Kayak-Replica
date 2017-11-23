import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import CarUnit from './CarUnit';
import Footer from './Footer';
import RangeSlider from 'react-dual-rangeslider';

class CarsList extends Component {
    constructor(props){
        super(props);
     this.state = {
         maxpricefilter : 1000,
         minpricefilter : 10
        }
    }
  render() {
    return ( 
        <div>
   <div className="row">
      <div className="row  background-gray">
         <div className="col-md-3">
            {/* FILTERS */}
            <div>
               <div className="comp1 reset-margin-custom">
                  1234 out of 1300 | RESET        
               </div>
               <div className="background-color-white">
                  {/* CAPACITY FILTER */}
                  <div>
                     <p className="filter-heading-style">Capacity</p>
                     <p>Passengers</p>
                     <p className="filter-content-style">
                        <input type="checkbox" name="1-2" value="2"/><span className="filter-style">1 - 2 Passengers</span><br/>
                        <input type="checkbox" name="1-2" value="5"/><span className="filter-style">3 - 5 Passengers</span><br/>
                        <input type="checkbox" name="1-2" value="6"/><span className="filter-style">6 or more Passengers</span><br/>
                     </p>
                     <p>Bags</p>
                     <p className="filter-content-style">
                        <input type="checkbox" name="1-2" value="2"/><span className="filter-style">1 - 2 Bags</span><br/>
                        <input type="checkbox" name="1-2" value="4"/><span className="filter-style">3 - 4 Bags</span><br/>
                     </p>
                     <p>Doors</p>
                     <p className="filter-content-style">
                        <input type="checkbox" name="carDoors" value={2} /><span className="filter-style">2 doors</span><br/>
                        <input type="checkbox" name="carDoors" value={4} /><span className="filter-style">2-4 doors</span><br/>
                     </p>
                  </div>
                  {/* CAR TYPE FILTER */}
                  <div>
                     <p className="filter-heading-style">Car Type</p>
                     <p className="filter-content-style">
                        <input type="checkbox" name="1-2" value="Medium"/>
                        <span className="filter-style">Medium</span><br/>
                        <input type="checkbox" name="1-2" value="Small"/>
                        <span className="filter-style">Small</span><br/>
                        <input type="checkbox" name="1-2" value="Large"/>
                        <span className="filter-style">Large</span><br/>
                        <input type="checkbox" name="1-2" value="SUV"/>
                        <span className="filter-style">SUV</span><br/>
                        <input type="checkbox" name="1-2" value="Van"/>
                        <span className="filter-style">Van</span><br/>
                        <input type="checkbox" name="1-2" value="Convertible"/>
                        <span className="filter-style">Convertible</span><br/>
                        <input type="checkbox" name="1-2" value="Luxury"/>
                        <span className="filter-style">Luxury</span><br/>
                        <input type="checkbox" name="1-2" value="Pickup Truck"/>
                        <span className="filter-style">Pickup Truck</span><br/>
                     </p>
                  </div>
                  {/* PAYMENT TYPE FILTER */}
                  <div>
                     <p className="filter-heading-style">Payment Type</p>
                     <p className="filter-content-style">
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">Pay now</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">Pay at counter</span><br/>
                     </p>
                  </div>
                  {/* PRICE FILTER */}
                  <div>
                     <p className="filter-heading-style">Price</p>
                     <div className="filter-content-style">
                        <div id="selectedPrice">{this.state.pricefilter}</div>


                        <RangeSlider
                            min={10}
                            max={1000}
                            onChange={()=>{
                                console.log('react-dual-rangeslider max: ', this.state.maxpricefilter);
                                console.log('react-dual-rangeslider min: ', this.state.minpricefilter);
                            }}
                            step={1}/>
                     </div>
                  </div>
                  {/* CAR OPTIONS FILTER */}
                  <div>
                     <p className="filter-heading-style">Car Options</p>
                     <p className="filter-content-style">
                        <input type="checkbox" name="other" value="airportPickup"/>
                        <span className="filter-style">Airport Pick-up</span><br/>
                        <input type="checkbox" name="other" value="airConditioning"/>
                        <span className="filter-style">AC</span><br/>
                              <input type="checkbox" name="other" value="automatic"/>
                        <span className="filter-style">Automatic Transmission</span><br/>
                                 <input type="checkbox" name="other" value="hybrid"/>
                                 <span className="filter-style">hybrid</span><br/>
                     </p>
                  </div>
               </div>
            </div>
         </div>
         {/* LIST OF CAR UNITS */}
         <div className="col-md-9 padding-none">
            <CarUnit/>
            <CarUnit/>
            <CarUnit/>
         </div>
      </div>
      {/* FOOTER */}
      <Footer/>
   </div>
</div>
    );
  }
}

export default withRouter(CarsList);

