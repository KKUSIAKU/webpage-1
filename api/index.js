var hompePage = require("./routes/homepage.js"); 
var videoRoutes = require("./routes/videoRoutes.js");

module.exports = function (app, database){
  hompePage(app); 
  videoRoutes(app, database); 
}; 