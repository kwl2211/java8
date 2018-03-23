var fs = require("fs");

var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var express = require("express");

//var app = express.createServer();

var app = express();

//app.use(app.router);
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response){
    response.send('hello!');
});

app.get("/hello/:text", function (request, response){
    response.send("Hello ", request.params.text);
});

app.get("/user/:id", function (request, response){
    var user = users[request.params.id];
    if (user){
        //response.send("user Found");
        response.status(200).send("User found. " + "Twitter: " + users[request.params.id].twitter )
    }else{
        //response.send("user not found", 404);
        response.status(404).send("user not found...");
    }
});

var users = {
  "1":{
      "name":"Praful Daga",
      "twitter":"praful_daga"
  },
    "2":{
        "name":"Online Business Builder",
        "twitter":"obb_in"
    }
    
};


app.listen(port, host);