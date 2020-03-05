/**
 * index.js
 */

let root = document.querySelector(':root');
console.log(root);

let rootStyles = getComputedStyle(root);
console.log(rootStyles);

let gold = rootStyles.getPropertyValue('--gold');
console.log('gold: ', gold);

// change gold to purple
root.style.setProperty('--gold', 'rebeccapurple');
