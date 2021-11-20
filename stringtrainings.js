 //'I9like5JS' => 'I like JS'
 function replaceNumbers(string) {
    return string.replace(new RegExp("[0-9]", "g"), " ")
}
console.log(replaceNumbers('I9like5JS'))

// console.log(replaceNumbers('I9like5JS'))

// let g = "danna";
// function palindrome(str) {
//     let reg = /[^a-z]/g;
//     str = str.toLowerCase().replace(reg, '');
//     console.log(str)
//     let leng = str.length;
//     for (let i = 0; i < leng / 2; i++) {
//         if (str[i] !== str[leng - 1 - i]) {
//             return "The string is not palindrome";
//         }
//     }
//     return "The string is palindrome";
// }
// console.log(palindrome(g));

// function calculateLetters(string, letter) {
//     let symbol = '';
//     for (let i=0; i < string.length; i++){
//       if ( string[i] === letter ){ 
//       symbol += string[i];
//       }
//     }
//       return symbol.length
// }
// console.log(calculateLetters('laaaaaaaaaaaaaaaaaaabbbbbbbl','a'))

// 'I9like5JS' => 'I like JS'

// let book = ['Harry Potter', 'Indiana Jones', 'JavaScripy for Kids']
// function convertToUppercase(array) {
//     return String(array).toUpperCase().split(",");
    
//   }
//   console.log(convertToUppercase(book))

const stringsArray = [
      'one-test', 'cat', 'parrot',
      'banana', 'test-dog', 'dog'
    ];
    function filterStringsArray(array) {
      for(let i=0; i<array.length; i++) {
        array[i].includes("test")  }
      }
console.log(filterStringsArray(stringsArray))