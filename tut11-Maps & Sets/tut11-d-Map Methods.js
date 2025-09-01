// ---------------------- javascript Map Methods ---------------------------------
// Map.size

const fruites = new Map([["apple" , 400] , ["banana" , 800] , ["mango" , 1000]]);
console.log(fruites.size) 

// Map.delete()

console.log(fruites.delete("apple"))
console.log(fruites)

// Map.clear()

console.log(fruites.clear())
console.log(fruites)

// Map.has()

const fruite = new Map([["apple" , 400] , ["banana" , 800] , ["mango" , 1000]]);
console.log(fruite.has("apple"))

// Map.forEach()

let text = " ";
fruite.forEach(function(key , value){
    text+= value + " " + key
})
console.log(text)

// Map.entries()

let tex1t = "";
for (const x of fruite.entries()) {
  tex1t += x;
}
console.log(tex1t)

// Map.keys()

let text2 = "";
for (const x of fruite.keys()) {
  text2 += x;
}
console.log(text2)

// Map.values()

let text3 = " ";
for (const x of fruite.values()) {
  text3 += x;
}
console.log(text3)

// You can use the values() method to sum the values in a map: 0

// ------------------------- Objects as Keys ----------------------------------

const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

const fruits = new Map();
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits.get(apples))

// JavaScript Map.groupBy()

// Create an Array

// const fruits1 = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
// ];

// Callback function to select low volumes 

// function myCallback({ quantity }) {
//     return quantity > 200 ? "ok" : "low";
// }

// Group by ok and low

// const result = Map.groupBy(fruits, myCallback);

// Display Results

// let text4 ="These fruits are Ok: <br>";

// for (let x of result.get("ok")) {
//   text4 += x.name + " " + x.quantity + "<br>";
// }

// text4 += "<br>These fruits are low: <br>";

// for (let x of result.get("low")) {
//   text4 += x.name + " " + x.quantity + "<br>";
// }

// console.log(text4)

// console.log(result.get("ok"));