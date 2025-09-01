// ------------------------- localStorage -------------------------

let a = localStorage

// setItem

localStorage.setItem('name', 'balesh')
localStorage.setItem('name1', 'balesh1')
localStorage.setItem('name2', 'balesh2')

// getItem

localStorage.getItem('name')
console.log(name)

// keys

localStorage.key(0)

// length

localStorage.length

// removeItem

localStorage.removeItem('name1')

// clear

localStorage.clear()

// --------------------------- json ---------------------------

const studentbiodata = {
    name: 'balesh',
    age: 22,
    class: 'bca', 
    course : ['c', 'c++', 'java', 'python'],
    address: {
        city: 'kasganj',
        state: 'up'
    }
}




document.getElementById("addbtn").addEventListener("click" , () =>{
    localStorage.setItem("studentbiodata" , JSON.stringify(studentbiodata))
})


document.getElementById("getbtn").addEventListener("click" , () =>{
    const show = JSON.parse(localStorage.getItem("studentbiodata"))
    console.log(show)
})

document.getElementById("removebtn").addEventListener("click" , () =>{
    localStorage.removeItem("studentbiodata")
})

// --------------------------------- session storage --------------------------------------

document.getElementById("addbtn1").addEventListener("click" , () =>{
    sessionStorage.setItem("studentbiodata" , JSON.stringify(studentbiodata))
})

document.getElementById("getbtn1").addEventListener("click" , () =>{
    const show = JSON.parse(sessionStorage.getItem("studentbiodata"))
    console.log(show)
})

document.getElementById("removebtn1").addEventListener("click" , () =>{
    sessionStorage.removeItem("studentbiodata")
})