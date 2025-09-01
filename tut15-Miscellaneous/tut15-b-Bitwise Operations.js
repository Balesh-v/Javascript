// ------------------------------------ Bitwise Operations -------------------------------------

// JavaScript Bitwise AND (&)

let a = 5;     //101 & 110  = 100 = 4
let b = 6;
console.log(a&b)


// JavaScript Bitwise OR (|)

let c = 9;    // 1001 | 0101 = 1101 = 13
let d = 5;
console.log(c | d)

// JavaScript Bitwise XOR (^)

let e = 6;   //0110 ^ 1001 = 1111 = 15
let f = 9
console.log(e ^ f)

// JavaScript Bitwise NOT (~)

let g = ~5   // 11111111111111111111111111111010 = -6
console.log(g)

// JavaScript (Zero Fill) Bitwise Left Shift (<<)

let h = 5
let i = 5;
let j = h<<i
console.log(j)

// JavaScript (Sign Preserving) Bitwise Right Shift (>>)

let k = 50;
let l = 4;
console.log(k>>l)

// JavaScript (Zero Fill) Right Shift (>>>)

console.log(k>>>l)

// Converting Decimal to Binary

function bin(dec){
    return (dec >>> 0).toString(2)
}

let m = bin(5)
console.log(m)


// Converting Binary to Decimal

function bin2dec(bin1){
    return parseInt(bin1, 2).toString(10);
}
let n = bin2dec(101)
console.log(n)