var express = require("express");
var fs = require("fs");

var app = express();

var content = fs.readFileSync("one.html");

app.get("/", function(request, response){
    response.send("Hello node from express!");
});

app.get("/one", function(request, response){
    response.send(content.toString());
});

app.get("/two", function(request, response){
    response.send("coming from 2");
});

app.get("/two/:text", function(request, response){
    response.status(201).send("Hello, your id is " + request.params.text);
});

app.listen(9999, "localhost");
