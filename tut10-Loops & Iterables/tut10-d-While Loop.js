// ---------------------- While Loop ------------------------

// The While Loop

let i =0 ;
while(i<=10){
    console.log(i)
    i++
}

// Do While Loop

let j = 1;
do{
    console.log(j*2)
    j++
}while(j<=10)


// ------------------------------------------------------------

let num = 25;
let user = prompt("eneter yo number")

while(user!=num){
    let user = prompt("try again")
}
console.log(user)