/**
 * index.js
 */

/*
Arrays (Challenge)
 */

let example1 = ['Sean', 5, true];

let example2 = example1;

example2.push(11);

console.log(example1);
console.log(example2);

// they're identical!

// when you push to arrays
// you're actually pushing to
// references of the arrays


let example3 = ['McHenry', 4, false];

let example4 = [...example3];

example4.push(11);

console.log(example3);
console.log(example4);

// now examples 3 and 4
// have different output!

let example5 = ['Keller', 3, true];

let example6 = example5.map((element) => {
  return element;
});

example6.push(11);

console.log(example5);
console.log(example6);
