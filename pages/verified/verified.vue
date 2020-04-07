<template>
	<view class="verified baseFontColor fontSize28">
		<view class="prompt frontColor">
			 <view class="icon">
				 <uni-icon type="info-filled" size="22"/>
			 </view>
			 <view class="text">请拿出本人有效证件准备拍摄，拍摄时请确保证件边框 完整，字体清晰，亮度均匀，确保照片和个人签字的内 容清晰可见。</view>
		</view>
		<view class="reason frontColor">
			<view class="title fontSize30">认证失败原因:</view>
			<view class="content">阿基里斯扩大解放强偶微软求安慰老人家请问哦爱情微软却忘了烤肉饭冉强玮任沁连为其微软犬瘟热犬瘟热请问人情味二去微软</view>
		</view>
		<view class="authInfo frontColor">
			<view class="inp">
				<input type="text" class="inp-name" value="" placeholder="请输入您的姓名" />
				<input type="text" class="inp-number" value="" placeholder="请输入您的身份证号码"/>
			</view>
			<view class="idCardInfo">
				<view class="idCard">
					<view class="idCard-positive" @tap="chooseImg('idCardPositivePath')">
						<view class="text borderRadius10 fontSize28">上传身份证正面</view>
						<image :src="idCardPositivePath" class="img"></image></view>
					<view class="idCard-negative">
						<view class="text borderRadius10 fontSize28">上传身份证反面</view>
						<image :src="idCardNegativePath" class="img" @tap="chooseImg('idCardNegativePath')"></image>
					</view>
					<view class="idCard-man">
						<view class="text borderRadius10 fontSize28">上传本人手持证件照</view>
						<image :src="idCardManPath"  class="img" @tap="chooseImg('idCardManPath')"></image>
					</view>
				</view>	
				<view class="prompt-msg alignCenter">
					<view>本人手持证件照内容为：</view>
					<view>本人签名、电话、身份证件号和当前日期</view>
				</view>
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
				idCardPositivePath: '', // 正面路径
				idCardNegativePath: '', // 反面
				idCardManPath: '' // 手持证件路径
			}
		},
		onReady () {
			// #ifdef APP-PLUS  
			var webView = this.$mp.page.$getAppWebview(); 
		  // 修改buttons  
			// index: 按钮索引, style {WebviewTitleNViewButtonStyles }  
			webView.setTitleNViewButtonStyle(0, {  
					width: "0px"
			});  
			// #endif
		},
		onNavigationBarButtonTap (e) {
			var index = e.index
			console.log(index)
		},
		methods: {
			chooseImg: function (type) {
				const _this = this
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: function (res) {
						_this[type] = res.tempFilePaths[0]
					}
				})
			}
		},
		
	}
</script>

<style lang="stylus" scoped>
.verified{
	padding-bottom: 50upx;
	.prompt{
		display: flex;
		margin-top: 20upx;
		padding: 20upx;
		.icon{
			margin-right: 10upx;
		}
	}
	.reason{
		margin-top: 20upx;
		padding: 20upx;
		.content{
			margin-top: 10upx;
		}
	}
	.authInfo{
		margin-top: 20upx;
		.inp{
			.inp-name, .inp-number{
				height: 80upx;
				line-height: 80upx;
				text-indent: 20upx;
				border-bottom: 4upx solid #000066;
			}
		}
		.idCardInfo{
			padding: 20upx;
			.idCard{
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
				width: 100%;
				.idCard-positive, .idCard-negative{
					margin-bottom: 20upx;
					width: 49%;
					height: 220upx;
				}
				.idCard-positive{
					background-image: url('../../static/commodity/center28.png');
				}
				.idCard-negative{
					background-image: url('../../static/commodity/center29.png');
				}
				.idCard-man{
					width: 100%
					height: 300upx;
					background-image: url('../../static/commodity/center30.png');
				}
				.idCard-positive, .idCard-negative, .idCard-man{
					position: relative;
					background-size: 100% 100%;
					background-repeat: no-repeat;
					.img{
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
					}
					.text{
						position: absolute;
						top: 40%;
						left: 50%;
						margin-left: -100upx;
						padding: 2upx 5upx;
						background: #007AFF;
					}
				}
			}
		  .prompt-msg{
				margin-top: 20upx;
				line-height: 50upx;
			}
		}
	}
}
</style>
