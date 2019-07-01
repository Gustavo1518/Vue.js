import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: () => import(/* webpackChunkName: "FAQ" */ './views/FAQ.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "Login" */ './views/Login.vue')
    },
    {
      path: '/Soporte',
      name: 'Soporte',
      component: () => import(/* webpackChunkName: "Soporte" */ './views/Soporte.vue')
    },
    
  ]

})
