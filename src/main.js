import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import Addtask from './components/Addtask.vue';
import Updatetask from './components/Updatetask.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/Addtask', component: Addtask },
    { path: '/Updatetask/:id', component: Updatetask },
    { path: '*', component: Home }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.filter('chtext', function(val) {
    if (val == false) {
        return "Undone"
    }
    if (val == true) {
        return "Done"
    }
    if (val == "Done") {
        return "Done"
    }
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')