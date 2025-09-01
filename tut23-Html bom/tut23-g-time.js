
function myfunction() {
    alert("Hello World")
}


let a = setInterval(mytimer , 1000)

function mytimer() {
    let d = new Date()
    let time = d.toLocaleTimeString()
    document.getElementById("demo").innerHTML = time
 
}



