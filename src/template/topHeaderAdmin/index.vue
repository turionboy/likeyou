<template>
	<header class="header clearfix background">
		<div class="title">立刻游后台管理系统</div>
	</header>
</template>

<script>
	export default({
		name:'topHeader',
		data() {
			return {

			}
		},
		computed: {
			// currTable_id() {
			// 	return this.$store.state.table_id
			// }
		},
		methods: {
 			
		}
	})
</script>

<style scoped="scoped">
	.background{background: #333;}
	.color{color: #367dd5;}
	.hover-font:hover{background: #367dd5;color: #FFFFFF;}
	.header{height: 60px;line-height: 60px;padding:0 20px;display: flex;justify-content: space-between;}
	.header .title{color: #FFFFFF;font-size: 1.3rem;}
</style>
