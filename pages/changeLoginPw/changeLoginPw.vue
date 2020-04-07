<template>
	<view class="changeLoginPw baseFontColor">
		<view class="info fontSize28">
			<view class="text1">*为确保账号安全，需要验证当前手机</view>
			<view class="text2">当前绑定手机号码：18936832085</view>
		</view>
		<!-- 获取验证码 -->
		<view class="inp">
			<inline-input
				:property ="formListVerify.verifyCode"
				v-model = 'formListVerify.verifyCode.value'
				v-on:onenvents= "somethings"
				>
				<countDown @count='codeClick' :isCount="isCount" @changeIsCount='changeIsCount'></countDown>
			</inline-input>
		</view>
		<!-- 登陆密码 -->
		<view class="inp">
			<template v-for="(item, key, index) in formList">
				<inline-input
					:property ="item"
					v-model = 'item.value'
					v-on:onenvents= "somethings"
					>
				</inline-input>
			</template>
		</view>
		
		<view class="btn">
			<button type="primary">提交</button>
		</view>
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
				formListVerify: {},
				isCount: false
			}
		},
		onLoad () {
			this.formList = this.formList_obj
			this.formListVerify = this.formListVerify_obj
		},
		watch: {
			'formList_obj' (val) {
				this.formList = val
			}
		},
		computed: {
			formList_obj () {
				return {
					newLoginPw: {
						title: "新密码",
						formType: "password",
						name: "newLoginPw",
						disabled: false,
						placeholder: '请输入密码',
						value: '',
						isShowEye: true
					}
				}
			},
			formListCountry_obj () {
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
					}
				}
			},
			formListVerify_obj () {
				return {
					verifyCode: {
						title: '短信验证',
						formType: "number",
						name: "verifyCode",
						disabled: false,
						placeholder: '请输入验证码',
						value: '',
						maxlength: 6,
					}
				}
			}
		},
		methods: {
			somethings: function (data) {
				console.log(data)
			},
			codeClick () {
				this.isCount = true
			},
			changeIsCount () {
				this.isCount = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
.changeLoginPw{
	.info{
		padding: 20upx;
	}
	.btn{
		margin-top: 50upx;
		button{
			width: 90%;
		}
	}
}	
</style>
