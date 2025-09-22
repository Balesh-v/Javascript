// --------------------------- Conditions.js ---------------------------
// This file contains various condition-checking functions used in the game.
// Each function checks a specific condition and returns a boolean value.

// ------------- if condition  -------------
// Use the JavaScript if statement to execute a block of code when a condition is true.
// Example of a simple if condition

let age = 15;

if(age >=18){
    console.log("You are an adult.");
}


// ----------------- Nested if -----------------
// You can use an if statement inside another if statement:
// Example of nested if statements

let age1 = 18
let country = "India"
let text = "You can not drive"

if(country === "India"){
    if(age1 >=18){
        text = "You can drive"
    }
}
console.log(text)


// ----------------- if...else -----------------
// Use the else statement to specify a block of code to be executed if a condition is false.
// Example of if...else statement

if(age >=18){
    console.log("You are an adult.");
}else{
    console.log("you can not drive")
}

// ----------------- if...else if...else -----------------
// Use the else if statement to specify a new condition to test, if the first condition is false.
// Example of if...else if...else statement

let time = 22

if(time <10){
    console.log("Good morning")
}
else if(time <29){
    console.log("Good day")
}
else{
    console.log("Good evening")
}


//  --------------------- ternary operaters------------------

let myNmae = "Balesh"

let textr = (myNmae === "Balesh") ? "true" : "false";
console.log(textr)

// -------------------- JavaScript Switch Statement -------------

let day;
let date = new Date().getDay();
 
switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

console.log("Todye is " + day)