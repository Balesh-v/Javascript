// --------------------------- number --------------------

let age = 19;
let reding = 1.2;
console.log(age,reding)
console.log(typeof (age,reding))

// --------------------- exponent notation --------------

let not = 125e5
let not1 =125e-6
console.log(not,not1)

// ------------------ Integer Precision ------------------

let int = 99999999999999     // int 15 digits 
console.log(int)

// ---------------- Floating Precision -------------------

//let x = 0.1 + 0.2 
let x = (0.2*10 + 0.1*10)/10
console.log(x)

// -------------- Adding Numbers and Strings --------------

// If you add two numbers, the result will be a number:

let a = 10;
let b = 20;
let c = a + b;
console.log(c)

// if you add two strings, the result will be a string concatenation:

let a1 = "10";
let b1 = "20";
let c1 = a1 + b1;
console.log(c1)

// If you add a number and a string, the result will be a string concatenation:

let a2 = 10;
let b2 = "20";
let c2 = a2 + b2;
console.log(c2)

// ---------------------------------- Numeric Strings --------------------------

// JavaScript will try to convert strings to numbers in all numeric operations:  
// This will work: operators - * / but + is not work

let a3 = "10"
let b3 = "20";
let c3 = a3 * b3;
console.log(c3)

// ----------- NaN - Not a Number -------------------

let a4 = 10
let b4 = "apple";
let c4 = a4 / b4;
console.log(c4)

// You can use the global JavaScript function isNaN() to find out if a value is a not a number:

console.log(isNaN(c4))

// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:

let t = NaN;
let y = 5;
let z = t + y;
console.log(z)

// Or the result might be a concatenation like NaN5:

let x1 = NaN;
let y1 = "5";
let z1 = x1 + y1;
console.log(z1)

// NaN is a number: typeof NaN returns number:

console.log(typeof x1)

// -------------------------------------- Infinity -----------------------------------

let myNumber = 5;
let txt = "";
while(myNumber != Infinity){
    myNumber = myNumber * myNumber;
    txt = txt + myNumber + "<br>";
}
console.log(txt)
console.log(typeof Infinity)

// ----------------------------- js  number as a object ----------------
//   new keyword

let v = new Number(123)
console.log(v) 
console.log(typeof v)


// When using the == operator, x and y are equal:

let x3 = 500;
let y3 = new Number(500);
let z3 = x3 == y3
console.log(z3)

// When using the === operator, x and y are not equal.

let e = x3 === y3
console.log(e)