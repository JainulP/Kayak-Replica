var express = require('express');
var router = express.Router();
var kafka = require('./kafka/client');

var multer = require('multer');




router.post('/upload', function (req, res, next) {


    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/uploads/')
        },
        filename: function (req, file, cb) {
            cb(null,  file.originalname)
        }
    });

    var uploadfile = multer({storage:storage}).single('myfile');
    //
    uploadfile(req,res,function (err) {
        if(err){console.log(err);}
        else {
                 console.log(req.file);
                 console.log(req.file.originalname);
                res.status(204).send({profilepic:req.file.originalname});

      }
                });
    });

module.exports = router;