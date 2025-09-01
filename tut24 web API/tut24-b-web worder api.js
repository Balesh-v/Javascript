let btn = document.getElementById('demo2');

btn.addEventListener('click', () => {
    const workerobj = new Worker("worker.js");
    workerobj.postMessage("start worker");
    workerobj.onmessage = function(e){
        document.querySelector(".demo").innerHTML = e.data;
    }
})

let btn1 = document.getElementById("demo3")

btn1.addEventListener('click' , () => {
    document.querySelector(".demo1").innerHTML = "Hello World";
})