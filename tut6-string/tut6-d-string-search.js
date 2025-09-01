// --------------------------- JavaScript String Search --------------------
// String indexOf()

let text = "my name is balesh varshney baleh"
let text1 = text.indexOf("balesh")
console.log(text1)

// String lastIndexOf()

let text2 = "my name is balesh varshney balesh"
let text3 = text2.lastIndexOf("balesh")
console.log(text3)

// Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// JavaScript String search()

let text4 = "Please locate where 'locate' occurs!";
let text5 =text4.search("locate");
console.log(text5)

let text6 = "Please locate where 'locate' occurs! rat rat";
let text7 = text6.search(/locate/);
console.log(text7)


// String match()

let text8 = text6.match("ase")
console.log(text8.length)

// String matchAll()

let txt = text6.matchAll("rat")
console.log(Array.from(txt))

// String includes()

let cot = "my name is karan";
let sot = cot.includes("name")
console.log(sot)

// string startsWith()

let sott = cot.startsWith("my")
console.log(sott)

//  String endsWith()

let pot = cot.endsWith("karan")
console.log(pot)