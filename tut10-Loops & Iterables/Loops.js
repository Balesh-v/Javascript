// -------------------------------------  Loops.js  -------------------------------------
// This file contains examples of different types of loops in JavaScript.

// Example of a 'for' loop 

for (let i=0; i<=10; i++){
    console.log(i)
}

let cars = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"];
for (let i = 0; i<cars.length; i++){
    console.log(cars[i])
}


// Example of a 'while' loop

let j = 0;
while (j <= 10){
    console.log(j);
    j++;
}

let myarr = ["Apple", "Banana", "Cherry", "Date"];
let k = 0;
while (k < myarr.length){
    console.log(myarr[k]);
    k++;
}

// Example of a 'do...while' loop

let m = 0;
do {
    console.log(m);
    m++;
} while (m <= 10);

let fruits = ["Mango", "Pineapple", "Grapes", "Orange"];
let n = 0;
do {
    console.log(fruits[n]);
    n++;
} while (n < fruits.length);


// ---------------------- pattern -----------------------------


for(var i = 2; i<=5; i++){
    var pattern = " "
    for(var s=2; s<=i; s++){
        pattern = pattern + "*"
    }
    console.log(pattern)
}
