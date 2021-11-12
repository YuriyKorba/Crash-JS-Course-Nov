function sayName() {
    console.log (`Hello, my name is ${this.name}`);
};

const obj1 = {
    name : 'Bobby',
    age : 15,
};

const obj2 = {
    name : 'Igor',
    age : 15,
};

// obj.sayName = sayName -костиль + не гарно.

sayName.call(obj1); // За допомогою call ми передали функцію з this. ( хочему виконати цю функцію в контексті цього об"єкта)
sayName.call(obj2); // ми неначе функцію запхали в об"єкт і її викликали.

sayName.call(obj1 , 1,2,3,4,5) // для метода call передаємо параметри через кому.
sayName.apply(obj2, [1,2,3,4,5]) // для метода apply передаємо параметр через масив.

// ===========================================
// bind - викликати фунцію , але пізніше 
// ===========================================

function sayName() {
    console.log (`Hello, my name is ${this.name}`);
};

const obj3 = {
    name : 'Bobby',
    age : 15,
};

const hello = sayName.bind(obj3); // таку функцію можна копіювати мільйон раз і контекст залишиться.

fn(hello);


function fn(callback) {
    callback();
};

// ===== bind - own bind

function sayName() {
    console.log (`Hello, my name is ${this.name}`);
};

const obj4 = {
    name : 'Roman',
    age : 15,
};

function myBind(callback, scope) {
    return function() {
        callback.call(scope);
    };
};

const myHello = myBind(sayName, obj4); // function() {.....}
myHello()
