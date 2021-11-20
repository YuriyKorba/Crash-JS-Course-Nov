// const arNum = [1, 2, 3, 4, 5, 6];
// const arNum2 = [15, 6, 3, 20, 11];
// function mergeArraysWithoutDuplicates(array1, array2) {
//     let mergeArr = {};
//     let len = Math.max( array1.lenght , array2.lenght);
//     for (let i = 0; i<len; i++) {
//    if ( array1[i] && !mergeArr.array1[i]) {
//         mergeArr.array1[i] = array1[i]
//    };
//    if ( array2[i] && !mergeArr.array2[i]) {
//     mergeArr.array2[i] = array2[i]
//     }
//   }
//   return Object.values(mergeArr);
//   }
//   console.log(mergeArraysWithoutDuplicates(arNum,arNum2))


// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
let y = ["osmos", "uterque", "water", "crop",
        "&", "swap", "cat", "brew", "Esmeralda"]
// index - 1
// result "start wars"
// function buildStringUsingIndex(array, index) {
//     let newStr = ''; 
//     let t = array.charAt(index) 
//    for ( let i = 0; i < array.lenght; i++ ){
        
//     } ;
//     newStr += t;
//  return newStr;
// }


// console.log(buildStringUsingIndex(y,3))


// function buildStringUsingIndex(array, index) {
//     let r = '';
//     array.forEach(element => {
//     let ind = element.charAt(index);
//    if ( ind < index ){
//        ind += ' '
//    }
//    r +=ind
// });
//     return r;
// }
const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

// function printEvenNumbers(n) {
//   let separatedString = "";
//   for (let i = 2; i <= n; i++) {
//     if (i % 2 === 0) {
//       separatedString += i + ", " ;
//     }
//     if ( separatedString.length.includes
//   }
//   return separatedString.slice(0, -2);
// }
// console.log(printEvenNumbers(n))
	
	
// const data = [
//     'Games',
//     {
//       tests: 'e2e',
//     }
//   ]
   
//   const [ moduleName, extra ] = data;
   
//   console.log(moduleName, extra);
  

//   function swap(arr, i, j) {
//     // change places of array elements
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
   
//   const unsortedNums = [1, 3, 2];
   
// //   swap(unsortedNums, 2, 1);
   
// //   console.log(unsortedNums);

// //   const numsArray = [
// //   1, 3, 5, 10, 19, 100, 200, 33,
// // ]
// // function sumNumbersInArray(array) {
// //     const sum = array.reduce((acc, curr) => (acc += curr),0);
// //       return sum;
// //     };
// //     console.log(sumNumbersInArray(numsArray))

// const createCounter = () => {
//   // A variable defined in a factory or constructor function scope
//   // is private to that function.
//   let count = 0;
//   return ({
//   // Any other functions defined in the same scope are privileged:
//   // These both have access to the private `count` variable
//   // defined anywhere in their scope chain (containing function
//   // scopes).
//   click: () => count += 1,
//   getCount: () => count.toLocaleString()
//  });
// };

// const counter = createCounter();


// counter.click();
// console.log(counter.click());
// console.log(counter.click());

// console.log(
//   counter.getCount()
// );

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.run = function () {
    console.log("I’m running");
};
Cat.prototype.sound = function () {
    console.log("Meow! Meow!");
};

const Tom = new Cat("Tom", "grey");
const Simon = new Cat("Simon", "red");

console.log(Tom.run())

function Car(model) {
  this.model = model;
  
  this.getModel = () => this.model;
  this.drive = () => console.log('Driving....');
}

const BMW = new Car('BMW');
const Volvo = new Car('Volvo');

console.log(BMW); // Driving...
Volvo.drive(); // Driving...
BMW.getModel()

