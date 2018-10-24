/**
 * index.js
 */

// global
Vue.component('task-list', {
  template: `
    <ul>
      <task v-for="task in tasks">{{ task.task }}</task>
    </ul>
  `,

  data() {
    return {
      tasks: [
        {
          task: 'Drive home',
          complete: true
        },
        {
          task: 'Go to the store',
          complete: false
        },
        {
          task: 'Finish screencast',
          complete: false
        },
        {
          task: 'Watch Netflix',
          complete: false
        }
      ]
    }
  }
});

// global
Vue.component('task', {
  template: '<li><slot></slot></li>'
});

var app = new Vue({
  el: "#root"
});
