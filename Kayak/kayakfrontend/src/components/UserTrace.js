import {Route, withRouter, BrowserRouter} from 'react-router-dom';
import React, {Component} from 'react';
import * as AdminAPI from '../api/AdminAPI';
import {HorizontalBar} from 'react-chartjs-2';

class UserTrace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:null
        }
    }
    componentDidMount(){
        var data={
            userid: "1"
    }
        AdminAPI.getUserTrace(data)
            .then((res) =>{
                console.log(res)
                var state_temp = this.state;
                state_temp.data = res.result;
                this.setState(state_temp);
            });
    }
    render() {
        return(
            <div>
                <span className="font-size-19"> <h2>Trace Diagram for a user</h2></span>
                <HorizontalBar data={this.state.data}/>
            </div>
        )
    }
}

export default withRouter(UserTrace);