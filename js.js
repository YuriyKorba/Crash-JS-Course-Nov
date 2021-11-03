// add new variable
// const hp = 'Head Packer'

/*
 Такий собі
 такст
 який просто , тут залишився */

// let a = 15;
// let c = 5
// let sum = a+c;
// виведемо суму 

// console.log(sum);


// const MATH_PI = 3.14;
// const radius = 10;
// const name = "Robert";

// comparison
// console.log(MATH_PI === 3.14);

// console.log(name === "Steven");

// numbers comparison
// console.log(radius > 10);
// console.log(radius >= 10);
// console.log(radius < 100);
// console.log(radius !== 0);

// ================================================================
// Тернальний оператор  ( якщо ця умова вірна то виконуєм першу дію,
//     якщо ні - то другу )
// ================================================================


// const result = name === 'Robert'
//         ? a*c
//         : radius + radius;
// console.log(result)

// Логічні оператори && || !

const MATH_PI = 3.14;
const r = 10;
const name = "Robert";


console.log(name !== "Steven");

// usind 'and'
const res = MATH_PI === 3.14 && r >= 10
	? MATH_PI * (2 * r)
	: MATH_PI * (r * r);
      
console.log("result ", res);

// using  'not' and 'or'
const res2 = r == 0 || r > 1000
	? MATH_PI * (2 * r)
	: MATH_PI * (r * r);
      
console.log("result 2 ", res2);

//////////////

const a = 10;
const b = 100;
const c = 3;

// example with if
if (a === 10) {
   console.log("a is equal 10");
}

// example with if..else
if (b > 1) {
   console.log("b is bigger than 1");
} else {
   console.log("b is smaller than 1");
}

// example with else...if
if (c < 1) {
   console.log("c is bigger than 1");
} else if (c == 10) {
   console.log("c is equal 10");
} else {
   console.log("c is smaller than 1");
}



//////////////////////
// Eemple SWITCH ... CASE

const day = "10";

switch (day) {
  case "10": {
      console.log("It is true");
  } 
  break;
    
  case "11": {
      console.log("It is true");
  } 
  break;
    
  default: {
      console.log("It is true");
  } 
}
