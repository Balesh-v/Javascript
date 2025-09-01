// ---------------------------------- Finding HTML Element by Id ----------------------------

let a = document.getElementById("demo");
console.log(a)

// ---------------------------------- Finding HTML Element by class ----------------------------

let b = document.getElementsByClassName("heading")
console.log(b)

for(let x of b){
    console.log(x)
}

// ---------------------------------- Finding HTML Element by tagName ----------------------------

let c = document.getElementsByTagName("a")
console.log(c)

for(let x1 of c){
    console.log(x1)
}

// ---------------------------------- Finding HTML Element by quriselecter ----------------------------


let d = document.querySelector('li')
console.log(d)

// --------------------------------  Finding HTML Element by quriselecter ---------------------------


let e = document.querySelectorAll("li")
console.log(e)

// e.forEach((x)=>{
//     console.log(x)
// })


for(let x1 of e){
    console.log(x1)
}
