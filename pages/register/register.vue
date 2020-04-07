<template>
	<view class="register">
		<view class="reg baseFontColor frontColor">
			<view class="chooseTab alignCenter">
				<view class="tab" :class="{active: activeTab === 'mobile'}" @click="changeTab('mobile')">手机注册</view>
				<view class="tab" :class="{active: activeTab === 'email'}" @click="changeTab('email')">邮箱注册</view>
			</view>
			<!-- 注册表单 手机 -->
			<view v-if="activeTab === 'mobile'" class="inpArea">
				<!-- 国家区号 -->
				<view class="countryCode" @tap="toCountryCodeIndex">
					<inline-input
						:property ="formList.countryCode"
						:value = 'formList.countryCode.value'
						v-on:onenvents= "somethings">
						</inline-input>
				</view>
				<!-- 手机号码 -->
				<view class="phone">
					<inline-input
						:property ="formList.phone"
						v-model = 'formList.phone.value'
						v-on:onenvents= "somethings">
						</inline-input>
				</view>
				<!-- 验证码 -->
				<view class="verifyCode">
					<inline-input
						:property ="formList.verifyCode"
						v-model  = 'formList.verifyCode.value'
						v-on:onenvents= "somethings">
						<countDown @count='codeClick' :isCount="isCount" @changeIsCount='changeIsCount'></countDown>
						</inline-input>
				</view>
				<!-- 登陆密码 -->
				<view class="verifyCode">
					<inline-input
						:property="formList.loginPw"
						v-model= 'formList.loginPw.value'
						v-on:onenvents= "somethings">
						</inline-input>
				</view>
				<!-- 邀请码 -->
				<view class="verifyCode">
					<inline-input
						:property="formList.inviteCode"
						v-model= 'formList.inviteCode.value'
						v-on:onenvents= "somethings">
						</inline-input>
				</view>
			</view>
			<!-- 注册表单 邮箱 -->
			<view v-if="activeTab === 'email'" class="inpArea">
				<!-- 邮箱 -->
				<view class="email">
					<inline-input
						:property="formList.email"
						v-model= 'formList.email.value'
						v-on:onenvents= "somethings">
						</inline-input>
				</view>
				<!-- 验证码 -->
				<view class="verifyCode">
					<inline-input
						:property ="formList.verifyCode"
						v-model  = 'formList.verifyCode.value'
						v-on:onenvents= "somethings">
						<countDown @count='codeClick' :isCount="isCount" @changeIsCount='changeIsCount'></countDown>
						</inline-input>
				</view>
				<!-- 登陆密码 -->
				<view class="verifyCode">
					<inline-input
						:property="formList.loginPw"
						v-model= 'formList.loginPw.value'
						v-on:onenvents= "somethings">
						</inline-input>
				</view>
				<!-- 邀请码 -->
				<view class="verifyCode">
					<inline-input
						:property="formList.inviteCode"
						v-model= 'formList.inviteCode.value'
						v-on:onenvents= "somethings">
						</inline-input>
				</view>
			</view>
			<!-- 用户协议 -->
			<view class="agree fontSize28">
				<label class="radio"><radio value="r1" checked="true" color="#000066" />已阅读并同意《用户协议》</label>
			</view>
		</view>
		<view class="btn"><button type="primary" @tap="registerSubmit">注册</button></view>
		<view class="toLogin fontSize28 baseFontColor">已有账号，<navigator url="../login/login"><text class="heightLightTextColor">去登陆</text></navigator></view>
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
	import { mapMutations } from 'vuex'
	import inlineInput from '@/components/inlineInput.vue'
	import countDown from '@/components/countDown.vue'
	
	export default {
		components: {
			mpvuePicker,
			inlineInput,
			countDown
		},
		data() {
			return {
				themeColor: '#007AFF',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray: [],
				languages: [{value:"zh-CN", label: "简体中文"}, {value: "en_US", label: 'English'}, {value: "el_GR", label: '繁體中文'}],
				activeTab: 'mobile',
				formList: {},
				countryCode: '',
				isCount: false // 验证码是否倒计时状态
			}
		},
		onNavigationBarButtonTap (e) {
			if (e.index === 0) {
				this.showSinglePicker()
			}
		},
		onLoad (params) {
			this.formList = this.formList_obj
			if (params.countryCode) {
				this.countryCode = params.countryCode
				const number = this.countryCode.match(/\d+/g)
				this.countryCode = this.countryCode.split(number)[0] + '+' + number
				this.formList_obj.countryCode.value = this.countryCode
			}
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
					countryCode: {
						title: "国家区号",
						formType: "text",
						name: "countryCode",
						disabled: true,
						placeholder: '',
						value: '请选择国家区域',
						maxlength: -1,
						isShowArrow: true
					},
					phone: {
						title: "手机号码",
						formType: "number",
						name: "phone",
						disabled: false,
						placeholder: '请输入手机号码',
						value: '',
						maxlength: -1,
						isShowArrow: false
					},
					verifyCode: {
						title: '验证码',
						formType: "number",
						name: "verifyCode",
						disabled: false,
						placeholder: '请输入验证码',
						value: '',
						maxlength: 6,
					},
					loginPw: {
						title: "登陆密码",
						formType: "password",
						name: "loginPw",
						disabled: false,
						placeholder: '登陆密码(8-16位字母+数字组合)',
						value: '',
						isShowEye: true
					},
					inviteCode: {
						title: "邀请码",
						formType: "text",
						name: "inviteCode",
						disabled: false,
						placeholder: "请输入邀请码",
						value: ""
					},
					email: {
						title: '邮箱',
						formType: 'text',
						name: "email",
						disabled: false,
						placeholder: "请输入邮箱",
						value: ""
					}
				}
			}
		},
		watch: {
			"formList_obj" (val) {
				this.formList = val
			}
		},
		methods: {
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
			},
			// 切换注册方式
			changeTab: function (type) {
				this.activeTab = type
			},
			// 去国家区号页
			toCountryCodeIndex: function () {
				uni.navigateTo({
					url: '../countryCode/countryCode',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			// 点击发送验证码按钮
			codeClick: function () {
				this.isCount = true
			},
			// 改变是否倒计时状态
			changeIsCount: function () {
				this.isCount = false
			},
			somethings: function () {},
			// 注册提交
			registerSubmit: function () {
				console.log(this.formList.phone.value)
			}
		},
		onBackPress() {
			if (this.$refs.mpvuePicker.showPicker) {
				this.$refs.mpvuePicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvuePicker.showPicker) {
				this.$refs.mpvuePicker.pickerCancel();
			}
		}
	}
</script>

<style lang="stylus" scoped>
.register{
	padding: 60upx 20upx 20upx;
	.reg{
		.chooseTab{
			display: flex;
			height: 80upx;
			line-height: 80upx;
			border-bottom: 4upx solid #000066;
			.tab{
				width: 50%;
				&.active{
					position: relative;
					&::after{
						position: absolute;
						content: '';
						left: 0;
						bottom: -4upx;
						width: 100%;
						height: 4upx;
						background: #fff;
					}
				}
			}
		}
		/* 表单区域 */
		.inpArea{
			margin-top: 50upx;
		}
		.agree{
			padding-left: 20upx;
			height: 80upx;
			line-height: 80upx;
		}
	}
	.btn{
		margin-top: 50upx;
		button{
			width: 90%;
		}
	}
	.toLogin{
		display: flex;
		margin-top: 30upx;
		justify-content: flex-end;
	}
}
</style>
