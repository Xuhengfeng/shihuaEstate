import Vue from "vue"
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

//初始化vuex
const localLoginData = localStorage.getItem('data')
export default new Vuex.Store({
	// state:{
  	// 	logindata: localLoginData ?  JSON.parse(localLoginData) : {}
	//   },
	state,
	actions,
	mutations,
})
