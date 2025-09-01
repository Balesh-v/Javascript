// --------------------------------  HTML DOM Animation ------------------------------

function myfuction (){
    let Id = null
    let elem = document.getElementById("mydiv");
    let pos = 0;
    clearInterval(Id)
    Id = setInterval(fram , 5)
    function fram (){
        if(pos == 150){
            clearInterval(Id);
        }else{
            pos++
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}