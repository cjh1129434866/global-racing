<template>
	<view class="mining">
		<view class="top">
			<view class="node">
				<view class="whole">
					全网节点： 556666556.555CPT
				</view>
				<view class="my">我的节点: 56656565.55CPT</view>
			</view>
			<view class="rule-wapper">
				<view class="play alignCenter">玩法规则</view>
				<view class="welfare alignCenter">空投福利</view>
			</view>
		</view>
		<view class="middle">
			<view class="img"><image src="../../static/commodity/car1.png" class="carImg"></image></view>
			<view class="fule">
				<view class="percent">
					<view v-for="(item, index) in 20" :key="index" class="scale"></view>
					<view class="value-waper baseFontColor">
						<view class="value">78.55%</view>
						<view class="line">
							<view class="line1"></view>
							<view class="line2"></view>
						</view>
					</view>
				</view>
				<view class="progress">
					<view class="has"></view>
				</view>
			</view>
		</view>
		<view class="bottom borderbox">
			<view class="left">
				<view class="btn alignCenter accelerate">节点加速</view>
				<view class="btn alignCenter">召唤车友</view>
			</view>
			<view class="right btn alignCenter">排行榜</view>
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
.mining{
	.top{
		display: flex;
		justify-content: space-between;
		padding: 50upx 40upx 0;
		height: 200upx;
		color: #E4880A;
		font-size: 28upx;
		.node{
			line-height: 50upx;
		}
		.rule-wapper{
			width: 200upx;
			text-align: right;
			.play, .welfare{
				display: inline-block;
				margin-bottom: 30upx;
				width: 160upx
				height: 50upx;
				line-height: 50upx;
				border-radius: 30upx;
			}
			.play{
				border: 1upx solid #E4880A;
			}
			.welfare{
				color: #fff;
				background: #E4880A;
			}
		}
	}
	.middle{
		margin-top: 100upx;
		padding: 0 20upx;
		display: flex;
		.img{
			width: 490upx;
			height: 496upx;
			.carImg{
				width: 100%;
				height: 490upx;
			}
		}
		.fule{
			width: 210upx;
			display: flex;
			justify-content: flex-end;
			.percent{
				position: relative;
				width: 20upx;
				height: 496upx;
				border-right: 2upx solid #676776;
				.scale{
					margin-bottom: 25upx;
					width: 20upx;
					height: 2upx;
					background: #676776;
				}
				.value-waper{
					position: absolute;
					left: -160upx;
					top: 40upx;
					font-size: 28upx;
					.line{
						.line1, .line2{
							width: 2upx;
							background: #fff;
						}
						.line1{
							margin-left: 68upx;
							margin-top: 20upx;
							height: 100upx;
							transform: rotate(-10deg);
						}
						.line2{
							margin-left: 94upx;
							margin-top: -8upx;
							height: 50upx;
							transform: rotate(-45deg);
						}
					}
				}
			}
			.progress{
				margin-left: 20upx;
				width: 40upx;
				background: pink;
				border-radius: 40upx;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				.has{
					height: 300upx
					background: #CC6633;
					border-radius: 0 0 40upx 40upx;
				}
			}
		}
	}
	.bottom{
		padding: 188upx 40upx;
		height: 52upx;
		display: flex;
		justify-content: space-between;
		width: 100%;
		.btn{
			display: inline-block;
			width: 160upx;
			height: 50upx;
			line-height: 50upx;
			border-radius: 30upx;
			border: 1upx solid #E4880A;
			color: #E4880A;
			font-size: 28upx;
			&.accelerate{
				margin-right: 20upx;
			}
		}
	}
}
</style>
