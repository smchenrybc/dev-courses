/**
 * TaskCollection.js
 */

// export class TaskCollection {
//   constructor(tasks = []) {
//     this.tasks = tasks;
//   }

//   dump() {
//     console.log(this.tasks);
//   }
// }


// export default class TaskCollection {
//   constructor(tasks = []) {
//     this.tasks = tasks;
//   }

//   dump() {
//     console.log(this.tasks);
//   }
// }


class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  dump() {
    console.log(this.tasks);
  }
}


// old methods:
// CommonJS, AMD (RequireJS), UMD

// ES2016 way:
// just put 'export' in front of class


/*
Exports
 */
export default TaskCollection;

// we can export variables too:
export let foo = 'bar';