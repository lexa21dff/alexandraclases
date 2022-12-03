import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ejemplor from '../views/Ejemplor.vue'
import Ejemplo2 from '../views/Ejemplo2.vue'
Vue.use(VueRouter)

const routes = [
  /* ruta principal: danier*/
  {
    path: '/',
    name: 'Ejemplo2',
    component: Ejemplo2
  },
  /*-------*/
  {
    path: '/Ejemplor',
    name: 'Ejemplor',
    component: Ejemplor
  },
  {
    path: '/Ejemplo2',
    name: 'Ejemplo2',
    component: Ejemplo2
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
