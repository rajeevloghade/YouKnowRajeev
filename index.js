var readlineSync=require("readline-sync");

//Using chalk here to style my game
const chalk = require('chalk');
const log=console.log;

var userName=readlineSync.question("May i have your name please? \n");

log("Welcome "+ chalk.green(userName) +", to DO YOU KNOW "+chalk.yellowBright('RAJEEV LOGHADE')+"?");
log("---------------------------------------------------------");
// --------------------------------------------------
var score=0;

function play(question,answer){
    var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    score++;
    log(chalk.green("Yes..!!! you are right."));
    log(chalk.bold.yellow("---------------------------------------------------------"));
  }else{
    log(chalk.red("Oops..!!! you are wrong."));
     log(chalk.bold.yellow("---------------------------------------------------------"));
  }
}

//calling a function

// var questionOne="Who is Rajeev's favorite programming language? \n";
// var answerOne="java";

// var questionAndAnswerOne={
//  question:"Who is Rajeev's favorite programming language? ",
//  answer:"java"
// }
// var questionAndAnswerTwo={
//  question:"Who is Rajeev's favorite bollywood actor(first name only)? ",
//  answer:"salman"
// }

var arrayOfQuestion=[{
 question:"Q.1 Who is Rajeev's favorite programming language?\n",
 answer:"java"
},{
 question:"Q.2 Who is Rajeev's favorite bollywood actor(first name only)?\n",
 answer:"salman"
},{
 question:"Q.3 What is Rajeev's passout year?\n",
 answer:"2020"
},{
 question:"Q.4 Where is Rajeev's hometown?\n",
 answer:"bhikangaon"
},{
 question:"Q.5 Which company's smartphone rajeev use?\n",
 answer:"mi"
}];

for(var i=0;i<arrayOfQuestion.length;i++){
  play(arrayOfQuestion[i].question,arrayOfQuestion[i].answer);
}
log(chalk.yellowBright("Your final score is: "+score));