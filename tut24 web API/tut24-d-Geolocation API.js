const x = document.getElementById("pera");
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showpostion)
}else{
    console.log("brower not support geolocation")
}

function showpostion(pos){
    x.innerHTML = pos.coords.latitude + "<br>" + pos.coords.longitude
} 