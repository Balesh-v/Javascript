// ------------------- object Definition ----------------------------------

// Object Constructor Functions

function person(first , last , age , eye){
    this.firstName = first;
    this.lastName = last;
    this.age= age;
    this.eyecolor = eye;
    // Property Default Values
    this.nationality = "English";
};
const myFather = new person("John", "Doe", 50, "blue");
const myMother = new person("Sally", "Rally", 48, "green");
const mySister = new person("Anna", "Rally", 18, "green");
const mySelf = new person("Johnny", "Rally", 22, "green");
console.log(myMother.nationality)
