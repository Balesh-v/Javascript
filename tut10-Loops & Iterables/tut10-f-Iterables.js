// ------------------------------- Iterables -----------------------------------

// Iterating Over a String

let str = "BALESH"

for( let ttrs of str){
    console.log(ttrs)
}

// Iterating Over an Array

const arr = ['a' , 'b' ,'c']

for(const srr of arr){
    console.log(srr)
}

// ---------------------------- JavaScript Iterators -------------------------------

// Home Made Iterable

function myNumbers() {
    let n = 5;
    return {
      next: function() {
        n *= 10;
        return {value:n, done:false};
      }
    };
}

// Create Iterable
const n = myNumbers();
n.next(); // 10
n.next(); // 20
n.next(); // 30
console.log(n.next().value)



// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

let text = ""
for (const num of myNumbers) {
  text += num +" "
}

console.log(text)