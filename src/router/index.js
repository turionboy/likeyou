import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/detail'
import login from '@/components/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
      // }
    },{
    	path: '/detail',
    	name: 'detail',
    	component: detail
    },{
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

export default router;
