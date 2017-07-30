/**
 * Created by AbhishekPatel on 7/30/2017.
 */

'use strict';
let db

const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017/motionclassicdb", (err, database) => {
    if (err) return console.log(err)
    db = database
})

module.exports = db;
