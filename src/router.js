import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/home',
    component: () => import('@/views/Home')
  },
  {
    path: '/add',
    component: () => import('@/views/Add')
  },
  {
    path: '/about',
    component: () => import('@/views/About')
  },
  {
    path: '/classify',
    component: () => import('@/views/Classify')
  },
  {
    path: '/register',
    component: () => import('@/views/Register')
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
