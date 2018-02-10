var webpackDevConfig = require("./webpack.dev.js"); 
var webpackProdConfig = require("./webpack.prod.js"); 

module.exports = function(grunt) {
  grunt.initConfig({
    webpack: {
      // remove options for now for first testing 
      prod: webpackProdConfig,
      dev: Object.assign({watch:true}, webpackDevConfig)
    }
  });

  grunt.loadNpmTasks("grunt-webpack");
};