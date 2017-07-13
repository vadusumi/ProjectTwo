var db = require("../models");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {


  app.get("/event/recent", function(req, res){
    db.Events.findAll({
      order: [
        ['EventID', 'DESC']
      ],
      limit: 6
    }).then(function(dbEvents){
      res.json(dbEvents);
    });
  });

  app.get("/event/:city", function(req, res) {
    db.Events.findAll({
      where: {
        city: req.body.city
      }
    }).then(function(dbEvent){
      res.json(dbEvent);
    });
  });

      //create a new event associated to a user
  app.post("/event/new", isAuthenticated, function(req, res){
    console.log(req.user.userID);
    console.log(req.body);
    db.Events.create({
      EventName: req.body.eName,
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

//create a new registration to register the user to attend an event
  app.post("/event/register", isAuthenticated, function(req, res){
    db.Registration.create({
      Notes: req.body.notes,
      EventID: req.body.event,
      UserID: req.user.userID
    }).then(function(dbRegistration){
      res.json(dbRegistration);
    });
  });


};
