<template>
	<view class="recharge baseFontColor">
		<view class="qrCode frontColor">
			<view class="title fontSize30 alignCenter">充值二维码</view>
			<view class="img"><image src="../../static/commodity/car1.png" mode="" class="qrCodeImg"></image></view>
		</view>
		<view class="address frontColor">
			<view class="address-orerate">
				<view class="address-orerate-text">充值地址</view>
				<view>
					<button class="address-orerate-btn" type="primary" size="mini" @tap="copyAddress">复制账户</button>
					<!-- #ifdef H5 -->
					<input type="text" class="addressText" ref="addressTextInp" :value="addressText" name="addressText">
					<!-- #endif -->
				</view>
			</view>
			<view class="address-text fontSize28">{{addressText}}</view>
		</view>
		<!-- 表单 -->
		<view class="operate frontColor">
			<template v-for="(item, key, index) in formList">
				<view class="inpView">
					<inline-input
						:property= "item"
						v-model= 'item.value'
						v-on:onenvents= "somethings">
					</inline-input>
				</view>
			</template>
			<!-- 充值凭证 -->
			<view class="certificate fontSize28">
				<view class="text">充值凭证</view>
				<view class="image alignCenter" @tap="chooseImage">
					点击是上传付款凭证
					<image v-if="certificateSrc" :src="certificateSrc" class="certificateImg"></image>
				</view>
			</view>
			<view class="userPrompt fontSize28">*请上传带有付款日期的付款凭证</view>
		</view>
		<!-- btn -->
		<view class='btn'>
			<button type="primary" class="submit">提交</button>
		</view>
	</view>
</template>

<script>
	import inlineInput from '@/components/inlineInput.vue'
	
	export default {
		components: {
			inlineInput
		},
		data() {
			return {
				formList: {},
				certificateSrc: '',
				addressText: 'asdfawerfqwe455455'
			}
		},
		onLoad() {
			this.formList = this.formList_obj
		},
		onReady () {
			// #ifndef H5
			uni.setClipboardData({
				data: this.addressText
			})
			// #endif
		},
		computed: {
			formList_obj () {
				return {
					number: {
						title: "充值数量",
						formType: "number",
						name: "number",
						disabled: false,
						placeholder: '请输入数量',
						value: '',
						maxlength: -1,
						isShowArrow: false
					},
					txhash: {
						title: "Txhash",
						formType: "text",
						name: "txhash",
						disabled: false,
						placeholder: '请输入交易Txhash',
						value: '',
						maxlength: -1,
						isShowArrow: false
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
			// 选择凭证
			chooseImage: function () {
				const _this = this
				uni.chooseImage({
					count: 1,
					success: function (e) {
						_this.certificateSrc = e.tempFilePaths[0]
						console.log(_this.certificateSrc)
					}
				})
			},
			// 复制地址
			copyAddress () {
				// #ifndef H5
				uni.getClipboardData({
					success: function () {
						uni.showToast({
							title: "复制成功"
						})
					}
				})
				// #endif
				// #ifdef H5
				this.$refs.addressTextInp.$el.getElementsByTagName('input')[0].select()
				document.execCommand('copy')
				uni.showToast({
					title: "复制成功"
				})
				// #endif
			}
		}
	}
</script>

<style lang="stylus" scoped>
.recharge{
	.qrCode{
		padding-top: 50upx;
		.title{
			line-height: 80upx;
		}
		.img{
			display: flex;
			width: 100%;
			height: 500upx;
			.qrCodeImg{
				margin: auto;
				width: 400upx;
				height: 400upx;
			}
		}
	}
	.address{
		padding: 0 30upx;
		.address-orerate{
			display: flex;
			justify-content: space-between;
			line-height: 60upx;
			font-size: 34upx;
			.address-orerate-btn{
				margin: 0 20upx;
			}
			.addressText{
				position: absolute;
				left: -99999upx;
				top: -99999upx;
			}
		}
		.address-text{
			line-height: 60upx;
		}
	}
	.operate{
		margin-top: 30upx;
		.certificate{
			padding: 20upx 20upx;
			display: flex;
			height: 300upx
			.text{
				width: 150upx;
			}
			.image{
				position: relative;
				width: calc(100% - 154upx);
				line-height: 300upx;
				border: 2upx dashed #000066;
				.certificateImg{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
				}
			}
		}
		.userPrompt{
			padding-left: 174upx;
			height: 80upx;
		}
	}
	.btn{
		margin-top: 50upx;
		padding-bottom: 50upx;
		.submit{
			width: 90%;
		}
	}
}
</style>
