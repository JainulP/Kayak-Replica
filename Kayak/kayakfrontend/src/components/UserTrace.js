import {Route, withRouter, BrowserRouter} from 'react-router-dom';
import React, {Component} from 'react';
import * as AdminAPI from '../api/AdminAPI';
import {HorizontalBar} from 'react-chartjs-2';

class UserTrace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:null,
            userid:null
        }
    }
    componentDidMount(){

    }
    getGraph = (data) =>{
        var data = {
            userid : data
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
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"
                       onBlur={(event) => {
                           this.getGraph(event.target.value)
                       }}
                    /*onBlur={()=>this.validatePassword()}*/
                />
                <HorizontalBar data={this.state.data}/>
            </div>
        )
    }
}

export default withRouter(UserTrace);