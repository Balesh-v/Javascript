// --------------------------- apply method ------------------------------
const person = {
    firstName : "Balesh",
    lastName : "varshney",
    fullName : function (rating) {
        return this.firstName + " " + this.lastName + " " + rating;
    }
}
console.log(person.fullName(6))

const person2 = {
    firstName : "Gyanesh",
    lastName : "varshney",
}
console.log(person.fullName.apply(person2 , [9]))

// Simulate a Max Method on Arrays

let max = Math.max(6 ,8 ,9)
console.log(max)

let maxarry = Math.max.apply(null , [ 3, 6 ,9])
console.log(maxarry)