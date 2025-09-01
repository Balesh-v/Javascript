
let inner = window.innerHeight;

let outer = window.innerHeight;

let innerw = window.innerWidth;

let outerw = window.outerWidth;
 
let my;

let btn1 =document.querySelectorAll("button")[0];
let btn2 =document.querySelectorAll("button")[2];
console.log(btn2) 

const newopen = () =>{ 
    window.open("hello balesh", "_blank", "width=100, height=100");
}

const newmoeve = () =>{
    window.moveTo(100, 100);
}



btn1.addEventListener("click" , newopen)
btn1.addEventListener("click" , newmoeve)



console.log(inner, outer); // 768 768

console.log(innerw, outerw); // 1024 1024