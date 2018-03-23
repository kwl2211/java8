var file = require("fs");

console.log("start monitoring file...");

var content = file.readFileSync("123.txt");

console.log(content.toString());

file.watchFile("123.txt", function callBackMonitor(current, previous){
    console.log("file is changed...");
    var content = file.readFileSync("123.txt");
    console.log(content.toString());
});

console.log("file monitoring started...");