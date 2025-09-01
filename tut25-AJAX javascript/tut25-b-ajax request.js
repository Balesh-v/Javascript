let btn2 = document.getElementById("btn2")
btn2.addEventListener("click" , mybtn)

// function mybtn(){
//     const xhr = new XMLHttpRequest()
//     xhr.open("POST" , '	https://dummy.restapiexample.com/api/v1/create' , true)
//     xhr.getResponseHeader('Content-type' , 'application/x-www-form-urlencoded')
    
//     xhr.onload = function (){
//         console.log(this.responseText)
//     }

//     para = 	{"name":"test","salary":"123","age":"23"}
    
//     xhr.send(para)
//     console.log("we are done")
// }

function mybtn(){
    const xhr = new XMLHttpRequest()
    xhr.open('GET' , 'https://dummy.restapiexample.com/api/v1/employees' , true)
    xhr.onload = function (){
        let obj = JSON.parse(this.responseText)
        console.log(obj.data[0])

    }
    xhr.send()
    console.log("we done")
}