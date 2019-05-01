<template>
	<div class="productTour">
		<div class="city">
			/ {{ city }} /
			<span class="changeCity"><i class="fa fa-exchange" style="margin-right: 5px;"></i>切换城市
			</span>
		</div>
		<div class="scens">
			<div class="title">/ 景点</div>
			<div class="scensList">
				<div class="scensList_item" v-for="item,index in scensList" @click="toDetailProduct(item)">
					<div class="item_title">
						<span style="background: orange;padding: 5px 12px;color: #fff">{{ index+1 }}</span> {{ item.title }}
					</div>
					<div style="overflow: hidden;">
						<img class="item_img" :src="item.imgUrl_l" />
					</div>
					<div>{{ item.context }}</div>
				</div>
			</div>
			<div class="loading_more" v-if="!isNull">加载更多</div>
			<div class="loading_more" v-else>无更多信息</div>
		</div>
		<div class="scens">
			<div class="title">/ 住宿</div>
			<div class="scensList">
				<div class="scensList_item" v-for="item,index in hotelList" @click="showHotel(item)">
					<div class="item_title">
						<span style="background: orange;padding: 5px 12px;color: #fff">{{ index+1 }}</span> {{ item.title }}
					</div>
					<div style="overflow: hidden;">
						<img class="item_img" :src="item.imgUrl" />						
					</div>
					<div>{{ item.description }}</div>
				</div>
			</div>
			<div class="loading_more" v-if="!isNull">加载更多</div>
			<div class="loading_more" v-else>无更多信息</div>
		</div>
		<div class="hotelDetail" v-if="isShowHotel">
			
		</div>
	</div>
</template>

<script>
	// import hotelDetail from '../hotelDetail/index'
	
	export default({
		name: 'productTour',
		data() {
			return {
				city: '广州',
				scensList: [],
				hotelList: [
					{
						id: 0,
						imgUrl: 'https://n2-q.mafengwo.net/s10/M00/26/62/wKgBZ1mMcrOAYuG-AAPHUtSXp-s62.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						title: '锦江之星',
						content: '减肥可是大家手机打开骄傲了就拉到家放假啊看讲大局老卡机卡机卡拉胶啊的发放啊放大挂号费凯撒哈这的你是智商us考核得分死的话回复 阿什顿飞阿道夫啊发发的发生'
					},{
						id: 1,
						title: '迎商酒店',
						imgUrl: 'https://p3-q.mafengwo.net/s13/M00/80/2B/wKgEaVx-TtCADIiWAAI7i7LaGBQ01.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						content: '放假水豆腐静安寺按实际发来得及I家假按揭I家点击放大会计系接送机理想的开房间奥迪减肥零度空间覅奇偶的积分圣诞节付款江西的肌肤链接深刻的减肥io啊石'
					},{
						id: 2,
						title: '迎商酒店',
						imgUrl: 'https://p3-q.mafengwo.net/s13/M00/80/2B/wKgEaVx-TtCADIiWAAI7i7LaGBQ01.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						content: '放假水豆腐静安寺按实际发来得及I家假按揭I家点击放大会计系接送机理想的开房间奥迪减肥零度空间覅奇偶的积分圣诞节付款江西的肌肤链接深刻的减肥io啊石'
					},{
						id: 3,
						title: '迎商酒店',
						imgUrl: 'https://p3-q.mafengwo.net/s13/M00/80/2B/wKgEaVx-TtCADIiWAAI7i7LaGBQ01.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						content: '放假水豆腐静安寺按实际发来得及I家假按揭I家点击放大会计系接送机理想的开房间奥迪减肥零度空间覅奇偶的积分圣诞节付款江西的肌肤链接深刻的减肥io啊石'
					}
				],
				isShowHotel: false,
				isNull: true,

			}
		},
		components:{
			// hotelDetail,
		},
		created: function(){
			if(!this.$store.state.city_id)
				this.$store.commit('setCity_id', 11);
		},
		mounted: function(){
			$(document).scrollTop(0);
			this.$axios.get(this.API + '/api/user/city/'+this.$store.state.city_id).then(res => {
				this.city = res.data.result.name;
			}).catch(err => {})
			this.getScene();
			this.getHotel();
		},
		methods: {
			getScene() {
				this.$axios.get(this.API + '/api/user/scene?city_id='+this.$store.state.city_id).then(res => {
					this.scensList = res.data.result;
				}).catch(err => {

				})
			},
			getHotel() {
				this.$axios.get(this.API + '/api/user/hotel').then(res => {
					this.hotelList = res.data.result;
				}).catch(err => {

				})
			},
			// 跳转至景点详情
			toDetailProduct(item) {
				this.$store.commit('setScene_id', item.id);
				this.$router.push({
					path: '/detail_product'
				});
			},
			// 显示住宿详情
			showHotel(item){
				this.isShowHotel = true;
			}
		}
	})
</script>

<style scoped="">
	img{width: 100%;height: 100%;}
	.productTour{padding: 20px 20%;}
	.title{padding: 10px;font-size: 1.2em;text-shadow: 5px 5px 5px orange;}
	.city{position: relative;text-align: center;font-weight: bold;font-size: 2.3em;text-shadow: 5px 5px 5px orange;}
	.changeCity{position: absolute;top:0;right: 0;font-size: .8rem;text-shadow: none;height: 100%;display: flex;align-items: center;cursor: pointer;}
	.scensList{display: flex;justify-content: space-around;flex-direction: row;flex-wrap: wrap;justify-content: space-between;}
	.scensList_item{width: 45%;cursor: pointer;padding: 5px 20px;border: 1px solid orange;margin-bottom: 15px;}
	.scensList_item:hover .item_title{color: orange}
	.scensList_item:hover .item_img{transition: transform 0.5s;transform: rotate(360deg);}
	.item_title{font-size: 1.1em;margin: 10px 0;}
	.loading_more{text-align: center;cursor: pointer;}
	.loading_more:hover{color: orange;}

	@media screen and (max-width: 1200px){
		.productTour{padding: 20px 4%;}
	}
</style>