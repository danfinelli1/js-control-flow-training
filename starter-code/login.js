var userLogin = {
  username: "blueharry",
  password: "butt1234"
};

var userInput = window.prompt("Please enter password for "+userLogin.username+".");

if(userInput === userLogin.password){
  console.log('thats correct');
} else {
  console.log('thats incorrect');
}

console.log("login.js loaded");
