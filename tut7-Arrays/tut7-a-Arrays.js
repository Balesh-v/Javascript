// ------------------------ Creating an Array -----------------------
const car = ["Audi" , "Rolls royal" , "bugati"]
console.log(car)

// Spaces and line breaks are not important. A declaration can span multiple lines:

const age = [2 , 
    4 ,
    6 ,
    8 ,
    10]
console.log(age)

// You can also create an array, and then provide the elements:

const jack = []
  jack[0] = "nork";
  jack[1] = "shark";
console.log(jack)

// Using the JavaScript Keyword new

const bulk = new Array("kot" , "dert")
console.log(bulk)
 
// Accessing Array Elements

const name = ["dort" , "sert" , "fyr"];
let dort = name[0]
console.log(dort)

// Changing an Array Element

name[0] = 'baleh'
console.log(name)

// Converting an Array to a String

const fruits =["Banana", "Orange", "Apple", "Mango"]
let str = fruits.toString()
console.log(str)

// Access the Full Array

console.log(fruits)

// Arrays are Objects

console.log(typeof fruits)

// The length Property

let len = fruits.length
console.log(len)

// Accessing the First Array Element

let fir = fruits[0]

// Accessing the Last Array Element

let last = fruits[fruits.length -1];
console.log(last)

// Looping Array Elements

const fruit = ["Banana", "Orange", "Apple", "Mango"];
let lent = fruit.length
text = "<ul>"
for(let i =0; i<lent; i++){
  text+="<li>" + fruit[i] + "</li>";
}
text+="</ul>";
console.log(text)

// You can also use the Array.forEach() function:

let txt = "<ul>"
fruit.forEach(myfunction)
txt+="</ul>"

function myfunction(value){
  txt+= "<li>" + value + "</li>"
}
console.log(txt)

// Adding Array Elements

const grt = ["balesh"]
let srt = grt.push("gyanesh")
console.log(grt)

// Associative Arrays

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;     
console.log(person[0])

// new Array()

const points = new Array(40);  
console.log(points)

const pointss = [40];
console.log(pointss)

// How to Recognize an Array

const fruitse = ["Banana", "Orange", "Apple"];
let type = typeof fruitse;

// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

let rto = Array.isArray(fruitse)
console.log(rto)

// The instanceof operator returns true if an object is created by a given constructor:

let tyo = (fruitse instanceof Array)
console.log(tyo)

// Nested Arrays and Objects

const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
console.log(myObj)

