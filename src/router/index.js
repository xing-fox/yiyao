import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: '/yao/',
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'Index',
    component: () => import('@/view/index.vue')
  }, {
    path: '/rank',
    name: 'Rank',
    component: () => import('@/view/rank.vue')
  }, {
    path: '/start',
    name: 'Start',
    component: () => import('@/view/start.vue')
  }, {
    path: '/list',
    name: 'List',
    component: () => import('@/view/list.vue')
  }]
})
