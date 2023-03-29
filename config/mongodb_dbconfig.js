// Import Mongodb
const MongoClient = require("mongodb").MongoClient

// Mongodb Connection String
// const url = "mongodb://127.0.0.1:27017/" // No user/passsword
const url = "mongodb://toomtarm:123456@127.0.0.1:27017/" // With user/password

var _db
var dbname = "smartinvdb"

const connectDb = (callback) => {
    if (_db) return callback()
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
        if (err) return console.log(err)
        _db = client.db(dbname) 
        console.log("Database Connected")
        callback()
    })
}

const getDb = () => _db

module.exports = {
    connectDb,
    getDb
}

