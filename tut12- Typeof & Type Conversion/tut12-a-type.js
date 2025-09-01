// -------------------- type of -----------------------------------------------

// --------------------- Primitive Data Types -----------------------------------

let a = "balesh"         // string
console.log(typeof a)

let b = 13;
console.log(typeof  b) // number

let c = true;
console.log(typeof c)   //boolean 

let d = 12345678901234567890n
console.log(typeof d)            // bigint


let e = Symbol('#')   // symbol
console.log(typeof e)

let f = null;          //null
console.log(typeof f)

let g ;
console.log(typeof g)  // undefine

// -------------------------- Complex Data Types ------------------------

let h = {name : "balesh"}   // object
console.log(typeof h)

let i = ["apple" , 4]
console.log(typeof i)  // Array


let j = function(){}   // function
console.log(typeof j)

// ----------------------- How to Recognize an Array -------------------

const fruits =["Apple", "Banana", "Mango"];
let k = Array.isArray(fruits)
console.log(k)

// ------------------------ The instanceof Operator --------------------

const time = new Date();
let l = time instanceof Date;
console.log(l) 

// The constructor Property

let m = "balesh".constructor
console.log(typeof m)

// The void Operator
