//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, db){

  if(err){

    return console.log("Unable to connect to MongoDB server");

  }

    console.log("Connected to MongoDB server");

    //delete Many

    // db.collection("Todos").deleteMany({text: "Lanche"}).then(function(result){
    //
    //
    //   console.log(result);
    //
    //
    // })


    //delete one
    // db.collection("Todos").deleteOne({text:"Lanche"}).then(function(result){
    //
    //   console.log(result);
    //
    // })

    //find One and Delete

    // db.collection("Todos").findOneAndDelete({completed: false}).then(function(result){
    //
    //   console.log(result);
    //
    // })


    // db. collection("Users").deleteMany({name: "Bruno"}).then(function(error){
    //
    //   if(error){
    //
    //     return console.log("Not Found");
    //
    //   }
    //
    //   console.log("The name Bruno was deleted");
    //
    // })


    db.collection("Users").findOneAndDelete({_id: new ObjectID("58d7f45541d2e155a4b59e2d")}).then(function(error){

      if(error){

          return console.log("Not Found");

      }

      console.log("The ObjectID was delete");

    })



  //  db.close();

});
