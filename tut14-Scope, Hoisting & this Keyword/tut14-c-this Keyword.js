// -----------------------------------  this Keyword ---------------------------------------
const person = {
    name: "balesh",
    class: "B.sc",
    fullname: function(){
        // this in a Method
        return this.name + this.class
    }
}
console.log(person.fullname())

// --------------------- this Alone -------------------

let x = this
console.log(x)

//  In strict mode, when used alone, this also refers to the global object:

"use strict"
let y = this
console.log(y)

// this in a Function (Default)

console.log(myfunction())

function myfunction(){
    return this
}

// this in a Function (Strict)

"use strict"
console.log(myfunction1())

function myfunction1(){
    return this
}


//  Object Method Binding

const person1 = {
    name: "balesh",
    class: "B.sc",
    fullname: function(){
        // this in a Method
        return this
    }
}
console.log(person1.fullname())




