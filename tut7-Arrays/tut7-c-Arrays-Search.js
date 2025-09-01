// --------------------------- JavaScript Array Search ----------------------------------

// Array indexOf()

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");
console.log(position)

// Array lastIndexOf()

let position2 = fruits.lastIndexOf("Apple")
console.log(position2)

// Array includes()

let en = fruits.includes("Apple")
console.log(en)

// Array find()

const num =[1 ,4 , 8, 14 ,35 ,56]
let lar = num.find(myfynction)

function myfynction(value, index , Array){
    return value > 14
}

console.log(lar)

// Array findIndex()

let ind = num.findIndex(x=> x>14)
console.log(ind)

// Array findLast() Method

const nmb = [68 , 34 ,70 ,80 , 58 ,20 ]
let lar1 = nmb.findLast(x=> x > 68)
console.log(lar1)

// findLastIndex() 

const nmb1 = [68 , 34 ,70 ,80 , 58 ,20 ]
let lar2 = nmb1.findLastIndex(x=> x > 68)
console.log(lar2)

