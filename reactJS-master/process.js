function extractMessage(message){
    
    var index = process.argv.indexOf(message);
    return (index === -1) ? null:process.argv[index+1]
}

    

var greeting = extractMessage('--greeting');
var user = extractMessage('--user');


if (!user || ! greeting){
    console.log('Incorrect Input');
}
else{
    console.log(`Welcome ${user}, ${greeting}`);
}


//console.log(process.argv);



