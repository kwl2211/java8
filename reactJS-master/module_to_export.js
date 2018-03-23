function hello(){
    return "hello node";
}

function helloEasy(){
    return hello() + " node is easy...";
}





module.exports.printhello = hello;
module.exports.helloCool = helloEasy;