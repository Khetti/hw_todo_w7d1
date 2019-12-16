import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: ["Buy shopping", "Clean bathroom", "Car's MOT"]
    },

    methods: {
      saveNewTask: function() {
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    }
  });
});
