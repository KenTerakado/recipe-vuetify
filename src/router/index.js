import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home-view.vue'
import AboutView from '../views/About-view.vue'
import ApplePieView from '../views/Apple-Pie-view.vue'
import ChickenAlfredoView from '../views/Chicken-Alfredo-view.vue'
import ChickenNoodleView from '../views/Chicken-Noodle-view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-view',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/applePie',
    name: 'applePie',
    component: ApplePieView,
  },
  {
    path: '/chickenAlfredo',
    name: 'chickenAlfredo',
    component: ChickenAlfredoView,
  },
  {
    path: '/chickenNoodle',
    name: 'chickenNoodle',
    component: ChickenNoodleView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
