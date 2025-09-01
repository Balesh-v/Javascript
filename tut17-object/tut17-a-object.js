// -------------------------- object------------------------------------

// JavaScript Objects

const car = {
    name : "BMW",
    Color : "Black",
}
console.log(car)

// JavaScript Object Definition

// 1. JavaScript Object Literal

const car2 = {
    name : "Rolls Royal",
    Color : "Black"
};
console.log(car2)

// 

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person)
 

// This example creates an empty JavaScript object, and then adds 4 properties:

const person1 = {}
person1.firstName= "Balesh",
person1.lastName = "varshney";
console.log(person1)

// 2. Using the new Keyword

const person2 = new Object()
person2.firstName= "Balesh",
person2.lastName = "varshney";
console.log(person2)
console.log(person2)

// Accessing Object Properties

console.log(person1.firstName);
console.log(person2["lastName"])

// JavaScript Object Methods

const Student = {
   name : "Gyanesh",
   Class  : "B.Sc 5sem",
   Grade : "O+",
   Fulldetail : function(){
    return `Name = ${this.name} ,  class = ${this.Class} , Grade = ${this.Grade} `
   }
}
console.log(Student.Fulldetail())

// JavaScript Objects are Mutable

Student.Grade = "A+"
console.log(Student)