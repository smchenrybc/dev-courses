/**
 * index.js
 */

var app = new Vue({
  el: "#root",
  data: {
    message: 'Hello, world!',
    tasks: [
      {
        description: 'Go to the store',
        completed: true
      },
      {
        description: 'Finish screencast',
        completed: false
      },
      {
        description: 'Clear inbox',
        completed: false
      },
      {
        description: 'Make dinner',
        completed: false
      },
      {
        description: 'Clean room',
        completed: true
      }
    ]
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
    incompleteTasks() {
      // this.tasks.filter(function(task) {
      //   return !task.completed;
      // });

      // ES6 syntax:
      return this.tasks.filter(task => !task.completed);
    }
  }
});
