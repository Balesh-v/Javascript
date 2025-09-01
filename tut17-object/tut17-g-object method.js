// -------------------- object method -------------------------------------
// ---------------Object.assign() --------------------

const person = {
    firstName : "Balesh",
    lastName : "Varshney"
}

const person2 = {
    firstName : "Gyanesh",
    lastName : "Varshney",
    age: 19,
    class : "B.SC",
} 
console.log(person)
Object.assign(person, person2)
console.log(person)
console.log(person2)

// -------------------------- object.create -------------------------

const myneobj = Object.create(person)
console.log(myneobj)

// ------------------------ object.key()----------------------------

const person3 = {
    firstName : "Balesh",
    lastName : "Varshney",
    age : 19 ,
    class : "B.Sc",
    myFatherName : "Mr Deepak kumer"
}
console.log(person3)

const mykey = Object.keys(person3)
console.log(mykey)


// ------------------ object.values() -----------------------

const myval = Object.values(person3)
console.log(myval)

// ------------------- Object.entries()--------------

const keyval = Object.entries(person3)
console.log(keyval)

for(const [x , y] of keyval){
    console.log(x,":",y)
}

//--------------- Object.fromEntries() -------------------

const myarr = [["firstName" , "Balesh"] , ["lastNmae" , "Vrahsney"]];
console.log(myarr);

const arrobj = Object.fromEntries(myarr)
console.log(arrobj)

// ------------------- Object.groupBy()-------------------

// this method used index1.html file