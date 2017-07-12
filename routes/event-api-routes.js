var db = require("../models");

module.exports = function(app) {

  app.get("/event/recent", function(req, res){
    //Get recent events for front page
 });

  app.get("/event/:city", function(req, res) {
      //search for events based on city
      });


  app.post("/event/new", isAuthenticated, function(req, res){
    //create new event
  });

  app.post("event/register", isAuthenticated, function(req, res){
    //regester to attend an event
  });


};
