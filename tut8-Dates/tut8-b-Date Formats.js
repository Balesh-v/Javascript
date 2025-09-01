// ---------------------  Date Formats -------------------------------------
//------------------------------- Date Input ------------------------------

//  ISO Dates

const dd = new Date("2015-03-25");
document.getElementById("dd").innerHTML = dd;

// ISO Dates (Year and Month)

const dd1 = new Date("2015-03");
document.getElementById("dd1").innerHTML = dd1;

// ISO Dates (Only Year)

const dd2 = new Date("2015");
document.getElementById("dd2").innerHTML = dd2;

// ISO Dates (Date-Time)

const dd3 = new Date("2015-03-25T12:00:00Z");
document.getElementById("dd3").innerHTML = dd3;

// ----------------------------- JavaScript Short Dates. ----------------------------------

const dd4 = new Date("11/8/2024")
document.getElementById("dd4").innerHTML = dd4


// ---------------------------- JavaScript Long Dates. ------------------------------------

const dd5 = new Date("Nov 8 2024")
document.getElementById("dd5").innerHTML = dd5

// -------------------------- Date Input - Parsing Dates ------------------------------

let dd6 = Date.parse(dd5)
document.getElementById("dd5").innerHTML = dd6