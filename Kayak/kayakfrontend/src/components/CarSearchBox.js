import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';


class CarSearchBox extends Component {
    constructor(props){
        super(props);
     this.state = {
             flag:false
        }
    }
   
    

        render() {
         
                          return (
                              
         <div>hello cars</div>
                 );
}
}

export default withRouter(CarSearchBox);

