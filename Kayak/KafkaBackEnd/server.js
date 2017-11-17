var connection =  new require('./kafka/Connection');
var users = require('./services/users');
var hotels = require('./services/hotels');

var login_topic = 'login_topic';
var getHotels_topic = 'getHotels_topic';
var filterHotels_topic = 'filterHotels_topic';
var getRooms_topic = 'getRooms_topic';

var consumer = connection.getConsumer(login_topic);
var producer = connection.getProducer();

consumer.addTopics([getHotels_topic,filterHotels_topic,getRooms_topic], function (err, added) {
});

console.log('server is running');
consumer.on('message', function (message) {
    console.log(message);
    if(message.topic === login_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        users.handleLogin(data.data, function (err, res) {
            console.log('after handle' + res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                //console.log(data);
            });
            return;
        });
    }
    if(message.topic === getHotels_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        hotels.fetchHotels(data.data, function (err, res) {
            console.log('after get hotels');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }

    if(message.topic === filterHotels_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        hotels.filterHotels(data.data, function (err, res) {
            console.log('after filter hotels');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }

    if(message.topic === getRooms_topic) {
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        hotels.getRooms(data.data, function (err, res) {
            console.log('after get rooms');
            console.log(res);
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });
    }


});


