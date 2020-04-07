<template>
	<view class="walletAssets frontColor baseFontColor">
		<view class="assets-wapper">
			<view class="assets">
				<view class="assets-info borderbox">
					<view class="text">总资产折合（USDT）</view>
					<view class="total">9.245232435</view>
					<view class="totalCny">≈4523453.21CNY</view>
				</view>
				<view class="eyes">
					<image src="../static/tabBarIcon/me.png" class="eyesIcon"></image>
				</view>
			</view>
		</view>
	  <!-- 操作 -->
		<view class="operate-wapper">
			<view class="operate alignCenter">
				<view class="item">
					<navigator url="../../pages/recharge/recharge">
						<image src="../static/tabBarIcon/me.png" class="icon"></image>
						<view class="text">充值</view>
					</navigator>
				</view>
				<view class="item">
					<image src="../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">转账</view>
				</view>
				<view class="item">
				  <image src="../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">提币</view>
				</view>
				<view class="item">
					<image src="../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">C2C</view>
				</view>
				<view class="item">
				  <image src="../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">兑换</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus" scoped>
.walletAssets{
	padding-bottom: 30upx;
	.assets-wapper{
		padding-top: 20upx;
		display: flex;
		height: 250upx;
		.assets{
			position: relative;
			margin: auto;
			width: 90%;
			height: 100%;
			border-radius: 10upx;
			background: #6699FF;
			.assets-info{
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding: 0 30upx;
				width: 100%;
				height: 100%;
				font-size: 28upx;
				.total{
					font-size: 50upx;
					line-height: 100upx;
				}
			}
			.eyes{
				position: absolute;
				right: 30upx;
				top: 30upx;
				.eyesIcon{
					width: 30upx;
					height: 30upx;
				}
			}
		}
	}
	/* 操作 */
	.operate-wapper{
		display: flex;
		margin-top: 50upx ;
		.operate{
			display: flex;
			justify-content: space-around;
			margin: auto;
			width: 90%;
			.item{
				.icon{
					width: 50upx;
					height: 50upx;
				}
				.text{
					font-size: 28upx;
				}
			}
		}
	}
}
</style>
