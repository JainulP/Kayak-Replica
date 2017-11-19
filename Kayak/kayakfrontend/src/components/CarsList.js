import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import CarUnit from './CarUnit';
import Footer from './Footer';

class CarsList extends Component {
    constructor(props){
        super(props);
     this.state = {             
         pricefilter : 50
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
                        <input type="checkbox" name="1-2" value="1-2"/><span className="filter-style">1 - 2 Passengers</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/><span className="filter-style">3 - 5 Passengers</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/><span className="filter-style">6 or more Passengers</span><br/>
                     </p>
                     <p>Bags</p>
                     <p className="filter-content-style">
                        <input type="checkbox" name="1-2" value="1-2"/><span className="filter-style">1 - 2 Bags</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/><span className="filter-style">3 - 4 Bags</span><br/>
                     </p>
                  </div>
                  {/* CAR TYPE FILTER */}
                  <div>
                     <p className="filter-heading-style">Car Type</p>
                     <p className="filter-content-style">
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">Medium</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">Small</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">Large</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">SUV</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">Van</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">Convertible</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">Luxury</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/>
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
                        <input type="range" min="50" max="1000" id="myRange" value={this.state.pricefilter}
                           onChange={(event) => {
                        var a = this.state;
                        a.pricefilter = event.target.value
                        this.setState(a);
                        }}/>
                     </div>
                  </div>
                  {/* CAR OPTIONS FILTER */}
                  <div>
                     <p className="filter-heading-style">Car Options</p>
                     <p className="filter-content-style">
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">2/4 Doors</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">4 Doors</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">AC</span><br/>
                        <input type="checkbox" name="1-2" value="1-2"/>
                        <span className="filter-style">Auntomatic Transmission</span><br/>
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

