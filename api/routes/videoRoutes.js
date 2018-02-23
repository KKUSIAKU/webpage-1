
module.exports = function (app, database) {
  var db = database.db("video"), limit = 25;

  // check perfomance on poster query and to avoid skip
  app.get("/videos", function (req, res) {
    var page = req.query.page ? req.query.page : 0;
    var cursor = db.collection("movieDetails")
      .find({ poster: { $ne: null }},
        { _id: 0, title: 1, poster: 1, genres: 1, plot: 1, year: 1 })
      .skip(limit * (parseInt(page))).sort({ _id: -1 }).limit(100);

    cursor.toArray(function (err, movies) {
      var result = {
        movies,
        page,
        results:limit
      };
      res.json(movies);
    });
  });
};
