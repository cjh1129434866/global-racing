<template>
	<view class="me">
		<view class="user frontColor">
			<view class="info-wapper">
				<view class="headImg"><image src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png" class="face" mode=""></image></view>
				<view class="info baseFontColor">
					<view class="nickName">请叫我胖虎（未激活）<uniTag text="普通" type="warning" size="small"></uniTag></view>
					<view class="account"><span class="account-value">账号：1380013555</span>  <uniTag text="未认证" type="primary" size="small"></uniTag></view>
				</view>
				<view class="icon alignCenter">
					<view class="arrow"></view>
				</view>
			</view>
			<view class="set">
				<navigator url="../set/set">
					<image src="../../static/icon/settings.png" class="setting"></image>
				</navigator>
			</view>
		</view>
	  <!-- 收益数据 -->
		<view class="incomeData">
			<view class="income baseFontColor alignCenter boxShadow1">
				<view class="item">
					<navigator url="../fuelBalance/fuelBalance">
						<view class="num">3648.5</view>
						<view class="text">燃油Kl</view>
					</navigator>
				</view>
				<view class="item middleItem">
					<view class="num">3648.5</view>
					<view class="text">养车收益</view>
				</view>
				<view class="item">
					<view class="num">3648.5</view>
					<view class="text">推广收益</view>
				</view>
			</view>
		</view>
		<!-- tab -->
		<view class="userTab alignCenter baseFontColor">
			<view class="record frontColor">
				<navigator url="../appointmentRecord/appointmentRecord">
					<image src="../../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">预约记录</view>
				</navigator>
			</view>
			<view class="record frontColor">
				<navigator url="../adoptionRecord/adoptionRecord">
					<image src="../../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">抢车记录</view>
				</navigator>
			</view>
			<view class="record frontColor">
				<navigator url="../transferRecord/transferRecord">
					<image src="../../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">转让记录</view>
				</navigator>
			</view>
			<view class="record frontColor">
				<navigator url="../teamIncome/teamIncome">
					<image src="../../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">团队收益</view>
				</navigator>
			</view>
			<view class="record frontColor">
				<navigator url="../invite/invite">
					<image src="../../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">邀请好友</view>
				</navigator>
			</view>
			<view class="record frontColor">
				<navigator url="../accountsReceivable/accountsReceivable">
					<image src="../../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">收款账户</view>
				</navigator>
			</view>
			<view class="record frontColor">
				<navigator url="../set/set">
					<image src="../../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">安全中心</view>
				</navigator>
			</view>
			<view class="record frontColor">
				<navigator url="../verified/verified">
					<image src="../../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">实名认证</view>
				</navigator>
			</view>
			<view class="record frontColor">
				<navigator url="../customerService/customerService">
					<image src="../../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">客服中心</view>
				</navigator>
			</view>
			<view class="record frontColor">
				<navigator url="../register/register">
					<image src="../../static/tabBarIcon/me.png" class="icon"></image>
					<view class="text">注册</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import uniTag from "@/components/uni-tag/uni-tag.vue"
	export default {
		components: {
			uniTag
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
.me{
	.user{
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 400upx;
		.info-wapper{
			display: flex;
			height: 150upx;
			justify-content: center;
			.headImg{
				margin-right: 20upx;
				width: 150upx;
			  height: 100%;
				.face{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.info{
				display: flex;
				width: 450upx;
				flex-direction: column;
				justify-content: space-around;
				.nickName{
					font-size: 30upx;
				}
				.account{
					font-size: 20upx;
					.account-value{
						margin-right: 20upx;
					}
				}
			}
			.icon{
				display: flex;
				width: 50upx;
				.arrow{
					margin: auto;
					width: 30upx;
					height: 30upx;
					border-style: solid;
					border-color: #999 #999 transparent transparent;
					border-width: 2upx;
					transform: rotate(45deg);
				}
			}
		}
		.set{
			position: absolute;
			right: 60upx;
			top: 70upx;
			width: 30upx;
			height: 30upx;
			.setting{
				width: 100%;
				height: 30upx;
			}
		}
	}
	/* 收益数据 */  
	.incomeData{
		position: relative;
		display: flex;
		justify-content: center;
		margin-top: -75upx;
		width: 100%;
		z-index: 99;
		.income{
			display: flex;
			width: 90%;
			height: 150upx;
			background: #333366;
			border-radius: 10upx;
			.item{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: self;
				width: 33.33%
				height: 100%;
				&.middleItem{
					position: relative;
					&::before, &::after{
						position: absolute;
						content: '';
						width: 2upx;
						height: 60upx;
						top: 50%;
						margin-top: -30upx;
						background: #000066;
					}
					&::before{
						left: 0;
					}
				  &::after{
						right: 0;
					}
				}
				.num{
					font-size: 40upx;
				}
				.text{
					font-size: 28upx;
				}
			}
		}
	}
	.userTab{
		display: flex;
		justify-content: space-between;
		margin-top: 50upx;
		height: 170upx;
		.record{
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 33%;
			height: 100%;
			font-size: 28upx;
			.icon{
				width: 50upx;
				height: 50upx;
				align-self: center;
			}
			.text{
				margin-top: 20upx;
			}
		}
	}
	.userTab{
		flex-wrap: wrap;
		margin-top: 20upx;
		.record{
			margin-bottom: 5upx;
		}
	}
}
</style>
