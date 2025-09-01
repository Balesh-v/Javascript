// ---------------------- JavaScript Set Date Methods -------------------------------
// The setFullYear() Method

const de = new Date()
de.setFullYear(2020)
document.getElementById("gt1").innerHTML = de;

const de1 = new Date();
de1.setFullYear(2020, 11, 3);
document.getElementById("gt2").innerHTML = de1;

// setMonth() Method

const de2 = new Date();
de2.setMonth(1);
document.getElementById("gt3").innerHTML = de2;

// setDate() Method

const de3 = new Date();
de3.setDate(19);
document.getElementById("gt4").innerHTML = de3;

// setHours() Method

const de4 = new Date();
de4.setHours(22);
document.getElementById("gt5").innerHTML = de4;

// setMinutes() Method

const de5 = new Date();
de5.setMinutes(22);
document.getElementById("gt6").innerHTML = de5;

// setSeconds() Method

const de6 = new Date();
de6.setSeconds(22);
document.getElementById("gt7").innerHTML = de6;