const student = {
    name: "John Doe",
    age: 20,
    courses: ["Math", "Science"],
    address: {
        city: "New York",
        zip: "10001"
    },
    greet: function() {
        console.log("Hello!");
    }
}

console.log(student)
let objs = JSON.stringify(student)
console.log(objs)

const arr = ["apple" , "banana" , "mango"]
console.log(arr)
let arrs = JSON.stringify(arr)
console.log(arrs)


localStorage.setItem("student" , objs)
let studentData = localStorage.getItem("student")
let objss = JSON.parse(studentData)
console.log(objss.name)
