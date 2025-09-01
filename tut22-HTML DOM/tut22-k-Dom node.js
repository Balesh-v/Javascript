// ---------------------------------------  cl=reate element --------

let a = document.createElement("button")

a.innerText = "click me"
console.log(a)

let id = document.getElementById("demo");

let hed = document.querySelector("h1")
id.after(a)

const btn = ()=>{
    hed.remove()
}

a.addEventListener("click" , btn)