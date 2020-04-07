import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import { i18n, changeLanguage } from './local/index.js'
import store from './store/index.js'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$changeLanguage = changeLanguage
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
	i18n,
	store,
    ...App
})
app.$mount()
