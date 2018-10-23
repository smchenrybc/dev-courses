/**
 * index.js
 */

/*
Objects
 */

let example1 = {
  firstName: 'Sean',
  lastName: 'McHenry',
  address: {
    city: 'Portsmouth',
    state: 'NH'
  },
  age: 33,
  cats: ['Sly', 'Louie']
}

console.log(example1);
console.log(typeof(example1));


console.log(`${example1.firstName} ${example1.lastName}`);

console.log(`${example1.address.city}, ${example1.address.state}`);

console.log(example1.cats);

example1.cats.forEach(cat => {
  console.log(cat);
});

// print the keys:
console.log(Object.keys(example1));

// print the values:
console.log(Object.values(example1));

// check for key
console.log(example1.hasOwnProperty('firstName'));