<template>
	<div class="detailHotel">
		<div class="title">住宿详情</div>
		<div class="name">{{ info.title }}</div>
	</div>
</template>

<script>
	export default({
		name: 'detailHotel',
		data() {
			return {
				info: {
					id: 1,
					title: '锦江之星',
					content: '减肥可是大家手机打开骄傲了就拉到家放假啊看讲大局老卡机卡机卡拉胶啊的发放啊放大挂号费凯撒哈这的你是智商us考核得分死的话回复 阿什顿飞阿道夫啊发发的发生',	
					roomType: '',

				}
			}
		},
		created: function(){

		},
		mounted: function(){

		},
		methods: {

		}
	})
</script>

<style scoped>
	.detailHotel{position: fixed;width: 100%;height: 100%;background: rgba(0,0,0,0.5);}
</style>