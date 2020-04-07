<template>
	<view class="countDown">
		 <view class="code alignCenter" @click="eClick" id="com-countDown" :class="{countTime: !flag}">{{ text }}</view>
	</view>
</template>

<script>
	export default {
		props: ['isCount'],
		data() {
			return {
				text: '',
				flag: true,
				timer: null
			}
		},
		mounted () {
			this.text = '获取验证码'
		},
		watch: {
			'isCount' (v) {
				if (v) {
					this.count()
				}
			}
		},
		methods: {
			count: function () {
				this.text = '45s'
				this.flag = false
				this.timer = setInterval(() => {
					let time = this.text.split('s')[0]
					time --
					this.text = time + 's'
					if (time === 0) {
						this.$emit('changeIsCount')
						this.clear()
					}
				}, 1000)
			},
			eClick () {
				this.clear()
				if (this.flag) {
					this.$emit('count')
				}
			},
		  clear () {
				clearInterval(this.timer)
				this.text = '获取验证码'
				this.flag = true
			}
		},
		beforeDestroy () {
			this.clear()
		}
	}
</script>

<style lang="stylus" scoped>
.countDown{
	.code{
		position: relative;
		width: 150upx;
		&::before{
			position: absolute;
			top: 50%;
			left: 0;
			margin-top: -20upx;
			margin-left: -30upx;
			content: '';
			width: 2upx;
			height: 40upx;
			background: #000066;
		}
	}
}
</style>
