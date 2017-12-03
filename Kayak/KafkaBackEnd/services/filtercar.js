const mysql = require('mysql');
var moment = require('moment');


function handle_request(msg, callback) {

    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'kayak',
        port: 3306
    });

    db.connect((err) => {
        if (err) throw err;
        console.log("mysql connected");
    });

    Array.prototype.unique = function () {
        return this.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
    };

    console.log("In handle request:" + JSON.stringify(msg));

    let initarr = [];
    let secarr = [];
    let sql;
    let arr = [];
    let add = "";
    let arr7 = {};
    let arr5 = [];
    let i, j, k, l;

    let d1 = new Date(msg.e_date);
    let d2 = new Date(msg.s_date);
    console.log(msg.multi_city);
    console.log(d1);
    if(msg.multi_city == "true"){
        d1.setDate(d1.getDate() + 2);
    }
    console.log(d1);
    console.log(d2);
    var a = moment(new Date(msg.s_date));
    var b = moment(new Date(msg.e_date));
    var days = b.diff(a, 'days') +1;



    for (let i = 0; i < msg.filter.other.length; i++) {
        if(i>=1){
            add = add + " AND "+ msg.filter.other[i] + ' = ' + true + " ";
            //console.log(add);
        }
        sql = 'SELECT carId FROM cars WHERE ' + msg.filter.other[0] + ' = ' + true + add;
        console.log(sql);
    }


    let query = db.query(sql, (err, rows) => {
        let x = rows.length;
        //console.log(x);
        for (let j = 0; j < x; j++) {
            secarr.push(rows[j].carId);
        }

    });

    console.log(d1,d2,msg.city);

    let sql1 = 'SELECT * FROM list WHERE e_date >= ? AND s_date <= ? AND city = ?';
    let query1 = db.query(sql1,[d1,d2,msg.city], (err, rows) => {

        if (rows.length <= 0) {
            var res = "No cars found";
            let arr7 = {
                res: res
            };
            console.log(arr7);
            callback(null, arr7);
        }
        else {
            let x = rows.length;
            for (let i = 0; i < x; i++) {
                arr.push(rows[i].id);
            }
            console.log("one");
            console.log(arr);
        }});



    for(l=0; l<msg.filter.carDoors.length; l++) {
        for (k = 0; k < msg.filter.luggageCapacity.length; k++) {
            for (i = 0; i < msg.filter.carType.length; i++) {
                for (j = 0; j < msg.filter.capacity.length; j++) {
                    let sql = 'SELECT carId FROM cars WHERE capacity = ? AND carType = ? AND luggageCapacity = ? AND carDoors = ?';
                    let query = db.query(sql, [msg.filter.capacity[j], msg.filter.carType[i], msg.filter.luggageCapacity[k], msg.filter.carDoors[l]], (err, rows) => {
                        let x = rows.length;
                        //console.log(x);
                        for (let j = 0; j < x; j++) {
                            initarr.push(rows[j].carId);
                        }
                        console.log(initarr);
                        if (initarr.length <= 0) {
                            var res = "No cars found";
                            let arr7 = {
                                res: res
                            };
                            console.log(arr7);
                            callback(null, arr7);
                        }
                        else if (secarr.length <= 0) {
                            var res = "No cars found";
                            let arr7 = {
                                res: res
                            };
                            console.log(arr7);
                            callback(null, arr7);
                        }
                        console.log(secarr);
                        let arr1 = [];
                        for (let p = 0; p < initarr.length; p++) {
                            for (let q = 0; q < secarr.length; q++) {
                                if (initarr[p] === secarr[q]) {
                                    arr1.push(secarr[q]);
                                }
                            }
                        }
                        console.log("before");
                        console.log(arr1);
                        if (arr1.length <= 0) {
                            var res = "No cars found";
                            let arr7 = {
                                res: res
                            };
                            console.log(arr7);
                            callback(null, arr7);
                        }
                        initarr = [];
                        console.log(initarr);
                        for (let i = 0; i < arr1.length; i++) {
                            let sql3 = 'SELECT id from list where carid=?';
                            let query3 = db.query(sql3, [arr1[i]], (err, rows) => {
                                let x = rows.length;
                                console.log(x);
                                for (let j = 0; j < x; j++) {
                                    initarr.push(rows[j].id);
                                }
                                console.log(initarr);

                                arr1 = [];
                                for (let p = 0; p < initarr.length; p++) {
                                    for (let q = 0; q < arr.length; q++) {
                                        if (initarr[p] === arr[q]) {
                                            arr1.push(arr[q]);
                                        }
                                    }
                                }
                                console.log(arr1);

                                for (let i = 0; i < arr1.length; i++) {
                                    console.log("here again");
                                    let sql3 = 'SELECT * FROM cars WHERE carID = (SELECT carid from list where id=?)';
                                    let query3 = db.query(sql3, [arr1[i]], (err, rows) => {
                                        let price =((rows[0].price)*days);

                                        arr7 = {
                                            "id" : arr1[i],
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

                                        if (i === (arr1.length - 1)) {
                                            callback(null, arr5);
                                        }

                                    });
                                }
                            });
                        }

                    });
                }
            }
        }
    }
}

exports.handle_request = handle_request;



// let query = db.query(sql, (err, rows) => {
//     let x = rows.length;
//     console.log(x);
//
//     for (let j = 0; j < x; j++) {
//         secarr.push(rows[j].carId);
//     }
//
//     if (i === (msg.filter.other.length - 1)) {
//
//     }
// });
