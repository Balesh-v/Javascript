//*=============================
//*   Function in Javascript 
//* =============================

//? Functions are reusable block of code designed to perform a particular task. Functions are executed when they are "called" or "invoked".

// ^ Example1 ==  3 students at a same time want to find the sum of two numbers

// & 1st student

var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

// & 2nd student

var num3 = 15;
var num4 = 25;
var sum = num3 + num4;
console.log("The sum of " + num3 + " and " + num4 + " is: " + sum);


// & 3nd student

var num5 = 15;
var num6 = 25;
var sum = num5 + num6;
console.log("The sum of " + num5 + " and " + num6 + " is: " + sum);

// ^ Example2 == Using Function

function sumTwoNumbers(num1, num2){
    var sum = num1 + num2;
    console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);
}

// & 1st student
sumTwoNumbers(5, 10);

// & 2nd student
sumTwoNumbers(15, 25);

// & 3nd student
sumTwoNumbers(15, 25);

// * =============================================
// * Function Syntax and  Declaration
// * =============================================

// ? Functions are defined with the function keyword:
// ? followed by the function name
// ? followed by parentheses ().
// ? The code to be executed, by the function, is placed inside curly brackets { }.

function functionName(parameters){
    // code to be executed
    console.log("Function is invoked");
}

// * =============================================
// * Function Invocation
// * =============================================

// ? After defining a function, you can invoke (call) it using the
// ? function name followed by parentheses ().
// ? You can also pass arguments into the parentheses to be used inside the function.
// ? Syntax:

functionName(arguments);

// ! Practical Example
// ! Write a function that takes two numbers as parameters and returns their sum.

function addNumbers(num1, num2){
    return num1 + num2;
}

let result = addNumbers(20, 30);
console.log("The sum is: " + result);


// *==========================================================
// * Function Parameters and Arguments
// * =========================================================

// ? Functions can take parameters, which are variables passed into the function.
// ? Parameters act as placeholders for the values (arguments) that will be provided when the function is called. parameters allow you to pass data into functions, making them more flexible and reusable.

// ! Example:

function multiplyNumbers(a, b) {
    return a * b;
}

// ? Function arguments are the real values passed to (and received by) the function.

let product = multiplyNumbers(5, 10);
console.log("The product is: " + product);

//! Practice Time

//? Let's say we want to greet students with one same line

//! Write a JavaScript program that defines a function called greet to welcome

// ! individuals to the Thapa Technical JS Course. The function should take a name
// ! parameter and output the message "Hello [name], Welcome to Thapa Technical JS
// ! Course". Call the function twice, once with the argument "vinod" and once with
// ! the argument "ram".

function greet(name){
    console.log("Hello " + name + ", Welcome to Thapa Technical JS Course");
}


// & Call the function with different arguments

greet("vinod");
greet("ram");

// *==========================================================
// * Function Expressions
// * =========================================================

//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

// ! Example of Anonymous Function Expression

let square = function multiply(num) {
    return num * num;
}
let resultSquare = square(6);
console.log("The square is: " + resultSquare);

// *==========================================================
// * Anonymous Functions
// * =========================================================

//? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

// ! Example of Anonymous Function Expression

let divide = function(num1, num2) {
    return num1 / num2;
}

let resultDivide = divide(20, 4);
console.log("The division result is: " + resultDivide);

// *==========================================================
// * return keyword
// * =========================================================

// ? The return keyword is used to specify the value that a function should return when it is called. When a function reaches a return statement, it stops executing and sends the specified value back to the caller.

// ! Example:

function getSquare(num) {
    return num * num;
}

let squareResult = getSquare(5);
console.log("The square is: " + squareResult);