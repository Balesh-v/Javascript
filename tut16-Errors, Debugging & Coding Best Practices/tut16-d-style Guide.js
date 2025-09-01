// ------------------------------------ style guide -------------------------------------------------

// Variable Names ----- At W3schools we use camelCase for identifier names

let firstName = "Balesh"
console.log(firstName)

// Spaces Around Operators

let a = 10 + 30 ;
console.log(a)

// Code Indentation ---- Always use 2 spaces for indentation of code blocks:

function mySum (a , b) {
    return a + b ;   
}

console.log(mySum(60 , 50))

// Statement Rules 

// 1 . Always end a simple statement with a semicolon.

const car = [ "BMW" , " BUGATI" , "VOLVO"];
console.log(car);

//  General rules for complex (compound) statements:

/*  2 . Put the opening bracket at the end of the first line.
    3 . Use one space before the opening bracket.
    4 . Put the closing bracket on a new line, without leading spaces.
    5 . Do not end a complex statement with a semicolon.*/

let b = 10

if ( b < 20) {
    console.log("yes");
}
else {
   console.log("No");
}

// Object Rules

// General rules for object definitions:

/* 1 . Place the opening bracket on the same line as the object name.
   2 . Use colon plus one space between each property and its value.
   3 . Use quotes around string values, not around numeric values.
   4 . Do not add a comma after the last property-value pair.
   5 . Place the closing bracket on a new line, without leading spaces.
   6 . Always end an object definition with a semicolon. */

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(person)


// Line Length < 80 --- If a JavaScript statement does not fit on one line, the best place to break it, 
// is after an operator or a comma.

// document.getElementById("demo").innerHTML =
// "Hello Dolly.";