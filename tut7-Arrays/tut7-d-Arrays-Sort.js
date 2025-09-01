// --------------------------------- Sorting Arrays -----------------------------
// Sorting an Array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let srt =fruits.sort();
console.log(srt)
console.log(fruits)

// Reversing an Array

const fruitse = ["Banana", "Orange", "Apple", "Mango"];
fruitse.sort()
fruitse.reverse()
console.log(fruitse)

// Array toSorted() Method

const dot = ["Banana", "Orange", "Apple", "Mango"]
let sit = dot.toSorted()
console.log(sit)

// toReversed() 

let rev = dot.toReversed()
console.log(rev)

// Numeric Sort

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points)

// Sorting an Array in Random Order

points.sort(function(){return 0.5 - Math.random()})
console.log(points)

// The Fisher Yates Method

const pointsi = [40, 100, 1, 5, 25, 10];

for (let i = pointsi.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = pointsi[i];
  pointsi[i] = pointsi[j];
  pointsi[j] = k;
}
console.log(pointsi)

//--------------- Find the Lowest (or Highest) Array Value ------------------------------
// Find Min or Max with sort()

const sum  = [40, 100, 1, 5, 25, 10]
sum.sort(function(a , b){return a - b })  //Sort Descending: (b-a)
console.log(sum[0])  

// Using Math.min() on an Array

function myArrymin (arr){
    return Math.min.apply(null ,arr)
}
let ar = myArrymin(sum)
console.log(ar)

// Using Math.max() on an Array

function myArrymax (arr){
    return Math.max.apply(null ,arr)
}
let ar1 = myArrymax(sum)
console.log(ar1)

// Array Iteration