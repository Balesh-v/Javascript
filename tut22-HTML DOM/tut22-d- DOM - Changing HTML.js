// -------------------------------------   DOM - Changing HTML ------------------------------------------

let elem = document.querySelector(".heading").innerHTML =   "hello"

// ------------------------------------ Changing the Value of an Attribute ------------------------------

document.getElementById("img1").src = "https://www.w3schools.com/js/landscape.jpg";

// ------------------------------------- Dynamic HTML content -------------------------------

let btn = document.getElementById("btn");

const dateas = ()=>{
    document.getElementById("demo1").innerHTML = "date " + Date();
}

btn.addEventListener("click" , dateas)
