/**
 * main.js
 */

/*
Sets
 */

// the items in a set must be
// unique or they'll be ignored

// let items = new Set(['one', 'two', 'three']);
let items = new Set(['one', 'two', 'three', 'one', 'two', 'three']);

console.group('Group 1');

console.log(items);

console.groupEnd();

// following functions can
// be performed on the set:

// items.size()
// items.add()
// items.delete()
// items.has()


// they are iterable
console.group('Group 2');

items.forEach(item => console.log(item));

console.groupEnd();

// can clear them
// items.clear()


console.group('Group 3');

for (let item of items) {
  console.log(item);
}

console.groupEnd();


console.group('Group 4')

// what if we have a form
let tags = ['php', 'javascript', 'vue', 'javascript'];

let set = new Set(tags);

console.log(set);


// what if we want to filter it
// down to only three letters

// turn to array using spread
let arr = [...set];
console.log(arr);

let filtered = arr.filter(tag => tag.length === 3);
console.log(filtered);

let newSet = new Set(filtered);
console.log(newSet);

console.groupEnd();


var mentioned = ['John Doe', 'Jane Doe', 'Jane Doe'];

console.log(new Set(mentioned));
