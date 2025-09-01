// ------------------------------ function closure ------------------------------

// Global Variables

function myfunction(){
    let a = 4;
    return a * a
}
let  c = myfunction()
console.log(c)

// But a function can also access variables defined outside the function, like this:

let b = 4
function myfunction1(){
    return b * b
}
let d = myfunction1()
console.log(d)

// 

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
