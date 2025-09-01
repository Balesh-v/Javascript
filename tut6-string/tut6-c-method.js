let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let len = text.length
console.log(len)


let name = "Balesh Varshney";
let char = name.charAt(name.length -1);
let charCode = name.charCodeAt(1);
let a = name.at(-1)
let ind = name[0]
console.log(char);
console.log(charCode);
console.log(a);
console.log(ind)


let sr = "hell0"
let st = "world"
let ne = sr.concat(" ", st)
console.log(ne)


let phal = "apple , banana , mango";
let alo = phal.slice(8 , 14)
console.log(alo)

let bada  = "hello world145 \uD800";
let bad = bada.toUpperCase().toLowerCase();
let well = bada.isWellFormed()
console.log(bad)
console.log(well)


let tr = "     hello world";
console.log(tr.trim()); // Removes whitespace from both ends


let num =  "4"
let p = num.padStart(6, '0'); // Pads the string with '0' to a length of 6
console.log(p);

let q = num.padEnd(6, '0'); // Pads the string with '0' to a length of 6
console.log(q);


let hel = "hello world";
let rep = hel.repeat(3); 
let rep2 = hel.replace("world" , "  Balesh"); // Repeats the string 0 times, resulting in an empty string
console.log(rep);
console.log(rep2);


let text1 = "hello cat world  cat is aa cat" ;
let text2 = text1.replaceAll("cat", "dog"); // Replaces all occurrences of "cat" with "dog"
console.log(text2);


let sp = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
let arr = sp.split(","); // Splits the string into an array using ',' as the
console.log(arr);


// ------------------------- string search -------------------------

// String indexOf()
let text3 = "my name is balesh varshney balesh";
let index = text3.indexOf("balesh");
let index1 = text3.lastIndexOf("balesh");
console.log(index); // Returns the index of the first occurrence of "balesh"
console.log(index1); // Returns the index of the last occurrence of "balesh"


// index search
let text4 = "Please locate where 'locate' occurs!";
let searchIndex = text4.search("locate");
console.log(searchIndex); // Returns the index of the first occurrence of "locate"


// indext match

let text5 = "Please locate where 'locate' occurs! rat rat";
let matchIndex = text5.matchAll("locate");
console.log(Array.from(matchIndex)); // Returns the length of the match for "ase"


// include

let text6 = "my name is karan";
let includesCheck = text6.includes("name");
console.log(includesCheck); // Checks if "name" is included in the string