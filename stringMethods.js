let f = 'Use this item below'

const result = 200 + ' ' + f;
console.log(typeof result) // '200 Use this item below'

const ref = '42' + 5 - 3; // якщо ми додаємо стрінг + намбер то додає "425"  - перетворює в стрінг , а якщо віднімаємо то в намбер.
console.log(ref);


// -----------------(Template strings) -----------------

const trr = 500;

const n = `This project has ${trr}`; // щоб не робити стрінг + щось + щось , можна в одному рядку з `this ${myVar}`;
console.log(n);

const lines = 2000;
const language = 'JavaScript';

const res = `${lines > 0 ? lines: 'Zero'} lines of ${language} code`; // Використвуємо тернальний оператор , 
//                                                                      то true то виводим 2000 , якщо ні то інша умова.

console.log(res);
// Output: '2000 lines of JavaScript code'


//-------------------- Методи для роботи з стрінгами ----------

// charAt --- який символ на певному індексі

	
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 5;
const w = sentence.charAt(index);
const e = sentence.charAt(1);
console.log(w);
console.log(e)

// includes --- перевірити чи містить певне слово в рядку. Вертає boolean.

const r = 'fox'
const t = sentence.includes(r);
console.log(sentence.includes('ove')); // true
console.log(t) // true

//------------------------------------------------------

const word = 'fox';
const hasWord = sentence.includes(word); // true

console.log(`The word "${word}"
	${hasWord ? 'is' : 'is not'} in the sentence`); // Просто ми виділили слово fox в скобки , і потім тернальний оператор. 
//                                                     А якщо добавимо слово ${hasCatWord}, то видасть false.
    // output: "The word "fox" is in the sentence"

const hasCatWord = sentence.includes('cat'); // false


// indexOf --- дізнаємся індекс того слова в стрінгу. Якщо це ціле слово то початок слова. Перевірка на наявність елемента в рядку.

const beasts = 'Beasts list: ant, bison, camel, duck, bison';

console.log(beasts.indexOf('bison')); // початок слова
// output: 40

console.log(beasts.indexOf('tiger')); // такого немає то -1.
// output: -1

// toLowerCase -- переробка всього рядка на маленькі букви

const sentence1 = 'AWESOME STRING';

const changed = sentence1.toLowerCase();

console.log(changed);
// output: "awesome string"


// toUpperCase

const sentence3 = 'lotr';

const changed1 = sentence3.toUpperCase(); // 'alphabet'.toUpperCase()

console.log(changed1);
// output: 'LOTR'


// .slice() --- Вирізає нам з рядка. по індексах.

const str = 'The quick brown fox jumps over the lazy dog.';
 
console.log(str.slice(31)); //  якзо вказуємо одне число вирізає з того індекса і до кінця.
// output: "the lazy dog."
 
console.log(str.slice(4, 19)); // вирізає з 4 і по 18 включно. 19 не трогає.
// output: "quick brown fox"
 
console.log(str.slice(-4)); // вирізає з кінця до четвертого індекса з кінця.
// output: "dog."
 
console.log(str.slice(-9, -7)); // вирізає з кінця -9 не включно , а -7 включно;
// output: "la"

// .split() ---використовується коли потрібно рядок перетворити у масив.

const tr = 'The quick brown, fox jumps over the lazy dog.';

const words = tr.split(' ');
 //  Якщо вказуєм пробіл то розділям по пробілах['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.'].
 // Якщо нічого то буде по буквах ( точніше по індексах ) ['T', 'h', 'e', ' ', 'q', 'u', 'i','c', 'k', ' ', 'b', 'r'... ].
// Якщо кому  .split(',') то розділить один індекс в масиві до коми і так далідо слід коми.
// Пробіл з комою (', ') то якось тоже до коми і забере пробіл.
console.log(words);

	
console.log(words[3]) // під тим індексом вже знахлдиться ціле слово.
console.log(word.indexOf(5))

const beas = 'Beasts list: ant, lison, camel, duck, bison';

const beastsArray = beas.split('');
console.log(beastsArray.indexOf('b')); // тільки якщо без пробілів то покаже індекс.

// .match() --- Створює масив і шукатє в всьому стрінгу. Знаходження елементів, які відповідають певному патерну

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g; // g - global.шукає заголовні букви глобально. Вертає в масив усі головні букви від A до Z
const found = paragraph.match(regex);

console.log(found);
// output: Array ["T", "I"]

console.log(paragraph.match(/[a]/g)); // вертає усі букви а
console.log(paragraph.match(/[a-f]/g)); // вертає усі буквивід a до f 

// .replace ('wow' , 'lol' ) Замінити в рядку з wow на lol.

const p = 'The quick brown fox jumps over the lazy dog';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey."


const reg = /Dog/i; // Якщо і то перше слово яке попадеться , якщо g то усі слова в рядку. !!!!!!!!!!!!!!
console.log(p.replace(reg, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret."

// .trim() забрати усі пробіли у рядку
const greeting = '   Hello world!   ';

console.log(greeting);
// output: "   Hello world!   ";

console.log(greeting.trim());
// output: "Hello world!";
