// Map String array, array of objects map foreeach
// Macp is ....  take value randomely and return the value in an array  and it is short for loop

const friends = ['Tom Hanks ', 'Tom Cruise', 'Tom Brandy', 'Tom Solaiman'];

const flengths = friends.map(friend => friend.length);
console.log(flengths);

const products = [
    { name: 'Water bottle', price: 50, color: 'black' },
    { name: 'mobile phone', price: 50000, color: 'orange' },
    { name: 'smart watch', price: 3450, color: 'hue' },
    { name: 'sticky note  ', price: 60, color: 'pink' },
]

const productName = products.map(product => product.name);
const productPrices = products.map(product => product.price);
console.log(productPrices);

//products.map(product => console.log(product));

// foreach it is used when no need return value

products.forEach(product => console.log(product));



