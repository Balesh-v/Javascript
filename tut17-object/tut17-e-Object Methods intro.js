// ----------------------------------- object method intro -----------------------------

// this method -

const person = {
    firstName : "Balesh",
    lastName : "Varshney",
    class : "M.Sc.",
    rating : "pass",
    fullName : function () {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
} 

// Accessing Object Methods

let perlist = person.fullName()
console.log(perlist)

// Adding a Method to an Object

person.char = function () {
    return this.class + " " + this.rating;
}

console.log(person.char())


