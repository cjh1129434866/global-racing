import Vue from 'vue'
import VueI18n from 'vue-i18n' 
import zh from './zh.js'
import el from './el.js'
import en from './en.js'

Vue.use(VueI18n)  

let lang = function () {
	return uni.getStorageSync('lan') || 'en_US'
}

export var i18n = new VueI18n({
	locale: lang(),
	messages: {
		"zh-CN": {
			...zh
		},
		"el_GR": {
			...el
		},
		"en_US": {
			...en
		}
	}
})

// 这一行 一定要写 不然 app上 无法调用 国际化
Vue.prototype._i18n = i18n

export function changeLanguage (lang) {
	i18n.locale = lang
	uni.setStorageSync('lan', lang)
}