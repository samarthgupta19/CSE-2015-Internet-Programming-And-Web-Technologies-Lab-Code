var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("q5");
var myobj = [
{ name: 'Samarth', age: 19 , dob: "2002-04-19", yearofad: 2019 },
19BDS0042 SAMARTH GUPTA
{ name: 'Kevin', age: 20 , dob: "2001-05-15", yearofad: 2018 },
{ name: 'Harsh', age: 26 , dob: "1995-06-01", yearofad: 2012 },
{ name: 'Arnav', age: 21 , dob: "2000-03-22", yearofad: 2017 },
{ name: 'Govind', age: 16 , dob: "2005-09-20", yearofad: 2021 }
];
dbo.collection("student").insertMany(myobj, function(err, res) {
if (err) throw err;
console.log("Number of Student Details Inserted: " + res.insertedCount);
db.close();
});
});