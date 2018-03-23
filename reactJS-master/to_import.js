function hello(){
    return "hello node...";
}


function helloEasy(){
    return hello() + ' you are easy';
}


function privateIncrement(number){
    return number += 1;
}

function increment(number){
    return privateIncrement(number);
}


module.exports.hellomodule = hello;
module.exports.helloeasy = helloEasy;
module.exports.incrementNumber = increment;