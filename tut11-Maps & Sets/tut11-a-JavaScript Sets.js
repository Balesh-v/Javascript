// ------------------------- JavaScript Sets ---------------------------------------

// new Set() Method

const letters = new Set(["a","b","c"]);
console.log(letters)

// Create a Set and add values use of add()  method:

letters.add("d")
console.log(letters)

// ----------------------Create a Set and add variables:-------------------------
// create a Set 

const num = new Set()

// create variable 

const a = "A";
const b = "B";

// add variable to the set 

num.add(a)
num.add(b)

// log set

console.log(num)

// If you add equal elements, only the first will be saved:

num.add("c")
num.add("c")
console.log(num)

// ------------- Listing the Elements ------------------


for(const x of num){
    console.log(x)
}

// --------- Sets are Objects ----------------

console.log(typeof num)
console.log(letters instanceof Set)