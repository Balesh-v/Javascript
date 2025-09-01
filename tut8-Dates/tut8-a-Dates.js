// -------------------------------- Dates ---------------------------------------
//------------------------Creating Date Objects ---------------------------------

// new Date()

const d = new Date()
document.getElementById("demo").innerHTML = d;

// new Date(date string)

const d1 = new Date("2024-11-08")
document.getElementById("demo1").innerHTML = d1;

// new Date(year, month, ...)
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

const d2 = new Date(2024,10,7,11,30,2,30)
document.getElementById("demo2").innerHTML = d2;

// Specifying a day higher than max, will not result in an error but add the overflow to the next month:

const d3 = new Date(2024,15,7,11,30,2,30)
document.getElementById("demo3").innerHTML = d3;

//----------------------- Using 6, 4, 3, or 2 Numbers --------------------------------------
// 6 numbers specify year, month, day, hour, minute, second:

const d4 = new Date(2018, 11, 24, 10, 33, 30);
document.getElementById("demo4").innerHTML = d4

// 5 numbers specify year, month, day, hour, and minute:

const d5 = new Date(2018, 11, 24, 10, 33);
document.getElementById("demo4").innerHTML = d5

// 4 numbers specify year, month, day, and hour:

const d6 = new Date(2018, 11, 24, 10);
document.getElementById("demo6").innerHTML = d6

// 3 numbers specify year, month, and day:

const d7 = new Date(2018, 11, 24);
document.getElementById("demo7").innerHTML = d7

// 2 numbers specify year and month:

const d8 = new Date(2018, 11);
document.getElementById("demo8").innerHTML = d8

// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

const d9 = new Date(2018);
document.getElementById("demo9").innerHTML = d9

// --------------------------------- Previous Century ----------------------------------

// One and two digit years will be interpreted as 19xx:

const d10 = new Date(99, 11, 24);
document.getElementById("demo10").innerHTML = d10

// ---------------------------- JavaScript Stores Dates as Milliseconds-----------------

// JavaScript stores dates as number of milliseconds since January 01, 1970.
// Zero time is January 01, 1970 00:00:00 UTC.
// One day (24 hours) is 86 400 000 milliseconds.

// new Date(milliseconds)

const d11 = new Date(100000000000);
document.getElementById("demo11").innerHTML = d11

// ----------------------------- Date Methods-----------------------------------------

// Displaying Dates

const d12 = new Date()
let b =  typeof d12
document.getElementById("demo12").innerHTML = b

// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

const d13 = new Date()
let ty = d13.toString()
let c =  typeof ty
document.getElementById("demo13").innerHTML = c


// The toDateString() method converts a date to a more readable format:

const d14 = new Date()
let fo = d14.toDateString()
document.getElementById("demo14").innerHTML = fo

// The toUTCString() method converts a date to a string using the UTC standard:

const d15 = new Date()
let ft = d15.toUTCString()
document.getElementById("demo15").innerHTML = ft

// The toISOString() method converts a date to a string using the ISO standard:

const d16 = new Date()
let ft1 = d16.toISOString()
document.getElementById("demo16").innerHTML = ft1