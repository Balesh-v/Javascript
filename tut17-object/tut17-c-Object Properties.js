// ------------------------------- Object Properties --------------------------------------------------
// Accessing JavaScript Properties

const obj = {
    firstName : "Balesh",
    lastName : "Varshney",
    age : 19,
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
};

// objectName.property

let age = obj.age;
console.log(age);

// //objectName["property"]

let firstName = obj["firstName"];
console.log(firstName)


//objectName[expression]

let x = "age"
console.log(obj[x])


// --------------- Adding New Properties -------------
obj.class  = "B.Sc";
console.log(obj)

// Deleting Properties

delete obj.age;     //and use this type  : delete person["age"];
console.log(obj)

//---------------- Nested Objects- -----------------------


const myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
}
console.log(myObj.myCars.car1)
console.log(myObj["myCars"]["car2"])
console.log(myObj.myCars["car3"])

let p1 = "myCars";
let p2 = "car2";
console.log(myObj[p1][p2])

