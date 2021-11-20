// ------Наслідування (Inheritance)------------

function Motocycle(brand,type, enginePower) { 
    this.brand = brand;
    this.type = type;
    this.enginePower = enginePower;

    this.race = () => console.log('Starting for race ....');
    this.speedLimit = () => console.log('The speed limit is in your brain ...')
};

const Ducatti = new Motocycle('Ducatti', 'super sport', '1299 cm3')
console.log(Ducatti);
Ducatti.race();
Ducatti.speedLimit();
const Suzuki = new Motocycle('Suzuki','sport','1100 cm3');
Suzuki.speedLimit()
const Yamaha = new Motocycle('Yamaha','cruiser','1800 cm3');




class Pokemon {
    constructor ( name, type , species, specialSound){
        this.name = name;
        this.type = type;
        this.species = species;
        this.specialSound = specialSound
    }
    
    greeting() {
        return console.log('Hi, my name is ' + this.name);
    }
    prepareToFight() {
        return console.log('prepare to take the blow, ' + this.specialSound)
    };

}

const Charmander = new Pokemon('Charmander', 'Dragon', 'Flame Pokémon', 'Hrrrrrrrr');
console.log(Charmander);
Charmander.greeting()
Charmander.prepareToFight()
const Pikachu = new Pokemon('Pikachu','Mouse', 'Electric Pokemon', 'Pika Pika');
const Kangaskhan= new Pokemon('Kangaskhan', 'Monster' , 'Parent Pokémon', 'Try something to destroy' );

class Animal {
    constructor ( name , age) {
        this.name = name;
        this.age = age;
    }
    sound() {
        return '';
    };
};

class Dog extends Animal {
    constructor(name,age) {
        super(name,age)
    }
    sound() {
        return 'Woof Woof !'
    }
};

const Jack = new Dog ('Jack', '1 year');
console.log(Jack);
console.log(Jack.sound());

class Сhinchilla extends Animal {
    constructor(name , age) {
        super(name,age)
    }
    sound() { return 'Pic Pic'};
    };
const Cherry = new Сhinchilla ( 'Cherry', '5 mounth');
Cherry.sound()

class Birds extends Animal {
    constructor(name,age) {
        super(name.age);
    }
    sound() { return 'Twi Twi Twi'} ;
};

const Niki = new Birds('Niki','3 years');
console.log(Niki.sound());

class Chameleon extends Animal {
    constructor(name,age) {
        super (name,age)
    }
    sound() {return 'shhhhhhhhh .... shhhhh'};
    sleep() { return 'zzZZZzzZZzZZZ'}
};
const Rikki = new Chameleon('Rikki', '1,5 years', '5 kg')
console.log(Rikki);
console.log(Rikki.sleep())
Rikki.,weight = '5 kg';
console.log(Rikki);