import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		curr_id: 0, //sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : 0,
		story_id: 0,
		scene_id: 0,
		city_id: 0,
		story_id: 0,
		table_id: 0,
	},
	mutations: {
		setCurr_id(state,id) {
			state.curr_id = id;
		},
		setCity_id(state,id) {
			state.city_id = id;
		},
		setScene_id(state,val) {
			state.scene_id = val;
		},
		setStory_id(state,val) {
			state.story_id = val;
		},
		setTable_id(state,val) {
			state.table_id = val;
		}
	}
})

export default store;