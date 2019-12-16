import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: ["Buy shopping", "Clean bathroom", "Car's MOT"]
    },
    methods: {
      saveNewItem: function() {
        this.todos.push();
      }
    }
  });
});
