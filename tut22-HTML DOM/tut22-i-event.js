let a = document.body
let b = document.querySelectorAll(".point")





function myfunction(id){
    id.innerHTML = "DOM event";
}


const myfunction1 = ()=>{
    a.style.backgroundColor = "black";
    a.style.color = "white";
    b.forEach((x)=>{
        x.classList.add("check")
    })
    
}


// Assign Events Using the HTML DOM

document.getElementById("demo1").onclick = ()=>{
    alert("hello world")
}
