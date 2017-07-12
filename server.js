var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extened: true}));
 app.use(bodyParser.text());
 app.use(bodyParser.json({ type: "applicaiton/vmd.api+json"}));

 app.use(express.static("public"));

 require("./routes/user-api-routes.js")(app);

db.sequelize.sync({force: true }).then(function() {
  console.log("Connected");
   app.listen(PORT, function() {
     console.log('App listening on Port ' + PORT);
   });
});
