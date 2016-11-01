var securityQuestions = [];
securityQuestions[0]={
  question: "What was your first name?",
  expectedAnswer: "Dan"};

securityQuestions[1]={
  question: "What was your first pet's name?",
  expectedAnswer: "turtle"};

securityQuestions[2]={
  question: "What is your favorite make and model of a car?",
  expectedAnswer: "chevy blazer"};

var userAnswer = window.prompt(securityQuestions[0].question);

if (userAnswer === securityQuestions[0].expectedAnswer){
  userAnswer = window.prompt(securityQuestions[1].question);
  if(userAnswer === securityQuestions[1].expectedAnswer){
    userAnswer = window.prompt(securityQuestions[2].question);
    if(userAnswer === securityQuestions[2].expectedAnswer){
      console.log('congrats! youre in!');
    } else {
      console.log('incorrect');
    }
  } else {
    console.log('incorrect');
  }
} else {
  console.log('incorrect');

}

console.log("security_questions.js loaded");
