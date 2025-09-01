// ----------------------------- for loop ------------------------------------------

for(let i = 1 ; i<=10 ; i++){
    console.log(i*5)
}


let text="";
for(let i = 0 ; i<=10 ; i++){
    text+=i;
}
console.log(text)

// --------------- Expression 1 -----
// You can initiate many values in expression 1 (separated by comma):

const car = ["bmw" , " audi " , "tata " , "bugait "]

let i , txt ,  len
for(i=0 , len = car.length , txt =  "" ; i<len; i++ ){
    txt+=car[i]
}
console.log(txt)

// --------------------------------- Loop Scope- -------------------

var j =1;

for(j; j<=10 ; j++){
    
}
console.log(j)


// ------------------- example ------------------------

//  Write a JavaScript program that displays the largest integer among two integers.

let k = 20 ;
let h = 20;

if(k>h){
    console.log("k is largest integer than h")
}else if( h>k){
    console.log("h is largest integer than k")
}else{
    console.log("two integer are equal")
}

// --------------------------- loop 1 --------------------------

// print 1 to 100 number

for(i=0;i<=100;i++){
    console.log(i)
}