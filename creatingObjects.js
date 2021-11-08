// Create 10 objects

const shop1 = {
    name: 'Reserved',
    location: 'Victoria Gardens',
    famousBrand : true,
    price: 'average'
};

const shop2 = {
    name: 'Terranova',
    location: 'King Cross Leopolis',
    famousBrand : true,
    price: 'cheap'
};

const shop3 = {
    name: 'Remix',
    location: 'Victoria Gardens',
    famousBrand: false,
    price: 'average'
}

const shop4 = {};
shop4.name = 'ZARA';
shop4.location = 'Forum Lviv';
shop4['famousBrand'] = true;
shop4.price = 'expensive';

//console.log(shop4)

const hp = {
    name: 'Hewlett-Packard',
    founded: 1939
}

const asus = {
    name : 'ASUS',
    founded: 1989
}

const dm = {};

dm['name'] = 'Dream Machine';
dm['founded'] = 2015;

//console.log(dm);

const dell = {
    name: 'Dell',
    founded: 1984
};

hp.country = 'USA';
// console.log(hp)

//console.log(dell.valueOf())


////////       WTF  const lenovo = Object.create(dell)
///////        WTF  console.log(lenovo)

Object.freeze (hp);
hp.founded = 1111;
console.log(hp.founded)

if (!asus.hasOwnProperty('country')) {
    asus['counrty'] = 'Taiwan'
}

console.log(asus)

const apple = Object.assign({}, hp);
apple.name = 'Macbook';
apple.founded = 1976;

console.log(apple)