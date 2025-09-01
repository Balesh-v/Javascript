const url = 'https://meowfacts.herokuapp.com/';


// Fetch API

const getdata = async ()=>{
    let response = await fetch(url);
    let data1 = await response.json()
    console.log(response)
    console.log(data1.data[0]);
    let creelem = document.createElement('p');
    creelem.innerHTML = data1.data[0];
    document.body.append(creelem);
}
getdata();