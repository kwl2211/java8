var fs = require("fs");

console.log("Started monitoring...");

var content = JSON.parse(fs.readFileSync("package.json"));

console.log("Initial content: ", content);

fs.watchFile("package.json", function(current, previous){
    console.log("File changed...");
    var content = JSON.parse(fs.readFileSync("package.json"));
    console.log("New Content: ", content );
});