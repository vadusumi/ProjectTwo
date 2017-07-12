var db = require("../models");

module.exports = function(app) {

  app.get("/api/users", function(req, res){

    db.User.findAll({
      // include: [db.Address]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
 });

  app.post("/api/user/new", function(req, res) {
      db.User.create(req.body).then(function(dbUser) {
        res.json(dbUser);
      });
    });



};
