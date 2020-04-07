<template>
	<view class="transferOut baseFontColor">
		<view class="inp-wapper">
			<template v-for="(item, key, index) in formList">
				<view class="inp">
					<inline-input
						:property="item"
						v-model= 'item.value'
						v-on:onenvents= "somethings">
					</inline-input>
				</view>
			</template>
			<view class="btn"><button type="primary" class="outSubmit">转出</button></view>
		</view>
	</view>
</template>

<script>
	import inlineInput from '@/components/inlineInput.vue'
	
	export default {
		components: {
			inlineInput
		},
		data() {
			return {
				formList: {}
			}
		},
		onLoad() {
			this.formList = this.formList_obj
		},
		computed: {
			formList_obj () {
				return {
					availableFuel: {
						title: "可用燃料",
						formType: "number",
						name: "availableFuel",
						disabled: true,
						placeholder: '',
						value: '222',
						maxlength: -1,
						isShowArrow: false
					},
					idNumber: {
						title: "ID号",
						formType: "number",
						name: "idNumber",
						disabled: false,
						placeholder: '请输入对方ID号',
						value: '',
						maxlength: -1,
						isShowArrow: false
					},
					ourNumber: {
						title: "转出数量",
						formType: "number",
						name: "ourNumber",
						disabled: false,
						placeholder: '转出数量',
						value: '',
						maxlength: -1,
						isShowArrow: false
					}
				}
			}
		},
		watch: {
			'formList_obj' (val) {
				this.formList = val
			}
		},
		methods: {
			somethings: function () {}
		}
	}
</script>

<style lang="stylus" scoped>
.transferOut{
	.inp-wapper{
		padding-top: 50upx;
		.btn{
			margin-top: 30upx;
			.outSubmit{
				width: 90%;
			}
		}
	}
}
</style>
