let lang = function () {
	return uni.getStorageSync('lan')
}
export default {
	state: {
		lang: lang()
	},
	mutations: {
		changeLang (state, data) {
			state.lang = data
		}
	}
}