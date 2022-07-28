var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name?");
console.log("Welcome " + userName + " Let's see how well you know Pooja?");

function play(question,answer){
  var userAnswer= readlineSync.question(question);

  if (userAnswer===answer){
    console.log("You are correct!");
    score = score + 1;
  }else{
    console.log("You are incorrect!");
  }
  console.log("Your score: " + score);
}



play("Where do I live?","Bangalore");
play("Where am I from?","Chennai");
play ("Who is my favourite F1 driver?","Charles Leclerc");
play("Which company do I work with?","Deloitte");
play("What do I want to become?","Developer");