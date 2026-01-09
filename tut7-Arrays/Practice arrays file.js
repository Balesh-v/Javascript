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
