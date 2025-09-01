// ---------------------------- Break and Continue --------------------------------
// Break 

for(let i = 1 ; i<=10 ; i++){
    if(i==5){
        break;
    }
    console.log(i)
}

// Continue

for(let i = 1 ; i<=10 ; i++){
    if(i==5){
        continue;
    }
    console.log(i)
}

// JavaScript Labels

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = " ";
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
console.log(text)