// -------------------------- Object Protection ---------------------------------

// Object.preventExtensions()  //use method array

const person = {firstName:"John", lastName:"Doe"};
console.log(person)
Object.preventExtensions(person)
console.log(person)
person.class = "B.Sc";


// Object.isExtensible()

let answer = Object.isExtensible(person);
console.log(answer)

// Object.seal()

Object.seal(person)
// delete person.firstName
// person.class = "B.sc"
console.log(person)

// Object.isSealed()

console.log(Object.isSealed(person))

// Object.freeze()

Object.freeze(person)
// delete person.firstName
// person.firstName = "Balesh";
// person.class = "B.sc";

console.log(person)

// Object.isFrozen()

let answer2 = Object.isFrozen(person);
console.log(answer2)
