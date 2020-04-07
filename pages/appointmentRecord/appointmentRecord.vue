<template>
	<view class="appointmentRecord baseFontColor">
		<view class="record">
			<view class="left">
				<view class="recordName">兰博基尼</view>
				<view class="recordTime">2019-07-11 12:30:22</view>
			</view>
			<view class="right">
				<view class="recordNum">-2.00</view>
				<view class="recordText">预约未抢购</view>
			</view>
		</view>
		<view class="record">
			<view class="left">
				<view class="recordName">兰博基尼</view>
				<view class="recordTime">2019-07-11 12:30:22</view>
			</view>
			<view class="right">
				<view class="recordNum">-2.00</view>
			<view class="recordText">预约未抢购</view>
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
.appointmentRecord{
	.record{
		display: flex;
		justify-content: space-between;
		padding: 20upx 20upx;
		line-height: 40upx;
		.left{
			width: 45%;
			.recordName{
				font-size: 28upx;
			}
			.recordTime{
				font-size: 24upx;
			}
		}
		.right{
			width: 55%;
			text-align: right;
			font-size: 24upx;
			.recordNum{
				color: red;
			}
		}
	}
}
</style>
