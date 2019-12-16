import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {name: "Buy Shopping", highPriority: false},
        {name: "Clean Bathroom", highPriority: true},
        {name: "Car's MOT", highPriority: false}
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function() {
        let taskObject = {name: this.newTask, highPriority: true};
        this.tasks.push(taskObject);
        this.newTask = "";
      }
    }
  });
});
