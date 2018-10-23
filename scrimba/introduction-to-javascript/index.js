/**
 * index.js
 */

/*
Increment & Decrement (Challenge)
 */

let example1 = 5;
example1++;

console.log(example1); // 6

let example2 = 5;
++example2;

console.log(example2); // 6

// these look like they return
// the same values, but they actually don't

let example3 = 5;
let example4 = 5;

// this doesn't iterate in one line
console.log(example3++);

// this does
console.log(++example4);
