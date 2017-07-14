
//These are the things I require to make an awesome app
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

//Don't forget your passport, Prove your identity
var passport = require("./config/passport");

//express instasiation
var app = express();

//Host on this port
var PORT = process.env.PORT || 8080;

//Get all the database models
var db = require("./models");

//Body Parser
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extened: true}));
 app.use(bodyParser.text());
 app.use(bodyParser.json({ type: "applicaiton/vmd.api+json"}));

 //host static docs
 app.use(express.static("public"));

//Passport
 app.use(session({ secret: "food secret", resave: true, saveUnitialized: true}));
 app.use(passport.initialize());
 app.use(passport.session());


//routes
var routes =  require("./routes/user-api-routes.js")(app);
 require("./routes/html-routes.js")(app);
// require("./routes/search-api-routes.js")(app);
 require("./routes/event-api-routes.js")(app);

db.sequelize.sync({force: false}).then(function() {
  console.log("Connected");
   app.listen(PORT, function() {
     console.log('App listening on Port ' + PORT);
   });
});
