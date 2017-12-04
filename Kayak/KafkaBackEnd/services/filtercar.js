const mysql = require('mysql');
var moment = require('moment');


function handle_request(msg, callback) {

    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
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
    let initarr2 = [];
    let initarr3 = [];
    let initarr4 = [];
    let secarr = [];
    let sql;
    let arr = [];
    let arr2 = [];
    let add = "";
    let arr7 = {};
    let arr5 = [];
    let u = 0;


        let d1 = new Date(msg.e_date);
    let d2 = new Date(msg.s_date);
    console.log(msg.multi_city);
    console.log(d1);
    if (msg.multi_city == "true") {
        d1.setDate(d1.getDate() + 2);
    }
    console.log(d1);
    console.log(d2);
    var a = moment(new Date(msg.s_date));
    var b = moment(new Date(msg.e_date));
    var days = b.diff(a, 'days') + 1;

    console.log(msg.filter.max);
    console.log(msg.filter.min);




    for (let i = 0; i < msg.filter.other.length; i++) {
        if (i >= 1) {
            add = add + " AND " + msg.filter.other[i] + ' = ' + true + " ";
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
        console.log("after secondary filters");
        console.log(secarr);
        if (secarr.length < 0) {
            var res = "No cars found";
            let arr7 = {
                res: res
            };
            console.log(arr7);
            callback(null, arr7);
        }


    });

    console.log(d1, d2, msg.city);

    let sql1 = 'SELECT * FROM list WHERE e_date >= ? AND s_date <= ? AND city = ?';
    let query1 = db.query(sql1, [d1, d2, msg.city], (err, rows) => {

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
            console.log("Results after 3 main parameters");
            console.log(arr);
            if (arr.length < 0) {
                var res = "No cars found";
                let arr7 = {
                    res: res
                };
                console.log(arr7);
                callback(null, arr7);
            }
        }
    });


    let sql3 = 'SELECT carid FROM cars WHERE price >= ? AND price <= ?';
    let query3 = db.query(sql3, [msg.filter.min, msg.filter.max], (err, rows) => {
        //console.log("In the latest filter");
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
                arr2.push(rows[i].carid);
            }
            console.log("Results after price");
            console.log(arr2);

        }
    });

     add = "";
    for (let i = 0; i < msg.filter.carDoors.length; i++) {
        if (i >= 1) {
            add = add + " OR carDoors = " + msg.filter.carDoors[i] + "  ";
            //console.log(add);
        }
        sql = 'SELECT carId FROM cars WHERE carDoors = ' + msg.filter.carDoors[0] + add;
        //console.log(sql);
    }

     query = db.query(sql, (err, rows) => {
        let x = rows.length;
        //console.log(x);
        for (let j = 0; j < x; j++) {
            initarr.push(rows[j].carId);
        }
        console.log(initarr);
    });

    add = "";
    for (let i = 0; i < msg.filter.luggageCapacity.length; i++) {
        if (i >= 1) {
            add = add + " OR luggageCapacity = " + msg.filter.luggageCapacity[i] + "  ";
            //console.log(add);
        }
        sql = 'SELECT carId FROM cars WHERE luggageCapacity = ' + msg.filter.luggageCapacity[0] + add;
        //console.log(sql);
    }
     query = db.query(sql, (err, rows) => {
        let x = rows.length;
        //console.log(x);
        for (let j = 0; j < x; j++) {
            initarr2.push(rows[j].carId);
        }
        console.log(initarr2);
    });


    add = "";
    for (let i = 0; i < msg.filter.carType.length; i++) {
        if (i >= 1) {
            add = add + " OR carType = " + "'" + msg.filter.carType[i] + "'" + "  ";
            //console.log(add);
        }
        sql = 'SELECT carId FROM cars WHERE carType = '+ "'" + msg.filter.carType[0]+ "'" + add;
        //console.log(sql);
    }

    query = db.query(sql, (err, rows) => {
        let x = rows.length;
        //console.log(x);
        for (let j = 0; j < x; j++) {
            initarr3.push(rows[j].carId);
        }
        console.log(initarr3);
    });


    add = "";
    for (let i = 0; i < msg.filter.capacity.length; i++) {
        if (i >= 1) {
            add = add + " OR capacity = " + msg.filter.capacity[i] + "  ";
            //console.log(add);
        }
        sql = 'SELECT carId FROM cars WHERE capacity = ' + msg.filter.capacity[0] + add;
        //console.log(sql);
    }
    query = db.query(sql, (err, rows) => {
        let x = rows.length;
        //console.log(x);
        for (let j = 0; j < x; j++) {
            initarr4.push(rows[j].carId);
        }
        console.log("last array");
        console.log(initarr4);

        let arr1 = [];
        for (let p = 0; p < initarr.length; p++) {
            for (let q = 0; q < initarr2.length; q++) {
                if (initarr[p] === initarr2[q]) {
                    arr1.push(initarr2[q]);
                }
            }
        }
        console.log("after first sorting");
        console.log(arr1);

        let arr2 = [];
        for (let p = 0; p < initarr3.length; p++) {
            for (let q = 0; q < initarr4.length; q++) {
                if (initarr3[p] === initarr4[q]) {
                    arr2.push(initarr4[q]);
                }
            }
        }
        console.log("after second sorting");
        console.log(arr2);


        let arr3 = [];
        for (let p = 0; p < arr1.length; p++) {
            for (let q = 0; q < arr2.length; q++) {
                if (arr1[p] === arr2[q]) {
                    arr3.push(arr2[q]);
                }
            }
        }
        console.log("after third sorting");
        console.log(arr3);
        initarr = [];
        for(let i= 0; i<arr3.length; i++ ){
            initarr.push(arr3[i]);
        }

        console.log("after first filter applied");
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
        //console.log(secarr);
         arr1 = [];
        for (let p = 0; p < initarr.length; p++) {
            for (let q = 0; q < secarr.length; q++) {
                if (initarr[p] === secarr[q]) {
                    arr1.push(secarr[q]);
                }
            }
        }
        console.log("After combing both the filters...common results are!");
        console.log(arr1);
        arr3 = [];
        for (let p = 0; p < arr1.length; p++) {
            for (let q = 0; q < arr2.length; q++) {
                if (arr1[p] === arr2[q]) {
                    arr3.push(arr2[q]);
                }
            }
        }
        console.log("After combing price filters");
        console.log(arr3);
        if (arr1.length <= 0) {
            var res = "No cars found";
            let arr7 = {
                res: res
            };
            console.log(arr7);
            callback(null, arr7);
        }
        let initarr1 = [];
        for (let i = 0; i < arr1.length; i++) {
            let sql3 = 'SELECT id from list where carid=?';
            let query3 = db.query(sql3, [arr1[i]], (err, rows) => {
                let x = rows.length;
                //console.log(x);
                for (let j = 0; j < x; j++) {
                    initarr1.push(rows[j].id);
                }
                console.log("IDS from the list table");
                console.log(initarr1);
                console.log(arr);

                arr1 = [];

                for (let p = 0; p < initarr1.length; p++) {
                    for (let q = 0; q < arr.length; q++) {
                        if (initarr1[p] === arr[q]) {
                            arr1.push(arr[q]);
                        }
                    }
                }
                console.log(arr1);
                if(arr1.length<=0){
                    var res = "No cars found";
                    let arr7 = {
                        res: res
                    };
                    console.log(arr7);
                    callback(null, arr7);
                }
                console.log(arr1.length);
                u =arr1.length;
                console.log(u);
                arr5 = [];
                for (let i = 0; i < arr1.length; i++) {
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
                            "days": days,
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
