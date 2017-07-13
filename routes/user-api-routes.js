var db = require("../models");
var passport = require("../config/passport");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/users", function(req, res){

    //get all user data for testing only
    db.User.findAll({
      // include: [db.Address]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
 });

 //create new user
  app.post("/user/new", function(req, res) {
      console.log(req.body);
      db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(function(dbUser) {
        res.redirect(307, "/user/home");
      }).catch(function(err) {
        res.status(422).json(err.errors[0].message);
      });
    });

  app.put("/user/update", isAuthenticated, function(req, res){
    db.User.update({
      name: req.body.name,
      email: req.body.email,
      AddressL1: req.body.add1,
      AddressL2: req.body.add2,
      City: req.body.city,
      State: req.body.state,
      Country: req.body.country,
      ZipCode: req.body.zip
    },{
      where: {
        userID: req.user.userID
      }
    }).then(function(dbUser){
      res.json(dbUser);
    });
  });

    //Log user out of app
    app.get("/logout", function(req,res){
      req.logout();
      res.json("/");
    });

    app.get("/user/user_data", isAuthenticated, function(req, res) {
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      }
      else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json(req.user);
      }
    });

    //login to app
  app.post("/login", passport.authenticate("local"), function(req, res){
    console.log("Login Succesful");
    res.redirect("/user/user_data");
     //this needs to change to the page that the
  });

  //User sees events they created
    app.get("/user/hosted_events", isAuthenticated, function(req, res){
      console.log(req.user.userID);
      db.Events.findAll({
        where: {
          HostID: req.user.userID
        }
      }).then(function(uHost){
        res.json(uHost);
      });
    });

    //User sees events they registered to
  app.get("/user/reg_userid", isAuthenticated, function(req, res){

      var eventArray = [];

      db.Registration.findAll({
        where: {
          UserID: req.user.userID
        }
      }).then(function(dbReg){

        for (var i = 0; i < dbReg.length; i++) {
          eventArray.push(dbReg[i].EventID);
        }
        db.Events.findAll({
              where: {
                EventID: eventArray
              }
        }).then(function(dbEvents){
          res.send(dbEvents);
        });
      });
  });





};
