// ---------------------------- Array Iteration -----------------------------------
//  Array forEach()

const num = [ 34 , 56 ,78 ,89 ]
let txt = "";
num.forEach(myfunction)

function myfunction (value , index , Array){
    txt+=value ;
}
console.log(txt)

// Array map()

const num1 = [1 , 2 , 3, 4 , 5 ]
let mul = num1.map(myfunction1)
console.log(mul)

function myfunction1(x) {
    return x*10
}

// Array flatMap()

const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr = myArr1.flatMap(x => [x, x * 10]);
console.log(newArr)

// Array filter()

const age = [ 18 , 20 , 10 , 45 , 39 , 25 ]
let fil = age.filter(myfunction2)
console.log(fil)

function myfunction2 (x){
    return x >20
}

//  Array reduce()

const myArr2 = [1, 2, 3, 4, 5, 6];
let sum  = myArr2.reduce(myfunction3 , 100)
console.log(sum)

function myfunction3 (total , value , index , Array){
    return total + value
}

// Array reduceRight()

const alphabets = ["a" , "b" , "c"]
let jo = alphabets.reduce(accc)
let jo1 = alphabets.reduceRight(accc)
console.log(jo)
console.log(jo1)

function accc (total , value){
    return total + value
}

// Array every()

const great = [ 4 , 6 ,90 , 40]
let gre = great.every(big)
console.log(gre)

function big (bigger){
    return bigger > 3
}

//  Array some()

const great1 = [ 4 , 6 ,90 , 40]
let gre1 = great1.some(big1)
console.log(gre1)

function big1 (bigger){
    return bigger > 6
}

// Array.from()

const arry = Array.from("balesh varshney")
console.log(arry)

// Array keys()

const nam = ["balesh" , "gyanesh" , "aditya"]
let k = nam.keys()

let text = "";
for(let x  of k){
    text+=x
}

console.log(text)

// Array entries()

let e = nam.entries()
let texts = "";
for(let x  of e){
    texts+=x
}

console.log(texts)


// Array with() Method

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths)

// Array Spread (...)

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)