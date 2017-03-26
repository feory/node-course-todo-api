//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, db){

  if(err){

    return console.log("Unable to connect to MongoDB server");

  }

    console.log("Connected to MongoDB server");

    // db.collection("Todos").find().toArray().then(function(docs){
    //
    //   console.log("Todos");
    //   console.log(JSON.stringify(docs,undefined,2));
    //
    //
    // }, function(err){
    //
    //
    //   console.log("Unable to feeds". err);
    //
    // });

    db.collection("Users").find({name: "Esteves"}).toArray().then(function(docs){

      console.log("Todos");
      console.log(docs);

    }, function(err){

      console.log("Unable to feeds". err);

    });



    db.close();

});
