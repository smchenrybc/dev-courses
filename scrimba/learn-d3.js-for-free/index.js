/**
 * index.js
 */

// set var
let select = d3.select('h1');

// using multiple methods on our selection
// so we're chaining the methods below:

// set color
select.style('color', 'red')

// add class
.attr('class', 'heading')

// update text
.text('Updated h1 text');

let body = d3.select('body');
body.append('p').text('First paragraph.');
body.append('p').text('Second paragraph.');
body.append('p').text('Third paragraph.');

d3.selectAll('p').style('color', 'blue');
