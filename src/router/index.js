import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title:"合體模擬"
    }
  },
  {
    path: '/PersonaList',
    name: 'PersonaList',
    component: () => import('../views/PersonaList.vue'),
    meta: {
      title:"面具一覽"
    }
  },
  {
    path: '/PersonaDetail/:Name',
    name: 'PersonaDetail',
    component: () => import('../views/PersonaDetail.vue'),
    meta: {
      title:"面具詳情"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
