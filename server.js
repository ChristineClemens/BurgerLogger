//Define npm dependencies.
const express = require("express");
const expresshdbs = require("express-handlebars");
const bodyParser = require("body-parser");

//Establish app variable that runs the express middleware.
//Define the port on which to run the server.
var app = express();
var PORT = process.env.PORT || 8080;

//Establish the static html file.
//Define the url parsing method and json parsing method.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Specify template engine.
app.engine("handlebars", expresshdbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Outline routes to be built and used.
var router = require("./controllers/burgers_controller.js");
app.use(router);

//Ensure that express is listening on the desired port.
app.listen(PORT, function() {
    console.log(`Server listening on http://localhost:${PORT}`)
});