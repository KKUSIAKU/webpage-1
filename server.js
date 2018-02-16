var express = require("express");
var dbConfig = require("./db.config.js");
var assert = require("assert");
var MongoClient = require("mongodb").MongoClient;

var app = express();

app.set("port", (process.env.PORT || 5000));

MongoClient.connect(dbConfig.uri, function (err, database) {
  
  assert.equal(null, err);

  require("./api")(app, database); 

  app.listen(app.get("port"), function () {
    if (process.env.NODE_ENV !== "production") {
      console.log("app listent on", app.get("port"));
    }
  });
  
});




