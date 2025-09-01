console.log("hello balesh varshney")

let btn = document.getElementById('btn')
console.log(btn)

btn.addEventListener("click" , btns)

function btns (){

 // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest()
 // Open the XMLHttpRequest object
    xhr.open('GET' , "https://jsonplaceholder.typicode.com/todos/1" , true)

 // xhr method
 xhr.onreadystatechange = function(){
    console.log("ready state" , xhr.readyState)
 }
 // Define a callback function
    xhr.onload = function (){
        console.log(this.responseText)
    }
  // Send a request
  xhr.send()

}