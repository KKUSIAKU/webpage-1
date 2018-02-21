module.exports = function (app, database) {
  var db = database.db("video"),
    result;
  var cursor = db.collection("movieDetails").find({}, {_id:0, title:1, poster:1,genres:1,plot:1,year:1}).limit(20);

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
