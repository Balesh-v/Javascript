// -----------------------------------  Destructuring -----------------------------------------

//  Object  Destructuring 

const person = {firstname: "balesh" , lastname : "varshney" , Age:20 , class: "M.SC"}
let {firstname , lastname , Age  } = person;
console.log(firstname , lastname , Age )

// Object Default Values

let {country="us"} =person
console.log(country)


// Object Property Alias

let {firstname:name}=person
console.log(name)

// Array Destructuring

const arr = [ 3 , 6 ,8 , 5 , 7]
let [a , b, c , d ]=arr
console.log(a , b , c )

//  Skipping Array Values

const arr2 =[ 4 , 6 ,8 ,9]
let [a1 , , ,b1] = arr2
console.log(a1 , b1)

// Array Position Values

const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
const {[0]:fruit1 ,[1]:fruit2} = fruits;
console.log(fruit1,fruit2)

// The Rest Property

const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a2,b2, ...rest] = numbers
console.log(a2,b2,rest)

// Destructuring Maps
const fruitss = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
let text = "";
for (const [key, value] of fruitss) {
  text += key + " is " + value;
}
console.log(text)

// Swapping JavaScript Variables

let firstName = "John";
let lastName = "Doe";
[firstName, lastName] = [lastName, firstName];
console.log(firstName,lastName)