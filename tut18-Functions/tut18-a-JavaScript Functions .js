// --------------------------- function ---------------------------------

// JavaScript Function Syntax

function myfunction(para1 , para2){
    return para1 + para2
}

let a = 10
let b = 30
let sum  = myfunction(a , b)  // call a function (invokes)
console.log(sum)

// The () Operator
// The () operator invokes (calls) the function:

function myfunction1(para1 , para2){
    return para1 * para2
}
console.log(myfunction1(5 ,9))


// Accessing a function with incorrect parameters can return an incorrect answer: NaN

console.log(myfunction1())

// Accessing a function without () returns the function and not the function result: 

let value = myfunction1
console.log(value)

// ------------ Functions Used as Variable Values -------------------------------------

let text = `the value of 3 * 4 = ${myfunction1(3 , 4)}`
console.log(text)

// ------------ Local Variables ------------------------------------

let text1 = "Outside: " + typeof carName;
console.log(text1)

function myFunction() {
  let carName = "Volvo";
  let text2 = "Inside: " + typeof carName + " " + carName; 
  console.log(text2)
}

myFunction();