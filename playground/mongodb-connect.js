//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, db){

  if(err){

    return console.log("Unable to connect to MongoDB server");

  }

    console.log("Connected to MongoDB server");

    // db.collection("Users").insertOne({
    //
    //   name: "Bruno",
    //   age: 28,
    //   location: "Aveiro"
    //
    // }, function(error, result){
    //
    //   if(error){
    //
    //     return console.log("Unable to inserted todo", error);
    //
    //   }
    //
    //   console.log(result.ops);
    //
    // })
    //
    //
    // db.collection("Todo").insertOne({
    //
    //
    //
    // }, function(error, result){
    //
    //   if(error){
    //
    //     return console.log("Unable to inserted todo", error);
    //
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    //
    //
    // });

    db.close();

});
