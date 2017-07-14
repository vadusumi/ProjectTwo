var path = require("path");

var db = require("../models");


module.exports = function(app) {

  app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/search.html"));
    });

  //
   app.get("/login", function(req, res){
     res.sendFile(path.join(__dirname, "../public/login.html"));
   });
  //
   app.get("/signup", function(req, res){
     res.sendFile(path.join(__dirname, "../public/signup.html"));
   });



};
