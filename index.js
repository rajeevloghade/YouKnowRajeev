var readlineSync=require("readline-sync");

var userName=readlineSync.question("May i have your name please? \n");

console.log("Welcome "+userName +" to DO YOU KNOW 'RAJEEV LOGHADE'?\n");
console.log("NOTE: All answer should be in lowercase.");
console.log("-------------------------------------------");
// --------------------------------------------------
var score=0;

function play(question,answer){
    var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    score++;
    console.log("Yes..!!! you are right.");
    console.log("----------------------------------------");
  }else{
    console.log("Oops..!!! you are wrong.");
    console.log("----------------------------------------");
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
console.log("Your final score is: "+score);