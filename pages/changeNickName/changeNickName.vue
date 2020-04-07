<template>
	<view class="changeNickName baseFontColor">
		<form @submit="formSubmitNickName" class="form">
			<view class="inp">
				<label for="#nickNameInp" class="text fontSize28 alignCenter">昵称</label>
				<input 
				  class="inpDom"
					name="nickname"
					id="nickNameInp"
					type="text" 
					value="" 
					placeholder="请输入昵称"
					maxlength="10"/>
			</view>
			<button type="primary" form-type="submit" class="submitBtn">提交</button>
		</form>
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
.changeNickName{
	padding: 20upx;
	.form{
		.inp{
			display: flex;
			.text{
				width: 15%;
			}
			.inpDom{
				width: 85%;
			}
		}
		.submitBtn{
			margin-top: 50upx;
		}
	}
}
</style>
