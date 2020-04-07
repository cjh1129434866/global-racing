<template>
	<view class="teamIncome baseFontColor">
		<view class="income-amount">
			<view class="income-team frontColor alignCenter">
				<view class="income-text fontSize28">团队收益</view>
				<view class="incomt-num heightLightTextColor">336</view>
			</view>
			<view class="income-total frontColor alignCenter">
				<view class="income-text fontSize28">累计收益</view>
				<view class="incomt-num heightLightTextColor">336</view>
			</view>
		</view>
		<view class="income-record fontSize28">
			<view class="income-record-list frontColor">
				<view class="income-record-list-left">
					<view class="left-item number">编号:F32432423534523432</view>
					<view class="left-item name">会员名称: 木木</view>
					<view class="left-item type">类型: 团队收益</view>
					<view class="left-item time">时间: 2019-02-04 09:15:05</view>
				</view>
				<view class="income-record-list-right">
					<view class="income-much heightLightTextColor">	+0.884565142</view>
				</view>
			</view>
			<view class="income-record-list frontColor">
				<view class="income-record-list-left">
					<view class="left-item number">编号:F32432423534523432</view>
					<view class="left-item name">会员名称: 木木</view>
					<view class="left-item type">类型: 团队收益</view>
					<view class="left-item time">时间: 2019-02-04 09:15:05</view>
				</view>
				<view class="income-record-list-right">
					<view class="income-much heightLightTextColor">	+0.884565142</view>
				</view>
			</view>
		</view>
		<!-- 弹出层 -->
		<uni-popup :show="type === 'middle'" position="middle" mode="fixed" @hidePopup="hidePopup">
			<view class="center-box fontSize28">
				  <view class="title alignCenter">兑换</view>
				  <view class="inp">
						<view class="text">可兑换收益</view>
						<view class="input"><input type="number" value="555" /></view>
					</view>
				  <view class="inp">
						<view class="text">可兑快车数量</view>
						<view class="input"><input type="number" value="1" /></view>
					</view>
				  <view class="inp">
						<view class="text">兑数量</view>
						<view class="input"><input type="number" value="" placeholder="请输入想要兑换的数量" /></view>
					</view>
					<view class="btn"><button type="primary" class="exchangeBtn">兑换</button></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
				type: ''
			}
		},
		onNavigationBarButtonTap (e) {
			console.log(e.index)
			this.type = 'middle'
		},
		methods: {
			hidePopup () {
				this.type = ''
			}
		}
	}
</script>

<style lang="stylus" scoped>
.teamIncome{
	.income-amount{
		display: flex;
		justify-content: space-between;
		padding: 20upx;
		.income-team, .income-total{
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 48%;
			height: 200upx;
			border-radius: 10upx;
			.incomt-num{
				font-size: 40upx;
				font-weight: bold;
			}
		}
	}
	.income-record{
		margin-top: 20upx;
		.income-record-list{
			display: flex;
			padding: 20upx;
			border-bottom: 2upx solid #000066;
			.income-record-list-left{
				width: 70%;
				.left-item{
					line-height: 45upx;
				}
			}
			.income-record-list-right{
				width: 30%;
				display: flex;
				.income-much{
					margin: auto;
				}
			}
		}
	}
	/* 弹出层 */
	.center-box{
		width: 550upx;
		height: 500upx;
		.title{
			line-height: 40upx;
			font-size: 34upx;
		}
		.inp{
			display: flex;
			height: 80upx;
			line-height: 80upx;
			.text{
				width: 40%;
			}
			.input{
				width: 60%;
				input{
						height: 80upx;
				}
			}
		}
		.btn{
			margin-top: 50upx;
			.exchangeBtn{
				width: 90%;
			}
		}
	}
}
</style>
