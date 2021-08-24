//  Destructing object to extrat values to variables

const fish = { id: 58, name: 'kingh Hilsha', price: 9000, phone: '01793935234', adress: 'Chadpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

// short cut way to get property  from object using destruciong method

const { phone, price, dress, id, name } = fish;

// console.log(phone);
// console.log(price);
// console.log(dress);
// console.log(id);
// console.log(name);


const company = {
    name: 'GP',
    ceo: {
        id: 1,
        food: 'fuska'
    },
    web: {
        work:
            'Website development',
        employment: 22,
        framework: 'react',
        tech:
        {
            first: 'html',
            second: 'css',
            third: 'JS'
        }
    }
};

// traditional 

// const work = company.web.employment;

// short way 

const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;

//console.log(work, framework, food, second, third);

//console.log(company.web.backend.tech.first) // cannot read property tech

//console.log(company?.web?.backend?.tech?.first) //  udefined
