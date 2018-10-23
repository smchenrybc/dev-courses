/**
 * index.js
 */

/*
Booleans (Challenge)
 */

let example1 = false;
let example2 = true;
let example3 = null;
let example4 = undefined;
let example5 = '';
let example6 = NaN;
let example7 = -5;
let example8 = 0;

// guess the output:
console.log(Boolean(example1)); // false
console.log(Boolean(example2)); // true
console.log(Boolean(example3)); // false
console.log(Boolean(example4)); // false
console.log(Boolean(example5)); // false
console.log(Boolean(example6)); // false
console.log(Boolean(example7)); // false
console.log(Boolean(example8)); // true

// answers:
// 1: ✔
// 2: ✔
// 3: ✔
// 4: ✔
// 5: ✔
// 6: ✔
// 7: ✖
// 8: ✖

// negative numbers are true
// because it's not checking
// that they are positive, but
// that they are non-zero.

// zero is a falsy value
