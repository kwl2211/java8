var imported = require("./to_import.js");

console.log("Hello from module: ", imported.hellomodule());

console.log("HelloEasy from module: ", imported.helloeasy());

console.log("Increment number by 1 ", imported.incrementNumber(5));