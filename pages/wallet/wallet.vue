<template>
	<view class="wallet">
		<walletAssets></walletAssets>
		<!-- 币种列表 -->
		<view class="currencyList">
			 <view class="search">
				 <view class="left">
					<view class="search-icon-wapper">
					  <uni-icon type="search" size="22"/>
				  </view>
					<view class="search-inp-wapper">
						<input 
							placeholder="搜索币种" 
							maxlength="10" 
							class="search-text" 
							confirm-type="search"
							placeholder-style="font-size: 14px;"
						/>
				  </view>
				 </view>
				 <view class="right">
					 <switch checked color="#003366" style="transform:scale(0.7)" @change="switchEvent" />
					 <view class="text">隐藏零资产</view>
				 </view>
			 </view>
			 <view class="list">
				 <ul class="list-wapper">
				 	<li class="list-item" @tap="toCurrencyWallet" data-symbol='BTC'>
						<view class="left">
							<view class="logo"><image src="../../static/logo.png" class="logoImg"></image></view>
							<view class="symbolName">BTC</view>
						</view>
						<view class="right">
							<view class="balance">
								<view>5566.5555</view>
								<view class="cny">≈5566.445</view>
							</view>
							<view class="forward">
								<uni-icon type="arrowright" color="#999999" size="26"/>
							</view>
						</view>
					</li>
					<li class="list-item" @tap="toCurrencyWallet" data-symbol='USDT'>
						<view class="left">
							<view class="logo"><image src="../../static/logo.png" class="logoImg"></image></view>
							<view class="symbolName">BTC</view>
						</view>
						<view class="right">
							<view class="balance">
								<view>5566.5555</view>
								<view class="cny">≈5566.445</view>
							</view>
							<view class="forward">
								<uni-icon type="arrowright" color="#999999" size="26"/>
							</view>
						</view>
					</li>
					<li class="list-item">
						<view class="left">
							<view class="logo"><image src="../../static/logo.png" class="logoImg"></image></view>
							<view class="symbolName">BTC</view>
						</view>
						<view class="right">
							<view class="balance">
								<view>5566.5555</view>
								<view class="cny">≈5566.445</view>
							</view>
							<view class="forward">
								<uni-icon type="arrowright" color="#999999" size="26"/>
							</view>
						</view>
					</li>
				 </ul>
			 </view>
		</view>
	</view>
</template>

<script>
	import walletAssets from '@/components/walletAssets.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		components: {
			walletAssets,
			uniIcon
		},
		data() {
			return {
			  tabIndex: 0	
			}
		},
		methods: {
			switchEvent (e) {
				console.log(e.detail.value)
			},
			toCurrencyWallet (e) {
				let symbol = e.currentTarget.dataset.symbol
				uni.navigateTo({
					url: '../currencyWallet/currencyWallet?symbol=' + symbol
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
.wallet{
	.currencyList{
		margin-top: 20upx;
		padding-bottom: 50upx;
		background: #F2F2F2;
		.search{
			display: flex;
			justify-content: space-between;
			padding: 20upx;
			.left{
				display: flex;
				.search-inp-wapper{
					margin-left: 10upx;
				}
			}
			.right{
				display: flex;
				width: 55%;
				font-size: 24upx;
				text-align: right;
				justify-content: flex-end;
				.text{
					/* #ifdef H5 */
					line-height: 60upx;
					/* #endif */
					/* #ifndef H5 */
					line-height: 50upx;
					/* #endif */
				}
			}
		}
		.list{
			.list-wapper{
				padding: 0 20upx;
				.list-item{
					display: flex;
					justify-content: space-between;
					height: 100upx;
					border-top: 1upx solid #E4E4E4;
					.left{
						display: flex;
						align-items: center;
						.logo{
							margin-right: 10upx;
							width: 40upx;
							height: 40upx;
							.logoImg{
								width: 100%;
								height: 100%;
								border-radius: 50%;
							}
						}
						.symbolName{
							line-height: 40upx;
							font-size: 28upx;
							font-weight: bold;
						}	
					}
					.right{
						display: flex;
						align-items: center;
						.balance{
							margin-right: 20upx;
							font-size: 26upx;
							.cny{
								color: #C0C0C0;
							}
						}
					}
				}
			}
		}
	}
}
</style>
