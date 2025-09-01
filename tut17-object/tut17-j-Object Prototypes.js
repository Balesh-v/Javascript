// -------------------------- Object Prototypes -----------------------


function Student (first  , last , age , cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
    // this.nationality = "English";
}
const student1 = new Student ("Balesh" , " varshney" , 19 , "M.Sc")
const student2 = new Student ("Gyanesh" , " varshney" , 19 , "M.Sc")
const student3 = new Student ("pranjal" , " varshney" , 19 , "M.Sc")
const student4 = new Student ("Baleshd" , " varshney" , 19 , "M.Sc")
console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)


// Adding Properties and Methods to Objects

Student.prototype.nationality = "English";


Student.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};


console.log(student1)
console.log(student2)
console.log(student3.name())
console.log(student4.name())


