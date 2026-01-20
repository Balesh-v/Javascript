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
// * Searching an arrays
// *-----------------------------------------------------------------


//? searching and filter arrays

//? : for searching  we have - indexof lastindexof and include

// ? 1 : The indexOf() method searches an array for an element value and returns its position.

const arr =  ["Ram" , "Sita" , "Krishana" , "Radha" , "Sita"]
console.log(arr.indexOf("Sita"))

//? 2 : Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

console.log(arr.lastIndexOf("Sita"))

// ? 3: ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

console.log(arr.includes("Sita"))


// *-------------------------------
// * filter method 
// *-------------------------------

const method = [1, 3, 59  , 3 , 59 , 68 ,4]


// ? 1 . The find() method returns the value of the first array element that passes a test function. This example finds (returns the value of) the first element that is larger than 10:


let val = method.find((currentvalue)=>{
    return currentvalue > 10
})

console.log(val)

// ? 2 . The findIndex() method returns the index of the first array element that passes a test function. This example finds the index of the first element that is larger than 10:


let sal = method.findIndex((currentvalue)=>{
    return currentvalue > 10
})

console.log(sal)

// ? . The filter() method creates a new array with array elements that pass a test.This example creates a new array from elements with a value larger than 20:

const num = [45, 4, 9, 16, 25];

let unms = num.filter((currentvalue)=>{
    return currentvalue > 20
})

console.log(unms)
