// --------------------  javascript map ------------------------

// new Map() 

const fruites =  new Map([["apple" ,500] , ["banana" , 300]]);
let numb = fruites.get("apple")
console.log(numb)

// The set() Method

fruites.set("mango" , 600);
console.log(fruites)

// The set() method can also be used to change existing Map values:

// The get() Method
// The get() method gets the value of a key in a Map:

let b = fruites.get("banana");
console.log(b)

// ----------------------- Maps are Objects -----------------------

let ty = typeof fruites
console.log(ty)

let int = fruites instanceof Map;
console.log(int)
