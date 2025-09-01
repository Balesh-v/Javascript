let para = document.querySelectorAll("p");
let btnx = document.getElementById("demo4");
let lenx  = para.length
console.log(para)
console.log(btnx)
console.log(lenx)

const loopxs = ()=>{
    
    for(let x of para){
        x.style.visibility = " visible"
    }

    for(let i =0; i<lenx ; i++){
        para[i].style.color = "black"
    }

}

btnx.addEventListener("click" , loopxs)