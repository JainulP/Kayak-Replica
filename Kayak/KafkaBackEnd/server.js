var connection =  new require('./kafka/Connection');
var users = require('./services/users');


var login_topic = 'login_topic';

var consumer = connection.getConsumer(login_topic);
var producer = connection.getProducer();

// consumer.addTopics([signup_topic], function (err, added) {
// });

console.log('server is running');
consumer.on('message', function (message) {
    console.log(message);
    if(message.topic == login_topic) {
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
});


