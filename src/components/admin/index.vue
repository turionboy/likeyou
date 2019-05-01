<template>
	<div class="admin">
		<div class="topHeader">
			<topHeaderAdmin />
		</div>
		<div class="contain">
			<div class="left scrollbar">
				<menusList />
			</div>
			<div class="right">
				<cityTable v-if="table_id == 0" />
				<sceneTable v-if="table_id == 1" />
				<hotelTable v-if="table_id == 2" />
				<storyTable v-if="table_id == 3" />
			</div>
			
		</div>
	</div>
</template>

<script>
	import topHeaderAdmin from "../../template/topHeaderAdmin/index"
	import cityTable from "../../template/admin/cityTable/index"
	import sceneTable from "../../template/admin/sceneTable/index"
	import hotelTable from "../../template/admin/hotelTable/index"
	import storyTable from "../../template/admin/storyTable/index"
	import menusList from '../../template/menusList/index'

	export default({
		name: 'admin',
		data(){
			return {

			}
		},
		computed:{
			table_id: function(){
				return this.$store.state.table_id;
			}
		},
		components: {
			menusList,
			topHeaderAdmin,
			cityTable,
			sceneTable,
			hotelTable,
			storyTable,
		},
		created: function(){
			var that = this;		
		}
	})
</script>

<style scoped="scoped">
	/*.index{position: fixed;width: 100%;height: 100%;}*/
	.contain{height: 100%;display: flex;margin-top: 20px;}
	.left{min-width: 155px;overflow-y:auto; }
	.right{width:100%;border: 1px solid #e6e6e6;margin: 0 20px;padding: 20px;margin-bottom: 20px;min-width: 1000px;}
</style>