//function declaration

function sum (a, b ) {
    return a + b 
};

console.log(sum(15,20));

// function expression 
const mlg = function (type, item) {
    let x = type + item ;
    x += '-just an exemple';
    return x;
};

console.log(mlg(5,5));

// arrow function

const global = (a, b) => a * b;

console.log (global(7, 7))

// or another way

const logic = (a, b, c) => {
    return c *= (a + b);
};

console.log(logic(1, 10, 5))


