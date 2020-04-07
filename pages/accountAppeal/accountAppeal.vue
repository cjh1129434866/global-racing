<template>
	<view class="accountAppeal baseFontColor">
		<view class="inp-wapper">
			<view class="inp">
				<inline-input
					:property="formList.account"
					v-model= 'formList.account.value'
					v-on:onenvents= "somethings">	
				</inline-input>
			</view>
			<view class="inp">
				<inline-input
					:property="formList.verifyCode"
					v-model= 'formList.verifyCode.value'
					v-on:onenvents= "somethings">	
					<countDown @count='codeClick' :isCount="isCount" @changeIsCount='changeIsCount'></countDown>
				</inline-input>
			</view>
			<view class="textArea-wapper frontColor">
				<view class="text fontSize30">申诉内容</view>
				<view class="textArea">
					<textarea @blur="bindTextAreaBlur" placeholder="请输入申诉内容" :auto-height="true" maxlength="200"/>
				</view>
			</view>
		</view>
		<!-- btn -->
		<view class="btn">
			<button class="submit" type="primary">提交</button>
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
				isCount: false
			}
		},
		onLoad () {
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
			// 点击发送验证码按钮
			codeClick: function () {
				this.isCount = true
			},
				// 改变是否倒计时状态
			changeIsCount: function () {
				this.isCount = false
			},
			// textArea 失去焦点
			bindTextAreaBlur: function () {}
		}
	}
</script>

<style lang="stylus" scoped>
.accountAppeal{
	.inp-wapper{
		margin-top: 50upx;
		.textArea-wapper{
			display: flex;
			padding: 20upx;
			min-height: 200upx;
			.text{
				width: 140upx;
			}
			.textArea{
				width: calc(100% - 140upx);
			}
		}
	}
	.btn{
		margin-top: 50upx;
		.submit{
			width: 90%;
		}
	}
}
</style>
