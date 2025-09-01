let url = "tut26-a-json syntax.json";

const getdata = async () => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}
getdata()

let student = `{
    "name" : "Balesh",
    "age" : 21,
    "city" : "Delhi",
    "hobbies" : ["coding", "reading", "gaming"],
    "isStudent" : true,
    "marks" : {
        "maths" : 90,
        "science" : 80
    }
}`

console.log(student)
let obj = JSON.parse(student)
console.log(obj["hobbies"][0])