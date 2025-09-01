// -------------------------- JavaScript Callbacks --------------------------

const calculate = ( a , b , operation) => {
  return operation( a , b);
}

function addition ( a, b ) {
  return a + b
}

const subtra = (a ,b) => a-b;

const result = calculate( 6 , 7 , subtra)
console.log(result);
