/**
 * index.js
 */

/*
While & Do While
 */

let count = 1;

// count to 20!
while (count <= 20) {
  console.log(count);
  count++;
}

// do while loop will run
// at least once vs. while loop
// which might not run at all

do {
  count++;

  if (count >= 20) {
    break;
  }
}

while (false);

console.log(count);
