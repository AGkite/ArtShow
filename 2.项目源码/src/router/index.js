import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path:'/register',
    name:'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path:'/home/:option',
    component: () => import('../views/HomeView.vue'),
    props:true
  },
  {
    path:'/linkwe',
    name:'linkwe',
    component:() => import('../views/LinkWe.vue')
  },
  {
    path:'/oil',
    name:'oil',
    component:() => import('../views/OilPainting.vue')
  },
  {
    path:'/cartoon',
    name:'cartoon',
    component:() => import('../views/CartoonView.vue')
  },
  {
    path:'/character',
    name:'character',
    component:() => import('../views/CharacterView.vue')
  },
  {
    path:'/landscape',
    name:'landscape',
    component:() => import('../views/LandScapeView.vue')
  },
  {
    path:'/object',
    name:'object',
    component:() => import('../views/ObjectView.vue')
  },
  {
    path:'/sketch',
    name:'sketch',
    component:() => import('../views/SketchView.vue')
  },
  {
    path:'/detail',
    name:'detail',
    component:() => import('../views/ItemDetails.vue')
  },
  {
    path:'/author/:author',
    name:'author',
    component:() => import('../views/AuthorView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
