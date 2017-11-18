import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Route, withRouter } from 'react-router-dom';
import HotelSearchBox from'./HotelSearchBox';
class SearchBar extends Component {
    constructor(props){
        super(props);
         this.state = {
            type:'hotels'
        }
    }
    clickevent = () =>{
        if(this.props.type === 'hotels'){
         this.props.history.push("/hotels");
    }
        if(this.props.type === 'cars'){
            console.log(this.props.history)
         this.props.history.push("/cars");
    }
        if(this.props.type === 'flights'){
         this.props.history.push("/flights");
    }
    }
  render() {
    return (  
        <div>
        <button onClick={this.clickevent}>{this.props.type}
        </button>
        </div>
    );
  }
}

export default withRouter(SearchBar);
