// ---------------------------- toString Method --------------------

let x = 123
let y =  x.toString()
console.log(y)
console.log(typeof y)

// ------------------------- Exponential Method --------------------

let a = 89.225
let b = a.toExponential(9)
console.log(b)

// ---------------------- fixed method ----------------------------

let c = 9.243
let d = c.toFixed(8)
console.log(d)

// ------------------ Precision Method ---------------------------

let e = c.toPrecision(7)
console.log(e)


// ---------------- valueof method ----------------------------

let f = 123;
let g = f.valueOf()
console.log(g)
console.log(typeof  g)

// --------------------------- Converting Variables to Numbers ---------------
//  there are three methods 

// -------------------- number() methods -----------------

let a1 = Number("123")
let a2 = Number(true)
let a3 = Number("balesh")

console.log(a1)
console.log(a2)
console.log(a3)

// The Number() Method Used on Dates

let a4 = Number(new Date())
console.log(a4)
console.log( typeof a4)

// ------------------------ parseInt method ------------------

let b1 =  parseInt("12.89")
console.log(b1)
console.log(typeof b1)

// ------------------------  parseFloat Method -------------

let b2 =  parseFloat("12.89")
console.log(b2)
console.log(typeof b2)

// ---------------------------- Number Object Methods -----------------

// ------------ isInteger method -----

let q = Number.isInteger(2)
console.log(q)

// ---------- isSafeInteger method -----

let p = Number.isSafeInteger(1000)
console.log(p)

// ----------- NumberparseFloat() same as parsefloat()--------------

// ----------NumberparseInt() same as parseInt() ------------------



