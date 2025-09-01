// -------------------------------------- Regular Expressions ---------------------------------------------

// Regular Expression Modifiers

// /g/ Perform a global match (find all)

let a = "balesh is a very good and very loyal  boy"
let b = a.replace(/very/g, "VERY")
console.log(b)

// / i /Perform case-insensitive matching

let c = a.replace(/Balesh/i , "BALESH")
console.log(c)

// / m /Perform multiline matching

let text = "\nIs th\nis it?";
let result = text.match(/Is/m);
console.log(result)

// d/ Perform start and end matching (New in ES2022)

let text1 = "aaaabb"; 
let result1 = text.match(/(aa)(bb)/d);
console.log(result1)

// ----------------------------- Regular Expression Patterns --------------------------------

// [abc] Find any of the characters between the brackets

let a1 = "Balesh is ad "
let b1 =a1.match(/[B]/g)
console.log(b1)

// [0-9]  Find any of the digits between the brackets

let c1 = "123456789"
let d1 = c1.match(/[1-4]/g)
console.log(d1)

// (x|y) 	Find any of the alternatives separated with |

let e1= "re, green, red, green, gren, gr, blue, yellow";
let result2 = e1.match(/(red|green)/g);
console.log(result2)

// ------------------------------------- Metacharacters are characters with a special meaning: ----------------

// \d   Find a digit

let n = "the 100% of 4"
let n1 = n.match(/\d/g)
console.log(n1)


// \s	Find a whitespace character

let n2 = n.match(/\s/g)
console.log(n2)

// \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b


let text3 = "HELLO, LOOK AT YOU!"; 
let result32 = text3.search(/LO\b/);
let result33 = text3.search(/\bLO/);
console.log(result32)
console.log(result33)

// \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx

let x = "Visit W3Schools. Hello World!"; 
let y = x.match(/\u0057/g);
console.log(y)

//---------------------------------------- Quantifiers define quantities:--------------------------------=


// n+	Matches any string that contains at least one n

let ad = "Hellooo World! Hello W3Schools!"; 
let aa1 = ad.match(/o+/g);
console.log(aa1)

// n*	Matches any string that contains zero or more occurrences of n

let bb = "Hellooo World! Hello W3Schools!"; 
let bbc = bb.match(/lo*/g);
console.log(bbc)

// n?	Matches any string that contains zero or one occurrences of n


let asd = "1, 100 or 1000?";
let asdf = asd.match(/10?/g);
console.log(asdf)

//-------------------------- Using the RegExp Object -----------------------


// Using test()

let  ary= "balesh is the "
let art  = /h/
console.log(art.test(ary))