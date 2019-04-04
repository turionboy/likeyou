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
					<img :src="'/static/imgs/'+item.src" alt="" />
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
				<div class="scens_item" v-for="item,index in scensList" :key="index" @click="toProduct(item)">
					<img class="scens_img" :src="item.src" />
					<span class="scens_text">
						<span class="scens_title">{{ item.title }}</span>
						<span class="scens_desc">{{ item.desc }}</span>
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
						<span class="story_desc">{{ item.desc }}</span>
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
				cityList: [			// 热门城市列表 
					{
						id: 0,
						name: '广州',
						src: 'guangzhou.jpg'
					},{
						id: 1,
						name: '大理',
						src: 'dali.jpeg'
					},{
						id: 2,
						name: '北京',
						src: 'beijing.jpg'
					},{
						id: 3,
						name: '澳门',
						src: 'aomen.jpg'
					},{
						id: 4,
						name: '厦门',
						src: 'xiamen.jpg'
					},{
						id: 1,
						name: '大理',
						src: 'dali.jpeg'
					},{
						id: 2,
						name: '北京',
						src: 'beijing.jpg'
					},{
						id: 3,
						name: '澳门',
						src: 'aomen.jpg'
					},{
						id: 4,
						name: '厦门',
						src: 'xiamen.jpg'
					},{
						id: 1,
						name: '大理',
						src: 'dali.jpeg'
					},{
						id: 2,
						name: '北京',
						src: 'beijing.jpg'
					},{
						id: 3,
						name: '澳门',
						src: 'aomen.jpg'
					},{
						id: 4,
						name: '厦门',
						src: 'xiamen.jpg'
					},
				],
				scensList: [
					{
						id: 0,
						src: '/static/imgs/scens1.jpg',
						title: '天安门广场',
						desc: '世界上最大的广场——天安门广场，位于长安街南侧，北京城的传统中轴线上。广场中心为人民英雄纪念碑，向南穿过毛主席纪念堂就到了正阳门，也就是前门。西侧是人民大会堂，东侧是国家博物馆，广场的对面，长安街的北侧即是天安门城楼，城楼下是波光粼粼的金水河。每天的清晨和傍晚，天安门广场都会举行隆重严肃的升降旗仪式，对于初到北京的人来说',
					},{
						id: 1,
						src: '/static/imgs/scens2.jpg',
						title: '大理3日线路',
						desc: '描今日主要游玩大理古城，上午漫步在古城的各条街道，感受古城的生活气息。下午游玩崇圣寺三塔公园，近距离接触大理国时期皇家寺院仅存的古迹；之后前往三塔南侧',
					},{
						id: 2,
						src: '/static/imgs/scens4.jpg',
						title: '洱海',
						desc: '古称叶榆水，也叫西洱河、昆弥川，外形如同耳朵，是由西洱河塌陷形成的高原湖泊。共有三岛、四洲、五湖、九曲，湖水清澈见底，被称作“群山间的无瑕美玉”，是大理“风花雪月”四大名景之一。沿湖的人气村落有“洱海神光”的双廊',
					},{
						id: 3,
						src: '/static/imgs/scens6.jpg',
						title: '沙面',
						desc: '沙面是广州重要商埠，历经百年，曾有十多个国家在沙面设立领事馆，九家外国银行、四十多家洋行在沙面经营。这里见证了广州近代史的变迁，留下了孙中山先生、周恩来总理等伟人的足迹。我国近代史与租界史的缩影，沙面岛上欧陆风情建筑形成了独特的露天建筑“博',
					},{
						id: 1,
						src: '/static/imgs/scens2.jpg',
						title: '大理3日线路',
						desc: '描今日主要游玩大理古城，上午漫步在古城的各条街道，感受古城的生活气息。下午游玩崇圣寺三塔公园，近距离接触大理国时期皇家寺院仅存的古迹；之后前往三塔南侧',
					},{
						id: 2,
						src: '/static/imgs/scens4.jpg',
						title: '洱海',
						desc: '古称叶榆水，也叫西洱河、昆弥川，外形如同耳朵，是由西洱河塌陷形成的高原湖泊。共有三岛、四洲、五湖、九曲，湖水清澈见底，被称作“群山间的无瑕美玉”，是大理“风花雪月”四大名景之一。沿湖的人气村落有“洱海神光”的双廊',
					},{
						id: 3,
						src: '/static/imgs/scens6.jpg',
						title: '沙面',
						desc: '沙面是广州重要商埠，历经百年，曾有十多个国家在沙面设立领事馆，九家外国银行、四十多家洋行在沙面经营。这里见证了广州近代史的变迁，留下了孙中山先生、周恩来总理等伟人的足迹。我国近代史与租界史的缩影，沙面岛上欧陆风情建筑形成了独特的露天建筑“博',
					},{
						id: 1,
						src: '/static/imgs/scens2.jpg',
						title: '大理3日线路',
						desc: '描今日主要游玩大理古城，上午漫步在古城的各条街道，感受古城的生活气息。下午游玩崇圣寺三塔公园，近距离接触大理国时期皇家寺院仅存的古迹；之后前往三塔南侧',
					},{
						id: 2,
						src: '/static/imgs/scens4.jpg',
						title: '洱海',
						desc: '古称叶榆水，也叫西洱河、昆弥川，外形如同耳朵，是由西洱河塌陷形成的高原湖泊。共有三岛、四洲、五湖、九曲，湖水清澈见底，被称作“群山间的无瑕美玉”，是大理“风花雪月”四大名景之一。沿湖的人气村落有“洱海神光”的双廊',
					},{
						id: 3,
						src: '/static/imgs/scens6.jpg',
						title: '沙面',
						desc: '沙面是广州重要商埠，历经百年，曾有十多个国家在沙面设立领事馆，九家外国银行、四十多家洋行在沙面经营。这里见证了广州近代史的变迁，留下了孙中山先生、周恩来总理等伟人的足迹。我国近代史与租界史的缩影，沙面岛上欧陆风情建筑形成了独特的露天建筑“博',
					},
				],
				storyList: [
					{
						id: 0,
						title: '四个老头吃火锅，不图情调为热闹——20181107“火锅岛潮牌自助餐厅”用餐记',
						desc: '昨天第一次在马蜂窝上发了一篇以美食为主题的游记，没想到蜂友很捧场。老实说，我只能发发照片，然后按我的口味说说好不好吃，不像 上海 的美食家“慧心溯源”能讲出那么多门道，但蜂友的鼓励让我信心大增，尽管以前很少拍吃的，但还是拍了一些，所以今天就趁着热乎劲儿再发一篇。这篇的主角是去年夏天在 天津 开业的位于西南角天佑城5楼的“火锅岛潮牌自助餐厅”，当时这个自助火锅可是在朋友圈大大地火了一把，原因很简单，就是转发到朋友圈可以优惠。团购是59.9元/人，而转发朋友圈可以优惠3元，是56.9元/人，别小看这3元，吸引了很多人前去就餐，这应该是微信营销的一个 成功案例',
						imgUrl: 'http://p3-q.mafengwo.net/s13/M00/0B/9A/wKgEaVyDQfyAVYF8AAy2Lqe7dBI74.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
						author: 'Jeffrey'
					},{
						id: 1,
						title: '鲸游记｜一起去北海道，看理想生活的一百种模样！',
						desc: '这是我第二次去 日本 了，至于为什么又是 日本 ？也许是几年前 关西 一行，精致可爱的美景美食、干净整洁的市容市貌、井然有序的社会氛围、细密贴心的极致服务都给我留下了太过深刻的印象，使我这几年来每每说起 日本 ，脱口而出的赞叹可谓是滔滔不绝，硬是把我那个对 日本 无感甚至带着点敌意的老父亲渐渐洗脑成有了“ 日本 也许值得一去的”念头的跃跃欲试者，功力可见一斑',
						imgUrl: 'http://n3-q.mafengwo.net/s13/M00/50/35/wKgEaVyFNHCAUEN4AA1Qae1bStw51.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
						author: 'Jeffrey'
					},{
						id: 2,
						title: '早春•故宫半日游',
						desc: '由于目前身在 廊坊 大厂工作劳累，于是好不容易有两天假期，兴致勃勃计划一大早进京，结果……因为兴奋当天起晚了！！前一晚在x团上购入园内+两馆带讲解的联票，路线手机地图查询就好，第二天出门搭乘专线以及公交，再走路2km+，感觉还没开始逛就有点累了。（天安门附近的公交站/地铁站都是不停车的，所以必须走路，并且一定要随身携带身份证，一个不小心可能会被路边的特警叔叔查哦～）由于进京途中各种堵，当然就错过了讲解阿哥的队伍……算了，自己玩吧～',
						imgUrl: 'http://b3-q.mafengwo.net/s13/M00/73/EE/wKgEaVyFWLyAEiKAAAfPt5DtWQg68.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90',
						author: 'Jeffrey'
					},
				],
				isShowTop: false,
				currIndex: 0
			}
		},
		created: function(){

		},
		mounted: function(){
			
		},
		methods: {
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
				this.$store.commit('setCurr_id', 3);
				this.$router.push({
					path: '/detail'
				});
			},
			// 跳转至旅游产品模块
			toProduct(item) {
				this.$store.commit('setCurr_id', 1);

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
	.title{padding: 10px;background: orange;color: #fff;border-left: 10px solid moccasin;font-size: 1.6rem}
	/*热门城市*/
	.city{display: flex;flex-direction: row;align-items: center;flex-wrap: wrap;}
	.city_item{width: 200px;height:200px;position: relative;margin: 10px;border-radius: 50%;overflow: hidden;cursor: pointer;}
	.city_item:hover img{transform: scale(1.2,1.2);opacity: 0.8}
	.item_nane{position: absolute;top: 0;left: 0;font-size: 3rem;color:#fff;width:100%;height: 100%;display: flex;justify-content: center;align-items: center;}
	/*热门景点*/
	.scens{display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-between;}
	.scens_item{width: 100%;display: flex;flex-direction: row;margin: 10px;cursor: pointer;}
	.scens_text{display: flex;flex-direction: column;}
	.scens_title{font-weight: bold;padding: 10px;font-size: 1.5rem;}
	.scens_img{width: 250px;height: 150px;}
	.scens_desc{padding: 10px;height: 100px;overflow: hidden;text-overflow: ellipsis;}
	.scens_item:hover{color:orange;}
	/*热门故事*/
	.story{display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-between;}
	.story_item{width: 100%;display: flex;flex-direction: row;margin: 10px;cursor: pointer;}
	.story_text{display: flex;flex-direction: column;}
	.story_title{font-weight: bold;padding: 10px;font-size: 1.5rem;width: 100%;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
	.story_img{width: 250px;height: 150px;}
	.story_desc{padding: 10px;height: 100px;overflow: hidden;text-overflow: ellipsis;}
	.story_item:hover{color:orange;}
</style>