// ------------------------------------------ module ---------------------------------------

// In-line individually:

export let name = "Balesh Varshney"
export let age = 40;

// All at once at the bottom:

let a  = 7;
let b = 8

export {a , b}

// Default Exports

const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
};
export default message;