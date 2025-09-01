// ----------------------------------------- Random ----------------------------
// Math.random()

let x = Math.random()
console.log(x)

// JavaScript Random Integers

let y = Math.random()*101
let z = Math.floor(y)
console.log(z )

// A Proper Random Function


function ran(min ,max){
    return Math.floor(Math.random() * (max -  min + 1)) + min
}

let  a = ran(1 , 100)
console.log(a)


