import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
         this.state = {
            type:'hotels'
        }
    }
  render() {
    return (  
        <div>
        {this.props.type}
        </div>
    );
  }
}

export default SearchBar;
