// For  - для масивів
// For ... In - для об"єктів

//let sum = 0;

// in the loop we will find a sum of nums from 0 to 10
// for (let i = 0; i <= 10; i++) { // 0+1=1+2=3+3=6+4=10+5=15
//   sum = sum + i;
// }

// console.log('sum of nums from 0 to 10 is ', sum);


let counter = 10;
for (let i = 0; i < counter; i++) {
console.log( 'Current iteration: ', i );
};

let nums = [1,2,3,4,5];
let s = 0;

for(i = 0; i <= nums.length; i++) {
    console.log('exemple of cycle for '+ i),
    s = s +i;
};

console.log(s);

// let words = ['John','Wick','is','comming','for','you'];
// let string = '';

// for ( i = 0; i < words.length; i++) {
//     string += words[i] + ' ';
// };

// console.log(string);

const words = ['you', 'with', 'be', 'Force', 'the', 'May'];
let sentence = '';

// in the loop we will find a sum of nums array items
for (let i = words.length - 1; i >= 0; i--) { // i=6-1 (виходить останнє) , потім рякщо і більше або дорівнює нулю , проходи дальше , і потім віднімаєм.
  sentence += words[i] + ' ';
}

console.log(sentence);

//=======================================
// for ..... in            Об"єкти
//=======================================

//           expemple 1
// const capitalsOfCountries = {
//     Ukraine: 'Kyiv',
//     Poland : 'Warsawa',
//     Germany : 'Berlin',
// };

// let x = '';

// for (let key in capitalsOfCountries) {
//     x += key + ', ';
// }
// console.log (x)

//           expemple 2

const capitalsOfCountries = {
    Ukraine: 'Kyiv',
    Poland : 'Warsawa',
    Germany : 'Berlin',
};

let x = '';

for (let key in capitalsOfCountries) { // Замість key любе слово , бо і так перебирає по КЛЮЧАХ.
    console.log('Countries : ' + key)
    x += capitalsOfCountries[key] + ', ';
}
console.log (x);

const obj = {
    one: "1",
    two: "2",
    three: "3",
  };
  let str = "";
  const result = [];
  
  // in the loop we will find a sum of nums array items
  for (let key in obj) {
    str += obj[key] + "; ";
    result.push(obj[key]); //  result.push(Number(obj[key])) - якщо число  вертається рядком то переробляємо в число. Nember.
  }
  
  const result2 = Object.values(obj);
  
  console.log({ result, result2, str });

  let n = 0;
  let sum = 0;
  
  while (n <= 3) {   // 0+0=0+1=1+2=3+1=4  ----- збільшували на 1;
     console.log(n); 
  
    sum += n;       // 0+0=0+1=1+2=3+3 =6   ------ sum додавали n;
    n++;
  }
  
  console.log({n, sum}); // { n: 4, sum: 6 }


//   Цикл while для роботи з масивами
  const nms = [1, 2, 3, 4, 5, 6];
let t = 0;
let sqm = 0;

// with the loop we will find a sum of numbers in the array
while (t < nms.length) {
  sqm = sum + nms[t];
  t++;
}

console.log('sum of nums items is ', sqm);


let counter1 = 5;
let factorial = 1;

// with the loop we will find n!
do {
  factorial *= counter1;
  counter1--;
} while (counter1 >= 1);

console.log('n! ', factorial);


	
// const data = [
//     { user: 'John' },
//     { user: 'Tom' },
//     { user: 'Petr' },
//    ];
    
//    // use data
//    function greeting(userName) {
//      return "Hello, " + userName + "!";
//    }
    
//    greeting(data[0].user);
//    greeting(data[1].user);
//    greeting(data[2].user);

// Отримання даних і їх використання

const data = [
 { user: 'John' },
 { user: 'Tom' },
 { user: 'Petr' },
];
 
// use data
function greeting(userName) {
  return "Hello, " + userName + "!";
}
 
for (let i = 0; i < data.length; i++) {
  console.log(greeting(data[i].user));
}