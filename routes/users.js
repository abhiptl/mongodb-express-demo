let express = require('express');
let router = express.Router();
//let db = require('./mongo-db');
const MongoClient = require('mongodb').MongoClient

/* GET users listing. */
router.get('/', function(req, res, next) {
    MongoClient.connect("mongodb://localhost:27017/motionclassicdb", (err, database) => {
        if (err) return console.log(err)
        var db = database
        db.collection('users').find().toArray(function(err, results) {
            console.log(results)
            res.status(200).json({
                results
            })
        })
    })

});

/* POST create new user */
router.post('/', function(req, res, next) {
    let user = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        gender : req.body.gender
    };



    MongoClient.connect("mongodb://localhost:27017/motionclassicdb", (err, database) => {
        if (err) return console.log(err)
        var db = database


        db.collection('users').save(req.body, (err, result) => {
            if (err) return console.log(err)

            console.log("Result :"+result)
            res.status(201).json({
                id : 101
            })
        })
    })





});


module.exports = router;
