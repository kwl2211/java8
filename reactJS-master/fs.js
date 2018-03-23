var fs = require("fs");
console.log("Start reading file...");
fs.readFile('package.json',function callBackFile(error, data){
    if (error)
        throw error
    console.log(data);
});

/*
OR
// 
can be used for reading configuration file

var content = readFileSync("package.json");

console.log(content);

var values = JSON.parse(content);
consle.log("Name: ", values.name);

*/

