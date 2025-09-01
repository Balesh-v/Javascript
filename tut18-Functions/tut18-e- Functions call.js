// ---------------------------- call method -------------------------------

const person = {
    firstName : " gyanesh",
    lastName : "varshney",
    fullName : function (country) {
        return this.firstName + " " + this.lastName + country;
    }

}
console.log(person.fullName(" sahawar"))

const person2 = {
    firstName : "balesh" ,
    lastName : "varshney"
};


//  ------------------ use call  ----

console.log(person.fullName.call(person2 ,  " kasganj"))

