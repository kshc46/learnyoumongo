var url = 'mongodb://localhost:27017/learnyoumongo';

var mongo = require('mongodb').MongoClient;
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('docs');
    var json = { firstName : process.argv[2] , lastName : process.argv[3] };
    collection.insert( json );
    console.log(JSON.stringify(json));
    db.close();
});



/* official

var mongo = require('mongodb').MongoClient
var firstName = process.argv[2]
var lastName = process.argv[3]
var doc = {
  firstName: firstName
, lastName: lastName
}

var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('docs')
  collection.insert(doc, function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(doc))
    db.close()
  })
})

*/