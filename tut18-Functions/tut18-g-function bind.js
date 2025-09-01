// --------------------------------- bind method ----------------------

const person = {
    firstName : "Balesh",
    lastName : "varshney",
    fullName : function (rating) {
        return this.firstName + " " + this.lastName + " " + rating;
    }
}
console.log(person.fullName(6))


const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}


let per = person.fullName.bind(member)
console.log(per(7))