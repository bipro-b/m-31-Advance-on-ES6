// map

const numbers = [1, 4, 5, 6, 12, 34, 5, 6, 9, 13, 56, 234, 56];
//console.log(numbers.map(x => x * 5));


const oddNumber = numbers.filter(number => number % 2);
//console.log(oddNumber);

const products = [{ price: 5000, name: 'Mobile' }, { name: 'bottle', price: 5000 }, { name: 'tv', price: 2000 }];

const value = products.find(product => product.price == 5000);
//console.log(value);

//const x = numbers.forEach{ ...}

const arr = [1, 'two',];
//arr.forEach(item => console.log(item));
let sum = 0;
const number = [65, 44, 12, 4];
number.forEach(myFunction);

function myFunction(item) {
    sum += item;
}
console.log(sum);