// ------------------------- JavaScript Type Conversion ----------------------

// Converting Strings to Numbers

let a = "20"
console.log(typeof a)
let b = Number(a)
console.log(typeof b)

// The Unary + Operator  

let c = +"30"
let d = +c;
console.log(typeof c)
console.log(typeof d)


// ------------- Converting Numbers to Strings-----------

let e = 10;
console.log(typeof e)
let f = String(e)
console.log(typeof f)

// The Number method toString() does the same.

e.toString()
console.log(e)

// ---------------------- Converting Dates to Numbers -----------
// use number() method

// ---------------------- Converting Dates to Strings -------------

// use tostring() method

// ---------------------- Converting Booleans to Numbers ----------

// use number() method


// -------------------- Converting Booleans to Strings ------------

// use tostring() method


// -------------------- Automatic Type Conversion ------------------

console.log(
(5 + null) + " "  +
("5" + null) + " " +
("5" + 2) + " " +
("5" - 2) + " " +
("5" * "2") + " " +
("5" / "2") + " "
)