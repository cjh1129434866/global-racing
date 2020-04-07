<template>
	<view class="poster baseFontColor">
		<image src="../../static/commodity/car1.png" mode="" class="bigImg"></image>
		<view class="code">
			<image src="../../static/commodity/car1.png" mode="" class="qrcode"></image>
			<view class="text alignCenter fontSize28">扫码立即参与全球快车</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
.poster{
	position: fixed;
	left: 0;
	top: 88upx;
	width: 100%;
	height: 100%;
	.bigImg{
		width: 100%;
		height: calc(100% - 88upx);
	}
	.code{
		position: absolute;
		left: 50%;
		top: 40%;
		transform: translate(-50%, -50%);
		width: 300upx;
		height: 400upx;
		.qrcode{
			width: 300upx;
			height: 300upx;
		}
		.text{
			line-height: 100upx;
		}
	}
}
</style>
