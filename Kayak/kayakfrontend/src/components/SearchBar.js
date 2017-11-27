import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Route, withRouter } from 'react-router-dom';
import HotelSearchBox from'./HotelSearchBox';
import FlightSearchBox from'./FlightSearchBox';
import CarSearchBox from'./CarSearchBox';
class SearchBar extends Component {
    constructor(props){
        super(props);
         this.state = {
            type:'hotels',
             hotelFilter:{
                 "location" : '',
        "checkindate" : '',
        "checkoutdate":''
             }
        }
    }
    clickSearchevent = (criteria) =>{
        if(this.props.type === 'hotels'){
             this.props.searchHotel(criteria);
    }
        if(this.props.type === 'cars'){
            this.props.searchCar(criteria);
    }
        if(this.props.type === 'flights'){
            this.props.searchFlight(criteria);
            console.log(this.props.history)
        // this.props.history.push("/cars");
    }
    }
  render() {
       if(this.props.type === 'hotels'){
    return (  
        <div>
        <HotelSearchBox clickSearchevent={this.clickSearchevent}/>
        </div>
    );
  }
         if(this.props.type === 'cars'){
    return (  
        <div>
        <CarSearchBox clickSearchevent={this.clickSearchevent}/>
        </div>
    );
  }
         if(this.props.type === 'flights'){
    return (  
        <div>
        <FlightSearchBox clickSearchevent={this.clickSearchevent}/>
        </div>
    );
  }
  }
}

export default withRouter(SearchBar);
