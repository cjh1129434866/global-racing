<template>
	<view class="forgetPw baseFontColor">
		<view class="logo">
			<image src="../../static/commodity/car1.png" mode="" class="logoImg"></image>
		</view>
		<view class="inpArea frontColor">
			<!-- 账号 -->
			<view class="account">
				<inline-input
					:property ="formList.account"
					:value = 'formList.account.value'
					v-on:onenvents= "somethings">
				</inline-input>
			</view>
			<!-- 验证码 -->
			<view class="">
				<inline-input
					:property ="formList.verifyCode"
					:value = 'formList.verifyCode.value'
					v-on:onenvents= "somethings">
					<countDown @count='codeClick' :isCount="isCount" @changeIsCount='changeIsCount'></countDown>
				</inline-input>
			</view>
			<!-- 新密码 -->
			<view class="newPw">
				<inline-input
					:property ="formList.newPw"
					:value = 'formList.newPw.value'
					v-on:onenvents= "somethings">
				</inline-input>
			</view>
		</view>
		<!-- btn -->
		<view class="btn"><button type="primary" class="forgetPwSubmit">修改</button></view>
	</view>
</template>

<script>
	import inlineInput from '@/components/inlineInput.vue'
	import countDown from '@/components/countDown.vue'
	export default {
		components: {
			inlineInput,
			countDown
		},
		data() {
			return {
				formList: {},
				isCount: false
			}
		},
		onLoad() {
			this.formList = this.formList_obj
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
					verifyCode: {
						title: '验证码',
						formType: "number",
						name: "verifyCode",
						disabled: false,
						placeholder: '请输入验证码',
						value: '',
						maxlength: 6,
					},
					newPw: {
						title: "登陆密码",
						formType: "password",
						name: "newPw",
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
			// 验证码倒计时
			codeClick: function () {
				this.isCount = true
			},
			// 改变是否倒计时状态
			changeIsCount: function () {
				this.isCount = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
.forgetPw{
	padding: 0 20upx;
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
	.btn{
		margin-top: 50upx;
		.forgetPwSubmit{
			width: 90%;
		}
	}
}
</style>
