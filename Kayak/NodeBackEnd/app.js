app.get('/graphs',function(req,res) {


    var output={};
    var output1={};
    var hotellocation={};
    var flightsource={};
    var flightdestination={};
    var cars = {};

    var m=[];
    var p=0;q=0;r=0;
    var foo = {};
    var i,x,y,z;
    var results;

    lineReader.eachLine(__dirname + '/mylogfile.log', function(line,error) {
        console.log(line);

        var array = line.split(',');
        // var toWrite = ":";
        if (array) {
            if (array[0]) {


                if (array[0] === 'Hotels') {
                    q++;
                    hotellocation[q] = array[1];

                }
                if (array[0] === 'Flights') {

                    p++;
                    flightsource[p] = array[1];
                    flightdestination[p] = array[2];

                }
                if (array[0] === 'Cars') {
                    r++;
                    cars[r] = array[1];

                }
                graphs[0] = hotellocation;
                graphs[1] = flightsource;
                graphs[2] = flightdestination;
                graphs[3] = cars;
            }}
            if(error) {
                res.status(200).send({"results": JSON.stringify(graphs)});
            }
            })

   /* lineReader.open(__dirname + '/mylogfile.log', function(err, reader) {
        if (err) throw err;
            reader.nextLine(function(err, line) {
                try {
                    if (err) throw err;
                    console.log(line);

                    var array = line.split(',');
                    // var toWrite = ":";
                    if (array) {
                        if (array[0]) {


                            if (array[0] === 'Hotels') {
                                q++;
                                hotellocation[q] = array[1];

                            }
                            if (array[0] === 'Flights') {

                                p++;
                                flightsource[p] = array[1];
                                flightdestination[p] = array[2];

                            }
                            if (array[0] === 'Cars') {
                                r++;
                                cars[r] = array[1];

                            }
                            graphs[0] = hotellocation;
                            graphs[1] = flightsource;
                            graphs[2] = flightdestination;
                            graphs[3] = cars;



                        }}

                } finally {
                    reader.close(function(err) {
                        if (err) throw err;
                    });
                }
            });
        })*/

    });
