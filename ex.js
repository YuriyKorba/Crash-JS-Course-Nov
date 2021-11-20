// const arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// function reverseArrayItems(array) {
//     let sentence1 = [];
//   for (i = array.length - 1; i >= 0; i--) {
//     sentence1.push(array[i]);
//   }
//   return console.log(sentence1);
// };

// reverseArrayItems(arr)


//  let array1   = [4, 6, 7];
//  let array2  = [8, 1, 9];
// // Example output:
// // [12, 7, 16]
// function sumNumsSamePosition(array1, array2) {
//     let x = [].map(function(array1:[0] + array2:[0], array1:[1] + array2:[1],array1:[2] + array2:[2]) {
//         return x[];
//       }
//     }
    


// n! => 1*2*3*4*5
// function factorial(n) {
//     let result = 1;
//     while(n){
//       result *= n--;
//     }
//     return (n);
//   }
// console.log(factorial(n))

// const array = [4, 6, 7, 10];

// function sumNums(array) {
//     let i = 0;
//     let sum = 0;
//     while ( i < array.length) {
//       sum += array[i];
//       i++
//     }
//     return sum;
// };

// console.log(sumNums(array))


// const arrayNums = [7,101,3,1,9,11,100,111]
// function sortArray(array) {
//  array.sort(
//     ( a, b ) =>a - b 
//   );
//   return array
// };

// console.log(sortArray(arrayNums))
// console.log(arrayNums)


// const nums = [1, 2, 3, 4, 3, 6];

// // filter numbers equal 3
// const filteredNums = nums.filter(function(num) {
//   return num !== 3;
// });

// console.log('filtered nums array ', filteredNums);


// let a   = [4, 6, 7];
// let b  = [8, 1, 9];
// // Example output:
// // [12, 7, 16]
// function sumNumsSamePosition(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     array1[i];
    
// }
//   for (let i = 0; i < array2.length; i++) {
//     array2[i];
//   }
//    newArray.push(array1[i] + array2[i]);
//    return newArray
// }
// console.log(sumNumsSamePosition(a,b))

const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

function printEvenNumbers(n) {
  let separatedString = "";
    for (let i = 2; i <= n; i++) {
      if (i % 2 === 0) {
        separatedString += i + ','
      }
  }
  return separatedString
  }
  console.log(printEvenNumbers(n))

// let a   = [4, 4, 6, 7];
// let b  = [8, 1, 9];

// function sumNumsSamePosition(array1, array2) {
//   let sumArr = [];
//   for (let i = 0; i < array2.length; i++) {
//     sumArr.push(array1[i] + array2[i]);
//   }
//   return sumArr;
// }
// console.log(sumNumsSamePosition(a, b));

// n! => 1*2*3*4*5
// function factorial(n) {
//   let x = 1;
//   for ( i = 1; i <=n; i++) {
//     x *= i;
//   }
//   return x;

// }

// console.log(factorial(7))

// const arrayNums = [7,101,3,1,9,11,100,111]
// function sortArray(array) {
//   const sum = array.sort((a,
//   console.log(sum)
//   return sum;
// }
// console.log(sortArray(arrayNums))


// let y = function sortArray(array) {
//   return array.sort((curr, next) => {
//     if (curr < next) {
//       return -1;
//     } else {
//       return "wrong";
//     }
//   });
// }

// console.log(y(arrayNums))

//  const stringsArray = [
//     'one-test', 'cat', 'parrot',
//     'banana', 'test-dog', 'dog'
//   ]
// function filterStringsArray(array) {
//     let tvarunku  = array.filter((arr) => arr =='test')
//   }
//   console.log(filterStringsArray(stringsArray))