var express = require("express");

var app = express();

app.set("port", (process.env.PORT || 5000));

app.use(express.static(__dirname +"/docs"));

app.listen(app.get("port"), function () {
  if (process.env.NODE_ENV !== "production") {
    console.log("app listent on", app.get("port"));
  }
});

