import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './components/MainComponent.js';
import StaticContentComponent from './components/StaticContentComponent.js';

class App extends Component {
  render() {
    return (    
        
         <div className="App">
                    
                        <MainComponent/>
        <div className="grey-content"></div>
        <StaticContentComponent/>
                   
                </div>
       
    );
  }
}

export default App;
