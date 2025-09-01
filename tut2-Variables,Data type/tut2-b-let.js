//  ---------------------------------- let ------------------------

let a = 10;
let b = 10;
const c = a + b;
console.log(c)

// --------------------------- block scope --------------------------

let d = 10;
{
    let d = 20;
    console.log(d)
}
console.log(d)
