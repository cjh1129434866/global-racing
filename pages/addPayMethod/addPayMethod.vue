<template>
	<view class="addPayMethod baseFontColor">
		<view class="frontColor autoArea borderRadius5">
			<form @submit="formSubmit" @reset="formReset" >
				<view class="item fontSize28">
					<label for="name" class="label">姓名</label>
					<input type="text" name="name" placeholder="请输入姓名" value="" />
				</view>
				<view class="item fontSize28">
					<label for="account"  class="label">账号</label>
					<input type="text" name="account" placeholder="请输入账号" value="" />
				</view>
				<view class="item upload fontSize28">
					<label for="qrcode" class="label">收款二维码</label>
					<view class="showQrcode" @tap="chooseQrcode">
						<image :src="qrCodeImgTempFilePath" v-if="qrCodeImgTempFilePath" class="qrcode" mode=""></image>
						<view class="text" v-else>点击上传二维码</view>
					</view>
				</view>
				<view class="">
					<button type="primary" form-type="submit"></button>
				</view>
			</form>
		</view>
		<!-- bank -->
		<view class="frontColor autoArea borderRadius5">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [
					{
						"name": "支付宝",
						"id": "alipay"
					},
					{
						"name": "微信",
						"id": "wechat"
					},
					{
						"name": "银行卡",
						"id": "bank"
					}
				],
				qrCodeImgTempFilePath: ''
			}
		},
		onLoad(params) {
			let index = params.index
			const _this = this
			uni.setNavigationBarTitle({
				title: "添加" + _this.array[index].name 
			})
		},
		methods: {
			chooseQrcode: function () {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						let tempFilePath = res.tempFilePaths[0]	
						this.qrCodeImgTempFilePath = tempFilePath
					}
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
.addPayMethod{
	padding: 20upx;
	.autoArea{
		.item{
			display: flex;
			padding-left: 20upx;
			height: 80upx;
			line-height: 80upx;
			align-items: center;
			border-bottom: 2upx solid #000066;
			.showQrcode{
				display: flex;
				width: calc(100% - 200upx);
				height: 100%;
				border: 2upx dashed #000066;
				.qrcode{
					width: 100%;
					height: 100%;
				}
				.text{
					margin: auto;
				}
			}
		}
		.upload{
			padding: 20upx;
			height: 250upx;
		}
		.label{
			width: 200upx;
		}
	}
}
</style>
