var timer = 3000;
var waitInterval = 100;
var currentTimer = 0;

console.log(`Wating for ${timer} ms...`);


setTimeout(function(){
    clearInterval(myTimerObject);
    console.log("Timer finished...");
}, timer);  




var myTimerObject = setInterval(function(){
    
    currentTimer = currentTimer + waitInterval;
    console.log(`Wating since ${currentTimer}`);
    
    
}, waitInterval);