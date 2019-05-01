<template>
	<div class="detail_product">
		<div class="topHeader">
			<topHeader />			
		</div>
		<div class="contain">
			<div class="title">
				<span style="font-size: 2.3rem">{{ info.title }}</span>
				<span>{{ info.ename }}</span>				
			</div>
			<div class="img">
				<div class="img_left"><img :src="info.imgUrl_l"></div>
				<div class="img_right"><img style="margin-bottom: 10px" :src="info.imgUrl_rt"><img :src="info.imgUrl_rb"></div>
			</div>
			<div class="desc">
				{{ info.context }}
			</div>
			<div class="information">
				<div class="info_top">
					<span>电话<br>{{ info.tele }}</span>
					<span class="top_time">用时参考<br>{{ info.cost_time }}</span>
				</div>
				<div style="padding: 20px 0;">
					<span>交通<br></span>
					<span v-html="info.traffic"></span>
				</div>
				<div style="padding: 20px 0;">
					<span>门票<br></span>
					<span>{{ info.ticket }}</span>
				</div>
				<div style="padding: 20px 0;">
					<span>开放时间<br></span>
					<span>{{ info.open_time }}</span>
				</div>
			</div>
			<div class="hotel">
				<div class="hotel_title">附近住宿</div>
				<div class="hotel_items scrollbar">
					<div class="hotel_item" v-for="item,index in hotelList" :key="index" @click="showHotel(item)">
						<div class="item_img"><img :src="item.imgUrl"></div>
						<div class="item_name"><span>{{ item.name }}</span></div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="footer">
			<contactUs />
		</div>
		<el-dialog
		  :title="curr_hotel.title"
		  :visible.sync="isShowHotel"
		  width="30%"
		  center>
		  <div style="display: flex;flex-direction: column;">
		  		<div class="pop_hotel_img">
		  			<img :src="curr_hotel.imgUrl">
		  		</div>
		  		<div class="pop_hotel_desc">
		  			<span v-html="curr_hotel.context"></span>
		  		</div>
		  		<div class="pop_hotel_tele" style="display: flex;flex-direction: column;">
		  			<span>{{ curr_hotel.context }}</span>
		  			<span>{{ curr_hotel.roomType }}</span>
		  			<span>{{ curr_hotel.check_time }}</span>
		  			<span>预定电话：{{ curr_hotel.tele }}</span>
		  		</div>
		  </div>
		  <!-- <span slot="footer" class="dialog-footer">
		    <el-button @click="isShowHotel = false">取 消</el-button>
		    <el-button type="primary" @click="isShowHotel = false">确 定</el-button>
		  </span> -->
		</el-dialog>
	</div>
</template>

<script>
	import topHeader from '../../template/topHeader/index'
	import contactUs from '../../template/contactUs/index'

	export default({
		name: 'detail_product',
		data() {
			return {
				info: {},
				hotelList: [
					{
						id: 0,
						title: '奇幻马戏公馆(广州汉溪长隆店)(原奇幻马戏酒店)',
						imgUrl: 'https://b4-q.mafengwo.net/s12/M00/0D/90/wKgED1usnHeAVAwpACNYUqNO3DY01.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						tele: '0769-887783726',
						context: '绝对是开发劳动纠纷发两地分居六十几分六十几分韩国id哦老司机哦I还算法和',
						roomType: '大床房/双床房',
						check_time: '14:00入住/12:00退房'
					},{
						id: 1,
						title: '白云山下公寓',
						imgUrl: 'https://n1-q.mafengwo.net/s10/M00/A4/AF/wKgBZ1lZ06mAOhkAAAGg4_haRNM71.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						tele: '0769-887783726',
						context: '绝对是开发劳动纠纷发两地分居六十几分六十几分韩国id哦老司机哦I还算法和',
						roomType: '大床房/双床房',
						check_time: '14:00入住/12:00退房'
					},{
						id: 2,
						title: '「晴子」日式复式小居',
						imgUrl: 'https://n2-q.mafengwo.net/s10/M00/B8/EF/wKgBZ1lZ5SKATSCVAAGr5tEYz1w14.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						tele: '0769-887783726',
						context: '绝对是开发劳动纠纷发两地分居六十几分六十几分韩国id哦老司机哦I还算法和',
						roomType: '大床房/双床房',
						check_time: '14:00入住/12:00退房'
					},{
						id: 3,
						title: '维也纳智好酒店',
						imgUrl: 'https://p1-q.mafengwo.net/s12/M00/34/9B/wKgED1uI9S-AOO7_AALX0YqwqRk12.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						tele: '0769-887783726',
						context: '绝对是开发劳动纠纷发两地分居六十几分六十几分韩国id哦老司机哦I还算法和',
						roomType: '大床房/双床房',
						check_time: '14:00入住/12:00退房'
					},{
						id: 1,
						title: '白云山下公寓',
						imgUrl: 'https://n1-q.mafengwo.net/s10/M00/A4/AF/wKgBZ1lZ06mAOhkAAAGg4_haRNM71.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						tele: '0769-887783726',
						context: '绝对是开发劳动纠纷发两地分居六十几分六十几分韩国id哦老司机哦I还算法和',
						roomType: '大床房/双床房',
						check_time: '14:00入住/12:00退房'
					},{
						id: 2,
						title: '「晴子」日式复式小居',
						imgUrl: 'https://n2-q.mafengwo.net/s10/M00/B8/EF/wKgBZ1lZ5SKATSCVAAGr5tEYz1w14.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						tele: '0769-887783726',
						context: '绝对是开发劳动纠纷发两地分居六十几分六十几分韩国id哦老司机哦I还算法和',
						roomType: '大床房/双床房',
						check_time: '14:00入住/12:00退房'
					},{
						id: 3,
						title: '维也纳智好酒店',
						imgUrl: 'https://p1-q.mafengwo.net/s12/M00/34/9B/wKgED1uI9S-AOO7_AALX0YqwqRk12.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						tele: '0769-887783726',
						context: '绝对是开发劳动纠纷发两地分居六十几分六十几分韩国id哦老司机哦I还算法和',
						roomType: '大床房/双床房',
						check_time: '14:00入住/12:00退房'
					},{
						id: 1,
						title: '白云山下公寓',
						imgUrl: 'https://n1-q.mafengwo.net/s10/M00/A4/AF/wKgBZ1lZ06mAOhkAAAGg4_haRNM71.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						tele: '0769-887783726',
						context: '绝对是开发劳动纠纷发两地分居六十几分六十几分韩国id哦老司机哦I还算法和',
						roomType: '大床房/双床房',
						check_time: '14:00入住/12:00退房'
					},{
						id: 2,
						title: '「晴子」日式复式小居',
						imgUrl: 'https://n2-q.mafengwo.net/s10/M00/B8/EF/wKgBZ1lZ5SKATSCVAAGr5tEYz1w14.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						tele: '0769-887783726',
						context: '绝对是开发劳动纠纷发两地分居六十几分六十几分韩国id哦老司机哦I还算法和',
						roomType: '大床房/双床房',
						check_time: '14:00入住/12:00退房'
					},{
						id: 3,
						title: '维也纳智好酒店',
						imgUrl: 'https://p1-q.mafengwo.net/s12/M00/34/9B/wKgED1uI9S-AOO7_AALX0YqwqRk12.jpeg?imageMogr2%2Fthumbnail%2F%21660x480r%2Fgravity%2FCenter%2Fcrop%2F%21660x480%2Fquality%2F90',
						tele: '0769-887783726',
						context: '绝对是开发劳动纠纷发两地分居六十几分六十几分韩国id哦老司机哦I还算法和',
						roomType: '大床房/双床房',
						check_time: '14:00入住/12:00退房'
					}
				],
				isShowHotel: false,
				curr_hotel: {}
			}
		},
		components: {
			topHeader,
			contactUs,
		},
		created: function(){

		},
		mounted: function(){
			$(document).scrollTop(0);
			if(this.$store.state.scene_id == 0){
				this.$router.push({
					path: '/'
				})
			}
			this.getInfo();
		},
		methods: {
			getInfo() {
				this.$axios.get(this.API + '/api/user/scene/' + this.$store.state.scene_id).then(res => {
					this.info = res.data.result;
				}).catch(err => {

				})
			},
			showHotel(item) {
				this.curr_hotel = item;
				this.isShowHotel = true;
			}
		}	
	})
</script>

<style scoped="scoped">
	.contain{padding: 0 20%;}
	.title{display: flex;flex-direction: column;padding: 20px 0;}
	.img{display: flex;flex-direction: row;}
	.img_left{width: 100%;padding: 5px}
	.img_right{display: flex;flex-direction: column;padding: 5px}
	.desc{padding: 20px 0;border-bottom: 2px solid #e3e3e3;}
	.information{padding: 20px 0;font-size: .8rem;}
	.info_top{display: flex;padding: 20px 0;line-height: 25px;}
	.top_time{margin-left: 30%;padding-left: 30px;border-left: 1px solid #e3e3e3;}
	.hotel{padding: 20px 0;border-top: 2px solid #e3e3e3;}
	.hotel_items{display: flex;flex-direction: row;flex-wrap: nowrap;overflow: hidden;}
	.scrollbar{width: 100%;overflow-x: scroll;}
	.scrollbar::-webkit-scrollbar {height: 10px;}
	.scrollbar::-webkit-scrollbar-thumb {border-radius: 0;-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);background: orange;}
	.scrollbar::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);border-radius:0;background: #fff;}
	.hotel_item{margin-right: 20px;cursor: pointer;}
	.hotel_item:hover{color: orange}
	.hotel_item:hover .item_img img{transform: scale(1.2,1.2);}
	.hotel_title{margin-bottom: 20px;font-size: 1.4rem}
	.item_img{width: 200px;overflow: hidden;}

	@media screen and (max-width: 1200px){
		.contain{padding: 0 4%}
	}
</style>