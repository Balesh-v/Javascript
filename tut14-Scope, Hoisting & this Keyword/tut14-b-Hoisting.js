// ----------------------------------------- Hoisting--------------------------------
// JavaScript Declarations are Hoisted

x = 5 ;
console.log(x)
var x ;


var x ;
x=20;
console.log(x)

// The let and const Keywords

// carName = "Volvo";
// let carName;
// console.log(carName)

// carName = "Volvo";
// const carName;
// console.log(carName)

// JavaScript Initializations are Not Hoisted

var a = 30
var b = 6
console.log(a + " " + b)

var f = 10
console.log(f + " " + g)
var g = 40