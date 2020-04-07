<template>
	<view class="invite baseFontColor">
		<view class="invite-method frontColor">
			<view class="invite-code">
				<view class="text">我的邀请码</view>
				<view class="code hightLightText">{{inviteCode}}</view>
				<!-- #ifdef H5 -->
				<input type="text" class="inviteCode" ref="inviteCodeInp" :value="inviteCode" name="code">
				<!-- #endif -->
			</view>
			<view class="share">
				<button type="primary" class="copy" @tap="copyInviteCode">复制邀请码</button>
				<navigator url="../poster/poster">
					<button type="warn" class="qrcode">生成二维码海报</button>
				</navigator>
			</view>
		</view>
		<view class="invite-team">
			<view class="invite-team-num">团队人数: 2</view>
			<view class="invite-team-num">直推人数: 2</view>
			<view class="invite-team-num">激活人数: 2</view>
		</view>
		<view class="invite-record frontColor">
			<view class="title fontSize30"><uni-icon type="list" size="22" class="icon"/>邀请记录</view>
			<view class="invite-record-list">
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
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		components: {
			uniIcon
		},
			data() {
				return {
					inviteCode: '899988',
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
						}
					],
					scrollLeft: 0,
					isClickChange: false,
					tabBars: [
						{
							name: "全部",
							id: "all"
						},
						{
							name: "激活用户",
							id: "activation"
						},
						{
							name: "未激活用户",
							id: "inactivated"
						}
					]
				}
			},
			onLoad() {
				
			},
			onReady () {
				// #ifndef H5
				uni.setClipboardData({
					data: this.inviteCode
				})
				// #endif
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
				},
				// 复制邀请码
				copyInviteCode () {
					// #ifndef H5
					uni.getClipboardData({
						success: () => {
							uni.showToast({
								title: "获取成功"
							})
						},
						fail: () => {
							uni.showToast({
								title: "获取失败"
							})
						}
					})
					// #endif
					// #ifdef H5
					this.$refs.inviteCodeInp.$el.getElementsByTagName('input')[0].select()
					document.execCommand('copy')
	        uni.showToast({
	        	title: "复制成功"
	        })
					// #endif
				}
			}
		}
	</script>

<style lang="stylus" scoped>
.invite{
	.invite-method{
		margin: 20upx auto;
		padding: 20upx;
		width: 90%;
		border-radius: 5upx;
		.invite-code{
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 200upx;	
			border-bottom: 2upx solid #000066;
			.text, .code{
				align-self: center;
				line-height: 60upx;
			}
			.text{
				font-size: 32upx;
			}
			.code{
				font-size: 46upx;
				font-weight: bold;
			}
			.inviteCode{
				position: absolute;
				left: -999999upx;
				top: -999999upx;
			}
		}
		.share{
			padding: 20upx 10upx;
			.copy{
				margin-bottom: 20upx;
			}
		}
	}
	.invite-team{
		display: flex;
		padding: 0 20upx;
		height: 100upx;
		font-size: 28upx;
		.invite-team-num{
			flex: 1;
			line-height: 80upx;
		}
	}
	.invite-record{
		margin: 0 auto 30upx;
		width: 90%
		padding: 20upx;
		border-radius: 5upx;
		.title{
			height: 50upx;
			line-height: 50upx;
			.icon{
				margin-right: 20upx;
			}
		}
		.invite-record-list{
			.uni-swiper-tab{
				width: 100%;
				white-space: nowrap;
				line-height: 100upx;
				height: 100upx;
				background: #003366;
				.swiper-tab-list{
					font-size: 30upx;
					width: 33.33%;
					height: 95upx;
					display: inline-block;
					text-align: center;
					color: #fff;
					&.active{
						color: #6699FF;
						border-bottom: 5upx solid #6699FF;
					}
				}
			}
			.swiper-box{
				flex: 1;
				width: 100%;
				height: calc(100vh - 100upx);
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
}
</style>
