import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

ReactDOM.render(
    <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <App/>
    </div> ,
    document.getElementById('root'));