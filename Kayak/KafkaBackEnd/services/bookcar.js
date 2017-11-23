const mysql = require('mysql');

function handle_request(msg, callback){

    let arr = [];

    const db = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: '',
        database: 'cars'
    });

    db.connect((err) => {
        if(err) throw err;
        console.log("mysql connected");
    });

    console.log("In handle request:"+ JSON.stringify(msg));

    let sql = 'SELECT * FROM list WHERE id = ?';
    let query = db.query(sql,[msg.id], (err, rows) => {



        let city = rows[0].city;
        let carid = rows[0].carid;
        let s_date = rows[0].s_date;
        let e_date = rows[0].e_date;
        let d1 = new Date(msg.s_date);
        let d2 = new Date(msg.e_date);

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



        if(s_date < d1){
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
                else{
                    console.log("done in pachal");
                }
            });
        }
        if(e_date > d2){
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
                else{
                    console.log("done in agal");
                }
            });
        }

        let sql = 'DELETE FROM list WHERE id = ?';
        let query = db.query(sql,[msg.id], (err, rows) => {
            if(err) throw err;
            else {
                console.log("delete done");
            }
            let post = {
                city: city,
                carid: carid,
                s_date: d1,
                e_date: d2

            };
            let sql = 'INSERT INTO bookings SET ?';
            let query = db.query(sql, post, (err, result) => {
                if (err) throw err;
                else{
                    console.log("done in bookings");
                }
            });


        });

    });
    callback(null, arr);


}

exports.handle_request = handle_request;
