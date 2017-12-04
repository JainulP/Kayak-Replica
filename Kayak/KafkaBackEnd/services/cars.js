var mysql = require('./mysql');



function addCar(msg, callback){

    var res = {};

    try {
        var airportPickup1;
        if(msg.airportPickup===true)
            airportPickup1=1;
        else
            airportPickup1=0;

        var airConditioning1;
        if(msg.airConditioning===true)
            airConditioning1=1;
        else
            airConditioning1=0;

        var hybrid1;
        if(msg.hybrid===true)
            hybrid1=1;
        else
            hybrid1=0;

        var automatic1;
        if(msg.automatic===true)
            automatic1=1;
        else
            automatic1=0;



        var date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getUTCHours()).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2) + ':' +
            ('00' + date.getUTCSeconds()).slice(-2);

        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();


        var date2 = new Date(year + 30, month, day, hour, minute, second);
        date2 = date2.getUTCFullYear() + '-' +
            ('00' + (date2.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date2.getUTCDate()).slice(-2) + ' ' +
            ('00' + date2.getUTCHours()).slice(-2) + ':' +
            ('00' + date2.getUTCMinutes()).slice(-2) + ':' +
            ('00' + date2.getUTCSeconds()).slice(-2);

        var checkduplicate = "Select car_number from cars where car_number = '" + msg.car_number + "'";
        var addCar = "INSERT into  cars(carName,carType,capacity,luggageCapacity,carDoors,airportPickup,airConditioning,automatic,hybrid,price,car_number) values('"+msg.carName+"','"+msg.carType+"','"+msg.capacity+"','"+msg.luggageCapacity+"','"+
            msg.carDoors+"','"+airportPickup1+"','"+airConditioning1+"','"+automatic1+"','"+hybrid1+"','"+msg.price+"','"+msg.car_number+"')";

        console.log("addCar"+ addCar);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {

                if(results.length >0)
                {

                    res.code = "400";
                    res.car = "Car already exists with given car number. Please try again";
                    callback(null, res);


                }
                else {
                    mysql.fetchData(function(err,results1){
                        if(err){
                            throw err;
                        }
                        else
                        {
                            var addToList = "INSERT into  list (carId, city,s_date,e_date) values('" +results1.insertId+ "','" + msg.city + "','" + date + "','" + date2 + "')";
                            console.log(results1);

                            res.car = results1.insertId;

                            mysql.fetchData(function(err,results2){
                                if(err){
                                    throw err;
                                }
                                else
                                {
                                    res.code = "200";
                                    res.value = "Successfully  added car";
                                    callback(null, res);
                                }
                            },addToList);
                        }
                    },addCar);
                }


            }
        },checkduplicate);

    }
    catch (e){
        console.log(e);
        res.code = "401";
        res.car = "Failed adding car";
        console.log("add traveler res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.addCar = addCar;



function editCar(msg, callback){

    var res = {};

    try {
        var airportPickup1;
        if(msg.airportPickup===true)
            airportPickup1=1;
        else
            airportPickup1=0;

        var airConditioning1;
        if(msg.airConditioning===true)
            airConditioning1=1;
        else
            airConditioning1=0;

        var hybrid1;
        if(msg.hybrid===true)
            hybrid1=1;
        else
            hybrid1=0;

        var automatic1;
        if(msg.automatic===true)
            automatic1=1;
        else
            automatic1=0;

        var editCar = "UPDATE cars SET carName ='" + msg.carName+ "' ,carType = '" + msg.carType + "' ,capacity= '" + msg.capacity+ "' ,luggageCapacity = '" + msg.luggageCapacity+ "' ,carDoors = '"+ msg.carDoors+"' ,airportPickup = " + airportPickup1+" ,airConditioning = "+ airConditioning1+",automatic = " +automatic1 +",hybrid = "+ hybrid1+" ,price = "+ msg.price + " WHERE carId = "+ msg.carId  ;


        console.log("editCar"+ editCar);

        mysql.fetchData(function(err,results){
            if(err){
                throw err;
            }
            else
            {

                res.code = "200";
                res.car = "Updated car successfully";
                res.value = "Successfully  updated car";
                callback(null, res);

            }
        },editCar);

    }
    catch (e){
        console.log(e);
        res.code = "401";
        res.car = "Failed adding car";
        console.log("add traveler res"+ JSON.stringify(res));
        callback(null, res);
    }
}

exports.editCar = editCar;