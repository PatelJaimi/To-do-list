<template>
  <div>
    <div class="header">
      <h1>To Do List</h1>
      <button>
        <router-link to="/Addtask" id="add">Add Task</router-link>
      </button>
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
          <input
            type="checkbox"
            v-bind:value="i.status"
            v-model="i.status"
            v-bind:checked="false"
            v-on:change="changetask(i.id,i.name,i.priority,i.status)"
          />
        </td>
        <td
          style="text-align: left"
          v-bind:class="{ undone: i.status == 'Done' }"
        >
          {{ i.name }}
        </td>
        <td>{{ i.priority }} {{ data }}</td>
        <td>{{ i.status | chtext }}</td>
        <td>
          <button id="delete" v-on:click="deletetask(i.id)">Delete</button>
          <button>
            <router-link v-bind:to="Updatetaskid(i.id)" id="update"
              >Edit</router-link
            >
          </button>
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
      data: "",
      task: [],
    };
  },
  beforeUpdate() {
    for (let i = 0; i < this.task.length; i++) {
      if (this.task[i].status == "Undone") {
        this.task[i].status = false;
        // console.log("hey")
      }
    }
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
    Updatetaskid(id) {
      return "/Updatetask/" + id;
    },
    changetask(uid,uname,upriority,ustatus) {
      if(ustatus==true){
        ustatus="Done"
      }
      if(ustatus==false){
        ustatus="Undone"
      }
      const udata = {
        name: uname,
        priority: upriority,
        status: ustatus,
        id: uid,
      };
      this.axios
        .put("http://localhost:3000/posts/" + uid, udata)
        .then((data) => {
          console.log(data);
        });
    },
  },
  updated() {
    for (let i = 0; i < this.task.length; i++) {
      if (this.task[i].status == true) {
        this.task[i].status = "Done";
      }
    }
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
  padding: 15px 40px;
}
button {
  margin: 0px 2px;
  border: none;
  font-weight: bold;
}
#add {
  background: #4677ff;
  color: #fff;
  font-size: 18px;
  padding: 15px 25px;
  border-radius: 5px;
  text-decoration: none;
}
#delete {
  background: #ff5959;
  padding: 5px 15px;
  margin: 0px 2px;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
}
#update {
  background: #00c220;
  padding: 8px 15px;
  margin: 0px 2px;
  border: none;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
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
.undone {
  text-decoration: line-through;
}
</style>