// ------------------------- display object ----------------------------

// How to Display JavaScript Objects?

const pe = {
    name: "John",
    age: 30,
    city: "New York"
};
document.getElementById("demo").innerHTML = pe

// Displaying Object Properties

document.getElementById("demo1").innerHTML = pe.name

// Displaying Properties in a Loop

let text = " ";
for(let x in pe){
    text+=pe[x]
}
document.getElementById("demo2").innerHTML = text


// Using Object.values()

const arr = Object.values(pe)
document.getElementById("demo3").innerHTML = arr

// Using Object.entries()

const fruits = {Bananas:300, Oranges:200, Apples:500};

let text1 = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text1 += fruit + ": " + value + "<br>";
}
document.getElementById("demo4").innerHTML = text1;


// Using JSON.stringify()

const str = JSON.stringify(fruits)
document.getElementById("demo5").innerHTML = str + typeof str;

