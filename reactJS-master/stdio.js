var questions = ["What is your name?","What is your hobby?","Which programming language do you know?"];

var answers = [];

function askQuestion(number){
    
    process.stdout.write(`\n\n ${questions[number]}>`);
}

process.stdin.on('data', function(data){
    //process.stdout.write(data);
    
    answers.push(data.toString().trim());
    
    if (answers.length < questions.length){
        askQuestion(answers.length);
    }
    else{
        process.exit();
    }
});


process.on('exit', function(){
    process.stdout.write(`Hello ${answers[0]}, have fun with ${answers[1]}. We will write ${answers[2]} later.`);
});

askQuestion(0);