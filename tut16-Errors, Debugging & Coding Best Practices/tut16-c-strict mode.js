// ----------------------- use strict -----------------------------------

// ------------------ Declaring Strict Mode -----------

"use strict"
let x = 10      // let
console.log(x)




function sum (a , b ){
    // 'use strict'
   let add = a + b;
   return add
}

  let s = sum(10 ,10)  // let
console.log(s)

// Deleting a variable (or object) is not allowed.

let y = {p1:10, p2:20};   
// delete y
console.log(y)


// Duplicating a parameter name is not allowed:
function sum1 (a , b ){
    // 'use strict'
   let add = a + 10;
   return add
}
console.log(sum1(10 , 30))

// Octal numeric literals are not allowed:
// Octal escape characters are not allowed:

let ar = 10     // 010  // \019
console.log(ar)

// The word eval cannot be used as a variable:
let evala = 3.14;   //eval
console.log(evala)

// The word arguments cannot be used as a variable:

let argumentss = 'gyanesh'  //arguments
console.log(argumentss)

// The with statement is not allowed: