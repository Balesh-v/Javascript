// --------------------------- popup alert ---------------------------

let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn.addEventListener('click', function() {  // click event
    alert('Hello World');
});

btn1.addEventListener('click', function() {  // click event
    confirm("yes")
});


btn2.addEventListener('click', function() {  // click event
     prompt("enter your age")
});




