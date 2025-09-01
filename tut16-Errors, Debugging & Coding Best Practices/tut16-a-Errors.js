// -------------------------------- error ---------------------------------------


// JavaScript try and catch

let a = 10
a+=30
console.log(a)

// -------- try -----------

try{

    //  Reference Error
    console.log(x)
}

// --------- catch --------

catch(error){
    console.log(error)
    
    // -----------throw ----------

    // throw 500
}

// ---------- finally -------------

finally{
    console.log("you are the best coder")
}

let b = "balesh varshney"
console.log(b)


// ---------------------------------------- Input Validation Example --------------------------------


a1 = "11.5";

try{
    if(a1.trim()=="") throw "khali";
    if(isNaN(a1)) throw "a1 not a number"

    a1 = Number(a1)

    if(a1 < 1) throw "too low"
    if(a1>1)throw "too high"
  
}
catch(error){
    console.log(error)

}
finally{
    console.log("h")
}


// ----------------------- The Error Object ---------------------
// Error Object Properties

try{
    console.log(v)
}
catch(error){
    console.log(error.name)
    console.log(error.message)
}


// -------------------- Error Name Values -----------------------

// Eval Error

// Range Error

let num = 1;
try {
  num.toPrecision(500);
}
catch(error) {
  console.log(error.name)
}

// Syntax Error

try {
    eval("alert('Hello)");   // Missing ' will produce an error
  }
  catch(err) {
    console.log(err.name)
  }

// Type Error

let num1 = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  console.log(err.name);
}

// URI (Uniform Resource Identifier) Error

try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
    console.log(err.name)
}