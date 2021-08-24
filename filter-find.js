// advancedd implement filter, find on an array of objects

// Filter : almost conditional work is done by it shortly
const numbers = [5, 13, 7, 41, 29, 79, 30, 5, 2, 19];

// Filter

const bigNumbers = numbers.filter(number => number > 20)

const smallNumbers = numbers.filter(number => number < 10);
console.log(bigNumbers);
console.log(smallNumbers);

const products = [
    { name: 'Water bottle', price: 50, color: 'black' },
    { name: 'mobile phone', price: 50000, color: 'orange' },
    { name: 'smart watch', price: 3450, color: 'black' },
    { name: 'sticky note  ', price: 60, color: 'pink' },
];

const expensive = products.filter(product => product.price > 100);
//console.log(expensive);
const blacks = products.filter(product => product.color == 'black');
console.log(blacks);

// Filter it return all properties (element character) as array [ ].. if emptty says empty 

// Find it return just element { } .. if empty says undefined 

const pinkItem = products.find(product => products.color = 'pink'); // 

console.log(pinkItem);

//Find

