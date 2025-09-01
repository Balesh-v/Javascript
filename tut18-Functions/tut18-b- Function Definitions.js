// ------------------------------------ Function Definitions -------------------------------------------
// Function Expressions

const x = function (a , b){
    return a + b
}

console.log(x)

// After a function expression has been stored in a variable, the variable can be used as a function:

let y = x(4 , 7)
console.log(y)

// ------------- The Function() Constructor ---------


const myFunction = new Function("a"  , "b" , " return a * b");
let z = myFunction( 6 , 7)
console.log(z)
// \You actually don't have to use the function constructor. The example above is the same as writing:

// ---------------------- Function Hoisting ----

myfunction1(5 ,7)
function myfunction1(a ,b ){
    console.log(a-b)
}

// Self-Invoking Functions

(function () {
    console.log("hello balesh varshney")
  })();

// ------------------------- Functions Can Be Used as Values --------------------------

function myfunction2(a ,b ){
 return a - b
}
let a1 = myfunction2(7 , 6)
console.log(a1)

// --------------------- Functions are Objects ----------------------

function myFunction3(a, b) {
    return arguments.length;
}

let r = myFunction3(7 , 6)
console.log(r)

// --------- The toString() method returns the function as a string: ---

let s = r.toString()
console.log(typeof s)