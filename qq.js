//const strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error' ]

// function filterArrayWithStrings(array) {
//     const cosmos = [];
//     let n = 0;
//     while(n < array.length) {
//       if ( array.length >= 4 && array[n] =='error'){
//         cosmos.push(array[n]);
//         n++
//       }
//     };
//     return cosmos
//   }

//   // console.log(filterArrayWithStrings(strArr))

//   var arr = [1,2,3,4];
// var arr2 = [1,1,1,2];

// var squares = arr.map((a, i) => a + arr2[i]);

// console.log(squares);

// const arNum = [1, 2, 3, 4, 5, 6];
// const arNum2 = [15, 6, 3, 20, 11];
// function mergeArraysWithoutDuplicates(array1, array2) {
//   return array1.concat(array2);
  
// };

// console.log(mergeArraysWithoutDuplicates(arNum,arNum2))

// arrayNums = [7,101,3,1,9,11,100,111]
// function sortArray(array) {
//   const z = array.sort((a, b) => a - b);
//   return z;
// };
// console.log(sortArray(arrayNums))

const arNum = [1, 2, 3, 4, 5, 6];
const arNum2 = [15, 6, 3, 20, 11];


function mergeArraysWithoutDuplicates(array1, array2) {
  let mergeArr = {};
  let len = Math.max( array1.lenght , array2.lenght);
  for (let i = 0; i<len; i++) {
 if ( array1[i] && !mergeArr[array1[i]]) {
      mergeArr[array1[i]] = array1[i];
 };
 if ( array2[i] && !mergeArr[array2[i]]) {
  mergeArr[array2[i]] = array2[i];
  }
}
return mergeArr;
}


console.log(mergeArraysWithoutDuplicates(arNum,arNum2));
