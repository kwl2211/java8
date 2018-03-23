var fs = require("fs");
console.log("Start writing file...");
fs.writeFile('one.json', "Hello Node 1 2 3",function callBackFile(error){
    if (error)
        throw error
    console.log("Written to file");
});

/*
OR
// 
can be used for reading configuration file

var content = writeFileSync("one.json", "Hello World Sync");

console.log("Finished...");


*/

