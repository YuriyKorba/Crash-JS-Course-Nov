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


function increaseBiggerArg(a, b) {
       if ( a > b ) {
       return a+=100
    }
  }
  console.log(increaseBiggerArg(10, 7));


  function diff (a, b) {
      let c = a - b;
      console.log ('Lokal diff:', c, a); // показує значення 'c' та виводить "а"
      return c; // витягує з функції значення "с" - якщо не вертали б то в console.log 'Some' було - undefined
  };

  console.log('Some stupid function', diff(10, 20));

  function increaseBiggerArg(a, b) {
    if ( a > b ) {
       return a+=100;
    } else if (a < b) {
      return b+=100;
    };
  };
  console.log(increaseBiggerArg(10, 7));
  console.log(increaseBiggerArg(10, 77));

  function increaseBiggerArg(a, b) {
    if (a > b) {
     return  a + 100;
    } else  {
    return b + 100;
    }
  }
  console.log(increaseBiggerArg(10, 7));
  console.log(increaseBiggerArg(10, 77))

  function calculateFigureArea(figureType, a, b) {
    switch (figureType) {
      case "square": {
        let square = a * a;
        return square;
      }
      case "radius": {
        let radius = 3.14 * (a * a);
        return radius;
      }
      case "rectangle": {
       let rectangle = a * b;
        return rectangle;
      };
    };
  }

  console.log(calculateFigureArea(figureType, 5,5))