// ---------------------- Get Date Methods ---------------------------------------
// getFullYear() Method

const d = new Date()
console.log(d.getFullYear())

// getMonth() Method

console.log(d.getMonth())

// ou can use an array of names to return the month as a name:

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d1 = new Date();
let month = months[d.getMonth()];

console.log(month)


// The getDate() Method

const d2 = new Date()
console.log(d2.getDate())

// The getHours() Method

console.log(d2.getHours())

// getMinutes() Method

console.log(d2.getMinutes())

// getSeconds() Method

console.log(d2.getSeconds())

// getMilliseconds() Method

console.log(d2.getMilliseconds())

// getDay() Method

console.log(d2.getDay())

// You can use an array of names, and getDay() to return weekday as a name:

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d3 = new Date();
let day = days[d3.getDay()];
console.log(day)

//  getTime() Method

const d4 = new Date()
console.log(d4.getTime())

//  Date.now();

let ms = Date.now();
console.log(ms)

// the getTimezoneOffset() Method

let diff = d.getTimezoneOffset();
console.log(diff)