
module.exports = function (app, database) {
  var db = database.db("video"),
    result;
    
    // index presents :
    /*
        key: _id:, name:_id_
        key: year, name :year_-1;
    */
  var cursor = db.collection("movieDetails").find({}, {_id:0, title:1, poster:1,genres:1,plot:1,year:1}).sort({year:-1}).limit(100);

  app.get("/videos", function (req, res) {
    
    cursor.toArray(function (err, movies) {
      result = movies;
      res.json(result);
    });
  });
};
