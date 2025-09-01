let a = window.location;
console.log(a)


// ---------------------- host name -----------------

console.log(location.host)

// ------------------------ url ---

console.log(location.href)

// ------------------------ protocol ---

console.log(location.protocol)

// ------------------------ port ---


console.log(location.port)

// ------------------------ hostname ---

console.log(location.hostname)

// ------------------------ search ---

console.log(location.search)

// ------------------------ hash ---

console.log(location.hash)

// ------------------------ pathname ---

console.log(location.pathname)

// ------------------------ assign ---


// ------------------------ reload ---

document.getElementById("re").addEventListener('click',()=>{
    location.reload()
    location.assign('https://www.google.com')
})