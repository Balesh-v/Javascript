// --------------------------- JavaScript Scope----------------------------

// Block Scope - Variables declared inside a { } block cannot be accessed from outside the block:

{
    let x = 2;
    console.log(x)
}

//  Function Scope:


function ax(){
    let a = 10;
    console.log(a)
}
ax()


// Global Scope


let a= 10
{
    console.log(a)
}
console.log(a)
