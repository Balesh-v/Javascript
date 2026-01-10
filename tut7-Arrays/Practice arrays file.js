// *------------------------------
// * Title: Practice Arrays File
// *------------------------------

// *-------------------------------
//! create a  array
// *-------------------------------

// ? create an array using array constructor or array literal (square brackets)
const colors = ["red", "green", "blue", "yellow"];
console.log(colors);

// ? using the array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

// *-------------------------------
//! access array elements
// *-------------------------------

// ? access elements using their index (starting from 0)

const firstColor = colors[0];
const secondNumber = numbers[1];
console.log("First Color:", firstColor);
console.log("Second Number:", secondNumber);

// *-------------------------------
//! modify array elements
// *-------------------------------

// ? change the value of an element by its index
colors[2] = "purple";
console.log("Updated Colors:", colors);

// *-------------------------------
//! array travalersal / looping through an array
// *-------------------------------

// ? using a for of loop to iterate through the array

const fruits = ["apple", "banana", "cherry"];

for(let item of fruits) {
    console.log("Fruit:", item);
}

// ? using for in loop to iterate through the array indices

for(let index in fruits) {
    console.log("Index:", index, "Fruit:", fruits[index]);
}

// ? foreach method to iterate through the array

const fruitsName = ["mango", "orange", "grape"];

fruitsName.forEach((currentvalue , index , arr)=>{
    console.log("Current Value:", currentvalue);
    console.log("Index:", index);
    console.log("Array:", arr);
})

// ? Map method to create a new array by applying a function to each element

const upperCaseFruits = fruitsName.map((fruit) => fruit.toUpperCase());
console.log("Uppercase Fruits:", upperCaseFruits);


// ^ practice exercise

// ?  write a program to create an  array to multiple each element by 2 and store the result in a new array using map method.

const number =[1, 2, 3, 4 ,]

const multiplyByTwo = number.map((num)=>{
    return num * 2;
})

console.log("Original Array:", number);
console.log("Multiplied by Two:", multiplyByTwo);

// *------------------------------------------------------------------
// * How to  Insert  , add , replace , delete elements in an array 
// *-------------------------------------------------------------------

// ? adding an array

const animals = ["cat", "dog", "elephant"];
animals.push("lion")
console.log(animals)


// ? removing an array

animals.pop()
console.log(animals)

// ? ushift an array

animals.unshift("rat")
console.log(animals)


// ? shift an array

animals.shift()
console.log(animals)


// *-------------------------------------------------------------------
// * what if we want to add or remove elements at specific positions
// *-----------------------------------------------------------------

// ? splice method to add or remove elements at specific positions

const vegetables = ["carrot", "broccoli", "spinach"];
console.log("Original Vegetables:", vegetables);

// ? adding elements
vegetables.splice(1, 0, "cauliflower", "peas"); // at index 1, remove 0 elements, add 2
console.log("After Adding:", vegetables);

// ? removing elements
vegetables.splice(2, 1); // at index 2, remove 1 element
console.log("After Removing:", vegetables);

// *-----------------------------------------------------------------