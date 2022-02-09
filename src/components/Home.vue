<template>
  <div>
    <div class="header">
      <h1>To Do List</h1>
      <button id="add">Add Task</button>
    </div>
    <table>
      <tr>
        <th colspan="2">Task Name</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      <tr v-for="i in task" :key="i">
        <td>
          <input type="checkbox" />
        </td>
        <td>{{ i.name }}</td>
        <td>{{ i.priority }}</td>
        <td>{{ i.status }}</td>
        <td>
          <button id="delete" v-on:click="deletetask(i.id)">Delete</button>
          <button id="update">Update</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "Home",
  data() {
    return {
      task: [],
    };
  },
  created() {
    this.showdata();
  },
  methods: {
    showdata() {
      this.axios.get("http://localhost:3000/posts").then((data) => {
        //   console.log(data.data);
        this.task = data.data;
      });
    },
    deletetask(id) {
      if (confirm("do you want to detele task")) {
        this.axios.delete("http://localhost:3000/posts/" + id);
        this.showdata();
      } else {
        this.showdata();
      }
    },
  },
};
</script>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20% 10px 8%;
  background: #f8f0ff;
}
h1 {
  font-weight: bolder;
}
table {
  margin: 50px auto;
  border: 1px solid #000;
}
tr {
  border-bottom: 1px solid #000;
}
th {
  background: #f8f0ff;
}
td,
th {
  padding: 20px 40px;
}
button {
  padding: 5px 15px;
  margin: 0px 2px;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
}
#add {
  background: #4677ff;
  font-size: 18px;
  padding: 10px 25px;
  border-radius: 5px;
}
#delete {
  background: #ff5959;
}
#update {
  background: #00c220;
}
#delete:hover {
  background: #cc0000;
}
#update:hover {
  background: #007914;
}
#add:hover {
  background: #0051d4;
}
</style>