function myCommandLineArguments(argument){
    
    var index = process.argv.indexOf(argument);
    return process.argv[index+1];
}


var argument1 = myCommandLineArguments('-message');
var argument2 = myCommandLineArguments('-user');

if (!argument1 || !argument2){
    console.log("Un-correct arguments...");   
}
else{
    console.log(`Welcome ${argument2}, ${argument1}`);
}

