import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
import Home from './components/Home.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home }
]

const routers = new VueRouter({
    routes,
    mode: 'history'
})

Vue.config.productionTip = false

new Vue({
    routers,
    render: h => h(App),
}).$mount('#app')