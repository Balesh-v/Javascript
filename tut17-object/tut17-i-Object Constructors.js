// --------------------------------- Object Constructors ------------------------------

// Object Constructor Functions

function Student (first  , last , age , cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}
const student1 = new Student ("Balesh" , " varshney" , 19 , "M.Sc")
const student2 = new Student ("Gyanesh" , " varshney" , 19 , "M.Sc")
const student3 = new Student ("pranjal" , " varshney" , 19 , "M.Sc")
const student4 = new Student ("Baleshd" , " varshney" , 19 , "M.Sc")
console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)


// Property Default Values

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}

const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather)

// Adding a Property to an Object

myFather.phoneno = 9837304855;
console.log(myFather)

// Adding a Property to a Constructor

// To add a new property, you must add it to the constructor function prototype:


function Stu (first  , last , age , cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}

const student12 = new Stu ("Balesh" , " varshney" , 19 , "M.Sc")
console.log(student12.firstName)

Stu.prototype.nationality = "India";

console.log(student12)

const student13 = new Stu ("gyanesh" , "varshney" , 30 , "b.sc"  )
console.log(student13.nationality)


// Constructor Function Methods

function Stur (first  , last , age , cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
    this.fullname = function(){
        return this.firstName + this.lastName
    };
}
const student14 = new Stur ("gyanesh" , "varshney" , 30 , "b.sc"  )
console.log(student14.fullname())




