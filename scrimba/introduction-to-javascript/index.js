/**
 * index.js
 */

/*
Relational Operators
 */

// relational operators are
// used for comparison and
// return true or false.

let example1 = 10;
let example2 = 15;

console.log(example1 >= example2); // false

// double equals versus single equals:
// double equal checks that value and
// type are equal, single just checks values

console.log(typeof example1); // number
console.log(typeof example2); // number

example1 = 10; // number
example2 = '10'; // string

// are the two values equal?
console.log(example1 == example2);

// are values and types equal?
console.log(example1 === example2);
