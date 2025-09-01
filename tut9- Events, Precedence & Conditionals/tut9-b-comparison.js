// --------------------- Comparison operators --------------------------

// equal to

let a = 8   
let b = "8"   // let b = 4   false
let c = a==b
console.log(c)

// equal to type 

let d = 10
let e = d===10;
console.log(e)

// not equal

let f = d!=20;
console.log(f)

// not equal type

let x = 10
let y = 20
let z = x!==y
console.log(z)

// greater than
let age = 30

if(age>18){
    console.log("you can drive")
}else{
    console.log("you can not dreive")
}

// less than

let a1 = 10
let b1 = 30
let c1 = a1<b1
console.log(c1)

// greater than or equal to

let s = 10
let h = 10
let n = s>=h
console.log(n)

// less than or equal to

let m = 8
let k = 9
let i = a<=k
console.log(i)

// ------------------------------------ logical operarors ------------

//---------- && and -------------------

let a2= 10
let b2 = 30
let c2 = (a2<b2 && a2===10 )
console.log(c2)

// -------- || or ---------------------

let d2 = 10
let age1 = "10"
let e2 = (d2===age1 || d2==10)
console.log(e2)

// -------- ! not ---------------------

let x2 = 10
let y2 =20
let z2 = !(x2<y2)
let z1 =!(x2>y2)
console.log(z)
console.log(z1)

// ---------------------------------- ternary operator -----------------------

// let age =20
let voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable)

// ----------------------------- The Nullish Coalescing Operator (??) --------

let mNale = null;
let text = "missing"
let result =  mNale ?? text ;
console.log(result)

// ---------------------------- The Optional Chaining Operator (?.) ----------

const car = { type: 600 , color: "red"}
let name = car?.name
console.log(name)

