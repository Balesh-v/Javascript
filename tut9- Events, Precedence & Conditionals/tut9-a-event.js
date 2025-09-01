// ---------------------------- javascript event -----------------------------

//  onclick

function myfunction(){
  document.getElementById("demo").innerHTML = new Date()
}

// onchange 

function myfunction2(){
    let x = document.getElementById("myselection").value;
    document.getElementById("demo2").innerHTML = x;
}

// onmouseover

function myfunction3() {
    document.getElementById("demo3").innerHTML = "folls"
    
}

// onmouseout

function myfunction4(){
    document.getElementById("demo3").innerHTML = '';
}