<template>
	<view class="currencyWallet">
		<walletAssets></walletAssets>
		<!-- 数据记录 -->
		<view class="datalist">
			<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
					:id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}</view>
			</scroll-view>
			<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
				<swiper-item v-for="(tab,index1) in dataItems" :key="index1">
					<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
						<block v-for="(dataItem,index2) in tab.data" :key="index2">
						  <view>	{{dataItem}}</view>
						</block>
						<view class="uni-tab-bar-loading">
							{{tab.loadingText}}
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import walletAssets from '@/components/walletAssets.vue'

	export default {
		components: {
			walletAssets
		},
		data() {
			return {
			  tabIndex: 0,
				dataItems: [
					{
						loadingText: '加载更多...',
						data: [
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
						]
					},
					{
						loadingText: '加载更多...',
						data: [
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
						]
					},
					{
						loadingText: '加载更多...',
						data: [
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
						]
					},
					{
						loadingText: '加载更多...',
						data: [
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
						]
					},
					{
						loadingText: '加载更多...',
						data: [
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
						]
					},
					{
						loadingText: '加载更多...',
						data: [
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
							'奥萨蒂哦是啊手动阀去微软 去微软请问去微软去微软',
						]
					}
				],
				scrollLeft: 0,
				isClickChange: false,
				tabBars: [
					{
						name: "全部",
						id: "quanbu"
					},
					{
						name: "充值",
						id: "chongzhi"
					},
					{
						name: "转账",
						id: "zhuanzhang"
					},
					{
						name: "提币",
						id: "tibi"
					},
					{
						name: "C2C",
						id: "C2C"
					},
					{
						name: "兑换",
						id: "duihuan"
					}
				]
			}
		},
		onLoad(params) {
			let symbol = params.symbol
			uni.setNavigationBarTitle({
				title: symbol + "钱包"
			});
		},
		methods: {
			 async tapTab(e) { //点击tab-bar
			 	let tabIndex = e.target.dataset.current;
				console.log(tabIndex)
			 	// if (this.newsitems[tabIndex].data.length === 0) {
			 	// 	this.addData(tabIndex)
			 	// }
			 	if (this.tabIndex === tabIndex) {
			 		return false;
			 	} else {
			 		let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
			 		this.scrollLeft = tabBarScrollLeft;
			 		this.isClickChange = true;
			 		this.tabIndex = tabIndex;
			 	}
		  },
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			loadMore(e) {
			
			},
			async changeTab(e) {
				let index = e.target.current;
				// if (this.dataItems[index].data.length === 0) {
				// 	// this.addData(index)
				// }
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;
			
				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			}
		}
	}
</script>

<style lang="stylus" scoped>
.currencyWallet{
	.datalist{
		background: #F2F2F2;
		height: calc(100vh - 500upx);
		.uni-swiper-tab{
			width: 100%;
			white-space: nowrap;
			line-height: 100upx;
			height: 100upx;
			border-bottom: 1px solid #c8c7cc;
			.swiper-tab-list{
				font-size: 30upx;
				width: 126upx;
				height: 95upx;
				display: inline-block;
				text-align: center;
				color: #555;
				&.active{
					border-bottom: 5upx solid #6699FF;
				}
			}
		}
		.swiper-box{
			flex: 1;
			width: 100%;
			height: calc(100% - 100upx);
			.list{
				width: 750upx;
				height: 100%;
			}
			.uni-tab-bar-loading{
				padding: 20upx 0;
			}
		}
	}
}
</style>
