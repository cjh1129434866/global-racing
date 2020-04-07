<template>
	<view class="accountsReceivable baseFontColor">
		<view class="account red">
			<view class="left">
				<view class="bank fontSize28">
					<view class="bankName">中国银行</view>
					<view class="bankAcc">48585556565655</view>
				</view>
			</view>
			<view class="right">
				<view class="operate alignCenter fontSize30">
					删除
				</view>
			</view>
		</view>
		<view class="account green">
			<view class="left">
				<view class="bank fontSize28">
					<view class="bankName">微信</view>
					<view class="bankAcc">8845555665</view>
				</view>
			</view>
			<view class="right">
				<view class="operate alignCenter fontSize30">
					删除
				</view>
			</view>
		</view>
		<view class="account blue">
			<view class="left">
				<view class="bank fontSize28">
					<view class="bankName">支付宝</view>
					<view class="bankAcc">48585556565655</view>
				</view>
			</view>
			<view class="right">
				<view class="operate alignCenter fontSize30">
					删除
				</view>
			</view>
		</view>
	
		
		<!-- 底部按钮 -->
		<view class="addPayMethod alignCenter">
			<picker mode="selector" :range="array" @change="bindPickerChange" range-key="name" :value="index">
				<view>+ 添加支付方式</view>
			</picker>
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
				index: 0
			}
		},
		methods: {
			bindPickerChange: function (e) {
				console.log(e.target.value)
				this.index = e.target.value
				uni.navigateTo({
					url: '../addPayMethod/addPayMethod?index=' + this.index
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
.accountsReceivable{
	padding: 20upx 20upx 140upx;
	.account{
		display: flex;
		justify-content: space-between;
		margin: 20upx 0;
		padding: 30upx;
		border-radius: 10upx;
		height: 150upx;
		&.red, &.green, &.blue{
			background-repeat: no-repeat;
			background-size: 100%;
			background-position: center center;
		}
		&.red{
			background-image: url('../../static/commodity/bank.png');
		}
		&.green{
			background-image: url('../../static/commodity/wechat.png');
		}
		&.blue{
			background-image: url('../../static/commodity/alipay.png');
		}
		.left{
			display: flex;
			margin-left: 100upx;
			.bank{
				display: flex;
				flex-direction: column;
				justify-content: center;
				.bankName, .bankAcc{
					line-height: 50upx;
				}
			}
		}
		.right{
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			.operate{
				margin-bottom: 50upx;
				width: 100upx;
				height: 50upx;
				line-height: 50upx;
				border: 2upx solid #fff;
				border-radius: 5upx;
			}
		}
	}
	.addPayMethod{
		position: fixed;
		bottom: 20upx;
		width: calc(100% - 40upx);
		height: 100upx;
		line-height: 100upx;
		border-radius: 5upx;
		background: #003366;
	}
}
</style>
