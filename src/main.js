// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Vuex
import store from './store'

// 引入Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// axios、qs
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$axios = axios
// 拦截器
axios.interceptors.request.use(function(config) {
	// 在发送请求之前做些什么
	if (config.method == 'post') {
		config.data = qs.stringify(config.data);
	}
	return config;
}, function(error) {
	return Promise.reject(error);
});
axios.interceptors.response.use(function(response) {
	// 对响应数据做点什么
	return response;
}, function(error) {
	// 对响应错误做点什么 
	return Promise.reject(error);
});


// jq
// import $ from 'jquery'

Vue.prototype.API = process.env.API_ROOT

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
