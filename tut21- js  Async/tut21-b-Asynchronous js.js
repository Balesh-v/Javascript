//  Asynchronous JavaScript

const calculate = ( a , b , operation) => {
    return operation( a , b);
  }
  
  function addition ( a, b ) {
    return a + b
  }
  
  const subtra = (a ,b) => a-b;
  
  const result = calculate( 6 , 7 , subtra)
  console.log(result);

  
//    Waiting for a Timeout


console.log("hello ")

let a = setTimeout(function () {
    console.log("balesh")
}, 1000)

clearTimeout(a)

console.log("bye")

//  Waiting for Intervals:

// setInterval(myfunction , 7000)

// function myfunction () {
//     let d = new Date()
//     console.log(d.getHours() + " " + d.getMinutes() + " " +d.getSeconds())
// }