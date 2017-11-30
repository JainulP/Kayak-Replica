const mysql = require('mysql');

function handle_request(msg, callback){

    let arr = [];

    const db = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'kayak'
    });

    db.connect((err) => {
        if(err) throw err;
        console.log("mysql connected");
    });
    console.log("In handle request:"+ JSON.stringify(msg));




    let sql = 'SELECT * FROM list WHERE id = ?';
    let query = db.query(sql,[msg.id], (err, rows) => {

        //console.log(results);
        console.log("message        " , msg.id);
        console.log(rows);
        if(rows.length >0) {

            let city = rows[0].city;
            let carid = rows[0].carid;
            let s_date = msg.s_date;
            let e_date = msg.e_date;
            let d1 = new Date(s_date);
            let d2 = new Date(e_date);
            s_date = rows[0].s_date;
            e_date = rows[0].e_date;

            d1.setHours(d1.getHours() + 8);
            d2.setHours(d2.getHours() + 8);


            console.log("user entered");
            console.log("start at:" + msg.s_date);
            console.log("end at:" + msg.e_date);

            console.log("user entered after conversion");
            console.log("start at:" + d1);
            console.log("end at:" + d2);

            console.log("database entered");
            console.log("start at:" + s_date);
            console.log("end at:" + e_date);


            if (s_date < d1) {
                console.log("pachal che date");
                let post = {
                    city: city,
                    carid: carid,
                    s_date: s_date,
                    e_date: d1
                };
                let sql = 'INSERT INTO list SET ?';
                let query = db.query(sql, post, (err, result) => {
                    if (err) throw err;
                    else {
                        console.log("done in pachal");
                    }
                });
            }
            if (e_date > d2) {
                console.log("agal be che date");
                let post = {
                    city: city,
                    carid: carid,
                    s_date: d2,
                    e_date: e_date
                };
                let sql = 'INSERT INTO list SET ?';
                let query = db.query(sql, post, (err, result) => {
                    if (err) throw err;
                    else {
                        console.log("done in agal");
                    }
                });
            }

            let sql = 'DELETE FROM list WHERE id = ?';
            let query = db.query(sql, [msg.id], (err, rows) => {
                if (err) throw err;
                else {
                    console.log("delete done");

                }

                let b_date = new Date();
                let bookingid;
                console.log(b_date);
                let post = {
                    city: city,
                    carid: carid,
                    s_date: d1,
                    e_date: d2,
                    b_date: b_date

                };
                let sql = 'INSERT INTO bookings SET ?';
                let query = db.query(sql, post, (err, rows) => {
                    if (err) throw err;
                    else {
                        console.log("done in bookings");

                    }
                });


                let sql1 = 'SELECT * FROM bookings WHERE city = ? AND carid = ? AND s_date = ? AND e_date = ?';
                let query1 = db.query(sql1, [city, carid, d1, d2], (err, result) => {
                    if (err) throw err;
                    else if(rows.length >0){
                        bookingid = (result[0].bookingid);
                        b_date = (result[0].b_date);
                    }
                });
                let sql2 = 'SELECT * FROM cars WHERE carid = ?';
                let query2 = db.query(sql2, [carid], (err, result) => {
                    if (err) throw err;
                    else if(rows.length >0) {
                        let carName = (result[0].carName);
                        let carType = (result[0].carType);
                        let capacity = (result[0].capacity);
                        let luggageCapacity = (result[0].luggageCapacity);
                        let carDoors = (result[0].carDoors);
                        let airportPickup = (result[0].airportPickup);
                        let airConditioning = result[0].airConditioning;
                        let automatic = result[0].automatic;
                        let hybrid = result[0].hybrid;
                        let price = result[0].price;

                        let final = {
                            bookingid: bookingid,
                            carid: carid,
                            city: city,
                            s_date: d1,
                            e_date: d2,
                            b_date: b_date,
                            carName: carName,
                            carType: carType,
                            capacity: capacity,
                            luggageCapacity: luggageCapacity,
                            carDoors: carDoors,
                            airportPickup: airportPickup,
                            airConditioning: airConditioning,
                            automatic: automatic,
                            hybrid: hybrid,
                            price: price
                        };
                        console.log(final);
                        callback(null, final);
                    }
                });

            });
        }
    });

}

exports.handle_request = handle_request;
