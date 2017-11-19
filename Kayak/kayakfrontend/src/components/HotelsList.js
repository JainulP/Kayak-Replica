import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import HotelUnit from './HotelUnit';
import Footer from './Footer';

class HotelsList extends Component {
    constructor(props){
        super(props);
     this.state = {
         flag:false,
         pricefilter : 50,
         hotelnamefilter:""
        }
    }
setFlag = () => {
    console.log("clicked")
        var stateTemp =this.state;
        stateTemp.flag = !stateTemp.flag;
        this.setState(stateTemp);
    }
adjustPrice = () =>
{
    
}
  render() {
      var hotelUnitsList = []; 
      var data = this.props.hotelList;
       data.map(function(temp, index) {
           hotelUnitsList.push(
               <HotelUnit hotelData={temp}/>
           );
       });
    return (  
        <div>
   <div className="row">
      <div className="row  background-gray">
         <div className="col-md-3">
            <div>
               <div className="comp1 reset-margin-custom">
                  1234 out of 1300 | RESET        
               </div>
               <div className="background-color-white">
                  <div>
                     <p className="filter-heading-style">Stars</p>
                     <p className="filter-content-style">
                        <select className="filter-style">
                           <option value="0" className="filter-style">Any Star</option>
                           <option value="1" className="filter-style">1 star and up</option>
                           <option value="2" className="filter-style">2 star and up</option>
                           <option value="3" className="filter-style">3 star and up</option>
                           <option value="4" className="filter-style">4 star and up</option>
                           <option value="5" className="filter-style">5 star and up</option>
                        </select>
                     </p>
                  </div>
                  <div>
                     <p className="filter-heading-style">Reviews</p>
                     <p className="filter-content-style">
                        <select className="filter-style">
                           <option value="0" className="filter-style">Any Reviews</option>
                           <option value="2" className="filter-style">2 points and up</option>
                           <option value="4" className="filter-style">4 points and up</option>
                           <option value="6" className="filter-style">6 points and up</option>
                           <option value="8" className="filter-style">8 points and up</option>
                           <option value="10" className="filter-style">10 points and up</option>
                        </select>
                     </p>
                  </div>
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
                  <div>
                     <p className="filter-heading-style">Hotel Name</p>
                     <div className="filter-content-style">
                        <input type="text" id="hotelname" value={this.state.hotelnamefilter}
                           onChange={(event) => {
                        var a = this.state;
                        a.hotelnamefilter = event.target.value
                        this.setState(a);
                        }}/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-md-9 padding-none">
            {hotelUnitsList}
         </div>
      </div>
      <Footer/>
   </div>
</div>
    );
  }
}

export default withRouter(HotelsList);

