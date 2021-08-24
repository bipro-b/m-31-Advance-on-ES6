// Array map to do line loop magic

const numbers = [4, 6, 8, 10];

//const output = [];
// function doubleOld(number) {
//     return number * 2;
// }
// const doubleIt = number => number * 2;
// for (const number of numbers) {
//     const result = doubleIt(number);
//     output.push(result);

// }
//console.log(output);

// short way to double array element 

//const doubleIt = number => number * 2; // function to return double value
//const output = numbers.map(doubleIt); // loop for array 

// More short way 

const output = numbers.map(n => n * 2);
console.log(output);

const squares = numbers.map(x => x * x);

// One line 

console.log(numbers.map(y => y * 3));
