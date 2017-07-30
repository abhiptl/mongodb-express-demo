let express = require('express');
let router = express.Router();
//let db = require('./mongo-db');
let MongoClient = require('mongodb').MongoClient
let co = require('co')

/* GET users listing. */
router.get('/', function(req, res, next) {
    co(function*() {
        var db = yield MongoClient.connect('mongodb://localhost:27017/motionclassicdb');
        var userCollection = db.collection('users');
        var users = yield userCollection.find().toArray();
        res.status(201).json({
            users
        })
        db.close();
    }).catch(function(err) {
        console.log(err.stack);
    });

});

/* POST create new user */
router.post('/', function(req, res, next) {
    let user = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        gender : req.body.gender
    };

    co(function*() {
        var db = yield MongoClient.connect('mongodb://localhost:27017/motionclassicdb');
        var result = yield db.collection('users').insertOne(req.body);
        res.status(201).json({
            inserts : result.insertedCount
        })

        db.close();
    }).catch(function(err) {
        console.log(err.stack);
    });



});


module.exports = router;
