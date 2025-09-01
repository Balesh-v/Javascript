// ------------------------ DOM - Changing CSS ---------------------------------------

let a = document.querySelector(".heading").style.color = "red";

// --------------------- even tschange --------------------------

let b = document.getElementById("btn1");

const colorc = ()=>{
    document.body.style.backgroundColor = "Pink"
}

b.addEventListener("click" , colorc)

