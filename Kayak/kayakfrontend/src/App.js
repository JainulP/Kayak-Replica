import React, { Component } from 'react';
import {BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent.js';
import HomePage from './components/HomePage.js';
import './App.css';

import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (  
         <div className="App" >
                    <BrowserRouter>
                        <HomePage/>
                    </BrowserRouter>
                </div>
    );
  }
}

export default App;
