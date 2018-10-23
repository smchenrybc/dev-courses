/**
 * index.js
 */

var app = new Vue({
  el: '#root',
  data: {
    names: ['Amy', 'Hiroko', 'Logan', 'Sean']
  },
  mounted() {
    // alert('Click to proceed.');

    document.querySelector('#button').addEventListener('click', (event) => {
      // prevent submit
      event.preventDefault();

      // set vars
      let input = document.querySelector("#input");
      let name = input.value;

      // add name to array
      app.names.push(name);

      // clear input
      input.value = '';
    });

  }
});
