
module.exports = function (app, database) {
  var db = database.db("video"), limit = 25, result = {};

  // check perfomance on poster query and to avoid skip
  app.get("/videos/search", function (req, res) {
    var query= req.query.q ? req.query.q : null;

    console.log(query);
    /*
    send a message to display 
    */


    /*
    perfom an appropritate query on the database
    */


    /*
    send the result back to client
    */


  });
};
