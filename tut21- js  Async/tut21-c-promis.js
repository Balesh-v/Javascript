// ---------------------------------- javascript promis -------------------

// let firstpromis  = new Promise((resolve , resect) => {
//     console.log("baleshvarshney");
//     resect(new Error("networkerr"))
// })

// console.log(firstpromis)


// 
//  let secopromis = new Promise((resolve , resect ) =>{
//     setTimeout(()=>{
//         console.log("balesh")
//     } , 5000)
//     resolve("succes")
//  })

//  console.log(secopromis)


// -------------------------- then() and cac

function asyfunction1 () {
    return new Promise((resolve , reject )=> {
        setTimeout(()=>{
            console.log("data1 ")
            resolve("succes")
        },  4000)
    })
}


function asyfunction2 () {
    return new Promise((resolve , reject )=> {
        setTimeout(()=>{
            console.log("data2")
            resolve("succes")
        },  4000)
    })
}



console.log("fatching data1.....")
let p1 = asyfunction1()
p1.then((res)=>{
    // console.log(res)
    console.log("fatching data1.....")
    let p2 = asyfunction2()
    p2.then((res)=>{
        // console.log(res)
    })
})
