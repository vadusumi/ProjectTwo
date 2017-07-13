var db = require("../models");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/event/recent", function(req, res){
    //Get recent events for front page
 });

  app.get("/event/:city", function(req, res) {
      //search for events based on city
      });


  app.post("/event/new", isAuthenticated, function(req, res){
    console.log(req.user.userID);
    console.log(req.body);
    db.Events.create({
      EventType: req.body.type,
      Description: req.body.description,
      Price: req.body.price,
      StartTime: req.body.start,
      EndTime: req.body.end,
      Capacity: req.body.capacity,
      HostID: req.user.userID
    }).then(function(dbEvent){
      res.json(dbEvent);
    });
  });

  app.post("event/register", isAuthenticated, function(req, res){
    //regester to attend an event
  });


};
