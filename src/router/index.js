import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Route from '../components/schoolbus/Route.vue'
import Scheduling from '../components/schoolbus/Scheduling.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        children: [
            { path: '/route', component: Route },
            { path: '/scheduling', component: Scheduling },
        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
