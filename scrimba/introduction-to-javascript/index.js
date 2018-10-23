/**
 * index.js
 */

/*
If, Else If, Else, And & Or
 */

// in this lesson we're working
// with what's called "control flow"

let example = 5;

// true
if (example >= 4) {
  console.log(`It's greater!`);
}

// true
if (example === 5) {
  console.log(`Yes, they're equal!`);
}

// false
if (example === 6) {
  console.log('Yes, it equals!');
} else if (example === 4) {
  console.log('This is equal!');
} else {
  console.log('Neither was equal.');
}

if (example === 6 || false === true) {
  console.log('One or both are true.');
} else {
  console.log("Neither is true.");
}