<template>
	<div class="index">
		<div class="topHeader">
			<topHeader />			
		</div>
		<div class="contain">
			<indexCon v-if="curr_id == 0"/>
			<productTour v-else-if="curr_id == 1" />
			<productForeign v-else-if="curr_id == 2" />
			<comunity v-else-if="curr_id == 3" />			
			<aboutUs v-else-if="curr_id == 4" />			
		</div>
		<div class="foot">
			<contactUs />
		</div>		
	</div>
</template>

<script>
	import topHeader from "../../template/topHeader/index"
	import indexCon from "../../template/indexCon/index"
	import productTour from "../../template/productTour/index"
	import productForeign from "../../template/productForeign/index"
	import aboutUs from "../../template/aboutUs/index"
	import contactUs from "../../template/contactUs/index"
	import comunity from "../../template/comunity/index"

	export default({
		name: 'index',
		data(){
			return {
				
			}
		},
		computed:{
			curr_id: function(){
				return this.$store.state.curr_id;
			}
		},
		components: {
			topHeader,
			indexCon,
			productTour,
			productForeign,
			comunity,
			aboutUs,
			contactUs,
		},
		created: function(){
			
		},
		mounted: function(){
			var that = this;
			
		},
		methods:{
			
		}
	})
</script>

<style scoped="scoped">
	.contain{}
	
</style>