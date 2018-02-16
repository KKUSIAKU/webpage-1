module.exports = function (app, database) {
  var db = database.db("video"),
    result;
  var cursor = db.collection("movieDetails").find();

  app.get("/test", function (req, res) {
    res.send("hello testing");
  });

  app.get("/videos", function (req, res) {
    cursor.toArray(function (err, movies) {
      result = movies;
      res.json(result);
    });
  });
};
