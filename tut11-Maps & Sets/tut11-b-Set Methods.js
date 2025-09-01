// ------------------------- Set Methods ------------------------ 

// 1 .The has() Method

// Create a Set
const letters = new Set(["a","b","c"]);

// Does the Set contain "d"?
let answer = letters.has("c");
console.log(answer)


// 2.forEach() Method

const letters1 = new Set(["a","b","c"]);
let text = "";

letters1.forEach (function(value) {
  text += value + " ";
})

console.log(text)

// 3. values() Method

const letters2 = new Set(["a","b","c"]);
const myIterator = letters2.values();
let text1 = "";
for (const x of myIterator) {
  text1 += x + " ";
}
console.log(text1)

// 4.keys() Method

const letters3 = new Set(["a","b","c"]);
const myIterator2 = letters3.keys();
let text3 = "";
for (const x of myIterator2) {
  text3 += x + "<br>";
}

console.log(text3)

// 5. entries() Method

const letters4 = new Set(["a","b","c"]);
const iterator4 = letters4.entries();
let text5 = "";
for (const entry of iterator4) {
  text5 += entry + " ";
}
console.log(text5)