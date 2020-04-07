<template>
	<view class="customerService baseFontColor">
		<view class="artist-list frontColor borderRadius10">
			<view class="artist-list-item borderbox fontSize28">
				<view>微信客服</view>
				<view class="check borderRadius5 alignCenter">
					<navigator url="../artist/artist">查看</navigator>
				</view>
			</view>
			<view class="artist-list-item borderbox fontSize28">
				<view>微信客服</view>
				<view class="check borderRadius5 alignCenter">
					<navigator url="../artist/artist">查看</navigator>
				</view>
			</view>
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
.customerService{
	.artist-list{
		margin: 20upx auto 0;
		width: 90%;
		.artist-list-item{
			display: flex;
			justify-content: space-between;
			padding: 0 20upx;
			height: 100upx;
			line-height: 100upx;
			border-bottom: 2upx solid #000066;
			.check{
				width: 100upx;
				height: 50upx;
				background: #4F82DE;
				align-self: center;
				line-height: 50upx;
			}
		}
	}
}
</style>
