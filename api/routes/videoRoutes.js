
module.exports = function (app, database) {
  var db = database.db("video"),limit = 25,
    result;

  // check perfomance on poster query 
  app.get("/videos", function (req, res) {
    var cursor = db.collection("movieDetails").find({ poster: { $ne: null } }, { _id: 0, title: 1, poster: 1, genres: 1, plot: 1, year: 1 })
      .skip(limit*(parseInt(req.query.page)+3)).sort({ _id: -1 }).limit(100);
    cursor.toArray(function (err, movies) {
      result = movies;
      res.json(result);
    });
  });
};
