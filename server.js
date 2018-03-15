var express = require("express");
var dbConfig = require("./db.config.js");
var assert = require("assert");
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser"); 

var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));


app.set("PORT", (process.env.PORT || 8005));

MongoClient.connect(dbConfig.uri, function (err, database) {
  
  assert.equal(null, err);

  require("./api")(app, database); 

  app.listen(app.get("PORT"), function () {
    if (process.env.NODE_ENV !== "production") {
      console.log("app listent on", app.get("PORT"));
    }
  });
  
});




