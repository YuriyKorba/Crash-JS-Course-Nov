let arr1 = []; // створення пустого масиву.
console.log(arr1);
arr1.push('hand2crafting'); // додає в масив значення.

const book = ['Harry Potter', 'Indiana Jones', 'JavaScripy for Kids'];
console.log(book[1]); // витягуєм інформацію за допомогою індекса. Індекс починається з 0...1...;

let nums = [ 1, 2, 3, 4, 5];
console.log(nums.length); // кількість елементів в масиві.

const arr2 = new Array(); // створення пустого масиву.
arr2.push('window');
arr2.push(55);
arr2.push({ phone: 'iphone'});

console.log(arr2);
console.log(arr2[2].phone = 0);
console.log(arr2);

arr2[2].phone = 'iphone 13 pro' // доступ до об'єкта в масиві і перезаписуємо значення.
arr2[0] = 'globallogic';
console.log(arr2);

nums.pop(); // видалити з масива останнє значення;
console.log(nums)

nums.unshift(0); // додати в масив , самим першим;
console.log(nums)

nums.shift();    // видаляє саме перше значення в масиві;
console.log(nums)

delete nums[1]; // видаляє , але залишає пустий рядок.
console.log(nums)

nums.pop();
console.log(nums[1])
console.log(nums)



// =========================================================


const join2arrays = arr1.concat(arr2);    // обєднання двох масивів в один. В arr1 дабавити елементи arr2;
console.log(join2arrays);        

const data = [];

// add data
// function add(a, q) {
//   arr.push(a);
// }

// add({ n: 1 }, data);
// add({ n: 3 }, data);
// add({ n: 5 }, data);
// add( 111 , data);
// console.log(data)
// later we will use it together with loops :) 

const data1 = [];

// add data1                    Створили новий масив і додаємо до нього елементи за допомогою функції.
function add(a, b) {
  a.push(b);
}

add( data1, { n: 1 });
// add({ n: 3 }, data1);
// add({ n: 5 }, data1);
// add( 5 , data1 );
console.log(data1) // [ { n: 1 }, { n: 3 }, { n: 5 }, 5 ]

const motocycles = [];

function addMoto(obj, arr) {
    arr.push(obj)
};

addMoto('Suzuki', motocycles);
addMoto('Kawasaki', motocycles);
addMoto('Honda', motocycles);
console.log(motocycles)

// ====================================================================


function extendConfig(objExt, config = {}) {
    const newObj = Object.assign({}, config, objExt);
  
    return newObj;
  }
  
  const x = { test: true, v: '10.0.3'};
  const z = { module: 'Car'}
  const result = extendConfig(x, z);
  console.log(result);

  function extendConfig(objExt, config = {}) {
    return {
      ...objExt,
      ...config,
    };
  }
  
  const resulta1 = extendConfig(
    { test: true, v: '10.0.3'},
    { module: 'Car'}
  );
  console.log(resulta1);


  // Деструктиризація  об"єкта

  const config = {
    name: 'MyTests',
    tests: 'unit',
    version: '10.0.3',
    extra: {
      tests: 'e2e',
    }
  }
  
  const { tests, extra } = config;
  
  console.log(tests, extra);

  console.log(extra)
  
//   // Деструктиризація масива

//   const dt = [
//     'Games',
//     {
//       tests: 'e2e',
//     }
//   ]
  
//   const [ khrystyna , b] = dt;
  
//   console.log(khrystyna, b);
  

  const data5 = [
    'Games',
    {
      tests: 'e2e',
    },
    { n: 7 },
    { n: 3 },
    { n: 5 },
  ]
  
  const  [ d , v , t]  = data5;
  
  console.log( d , v, t);


  function swap(arr, i, j) {
    // change places of array elements
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  const unsortedNums = [1, 3, 2];
  
  swap(unsortedNums, 1, 2);
  
  console.log(unsortedNums);
  

  const needMoreLesson = ['functions', 'JS', "can't", , 'normaly', 'Seriously',  'understand'];
  function swap(arr, a, b) {
   [arr[a], arr[b]] = [arr[b], arr[a]];
 }
 swap(needMoreLesson , 4 , 0)
 console.log(swap(needMoreLesson , 4 , 0))