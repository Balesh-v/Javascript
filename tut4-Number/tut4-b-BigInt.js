// ------------------ BigInt ------------
let a = 999999999999999999n
let b = BigInt(12345678900000006363645455456)
console.log(a) 
console.log(b)

// -------------- type ------------

console.log(typeof b)

// ------------------- BigInt Operators ---------------

let sum = 3473484284264264823n
let sum1 = 842364284246428482n
let sum2 = sum + sum1
console.log(sum2)

// ------------------- Minimum and Maximum Safe Integers --------

let x = Number.MAX_SAFE_INTEGER;
let y = Number.MIN_SAFE_INTEGER;
console.log(x)
console.log(y)


// -------------- New Number Methods --------

let e = Number.isInteger(3)
let f = Number.isSafeInteger(100000000);
console.log(e)
console.log(f)