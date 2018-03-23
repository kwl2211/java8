var waitTime = 9000;
var interval = 500;
var currentTime = 0;

console.log(`Wait fot ${waitTime} ms...`);


var myTimer = setInterval(function(){
    currentTime = currentTime + interval;
    console.log(`Waiting since... ${currentTime}`);
}, interval);

setTimeout(function(){
        
           clearInterval(myTimer);
           console.log("Done");
           }, waitTime);