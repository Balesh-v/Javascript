function myfun() {
    let x = document.forms["myform"]["fname"].value
    let y =  document.forms["myform"]["Lname"].value
    if(x == ""){
        alert("fill the box")
        return false;
    }else if(y == ""){
        alert("fill lname")
    }
}


function myfun2(){
    let i = document.getElementById("demo2").value
    if(isNaN(i) || i < 1 || i > 10){
        alert("input is not valid")
        return false

    } else{
        alert("input valid")
    }
}