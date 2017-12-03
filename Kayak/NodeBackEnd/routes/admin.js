var kafka = require('./kafka/client');


exports.getAllUsers = function(req,res){

    var getAllUsersParams = {

    };
    kafka.make_request('getAllUsers_topic',getAllUsersParams, function(err,results){
        console.log(results);
        if(err){
            console.log("get all users error");
            throw err;
        }
        else
        {
            if(results.code == 200){
                console.log(JSON.stringify(results));
                return res.status(200).send({users:results.users});
            }
            else if(results.code == 400)
            {
                return res.status(400).send({users:"Could not find users"});
            }
            else {
                return res.status(417).send({error:"Could not serve your request"});
            }
        }
    });

};