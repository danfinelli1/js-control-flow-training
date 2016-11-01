
var userInput = window.prompt('How many versus would you like?');
userInput = Number(userInput);

for (var i = userInput; i>-1; i--){

  if(i>2){
  alert(i+" bottles of beer on the wall,");
  alert(i+" bottles of beer!");
  alert("Take one down and pass it around,");
  alert((i-1)+" bottles of beer on the wall!");
} if (i===1) {
    alert(i+" bottle of beer on the wall,");
    alert(i+" bottle of beer!");
    alert("Take one down and pass it around,");

  } if (i === 0){
    alert("No more bottles of beer on the wall!");
  }

}

console.log("sing.js loaded");
