var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//ROUTER
//point server to a series of route files

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

app.listen(port);
