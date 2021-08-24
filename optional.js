// Advanced Array Destructing , nested object optionl chaining 

// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };


const { a, b } = myObject // myObject.p.q // TypeError : Cannot read property 'q' undefined

// myObject?.p.q //  Cannot read property q of undefined
// myIbject?.p?.q 


console.log(myObject.c) // undefined


// destructing array

const [p, q] = [34, 45];

// object destructing

const { sky, color } = { sky: 'blue', soil: 'mati', color: 'nil' };











