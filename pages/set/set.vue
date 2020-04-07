<template>
	<view class="set baseFontColor">
		<view class="marginAuto">
			<uni-list>
				<navigator url="../changeNickName/changeNickName">
					<uni-list-item title="用户名" showContent="胖虎189"/>
				</navigator>
				<uni-list-item title="当前账户" showContent="1894556655" :disabled="true" :showArrow="false"/>
				<navigator url="../changeLoginPw/changeLoginPw">
					<uni-list-item title="登陆密码"/>
				</navigator>
				<uni-list-item title="支付密码"/>
				<navigator url="../accountsReceivable/accountsReceivable">
					<uni-list-item title="收款账户"/>
				</navigator>
				<picker mode="selector" :range="range" @change="changeLanguage">
					<uni-list-item :title="langTitle"/>
				</picker>
				<navigator url="../customerService/customerService">
					<uni-list-item title="客服中心"/>
				</navigator>
				<navigator url="../artist/artist">
					<uni-list-item title="关于我们"/>
				</navigator>
			</uni-list>
			<view class="exit">
				<button type="primary">退出账号</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import { mapMutations } from 'vuex'
	
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				langTitle: '',
				range: ['简体中文', 'English', '繁體中文']
			}
		},
		onReady () {
			const lang = this.$store.state.baseData.lang
			switch (lang) {
				case 'zh-CN':
					this.langTitle = '简体中文'
					break;
				case 'en_US':
					this.langTitle = 'English'
					break;
				case 'el_GR':
					this.langTitle = '繁體中文'
					break;
				default:
					this.langTitle = 'English'
			}
		},
		methods: {
			...mapMutations (['changeLang']),
			changeLanguage: function (e) {
				switch (e.detail.value) {
					case 0:
						this.langTitle = '简体中文'
						this.$changeLanguage('zh-CN')
						this.changeLang('zh-CN')
						break;
					case 1:
						this.langTitle = 'English'
						this.$changeLanguage('en_US')
						this.changeLang('en_US')
						break;
					case 2:
						this.langTitle = '繁體中文'
						this.$changeLanguage('el_GR')
						this.changeLang('el_GR')
						break;
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
.set{
	padding: 20upx;
	.marginAuto{
		.exit{
			margin-top: 50upx;
			button{
				width: 90%;
			}
		}
	}
}
</style>
