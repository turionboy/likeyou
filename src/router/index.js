import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import index from '@/components/index'
import detail_product from '@/components/detail_product'
import detail_comunity from '@/components/detail_comunity'
import login from '@/components/login'
import admin from '@/components/admin'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
      // }
    },{
    	path: '/detail_product',
    	name: 'detail_product',
    	component: detail_product
    },{
      path: '/detail_comunity',
      name: 'detail_comunity',
      component: detail_comunity
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})

export default router;
