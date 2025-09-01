// ---------------------------------- Function Parameters ------------------------------------------

// Function Parameters and Arguments

function myFunction(Parameters1 , Parameters2){
    return Parameters1 * Parameters2;
}
let a = myFunction(1 , 5)
console.log(a)

// Default Parameters

function myFunction1(x, y) {
  if (y === undefined) {
    y = 2;
  }  
  return x * y;
}
console.log(myFunction1(7 , 8))

// Default Parameter Values

function myFunction3(x, y = 10) {
    return x + y;
}
console.log(myFunction3(3))

// Function Rest Parameter

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
  
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x)

// The Arguments Object

function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  } 
console.log(findMax(78  , 9 ))