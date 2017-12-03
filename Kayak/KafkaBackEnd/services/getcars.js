const mysql = require('mysql');
var moment = require('moment');

function handle_request(msg, callback){

    let arr = [];
    let arr5 = [];
    let arr7;

    const db = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'kayak',
        port	 : 3306
    });

    db.connect((err) => {
        if(err) throw err;
        console.log("mysql connected");
    });

    console.log("In handle request:"+ JSON.stringify(msg));

    console.log(msg.s_city);


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
            var res = "No cars found";
            arr7 = {
              res: res
            };
            console.log(arr7);
            callback(null, arr7);
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
                    "image": rows[0].image
                };
                arr5.push(arr7);

                if (i === (arr.length - 1)) {
                    callback(null, arr5);
                }

            });
        }
    }
    });

}

exports.handle_request = handle_request;
