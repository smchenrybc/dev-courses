/**
 * main.js
 */

require('./main.css');

// class Form {
//   constructor() {
//     alert('Yay! Form classes are great no matter what JS developers say!');
//   }
// }

class Form {
  constructor() {
    let num_array = [5, 10, 15];
    let numbers = num_array.map(number => number * 2);

    console.log(numbers);
  }
}

new Form();
