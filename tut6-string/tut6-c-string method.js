// ------------------------------ string method ------------------------------------
// --------------- 1 . String Length ------------

let myName = " balesh "
let length = myName.length
console.log(length)

// ------------------------- Extracting String Characters ---------------------
// 2 . String charAt()

let text = "Hello world";
let text1 = text.charAt(7)
console.log(text1)

// String charCodeAt()

let txt = "HEllo world"
let txt1 = txt.charCodeAt(1)
console.log(txt1)

// String at()

let txt2 = "balesh"
let txt3 = txt2.at(-6)
console.log(txt3)

// Property Access [ ] 

let text3 = "gyanesh varshney"
let text4 = text3[0]
console.log(text4)

// -------------------------- Extracting String Parts ----------------------
// String slice()

let myName2  = "Balesh varshney"
let sli = myName2.slice(0 ,6)
console.log(sli)

// If you omit the second parameter, the method will slice out the rest of the string:

let sli1 = myName2.slice(0)
console.log(sli1)

// If a parameter is negative, the position is counted from the end of the string:

let sli2 = myName2.slice(-8)
console.log(sli2)

// String substring()
// substring() is similar to slice().

let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part)

// String substr()
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

let str1 = "Apple, Banana, Kiwi";
let part2 = str.substring(7, 6);
console.log(part2)


// ----------------------- Converting to Upper and Lower Case -----------------------------

// String toUpperCase()

let ex = "balesh varshney"
let ex1 = ex.toUpperCase()
console.log(ex1)

// String toLowerCase()

let ex2 = "BALESH VARSHNEY"
let ex3 = ex2.toLowerCase()
console.log(ex3)

// concat() joins two or more strings:

let me = "hello world"
let me1 = "balesh varshney"
let me2 = me.concat(" " , me1)
console.log(me2)

// String trim()

let get1 = "  hello  "
let set1 = get1.length
let get2 = get1.trim()
console.log(set1)
console.log(get2.length)

//  String trimStart(): removes whitespace only from the start of a string.
// String trimEnd() : removes whitespace only from the end of a string.


//  String Padding

// padStart()
let hut = "6"
let hut2 = hut.padStart(4 , 5)
console.log(hut2)

//  padend()

let jok = "7";
let fik = jok.padEnd(3 , "0")
console.log(fik)


// String repeat()

let sot = "balesh varshney"
let sot1 = sot.repeat(8)
console.log(sot1)


//  Replacing String Content

let  lot =  "balesh kumar"
let lot1  = lot.replace("kumar" , "varshney")
console.log(lot1)

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

let texts = "Please visit Microsoft!";
let newText = texts.replace(/MICROSOFT/i, "W3Schools");
console.log(newText)

//  To replace all matches, use a regular expression with a /g flag (global match):

let texte = "Please visit Microsoft and Microsoft!";
let newTexte = texte.replace(/Microsoft/g, "W3Schools");
console.log(newTexte)

// String ReplaceAll()

let gyt = "balesh varshney varshney varshney"
let gyt3 = gyt.replaceAll("varshney" , "kumar")
console.log(gyt3)

// ------------------------------- Converting a String to an Array ------------------
// String split()

let ser = "a ,b , c , d"
let myarr = ser.split(",")
let sep = myarr[0]
console.log(sep)