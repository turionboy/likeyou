<template>
	<div class="productForeign">
		<div class="city">
			/ {{ city }} /
			<span class="changeCity"><i class="fa fa-exchange" style="margin-right: 5px;"></i>切换国家
			</span>
		</div>
		<div class="scens">
			<div class="title">/ 景点</div>
			<div class="scensList">
				<div class="scensList_item" v-for="item,index in scensList">
					<div class="item_title">
						<span style="background: orange;padding: 5px 12px;color: #fff">{{ index+1 }}</span> {{ item.title }}
					</div>
					<div style="overflow: hidden;">
						<img class="item_img" :src="item.imgUrl" />
						<span>{{ item.content }}</span>
					</div>
				</div>
			</div>
			<div class="loading_more" v-if="!isNull">加载更多</div>
			<div class="loading_more" v-else>无更多信息</div>
		</div>
		<div class="scens">
			<div class="title">/ 住宿</div>
			<div class="scensList">
				<div class="scensList_item" v-for="item,index in hotelList">
					<div class="item_title">
						<span style="background: orange;padding: 5px 12px;color: #fff">{{ index+1 }}</span> {{ item.title }}
					</div>
					<div style="overflow: hidden;">
						<img class="item_img" :src="item.imgUrl" />
						<span>{{ item.content }}</span>
					</div>
				</div>
			</div>
			<div class="loading_more" v-if="!isNull">加载更多</div>
			<div class="loading_more" v-else>无更多信息</div>
		</div>
	</div>
</template>

<script>
	
	export default({
		name: 'productForeign',
		data() {
			return {
				city: '法国',
				scensList: [
					{
						id: 0,
						imgUrl: 'https://p2-q.mafengwo.net/s10/M00/A0/51/wKgBZ1m1GOaARk_EADxTppCJcxM97.jpeg?imageMogr2%2Fthumbnail%2F%21296x156r%2Fgravity%2FCenter%2Fcrop%2F%21296x156%2Fquality%2F100',
						title: '沙面+圣心大教堂+上下九',
						content: '发送旅客就是锻炼腹肌老师多级分类经费落实经费两件事雷锋精神快乐激发了开始激发了开始的积分粮食店街法律快速的减肥设计费绿色减肥了类似绝地反击设计费了多少分可是对方开始懂了飞机上的浪费凯撒简单概括哈哈发看好卡废话的卡好卡'
					},{
						id: 1,
						imgUrl: 'https://b3-q.mafengwo.net/s10/M00/B6/D1/wKgBZ1mB4b6AXRjpAADupCtpW1Y475.png',
						title: '长隆欢乐世界+长隆水上乐园',
						content: '粉红色教师的覅阿凡达更好阿斗佛法安静给I了都给I大家哦家家啊来给大家哦啊过来jog龙卷风感觉是立法机关哦受浪费时间工具上来说哦哦就的风格很干净啊借口递进偶然连连看覅安静的过激进I人数及埃及I结果就覅的计算机工商局电视剧风格十几个急死感觉I日'
					},{
						id: 2,
						imgUrl: 'https://b3-q.mafengwo.net/s10/M00/B6/D1/wKgBZ1mB4b6AXRjpAADupCtpW1Y475.png',
						title: '长隆欢乐世界+长隆水上乐园',
						content: '粉红色教师的覅阿凡达更好阿斗佛法安静给I了都给I大家哦家家啊来给大家哦啊过来jog龙卷风感觉是立法机关哦受浪费时间工具上来说哦哦就的风格很干净啊借口递进偶然连连看覅安静的过激进I人数及埃及I结果就覅的计算机工商局电视剧风格十几个急死感觉I日'
					},{
						id: 3,
						imgUrl: 'https://b3-q.mafengwo.net/s10/M00/B6/D1/wKgBZ1mB4b6AXRjpAADupCtpW1Y475.png',
						title: '长隆欢乐世界+长隆水上乐园',
						content: '粉红色教师的覅阿凡达更好阿斗佛法安静给I了都给I大家哦家家啊来给大家哦啊过来jog龙卷风感觉是立法机关哦受浪费时间工具上来说哦哦就的风格很干净啊借口递进偶然连连看覅安静的过激进I人数及埃及I结果就覅的计算机工商局电视剧风格十几个急死感觉I日'
					}
				],
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
				]
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
	img{width: 100%;height: 100%;}
	.productForeign{padding: 20px 20%;}
	.title{padding: 10px;font-size: 1.2em;text-shadow: 5px 5px 5px orange;}
	.city{position: relative;text-align: center;font-weight: bold;font-size: 2.3em;text-shadow: 5px 5px 5px orange;}
	.changeCity{position: absolute;top:0;right: 0;font-size: .8rem;text-shadow: none;height: 100%;display: flex;align-items: center;cursor: pointer;}
	.scensList{display: flex;justify-content: space-around;flex-direction: row;flex-wrap: wrap;}
	.scensList_item{width: 40%;cursor: pointer;padding: 5px 20px;border: 1px solid orange;margin-bottom: 15px;}
	.scensList_item:hover .item_title{color: orange}
	.scensList_item:hover .item_img{transform: scale(1.2,1.2);}
	.item_title{font-size: 1.1em;margin: 10px 0;}
	.loading_more{text-align: center;cursor: pointer;}
	.loading_more:hover{color: orange;}
</style>