<div className="container">
    <form className="form-horizontal" role="form">

        <div className="row">

            <div className="col-md-3">
                <div className="text-center">
                    <img src= {"http://localhost:3001/uploads/"+this.state.filename} className="avatar img-circle" style={divStyle} alt="avatar"/>
                    <h6>Upload a different photo...</h6>
                    <input type="file"    className="form-control"
                           id="file-input"  name="myfile" onChange={this.addImage}/>
                </div>
            </div>


            <div className="col-md-6 personal-info">

                <div className="form-group">
                    <label className="col-lg-3 control-label">Car Name</label>
                    <div className="col-lg-8">
                        <input className="form-control"
                               type="text"
                               id="carName"
                               value={this.state.carName}
                               onChange={(event) => {
                                   this.setState({
                                       carName: event.target.value
                                   });
                               }}
                               onBlur={()=>this.validateName('carName','addValiadationcarname')}
                        />
                        <span id="addValiadationcarname"></span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-3 control-label">Car Type</label>
                    <div className="col-lg-8">
                        <input className="form-control" type="text"
                               id="carType"
                               value={this.state.carType}
                               onChange={(event) => {
                                   this.setState({
                                       carType: event.target.value
                                   });
                               }}
                               onBlur={()=>this.validateName('carType','addValiadationcartype')}  />
                        <span id="addValiadationcartype"></span>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-3 control-label">Capacity:</label>
                    <div className="col-lg-8">
                        <input className="form-control" type="number"
                               id = "capacity"
                               value={this.state.capacity}
                               onChange={(event) => {
                                   this.setState({
                                       capacity: event.target.value
                                   });
                               }}
                               onBlur={()=>this.validateNumber('capacity','addValiadationcapacity')}  />
                        <span id="addValiadationcapacity"></span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-3 control-label">Luggage Capacity:</label>
                    <div className="col-lg-8">
                        <input className="form-control" type="number"
                               id ="luggageCapacity"
                               value={this.state.luggageCapacity}
                               onChange={(event) => {
                                   this.setState({
                                       luggageCapacity: event.target.value
                                   });
                               }}
                               onBlur={()=>this.validateNumber('capacity','addValiadationluggageCapacity')}
                        />
                        <span id="addValiadationluggageCapacity"></span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-3 control-label">Car Doors:</label>
                    <div className="col-lg-8">
                        <input className="form-control" type="number"
                               value={this.state.carDoors}
                               id = "carDoors"
                               onChange={(event) => {
                                   this.setState({
                                       carDoors: event.target.value
                                   });

                               }}
                               onBlur={()=>this.validateNumber('capacity','addValiadationcardoors')}
                        />
                        <span id="addValiadationcardoors"></span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-3 control-label">Price:</label>
                    <div className="col-md-8">
                        <input className="form-control" type="number"
                               value={this.state.price}
                               onChange={(event) => {
                                   this.setState({
                                       price: event.target.value
                                   });
                               }}
                               id="price" onBlur={()=>this.validateNumber('price','addValiadationprice')}
                        />
                        <span id="addValiadationprice"></span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-3 control-label">Car Number:</label>
                    <div className="col-md-8">
                        <input className="form-control" type="text"
                               id = "carnumber"
                               value={this.state.carnumber}
                               onChange={(event) => {
                                   this.setState({
                                       carnumber: event.target.value
                                   });
                               }}

                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-3 control-label">City:</label>
                    <div className="col-lg-8">
                        <input className="form-control" type="text"
                               value={this.state.city}
                               id = "city"
                               onChange={(event) => {
                                   this.setState({
                                       city: event.target.value
                                   });
                               }}
                               onBlur={()=>this.validateName('city','addValiadationcity')} />
                        <span id="addValiadationcity"></span>
                    </div>
                </div>


                <div className="form-check">
                    <label className="col-lg-8 form-check-label"> Airport Pickup</label>
                    <div className="col-lg-16">
                        <input className="form-check-input" type="checkbox" value=""
                               onChange={(event) => {
                                   this.setState({
                                       airportPickup: event.target.value
                                   });
                               }}
                        />
                    </div>
                </div>

                <div className="form-check">
                    <label className="col-lg-8 form-check-label">Air Conditioning</label>
                    <div className="col-lg-16">
                        <input className="form-check-input" type="checkbox" value=""
                               onChange={(event) => {
                                   this.setState({
                                       airConditioning: event.target.value
                                   });
                               }}
                        />
                    </div>
                </div>

                <div className="form-check">
                    <label className="col-lg-8 form-check-label">Automatic</label>
                    <div className="col-lg-16">
                        <input className="form-check-input" type="checkbox" value=""
                               onChange={(event) => {
                                   this.setState({
                                       automatic: event.target.value
                                   });
                               }}
                        />
                    </div>
                </div>

                <div className="form-check">
                    <label className="col-lg-8 form-check-label">Hybrid</label>
                    <div className="col-lg-16">
                        <input className="form-check-input" type="checkbox" value=""
                               onChange={(event) => {
                                   this.setState({
                                       hybrid: event.target.value
                                   });
                               }}
                        />
                    </div>
                </div>


            </div>



            <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-8">
                    <input type="button"
                           className="btn btn-primary"
                           id="saveUsrInfo"
                           value="Deactivate User"
                           onClick={this.deleteUser}
                    />
                    <span></span>
                </div>
            </div>





        </div>
    </form>
</div>































validateName(id,validationTxtId){
    var val = document.getElementById(id).value;
    if(val.length==0)
    {
        document.getElementById(validationTxtId).innerHTML="";
        document.getElementById("saveUsrInfo").disabled = false;
    }
    else{
        var RegExpression = /^[a-zA-Z]*$/;
        if( RegExpression.test(val))
        {
            document.getElementById(validationTxtId).innerHTML="Valid Value";
            var x1 = document.getElementById(validationTxtId);
            x1.style.display = "block";
            x1.style.fontSize="small";
            x1.style.float="left";
            x1.style.color="green";
            document.getElementById("saveUsrInfo").disabled = false;

        }
        else{
            document.getElementById(validationTxtId).innerHTML="Value can accept only alphabets";
            var x1 = document.getElementById(validationTxtId);
            x1.style.display = "block";
            x1.style.fontSize="small";
            x1.style.float="left";
            x1.style.color="red";
            document.getElementById("saveUsrInfo").disabled = true;

        }
    }
}


validateNumber(id, validationTxtId){
    var val = document.getElementById("id").value;
    if(val.length==0)
    {
        document.getElementById("validationTxtId").innerHTML="";
        document.getElementById("saveUsrInfo").disabled = false;
    }
    else{
        var RegExpression =new RegExp("^[0-9]{10}$");
        if( RegExpression.test(val))
        {
            document.getElementById("validationTxtId").innerHTML="Valid PhoneNumber";
            var x1 = document.getElementById("validationTxtId");
            x1.style.display = "block";
            x1.style.fontSize="small";
            x1.style.float="left";
            x1.style.color="green";
            document.getElementById("saveUsrInfo").disabled = false;

        }
        else{
            document.getElementById("validationTxtId").innerHTML="Bumber must be of 10 digits";
            var x1 = document.getElementById("validationTxtId");
            x1.style.display = "block";
            x1.style.fontSize="small";
            x1.style.float="left";
            x1.style.color="red";
            document.getElementById("saveUsrInfo").disabled = true;

        }
    }
}
