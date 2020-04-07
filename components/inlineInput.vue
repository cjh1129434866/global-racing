<template>
	<view class="wgt-inlineInput fontSize28">
		<view class="textOrIcon">
			<view class="title" v-if="property.title">{{property.title}}</view>
			<view class="icon" v-else>
				<uni-icon class="icon-warning" :size="20" type="email" />
			</view>
		</view>
		<!-- 密码 -->
		<template v-if="property.formType === 'password'">
			<view class="inp textOrPassword">
				<input 
					:name="property.name"
					:class="property.name"
					:disabled="property.disabled"
					:placeholder="property.placeholder || ''"
					:password="showPassword"
					:value="value"
					@input="handle"
					/>
					<view v-if="property.isShowEye" class="uni-icon alignCenter" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword">
						<uni-icon class="uni-icon-wrapper" :size="20" type="eye" />
					</view>
			</view>
		</template>
		<!-- 文本 或 数字-->
		<template v-if="property.formType === 'text' || property.formType === 'number'">
			<view class="inp textOrPassword">
				<input 
					:type="property.formType"
					:name="property.name"
					:class="property.name"
					:disabled="property.disabled"
					:placeholder="property.placeholder || ''"
					:maxlength="property.maxlength"
					:value="value"
					@input="handle"
					/>
					<view v-if="property.isShowArrow" class="uni-icon alignCenter">
						<uni-icon class="uni-icon-wrapper" :size="20" type="arrowright" />
					</view>
					<slot/>
			</view>
		</template>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		props: {
			value: {
				default: ''
			},
			property: {
				type: Object,
				default: {}
			}
		},
		components: {
			uniIcon
		},
		data() {
			return {
				showPassword: false
			}
		},
		methods: {
			handle: function (e) {
				let obj = {
					handleType: 'input',
					name: this.property.name,
					value: e.detail.value
				}
				this.$emit('input', obj.value)
				this.$emit('onenvents', obj)
			},
			changePassword () {
				this.showPassword = !this.showPassword;
			}
		}
	}
</script>

<style lang="stylus" scoped>
.wgt-inlineInput{
	display: flex;
	padding: 0 20upx;
	background:#003366;
	line-height: 80upx;
	border-bottom: 2upx solid #000066;
	.textOrIcon{
		width: 20%;
	}
	.inp{
		width: 80%;
		input{
			height: 80upx;
			width: 70%;
		}
	}
	.textOrPassword{
		display:flex; 
		flex-wrap:nowrap; 
		justify-content: space-between;
		.uni-icon{
			width:40px; 
			height:80upx; 
			line-height:80upx; 
			flex-shrink:0;
		}
	}
}
</style>
