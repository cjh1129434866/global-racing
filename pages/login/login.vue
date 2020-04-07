<template>
	<view class="login">
		<view class="logo">
			<image src="../../static/commodity/car1.png" mode="" class="logoImg"></image>
		</view>
		<view class="loginArea frontColor baseFontColor">
			<template v-for="(item, key, index) in formList">
				<view class="inpView">
					<inline-input
						:property= "item"
						v-model= 'item.value'
						v-on:onenvents= "somethings">
					</inline-input>
				</view>
			</template>
		</view>
		<view class="btn baseFontColor">
			<button type="primary" class="loginSubmit">登陆</button>
		</view>
		<view class="router fontSize28 baseFontColor">
			<navigator url="../register/register">
				<view class="reg heightLightTextColor">注册新账号</view>
			</navigator>
			<navigator url="../accountAppeal/accountAppeal">
				<view class="accountAppeal">账号申诉</view>
			</navigator>
			<navigator url="../forgetPw/forgetPw">
				<view class="forget">忘记密码</view>
			</navigator>
		</view>
		<!-- picker -->
		<mpvue-picker
			:themeColor="themeColor"
			ref="mpvuePicker"
			:mode="mode"
			:deepLength="deepLength"
			:pickerValueDefault="pickerValueDefault"
			@onConfirm="onConfirm"
			@onCancel="onCancel"
			:pickerValueArray="pickerValueArray"
		></mpvue-picker>
	</view>
</template>

<script>
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue'
	import inlineInput from '@/components/inlineInput.vue'
	import { mapMutations } from 'vuex'
	
	export default {
		components: {
			inlineInput,
			mpvuePicker
		},
		data() {
			return {
				formList: {},
				themeColor: '#007AFF',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray: [],
				languages: [{value:"zh-CN", label: "简体中文"}, {value: "en_US", label: 'English'}, {value: "el_GR", label: '繁體中文'}]
			}
		},
		onNavigationBarButtonTap (e) {
			if (e.index === 0) {
				this.showSinglePicker()
			}
		},
		onLoad() {
			this.formList = this.formList_obj
		},
		onReady () {
			let langText = ''	
			const lang = this.$store.state.baseData.lang
			switch (lang) {
				case 'zh-CN':
					langText = '简体中文'
					break;
				case 'en_US':
					langText = 'English'
					break;
				case 'el_GR':
					langText = '繁體中文'
					break;
				default:
					langText = 'English'
			}
			this.setStyle(0, langText)
		},
		computed: {
			formList_obj () {
				return {
					account: {
						title: "账号",
						formType: "text",
						name: "account",
						disabled: false,
						placeholder: "手机/邮箱",
						value: ""
					},
					loginPw: {
						title: "登陆密码",
						formType: "password",
						name: "loginPw",
						disabled: false,
						placeholder: '登陆密码(8-16位字母+数字组合)',
						value: '',
						isShowEye: true
					}
				}
			}
		},
		watch: {
			'formList_obj' (val) {
				this.formList = val
			}
		},
		methods: {
			somethings: function () {},
			...mapMutations (['changeLang']),
			onCancel(e) {
				console.log(e);
			},
			// 单列
			showSinglePicker() {
				this.pickerValueArray = this.languages;
				this.mode = 'selector';
				this.deepLength = 1;
				this.pickerValueDefault = [0];
				this.$refs.mpvuePicker.show();
			},
			onConfirm(e) {
				this.$changeLanguage(e.value[0])
				this.changeLang(e.value[0])
				this.setStyle(0, e.label);
			},
			/**
			 * 修改导航栏buttons
			 * index[number] 修改的buttons 下标索引，最右边索引为0
			 * text[string] 需要修改的text 内容
			 */
			setStyle(index, text) {
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				if (text.length > 4) {
					text = text.substr(0, 4) + '...';
				}
				// #ifdef APP-PLUS
				let currentWebview = page.$getAppWebview();
				let titleNView = currentWebview.getStyle().titleNView;
				// 添加文字过长截取为3个字符，请根据自己业务需求更改
				titleNView.buttons[0].text = text;
				currentWebview.setStyle({
					titleNView: titleNView
				});
				// #endif
				// #ifdef H5
				// h5 临时方案
				document.getElementsByClassName('uni-btn-icon')[1].innerText = text;
				// #endif
			}
		}
	}
</script>

<style lang="stylus" scoped>
.login{
	.logo{
		display: flex;
		width: 100%;
		height: 400upx;
		.logoImg{
			margin: auto;
			width: 250upx;
			height: 250upx;
		}
	}
	.loginArea{
		padding: 0 20upx;
	}
	.btn{
		margin-top: 50upx;
		.loginSubmit{
			width: 90%;
		}
	}
	.router{
		display: flex;
		justify-content: space-between;
		padding: 0 40upx;
		margin-top: 30upx;
	}
}
</style>
