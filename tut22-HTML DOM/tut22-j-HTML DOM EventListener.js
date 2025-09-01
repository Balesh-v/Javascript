// ------------------------------------ HTML DOM EventListener ------------------- 

let btn = document.getElementById("demo2");
let ab = document.body;


const lightmode = ()=>{
    ab.style.backgroundColor = "white"
    ab.style.color = "black"
}

btn.addEventListener("click" , lightmode)