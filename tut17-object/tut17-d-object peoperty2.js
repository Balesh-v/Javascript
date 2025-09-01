// ------------------------ Property Management Methods -----------------------------------------

let person  = {
    firstName : "Balesh",
    lastName : "varshney",
}
console.log(person)

//----------------------- Adding or changing an object property---------------------------------

// Object.defineProperty(object, property, descriptor)

Object.defineProperty(person , "Mobile"  ,{
    value : "8980",
    writable : true ,   //change
    enumerable : true ,  // hidden
    configurable : false  //delete
})

delete person.Mobile
console.log(person)

// ----------------- Adding or changing object properties-----------------------------

// Object.defineProperties(object, descriptors)

const person1 = {}
Object.defineProperties(person1 , {
    firstName : {
        value: "balesh",
        enumerable : true
    },
    lastName : {
        value : "varshney",
        enumerable : true
    },
})
console.log(person1) 

//-------------------------------- Accessing a Property -------------------------------------

// Object.getOwnPropertyDescriptor

const x = Object.getOwnPropertyDescriptor(person , "Mobile" )
console.log(x)

// Object.getOwnPropertyDescriptors(object)

const y= Object.getOwnPropertyDescriptors(person1)
console.log(y)

// ------------------------- Returns all properties as an array --------------------------

// Object.getOwnPropertyNames(object)

const z = Object.getOwnPropertyNames(person1)
console.log(z)

//---------------------  Accessing the prototype ----------------------------

// Object.getPrototypeOf(object)

const z1 = 10;
console.log(z1)
console.log(Object.getPrototypeOf(z1))

// --------------------- object.key ------------------------------

console.log(Object.keys(person))