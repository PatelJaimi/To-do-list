<template>
  <div>
    <div class="header">
      <h1>Update Task</h1>
      <button>
        <router-link to='/' id="show">Show task</router-link>
      </button>
    </div>
    <form action="#" method="post" v-on:submit="updatetask()">
      <label for="tname">Task Name</label>
      <input type="text" id="tname" v-model="task.name" required /><br />
      <label>Priority </label><br />
      <div class="radiobtn">
        <input
          type="radio"
          name="priority"
          id="high"
          value="High"
          v-model="task.priority"
        />
        <label for="high">High</label>
        <input
          type="radio"
          name="priority"
          id="medium"
          value="Medium"
          v-model="task.priority"
        />
        <label for="medium">Medium</label>
        <input
          type="radio"
          name="priority"
          id="low"
          value="Low"
          v-model="task.priority"
        />
        <label for="low">Low</label>
      </div><br>
      <label>Status </label><br />
      <div class="radiobtn">
        <input
          type="radio"
          name="status"
          id="Undone"
          value="Undone"
          v-model="task.status"
        />
        <label for="Undone">Undone</label>
        <input
          type="radio"
          name="status"
          id="Done"
          value="Done"
          v-model="task.status"
        />
        <label for="Done">Done</label>
      </div>
      <button id="add" type="submit">Update Task</button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "Updatetask",
  data() {
    return {
      tid:this.$route.params.id,
      task: {
        name: "",
        priority: "Low",
        status: "Undone",
      },
    };
  },
  created() {
    this.axios.get("http://localhost:3000/posts/"+this.tid).then((data) => {
      this.task = data.data;
    });
  },
  methods: {
    updatetask(event) {
      this.axios.put("http://localhost:3000/posts/"+this.tid, this.task).then((data) => {
        console.log(data);
      });
      alert("Task Updated");
      event.preventDefault();
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20% 10px 8%;
  background: #f8f0ff;
}
h1 {
  font-weight: bolder;
}
form {
  width: 40%;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 1px 1px 10px 1px #ccc;
  text-align: left;
  font-size: 18px;
  background: #fff;
}
input#tname {
  width: 90%;
  font-size: 16px;
  padding: 6px;
  margin: 10px 0px 25px 0px;
}
.radiobtn input {
  margin: 20px 8px 10px 50px;
}
button {
  padding: 10px 25px;
  margin: 0px 2px;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
}
#add {
  background: #4677ff;
  margin: 40px;
}
#show {
  background: #00ad1d;
  font-size: 18px;
  padding: 15px 25px;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}
#show:hover {
  background: #007914;
}
#add:hover {
  background: #0051d4;
}
</style>