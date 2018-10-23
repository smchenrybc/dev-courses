/**
 * index.js
 */

/*
For Loop
 */

let total = 5;

// count to five!
for (let x = 1; x <= total; x++) {
  console.log(x);
}

let newTotal = 0;

for (let x = 1; x <= total; x++) {
  newTotal += x;
}
console.log(newTotal); // 1 + 2 + 3 + 4 + 5 = 15

let numTotal = 0;
let numArray = [10, 20, 30, 40, 50];

for (let i = 0; i < numArray.length; i++) {
  numTotal += numArray[i];
}
console.log(numTotal);
