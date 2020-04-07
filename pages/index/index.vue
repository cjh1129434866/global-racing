<template>
	<view class="content bodyBg">
		<!-- #ifdef H5 -->
		<uni-notice-bar 
		  :show-icon="true" 
			:single="true" 
			background-color="#003366"
			color="#fff" text="8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。" />
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<uni-notice-bar 
			:show-icon="true" 
			:scrollable="true" 
			:single="true" 
			background-color="#003366"
			color="#fff"
			text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		<!-- #endif -->	
		<!-- 轮播 -->	
		<view class="slide-wapper borderbox">
			<view class="slide">
				<swiper 
				class="swiper"
				:indicator-dots="true" 
				:autoplay="true" 
				:interval="3000" 
				:duration="1000" 
				indicator-color="#999999" 
				indicator-active-color="#FF9900">
					<swiper-item>
						<image src="http://122.152.205.72:88/group1/M00/00/03/CpoxxFw1ZauAKb7sAAe1cnsz_BQ313.png" class="slideImg"></image>
					</swiper-item>
					<swiper-item>
						<image src="http://122.152.205.72:88/group1/M00/00/03/CpoxxFw1ZauAKb7sAAe1cnsz_BQ313.png" class="slideImg"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
	
	  <!-- 选项卡 -->
		<view class="usdtOrMoney">
			<button class="usdt" :class="{activeTab: activeTab}" @tap="chooseTab('usdt')">USDT区</button>
			<button class="money" :class="{activeTab: !activeTab}" @tap="chooseTab('money')">现金区</button>
		</view>
		<!-- 产品列表 -->
		<view class="commodity-list">
			<view class="usdtArea" v-if="activeTab"> 
				<view class="commodity frontColor">
					<view class="img">
						<image class="image" src="../../static/commodity/car1.png" mode="scaleToFill"></image>
					</view>
					<view class="info">
						<view class="info-title">保时捷-K58</view>
						<view class="info-price info-text"><span class="text">价值:</span><span class="value">300-800CNY</span></view>
						<view class="info-time info-text"><span class="text">抢购时间:</span><span class="value">13:30</span><span class="value">-</span><span class="value">13:40</span></view>
						<view class="info-reservation info-text"><span class="text">预约/即时抢购:</span><span class="value">2kl</span><span class="value">/</span><span class="value">4kl</span></view>
						<view class="info-income info-text"><span class="text">合约收益:</span><span class="value">72小时</span><span class="value">/</span><span class="value">4kl</span></view>
						<view class="info-Consumption info-text"><span class="text">出行耗油:</span><span class="value">2kl/天</span></view>
						<view class="info-mining info-text"><span class="text">挖矿FBT:</span><span class="value">0.25枚</span></view>
					</view>
					<view class="operate">
						<view class="btn reservation alignCenter"><span class="text">预约</span></view>
					</view>
				</view>
				<view class="commodity frontColor">
					<view class="img">
						<image class="image" src="../../static/commodity/car1.png" mode="scaleToFill"></image>
					</view>
					<view class="info">
						<view class="info-title">保时捷-K58</view>
						<view class="info-price info-text"><span class="text">价值:</span><span class="value">300-800CNY</span></view>
						<view class="info-time info-text"><span class="text">抢购时间:</span><span class="value">13:30</span><span class="value">-</span><span class="value">13:40</span></view>
						<view class="info-reservation info-text"><span class="text">预约/即时抢购:</span><span class="value">2kl</span><span class="value">/</span><span class="value">4kl</span></view>
						<view class="info-income info-text"><span class="text">合约收益:</span><span class="value">72小时</span><span class="value">/</span><span class="value">4kl</span></view>
						<view class="info-Consumption info-text"><span class="text">出行耗油:</span><span class="value">2kl/天</span></view>
						<view class="info-mining info-text"><span class="text">挖矿FBT:</span><span class="value">0.25枚</span></view>
					</view>
					<view class="operate">
						<view class="btn buy alignCenter"><span class="text">抢购</span></view>
					</view>
				</view>
				<view class="commodity frontColor">
					<view class="img">
						<image class="image" src="../../static/commodity/car1.png" mode="scaleToFill"></image>
					</view>
					<view class="info">
						<view class="info-title">保时捷-K58</view>
						<view class="info-price info-text"><span class="text">价值:</span><span class="value">300-800CNY</span></view>
						<view class="info-time info-text"><span class="text">抢购时间:</span><span class="value">13:30</span><span class="value">-</span><span class="value">13:40</span></view>
						<view class="info-reservation info-text"><span class="text">预约/即时抢购:</span><span class="value">2kl</span><span class="value">/</span><span class="value">4kl</span></view>
						<view class="info-income info-text"><span class="text">合约收益:</span><span class="value">72小时</span><span class="value">/</span><span class="value">4kl</span></view>
						<view class="info-Consumption info-text"><span class="text">出行耗油:</span><span class="value">2kl/天</span></view>
						<view class="info-mining info-text"><span class="text">挖矿FBT:</span><span class="value">0.25枚</span></view>
					</view>
					<view class="operate">
						<view class="btn maintenance alignCenter"><span class="text">保养中</span></view>
					</view>
				</view>
				<view class="commodity frontColor">
					<view class="img">
						<image class="image" src="../../static/commodity/car1.png" mode="scaleToFill"></image>
					</view>
					<view class="info">
						<view class="info-title">保时捷-K58</view>
						<view class="info-price info-text"><span class="text">价值:</span><span class="value">300-800CNY</span></view>
						<view class="info-time info-text"><span class="text">抢购时间:</span><span class="value">13:30</span><span class="value">-</span><span class="value">13:40</span></view>
						<view class="info-reservation info-text"><span class="text">预约/即时抢购:</span><span class="value">2kl</span><span class="value">/</span><span class="value">4kl</span></view>
						<view class="info-income info-text"><span class="text">合约收益:</span><span class="value">72小时</span><span class="value">/</span><span class="value">4kl</span></view>
						<view class="info-Consumption info-text"><span class="text">出行耗油:</span><span class="value">2kl/天</span></view>
						<view class="info-mining info-text"><span class="text">挖矿FBT:</span><span class="value">0.25枚</span></view>
					</view>
					<view class="operate">
						<view class="btn pay alignCenter"><span class="text">待付款</span></view>
					</view>
				</view>
				<view class="moreText alignCenter">
					更多快车，敬请期待 {{i18n.text}}
				</view>
			</view>
			<view class="moneyArea" v-else>
				
			</view>
		</view>
	</view>
</template>

<script>
  import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue"	
	export default {
		components: {
			uniNoticeBar
		},
		data() {
			return {
				activeTab: true
			}
		},
		computed: {
			i18n () {
				return this.$t('index')
			}
		},
		onLoad() {

		},
		methods: {
			chooseTab (type) {
				this.activeTab = type === 'usdt' ? true : false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.slide-wapper{
		padding: 0 20upx 20upx;
		.slide{
			border-radius: 10upx;
			overflow: hidden;
			.swiper{
				height: 320upx;
			}
			.slideImg{
				display: block;
				width: 100%;
				height: 320upx;
			}
		}
	}
	.slide-wapper >>> uni-swiper{
		height: 320upx;
	}
	.usdtOrMoney{
		display: flex;
		justify-content: center;
		padding: 30upx 0;
		button{
			margin: 0;
			width: 300upx;
			background: #169BD5;
			color: #fff;
			&.activeTab{
				background: #fff;
				color: #000;
			}
		}
	}
	
	.commodity-list{
		padding: 0 20upx;
		.usdtArea, .moneyArea{
			width: 100%;
			.commodity{
				display: flex;
				margin-bottom: 40upx;
				padding: 40upx 0;
			  box-shadow: 0 10upx 20upx rgba(0, 0, 0, .3);
				border-radius: 16upx;
				.img{
					display: flex;
					width: 40%;
					.image{
						margin: auto;
					  width: 200upx;
						height: 200upx;
					}
				}
				.info{
					width: 45%;
					.info-title{
						font-size: 30upx;
						color: #6699FF;
					}
					.info-text{
						font-size: 26upx;
						color: #fff;
						line-height: 40upx;
						.text{
							margin-right: 20upx;	
						}
					}
					.info-price, .info-income{
						.value{
							color: #FB9601;
						}
					}
				}
				.operate{
					display: flex;
					width: 15%;
					.btn{
						display: flex;
						justify-content: center;
						margin: auto;
						padding: 10upx 20upx;
						width: 20upx;
						height: 200upx;
						border-radius: 50upx;
						color: #fff;
						font-size: 28upx;
						&.reservation{
							background: #6699FF;
						}
						&.buy{
							background: #FF6633;
						}
						&.maintenance{
							background: #999999;
						}
						&.pay{
							background: #FF0000;
						}
						.text{
							margin: auto;
						}
					}
				}
			}
		}
		.moreText{
			height: 150upx;
			line-height: 150upx;
			color: #005C93;
			font-size: 32upx;
		}
	}
</style>
