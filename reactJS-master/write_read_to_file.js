var fileOperation = require("fs");

global.console.log("Start writing to file....");

/*
var fileContent = fileOperation.readFileSync("123.txt");

console.log(fileContent.toString());

console.log("File reading done...");


fileOperation.readFile('123.txt', function callBackFunction(error, content){
    if(error)
        throw error;
    
    console.log(content.toString());
});


console.log("file reading done...");




fileOperation.writeFileSync("123.txt", "Writing to the file Synchronously...");

console.log("Writing to the file done...");

*/

fileOperation.writeFile("123.txt", "i am writing to the file usinf fs module", function callBack(error){
    
    if(error)
        throw error;
    
    console.log("file is written...");
    
});