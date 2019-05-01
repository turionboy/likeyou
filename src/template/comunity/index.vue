<template>
	<div class="comunity">
		<!-- <div class="tab">
		    <el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="热门故事" name="0"></el-tab-pane>
			    <el-tab-pane label="最新发布" name="1"></el-tab-pane>
		    </el-tabs>
		</div> -->
		<div class="comunityList">
			<div class="comunity_item" v-for="item,index in comunityList" :key="index" @click="toDetail(item)">
				<div class="left">
					<img :src="item.imgUrl">
				</div>
				<div class="right">
					<div class="right_context">
						<span class="item_title">{{ item.title }}</span>
						<span v-html="item.context" class="item_context"></span>
						<div class="content_bottom">
							<span><i class="fa  fa-location-arrow"></i> {{ item.region }}</span>
							<span style="margin: 0 15px;">date <span style="color: orange;">{{ item.time | timeFormat }}</span></span> 
							<span><i class="fa fa-eye"></i> {{ item.watched }}</span>
							<span style="position: absolute;right: 0">{{ item.liked }} <i class="fa fa-thumbs-up"></i></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default({
		name: 'comunity',
		data() {
			return {
				activeName: 0,
				comunityList: []
			}
		},
		filters:{
			timeFormat: function(val){
				return val.slice(0,10)+ ' ' + val.slice(11,19);
			}
		},
		created: function(){

		},
		mounted: function(){
			this.getData();
		},
		methods: {
			getData() {
				this.$axios.get(this.API + '/api/user/story').then(res => {
					this.comunityList = res.data.result;
				}).catch(err => {})
			},
			// 切换tab
			// handleClick(tab, event) {
			// 	// console.log('activeName', this.activeName);
			// },
			// 跳转至社区模块
			toDetail(item) {
				// console.log(item);
				this.$store.commit('setCurr_id', 3);
				this.$store.commit('setStory_id', item.id);
				this.$router.push({
					path: '/detail_comunity'
				});
			},
		}
	})
</script>

<style scoped>
	.comunity{padding: 0 30%;}
	.comunity_item{display: flex;margin: 20px 0;cursor: pointer;}
	.left{width: 50%;padding: 0 10px;}
	.right{width: 100%;}
	.item_title{font-size: 1.2rem}
	.comunity_item:hover .item_title{color: orange;}
	.right_context{display: flex;flex-direction: column;}
	.content_bottom{display: flex;align-items: center;position: relative;font-size: .8rem;height: 35px;}
	.fa-thumbs-up{font-size: 2rem;color: orange;cursor: pointer;}
	.item_context{height: 70px;overflow: hidden;}
	.el-tabs__item.is-active{color: orange !important}

	@media screen and (max-width: 1200px){
		.comunity{padding: 0 4%;}
	}
</style>