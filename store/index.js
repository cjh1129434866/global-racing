import Vue from 'vue'
import Vuex from 'vuex'
import baseData from './baseData'
import url from './url'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		baseData,
		url
	}
})