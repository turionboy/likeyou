import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		curr_id: 0, //sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : 0,
		repeated_val: ''
	},
	mutations: {
		setCurr_id(state,id) {
			state.curr_id = id;
		},
		setRepeated_val(state,val) {
			state.repeated_val = val;
		}
	}
})

export default store;