var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;
var app = express();
require("dotenv").config();
app.use(express.static("public"));

// body_parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express_handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Link to controller JS
var routes = require("./controller/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
  