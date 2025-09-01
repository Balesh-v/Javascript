// ------------------------- history -------------------------


// history object is used to manage the browser history. It is used to load the previous URL or to load the next URL in the history list.

// The history object contains the URLs visited by the user (within a browser window).

console.log(window.history);

// ----------------- len ------------

console.log(window.history.length);


// ----------------- back ------------

let btn = document.getElementById('b');
let btnf = document.getElementById('f');

btn.addEventListener('click', function(){
    window.history.back();
})

btnf.addEventListener('click', function(){
    window.history.forward();
})

console.log(btnf)