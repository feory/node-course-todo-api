//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, db){

  if(err){

    return console.log("Unable to connect to MongoDB server");

  }

    console.log("Connected to MongoDB server");

    // db.collection("Todos").findOneAndUpdate({
    //   _id: new ObjectID("58d7f15a41d2e155a4b59cab")
    // },
    //   {
    //     $set: {
    //       completed: false
    //     }
    //   },
    //   {
    //     returnOriginal: true
    //
    //   }).then(function(result){
    //
    //   console.log(result);
    //
    // })

    db.collection("Users").findOneAndUpdate({

      _id: new ObjectID("58d815c041d2e155a4b5ab8a")

    },{

      $set: {

        text: "Olá"

      },

        $inc: {

        age: 5

      }
    },{

        returnOriginal: false

    }).then(function(result){

      console.log(result);

    })


  //  db.close();

});
