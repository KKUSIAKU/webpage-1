var hompePage = require("./routes/homepage.js"); 
var videoRoute = require("./routes/videoRoutes.js");
var searchRoute = require("./routes/search.js");

module.exports = function (app, database){
  hompePage(app); 
  videoRoute(app, database); 
  searchRoute(app,database);
}; 