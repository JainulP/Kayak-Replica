const mysql = require('mysql');
var moment = require('moment');

function handle_request(msg, callback){

    let arr = [];
    let arr5 = [];
    let arr7;
    //let res ={};

    const db = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'kayak',
        port	 : 3306
    });

    db.connect((err) => {
        if(err) throw err;
        console.log("mysql connected");
    });

    console.log("In handle request:"+ JSON.stringify(msg));

    console.log(msg.s_city);
    // console.log(msg.s_time);
    // console.log(msg.e_time);
    // let e_time;
    // let s_time;
    // if(msg.s_time[5] === "P"){
    //     let s_time = Number(msg.s_time[0]);
    //     s_time = s_time + 12;
    //     //console.log(s_time);
    // }
    // else {
    //     let s_time = Number(msg.s_time[0]);
    //     //console.log(s_time);
    // }
    //
    // if(msg.e_time[5] === "P"){
    //     let e_time = Number(msg.e_time[0]);
    //     e_time = e_time + 12;
    //     //console.log(e_time);
    // }
    // else{
    //     let e_time = Number(msg.e_time[0]);
    //    // console.log(e_time);
    // }
    //


        let d1 = new Date(msg.e_date);
        let d2 = new Date(msg.s_date);
        //let d3 = new Date();
        console.log(msg.multi_city);
        console.log(d1);
        if(msg.multi_city == "true"){
            d1.setDate(d1.getDate() + 2);
        }
        //d2.setDate(d2.getDate() + 1);
        console.log(d1);
        console.log(d2);
        var a = moment(new Date(msg.s_date));
        var b = moment(new Date(msg.e_date));
        var days = b.diff(a, 'days') +1;




        let sql = 'SELECT * FROM list WHERE e_date >= ? AND s_date <= ? AND city = ?';
        let query = db.query(sql,[d1,d2,msg.city], (err, rows) => {

            if (rows.length <= 0) {
                var res ={};
                arr5 = [];
                arr5.push("No cars found");
                res.code = 400;
                res.value = arr5;
                callback(null, res);
            }

            else{
                let x = rows.length;
            for (let i = 0; i < x; i++) {
                arr.push(rows[i].id);
            }
            console.log(arr);
            arr5 = [];
            for (let i = 0; i < arr.length; i++) {
                let sql3 = 'SELECT * FROM cars WHERE carID = (SELECT carid from list where id=?)';
                let query3 = db.query(sql3, [arr[i]], (err, rows) => {
                    if(err){

                        var res ={};
                        arr5 = [];
                        arr5.push("No cars found");
                        res.code = 400;
                        res.value = arr5;
                        callback(null, res);
                    }
                    let price =((rows[0].price)*days);
                    //console.log("days" , days);
                    //console.log("price" , price);
                    arr7 = {
                        "id" : arr[i],
                        "carName": rows[0].carName,
                        "capacity": rows[0].capacity,
                        "carType": rows[0].carType,
                        "luggageCapacity": rows[0].luggageCapacity,
                        "carDoors": rows[0].carDoors,
                        "airportPickup" : (rows[0].airportPickup),
                        "airConditioning" : rows[0].airConditioning,
                        "automatic" :rows[0].automatic,
                        "hybrid" : rows[0].hybrid,
                        "price" : price,
                        "days": days,
                        "image": rows[0].image
                    };
                    arr5.push(arr7);

                    if (i === (arr.length - 1)) {
                        var res ={};
                        res.code = 200;
                        res.value = arr5;
                        // console.log(final);
                        callback(null, res);
                    }

                });
            }
        }
        });


}

exports.handle_request = handle_request;
