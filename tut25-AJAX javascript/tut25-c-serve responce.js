let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
console.log(btn3)


const mybtn1 =()=>{
  const  xhr = new XMLHttpRequest()
    xhr.open('GET' , 'ajx.txt' , true)
    xhr.onload = function (){
        console.log(this.responseText)

    }
    xhr.send()
}

const mybtn2 = ()=>{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET' , 'data.xml' , true)
    xhttp.onload = function(){
        const xmlDoc = this.responseXML;
        const x = xmlDoc.getElementsByTagName("ARTIST");
        let txt = "";
        for (let i = 0; i < x.length; i++) {
            txt = txt + x[i].childNodes[0].nodeValue + "<br>";
        }
        document.getElementById("demo").innerHTML = txt;
    }
    xhttp.send()
}

btn3.addEventListener("click" , mybtn1)
btn4.addEventListener("click" , mybtn2)


// --------------------------- Server Response Methods --------------------------------

const xht = new XMLHttpRequest()
xht.open('GET' , "ajx.txt")
xht.onload = function(){
    document.getElementById("demo1").innerHTML = this.getAllResponseHeaders()
}
xht.send()


const xht1 = new XMLHttpRequest()
xht1.open('GET' , "ajx.txt")
xht1.onload = function(){
    document.getElementById("demo2").innerHTML = this.getResponseHeader("Last-Modified")
}
xht1.send()