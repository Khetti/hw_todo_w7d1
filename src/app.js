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
      newTask: "",
      priorityChoice: ""
    },
    methods: {
      saveNewTask: function() {
        let priority = false;
        if (this.priorityChoice === "high"){
          priority = true;
        }
        let taskObject = {name: this.newTask, highPriority: priority};
        this.tasks.push(taskObject);
        this.newTask = "";
      }
    }
  });
});
