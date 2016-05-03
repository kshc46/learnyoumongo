var url = 'mongodb://localhost:27017/learnyoumongo';
var fil = process.argv[2];

var mongo = require('mongodb').MongoClient;
mongo.connect(url, function(err, db) {
    if (err)
        return err;
    var collection = db.collection('parrots');
    collection.find( { "age": { $gt: +fil } } ).toArray(function(err,docs){
        if (err)
            return err;
        console.log(docs);
        db.close();
    });
})