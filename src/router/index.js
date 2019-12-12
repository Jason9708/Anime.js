import Vue from 'vue'
import VueRouter from 'vue-router'
import anime02 from '../views/anime02'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'anime02',
    component: anime02
}, ]

const router = new VueRouter({
    routes
})

export default router