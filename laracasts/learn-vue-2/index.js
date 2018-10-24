/**
 * index.js
 */

var app = new Vue({
  el: "#root",
  data: {
    newName: '',
    names: ["Amy", "Hiroko", "Logan", "Sean"]
  },
  methods: {
    addName() {
      // add the name
      this.names.push(this.newName);
      // clear the input field
      this.newName = '';
    }
  }
});
