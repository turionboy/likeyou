<template>
	<div class="indexCon">
		<div class="slider">
			<el-carousel ref="slider" :interval="4000" height="600px" @change="sliderChange">
			    <el-carousel-item v-for="item,index in photoList" :key="index">
					<span class="desc">{{ item.text }} </span>
			        <img :src="item.src" alt="">
			    </el-carousel-item>
			</el-carousel>
			<div class="imgList">
				<span class="imgList_item" v-for="item,index in photoList" :key="index" @click="toggleIndex(index)"><img :class="currIndex == index?'curr':''" :src="item.src"></span>
			</div>
		</div>
		<div class="hot_city pc_margin">
			<div class="title">热门城市</div>
			<div class="city">
				<div class="city_item" v-for="item,index in cityList" :key="index" @click="toProduct(item)">
					<img :src="item.imgUrl" alt="" />
					<span class="item_nane">{{ item.name }}</span>
				</div>
				<div class="city_item" style="background: #333">
					<img src="" alt="" />
					<span class="item_nane">更多...</span>
				</div>
			</div>
		</div>
		<div class="hot_scens pc_margin">
			<div class="title">热门景点</div>
			<div class="scens">
				<div class="scens_item" v-for="item,index in scensList" :key="index" @click="toProductDetail(item)">
					<img class="scens_img" :src="item.imgUrl_l" />
					<span class="scens_text">
						<span class="scens_title">{{ item.title }}</span>
						<span class="scens_desc">{{ item.context }}</span>
					</span>			
				</div>
			</div>
		</div>
		<div class="hot_story pc_margin">
			<div class="title">热门故事</div>
			<div class="story">
				<div class="story_item" v-for="item,index in storyList" :key="index" @click="toDetail(item)">
					<img class="story_img" :src="item.imgUrl" />
					<span class="story_text">
						<span class="story_title">{{ item.title }}</span>
						<span class="story_desc" v-html="item.context"></span>
					</span>		
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default({
		name: 'indexCon',
		data() {
			return {
				photoList: [
					{
						val: 0,
						text: '一路向北，与北国纯白精灵的浪漫邂逅♥',
						src: 'https://b4-q.mafengwo.net/s13/M00/2A/0F/wKgEaVx_43WAAMppAAdcuRENk8416.jpeg?imageMogr2%2Finterlace%2F1'
					},{
						val: 1,
						text: '人均2k过周末，花莲真是个宝藏目的地哇',
						src: 'https://b2-q.mafengwo.net/s13/M00/60/90/wKgEaVyChLGAFCU-AARRydRUQSA74.jpeg?imageMogr2%2Finterlace%2F1'
					},{
						val: 2,
						text: '澳大利亚尝新，时尚都市与乡间野趣混搭',
						src: 'https://p3-q.mafengwo.net/s13/M00/FA/B6/wKgEaVyBGcuAa-SZAAwVqstbrkk53.jpeg?imageMogr2%2Finterlace%2F1'
					},{
						val: 3,
						text: '想要一次性看完世界的风景？那就去免签海岛留尼旺',
						src: 'https://n4-q.mafengwo.net/s13/M00/4C/68/wKgEaVx9Gz-AdZ7eAARykhDMgs056.jpeg?imageMogr2%2Finterlace%2F1'
					}	// tabbar图片轮播卡片
				],
				cityList: [],
				scensList: [],
				storyList: [],
				isShowTop: false,
				currIndex: 0
			}
		},
		created: function(){

		},
		mounted: function(){
			this.getCity();
			this.getScene();
			this.getStory();
		},
		methods: {
			getCity() {
				var that = this;
				that.$axios.get(that.API+'/api/user/city').then(res => {
					// console.log(res.data)
					that.cityList = res.data.result;
				}).catch(err => {

				})
			},
			getScene() {
				var that = this;
				that.$axios.get(that.API+'/api/user/scene').then(res => {
					// console.log(res.data)
					that.scensList = res.data.result;
				}).catch(err => {

				})
			},
			getStory() {
				var that = this;
				that.$axios.get(that.API+'/api/user/story').then(res => {
					// console.log(res.data)
					that.storyList = res.data.result;
				}).catch(err => {

				})
			},
			sliderChange(e) {
				this.currIndex = e;
				//console.log('e',e);
			},
			toggleIndex(idx) {
				this.$refs.slider.setActiveItem(idx)
			},
			// 跳转至社区模块
			toDetail(item) {
				// console.log(item);
				this.$store.commit('setStory_id', item.id);
				this.$router.push({
					path: '/detail_comunity'
				});
			},
			// 跳转至城市景点、住宿
			toProduct(item) {
				if(item.isForeign){
					this.$store.commit('setCurr_id', 2);
				}else{
					this.$store.commit('setCurr_id', 1);
				}
				this.$store.commit('setCity_id', item.id);				
			},
			// 跳转至景点详情
			toProductDetail(item) {
				this.$store.commit('setCurr_id', 1);
				this.$store.commit('setScene_id', item.id);
				this.$router.push({
					path: '/detail_product'
				});
			}
		}
	})
</script>

<style scoped>
	
	img{width: 100%;height: 100%}
	.imgList{position: absolute;top: 130px;right: 100px;display: flex;flex-direction: column;z-index: 10;}
	.imgList_item{width: 150px;height: 100px;margin:5px;cursor: pointer;}
	.curr{border: 2px solid coral;}
	.desc{position: absolute;top: 40px;left: 10%;font-size: 2rem;color: #fff;font-weight: bold;}
	/*通用*/
	.pc_margin{padding: 0 15%;}
	.title{padding: 10px;background: orange;color: #fff;border-left: 10px solid moccasin;font-size: 1.6rem;font-weight: bold;}
	/*热门城市*/
	.city{display: flex;flex-direction: row;align-items: center;flex-wrap: wrap;}
	.city_item{width: 200px;height:200px;position: relative;margin: 10px;border-radius: 50%;overflow: hidden;cursor: pointer;background: #333;}
	.city_item:hover img{transform: scale(1.2,1.2);opacity: 0.8;transition: transform 0.8s}
	.item_nane{position: absolute;top: 0;left: 0;font-size: 3rem;color:#fff;width:100%;height: 100%;display: flex;justify-content: center;align-items: center;}
	/*热门景点*/
	.scens{display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-between;}
	.scens_item{width: 100%;display: flex;flex-direction: row;margin: 10px;cursor: pointer;}
	.scens_item:hover img{transform: scale(0.8,0.8);opacity: 0.8;transition: transform 0.5s}
	.scens_text{display: flex;flex-direction: column;}
	.scens_title{font-weight: bold;padding: 10px;font-size: 1.5rem;}
	.scens_img{width: 250px;height: 150px;}
	.scens_desc{padding: 10px;height: 100px;overflow: hidden;text-overflow: ellipsis;}
	.scens_item:hover{color:orange;}
	/*热门故事*/
	.story{display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-between;}
	.story_item{width: 100%;display: flex;flex-direction: row;margin: 10px;cursor: pointer;}
	.story_item:hover img{transform: scale(0.8,0.8);opacity: 0.8;transition: transform 0.5s}
	.story_text{display: flex;flex-direction: column;}
	.story_title{font-weight: bold;padding: 10px;font-size: 1.5rem;width: 100%;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
	.story_img{width: 250px;height: 150px;}
	.story_desc{padding: 10px;height: 100px;overflow: hidden;text-overflow: ellipsis;}
	.story_item:hover{color:orange;}

	@media screen and (max-width: 1200px){
		.pc_margin{padding: 0 4%;}
		.city_item{width: 10rem;height: 10rem;}
		.slider{height: 350px;overflow: hidden;}
		.imgList{display: none;}
	}
	@media screen and (max-width: 500px){
		.title{font-size: 1.3rem}
		.city_item{width: 5.7rem;height: 5.7rem;}
		.item_nane{font-size: 1.5rem}
		.slider{height: 200px;}
		.scens_title{font-size: 1.2rem;padding: 0 10px;}
		.scens_img{width: 10rem;height: 7rem;}
		.scens_desc{height: 60px;}
		.story_title{font-size: 1.2rem;padding: 0 10px;}
		.story_img{width: 10rem;height: 7rem;}
		.story_desc{height: 60px;}
	}
</style>