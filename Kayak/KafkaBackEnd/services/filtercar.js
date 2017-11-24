const mysql = require('mysql');

function handle_request(msg, callback){

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

    Array.prototype.unique = function() {
        return this.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
    };

    console.log("In handle request:"+ JSON.stringify(msg));

    let arrr = [];
    let arrr2 = [];
    let arr = [];
    let arr4 = [];
    let arr5 = [];
    let arr7 = [];
    let a = [];
    let i,j,k,l;

    let d1 = new Date(msg.e_date);
    let d2 = new Date(msg.s_date);
    if(msg.multi_city === true){
        d1.setDate(d1.getDate() + 2);
    }
    d2.setDate(d2.getDate() + 1);
    console.log(d1);
    console.log(d2);


    let select = 'SELECT carId FROM cars WHERE ';
    let capacity = 'capacity = ?';
    if(msg.filter.carType !== undefined){
        capacity = capacity + ' AND ';
    }
    let carType = 'carType = ?';
    if(msg.filter.luggageCapacity !== undefined){
        carType = carType + ' AND ';
    }
    let luggageCapacity = 'luggageCapacity = ?';
    if(msg.filter.carDoors !== undefined){
        luggageCapacity = luggageCapacity + ' AND ';
    }
    let carDoors = 'carDoors = ?';



    if (typeof msg.filter.capacity === 'string' || msg.filter.capacity instanceof String) {
        //console.log("in length");
        capacity = 'capacity = ' + msg.filter.capacity;
        if(msg.filter.carType !== undefined){
            capacity = capacity + ' AND ';
        }
    }
    else if(msg.filter.capacity === undefined){
        capacity = '';
    }

    if (typeof msg.filter.carType === 'string' || msg.filter.carType instanceof String) {
        //console.log("in length");
        carType = 'carType = ' + '"' + (msg.filter.carType) + '"' ;
        arrr2.push((msg.filter.carType));
        if(msg.filter.luggageCapacity !== undefined){
            carType = carType + ' AND ';
        }
    }
    else if(msg.filter.carType === undefined){
        carType = '';
        if(msg.filter.luggageCapacity !== undefined && msg.filter.capacity === undefined){
            carType = '';
        }
        else if(msg.filter.luggageCapacity !== undefined){
            carType = ' AND ';
        }
    }

    if (typeof msg.filter.luggageCapacity === 'string' || msg.filter.luggageCapacity instanceof String) {
        //console.log("in length");
        luggageCapacity = 'luggageCapacity = ' + msg.filter.luggageCapacity;
        if(msg.filter.carDoors !== undefined){
            luggageCapacity = luggageCapacity + ' AND ';
        }
    }
    else if(msg.filter.luggageCapacity === undefined){
        luggageCapacity = '';
        if(msg.filter.carDoors !== undefined && msg.filter.carType === undefined){
            luggageCapacity = '';
        }
        else if(msg.filter.carDoors !== undefined){
            luggageCapacity = ' AND ';
        }
    }

    if (typeof msg.filter.carDoors === 'string' || msg.filter.carDoors instanceof String) {
        //console.log("in length");
        carDoors = 'carDoors = ' + msg.filter.carDoors;
    }
    else if(msg.filter.carDoors === undefined){
        carDoors = '';
    }




    let sql = select +  capacity  + carType + luggageCapacity + carDoors;
    let query = db.query(sql, (err, rows) => {

        //console.log(rows[0].carId);

    });
    console.log(sql);




    for(l=0; l<msg.filter.carDoors.length; l++) {
        if (typeof msg.filter.carDoors === 'string' || msg.filter.carDoors instanceof String) {
            //console.log("in length");
            carDoors = 'carDoors = ?';
            msg.filter.carDoors[l] = msg.filter.carDoors;
        }
        else if(msg.filter.carDoors === undefined){
            carDoors = '';
        }
        for (k = 0; k < msg.filter.luggageCapacity.length; k++) {
            if (typeof msg.filter.luggageCapacity === 'string' || msg.filter.luggageCapacity instanceof String) {
                luggageCapacity = 'luggageCapacity = ?';
                msg.filter.luggageCapacity[k] = msg.filter.luggageCapacity;
                if(msg.filter.carDoors !== undefined){
                    luggageCapacity = luggageCapacity + ' AND ';
                }
            }
            else if(msg.filter.luggageCapacity === undefined){
                luggageCapacity = '';
                if(msg.filter.carDoors !== undefined && msg.filter.carType === undefined){
                    luggageCapacity = '';
                }
                else if(msg.filter.carDoors !== undefined){
                    luggageCapacity = ' AND ';
                }
            }
            for (i = 0; i < 1; i++) {
                if (typeof msg.filter.carType === 'string' || msg.filter.carType instanceof String) {
                    carType = 'carType = ?';
                    console.log(arrr2);
                    msg.filter.carType = [] ;
                    msg.filter.carType[i] = arrr2;
                    if(msg.filter.luggageCapacity !== undefined){
                        carType = carType + ' AND ';
                    }
                }
                else if(msg.filter.carType === undefined){
                    carType = '';
                    if(msg.filter.luggageCapacity !== undefined && msg.filter.capacity === undefined){
                        carType = '';
                    }
                    else if(msg.filter.luggageCapacity !== undefined){
                        carType = ' AND ';
                    }
                }


                for (j = 0; j < msg.filter.capacity.length; j++) {
                    if (typeof msg.filter.capacity === 'string' || msg.filter.capacity instanceof String) {
                        capacity = 'capacity = ?';
                        msg.filter.capacity[j] = msg.filter.capacity;
                        if(msg.filter.carType !== undefined){
                            capacity = capacity + ' AND ';
                        }
                    }
                    else if(msg.filter.capacity === undefined){
                        capacity = '';
                    }
                    let sql = select +  capacity  + carType + luggageCapacity + carDoors;
                    let query = db.query(sql, [msg.filter.capacity[j], msg.filter.carType[i], msg.filter.luggageCapacity[k], msg.filter.carDoors[l]], (err, rows) => {
                        if (rows.length) {
                            arrr.push(rows[0].carId);
                            console.log("In array");
                            console.log(arrr);
                        }
                    });
                }
            }
        }
    }
    if(msg.filter.other === undefined){
        console.log("undefined");
        console.log(arrr);
    }

    else if (typeof msg.filter.other === 'string' || msg.filter.other instanceof String) {
        a.push(msg.filter.other);
        console.log(a[0]);
        let sql = 'SELECT carId FROM cars WHERE ' + a[0] + ' = ' + true;
        console.log(sql);
        let query = db.query(sql,(err, rows) => {
            let x = rows.length;
            console.log(x);

            for(let i =0; i<x; i++){
                arrr.push(rows[i].carId);
            }
            console.log(arrr);
            var unique = arrr.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
            });
            console.log(unique);
            let sql = 'SELECT * FROM list WHERE e_date >= ? AND s_date <= ? AND city = ?';
            let query = db.query(sql,[d1,d2,msg.city], (err, rows) => {
                let x = rows.length;

                for(let i =0; i<x; i++){
                    arr.push(rows[i].id);
                }
                console.log(arr);
                arr5=[];
                console.log(arr.length);
                for(let k=0; k<arr.length; k++) {
                    let sql3 = 'SELECT * FROM cars WHERE carID = (SELECT carid from list where id=?)';
                    let query3 = db.query(sql3, [arr[k]], (err, rows) => {
                        arr5.push(rows[0].carId);
                        if(k === (arr.length-1)){
                            console.log("here");
                            console.log(arr5);
                            var unique1 = arr5.filter(function(elem, index, self) {
                                return index === self.indexOf(elem);
                            });
                            console.log(unique1);
                            console.log(unique);
                            for (let p =0; p<unique1.length; p++){
                                for(let q =0; q<unique.length; q++){
                                    if(unique1[p] === unique[q]){
                                        arr4.push(unique1[p]);
                                        break;
                                    }
                                }
                            }
                            console.log(arr4);
                            arr = [];
                            for (let p =0; p<arr4.length; p++){
                                for(let q =0; q<arr5.length; q++){
                                    if(arr4[p] === arr5[q]){
                                        arr.push(arr5[q]);
                                    }
                                }
                            }
                            console.log(arr);
                        }
                    });
                }
            });
        });

    }
    else{
        console.log(msg.filter.other.length);

        for(let i =0; i<msg.filter.other.length; i++){
            let sql = 'SELECT carId FROM cars WHERE ' + msg.filter.other[i] + ' = ' + true;
            console.log(sql);
            let query = db.query(sql,(err, rows) => {
                let x = rows.length;
                console.log(x);

                for(let j =0; j<x; j++){
                    arrr.push(rows[j].carId);
                }

                if(i===(msg.filter.other.length-1)){
                    console.log(arrr);
                    var unique = arrr.filter(function(elem, index, self) {
                        return index === self.indexOf(elem);
                    });
                    console.log(unique);
                    let sql = 'SELECT * FROM list WHERE e_date >= ? AND s_date <= ? AND city = ?';
                    let query = db.query(sql,[d1,d2,msg.city], (err, rows) => {
                        let x = rows.length;

                        for(let i =0; i<x; i++){
                            arr.push(rows[i].id);
                        }
                        console.log(arr);
                        arr5=[];
                        console.log(arr.length);
                        for(let k=0; k<arr.length; k++) {
                            let sql3 = 'SELECT * FROM cars WHERE carID = (SELECT carid from list where id=?)';
                            let query3 = db.query(sql3, [arr[k]], (err, rows) => {
                                arr5.push(rows[0].carId);
                                if(k === (arr.length-1)){
                                    console.log("here");
                                    console.log(arr5);
                                    var unique1 = arr5.filter(function(elem, index, self) {
                                        return index === self.indexOf(elem);
                                    });
                                    console.log(unique1);
                                    console.log(unique);
                                    for (let p =0; p<unique1.length; p++){
                                        for(let q =0; q<unique.length; q++){
                                            if(unique1[p] === unique[q]){
                                                arr4.push(unique1[p]);
                                                break;
                                            }
                                        }
                                    }
                                    console.log(arr4);
                                    arr = [];
                                    for (let p =0; p<arr4.length; p++){
                                        for(let q =0; q<arr5.length; q++){
                                            if(arr4[p] === arr5[q]){
                                                arr.push(arr5[q]);
                                            }
                                        }
                                    }
                                    console.log("here");
                                    console.log(arr);
                                    arr5=[];
                                    arr7 = {};
                                    console.log(arr.length);
                                    for(let i=0; i<arr.length; i++) {
                                        let sql3 = 'SELECT * FROM cars WHERE carId = ?';
                                        let query3 = db.query(sql3, [arr[i]], (err, rows) => {
                                            arr5.push(rows);

                                            if(i === (arr.length-1)){
                                                callback(null,arr5);
                                            }

                                        });
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }
    }
}

exports.handle_request = handle_request;
