let collection = document.getElementsByTagName("h1")
console.log(collection)

let btn34 = document.getElementById("demo3");
console.log(btn34)


// HTML HTMLCollection Length

let len = collection.length
console.log(len)

const decr = ()=>{
    for(let i =0; i<len; i++){
        collection[i].style.color = "green"
        collection[0].style.backgroundColor = "red"
        collection[1].style.backgroundColor = "pink"
    }
}

btn34.addEventListener("click" , decr)
