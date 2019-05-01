<template>
	<div class="menusList">
		<div class="item" v-for="item,idx in toolbarList" @click="toggle(item.id)" :style="item.id == table_id?'background:#fff;color:#333':''">
			<span :style="item.id == table_id?'font-weight: bold;font-size:1.1rem':''">{{ item.name }}</span>
		</div>
	</div>
</template>

<script>
	export default({
		name: 'menusList',
		data() {
			return {
				toolbarList: [
					{
						id: 0,
						name: '城市信息'
					},{
						id: 1,
						name: '景点信息'
					},{
						id: 2,
						name: '住宿信息'
					},{
						id: 3,
						name: '旅游故事信息'
					},
				]
			}
		},
		computed: {
			table_id: function(){
				return this.$store.state.table_id;
			}
		},
		methods: {
			toggle: function(id){
				this.$store.commit("setTable_id", id);
				// console.log(id,this.$store.state.table_id)
				
			}
		}
	});
</script>

<style scoped="scoped">
	.menusList{}
	.item{text-align: center;padding: 20px;background: #333;color: #fff;cursor:pointer;}
	.item span{position: relative;}
	.selected:after{position: absolute;width: 100%;height: 5px;background: #333;content: '';bottom: -10px;left: 0}
	.item:hover{background: #fff;color: #333;}
</style>