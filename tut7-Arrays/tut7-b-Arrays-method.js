// ------------------------------- Array Methods ----------------------------
// Array length

const cars = ["Audi" , "Rolls Royal" , "BMW"]
let car_len = cars.length
console.log(car_len)

// Array toString()

let str = cars.toString()
console.log(str)

// Array at()

let ats = cars.at(1)
console.log(ats) 

// Array join()

let arr = cars.join("*")
console.log(arr)
console.log (typeof arr)

// ----------------------- Popping and Pushing --------------------------

// Array pop()

const fruits = ["Banana", "Orange", "Apple", "Mango"]
let pops = fruits.pop()
console.log(pops)
console.log(fruits)

// Array push()

let pushs = fruits.push("KIWI")
console.log(pushs)
console.log(fruits)

// --------------------------- Shifting Elements -------------------------------
// Array shift()

const friName = ["balesh" , "gyanesh "]
let re = friName.shift()
console.log(re)
console.log(friName)

// Array unshift()

let ad = friName.unshift("brother")
console.log(ad)
console.log(friName)

// Array delete()

const goodsN = ["PACK" , "keyboard" , "photos"]
let del = delete goodsN[0]
console.log(goodsN)
console.log(del)

// ----------------------------- Merging Arrays (Concatenating) --------------------------
// Array concat()

const num = [1 , 2 , 4 , 5]
const num1 = [ 6 , 7 , 8 , 9 , 10]
let jo = num.concat(num1)
console.log(jo)

//  Array copyWithin()

const copy = [1 , 2 , 4 , 5 , 8  ]
let copy1 = copy.copyWithin(2 , 0)
console.log(copy1)

// ----------------------------- Flattening an Array ----------------------------------

// Array flat()

const myArr = [[1,2],[3,4],[5,6 ,[7 ,7]]];
console.log(myArr.flat(Infinity))


// Array flatMap()

const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr = myArr1.flatMap(x => [x, x * 10]);
console.log(newArr)

// -------------------------- Splicing and Slicing Arrays -----------------------------

// Array splice()

const langs = ["python" , "c++" , "java" ,"html"]

let gut = langs.splice(2 ,1 , "c#")
console.log(langs)
console.log(gut)

// Array toSpliced()

const langss = ["python" , "c++" , "java" ,"html"]
let guts = langss.toSpliced(2 ,1 , "c#")
console.log(guts)
console.log(langss)

// Array slice()

const fruitse = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruitse.slice(1);
console.log(citrus)

const fru = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citr = fru.slice(3);
console.log(citr)

const f = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const c = f.slice(1, 3);
console.log(c)



