<template>
	<view class="countryCode">
		<template v-if="list">
			<uni-indexed-list :options="list" :showSelect="false" @click="bindClick" />
		</template>
	</view>
</template>

<script>
	import uniIndexedList from '@/components/uni-indexed-list/uni-indexed-list.vue'
	export default {
		components: {
			uniIndexedList
		},
		data() {
			return {}
		},
		computed: {
			list () {
				return this.$t('phoneCode')
			}
		},
		methods: {
			bindClick(e) {
				let data = e.item.name
				uni.navigateTo({
					url: "../register/register?countryCode=" + data
				})
			}
		}
	}
</script>

<style>

</style>
