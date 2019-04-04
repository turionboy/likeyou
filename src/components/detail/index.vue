<template>
	<div class="detail">
		<div class="topHeader">
			<topHeader />			
		</div>
		<div class="img">
			<img :src="info.imgUrl" /></div>
		<div class="content">
			<div class="content_left">
				<div class="title">
					<h1>{{ info.title }}</h1>
					<span>{{ info.time }}</span>
					<span><i class="fa fa-eye"></i>{{ info.watched }}</span>	
				</div>
				<div class="travelList">
					<span class="travelList_item" v-for="item,index in travelList" :key="index">
						<i :class="item.className"></i>
						<span style="color: #000">{{ item.text }}</span>
						<span>/</span>
						<span style="color: #000">{{ item.val }}</span>
					</span>
				</div>
				<section class="left_context" v-html="info.context"></section>
			</div>
			<div class="content_right">
				<div class="determin">相关目的地</div>
				<div class="determin_img">
					<img src="https://n3-q.mafengwo.net/s7/M00/53/AC/wKgB6lTwOY2ASPZqAA1MzaAVrZ053.jpeg?imageMogr2%2Fthumbnail%2F%21200x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21200x150%2Fquality%2F90" />
					<span class="determin_img_text">云南</span>
				</div>
				<div class="determin">相关游记</div>
				<div class="determin_img">
					<img src="https://p4-q.mafengwo.net/s11/M00/13/98/wKgBEFq0qcaADAYzAAMmv4qgnYU15.jpeg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F90" />
					<span class="determin_img_text">云南梦开始的地方</span>
				</div>
			</div>
		</div>
		<div class="footer">
			<contactUs />
		</div>
	</div>
</template>

<script>
	import topHeader from '../../template/topHeader/index'
	import contactUs from '../../template/contactUs/index'

	export default({
		name: 'detail',
		data() {
			return {
				info: {
					id: 1,
					imgUrl: 'https://b1-q.mafengwo.net/s12/M00/F0/8A/wKgED1xFkqqAcb3uAA1ABMj0qz099.jpeg?imageMogr2%2Fstrip',
					title: '云南梦开始的地方',
					context: '<p>1月</p><p>我们出发</p><p>去向往的生活</p><p>准备&nbsp;</p><p>收拾行李🧳</p><p>带着满满的期待</p><p>开启一场旅行✈️</p><p>首先把机票，房间提钱订好</p><p>机票用的是携程，房子我一般用的是艺</p><p>1月去天气还是有点冷</p>首都机场➡️&nbsp;<a href="https://www.mafengwo.cn/travel-scenic-spot/mafengwo/64892.html" target="_blank">三义</a>&nbsp;机场<br>晚上的飞机(比较便宜)<br>第一天就是坐车<br>到了<br>已是凌晨<br>从机场到酒店<br>收拾直接入睡<br>休息好了<br>准备明天的行程<br>早餐<br>酒店的自助，比较简单，可以吃饱<br>好啦<br>开始我们的行程<br><br>拉市海湿地<br>骑马，看海<br>感受茶马古道<br>茶马费用260一个人，骑马感受一下，当地的人会给你拉到景点看看，在把你放到村子里，做电瓶车去拉市海湿地，湿地非常适合照照片，👀下图，女生一定要带上美美的衣服去这个地方，超级适合凹造型<br>骑马的是我的小伙伴。<br><br>注意:&nbsp;<a href="https://www.mafengwo.cn/travel-scenic-spot/mafengwo/12711.html" target="_blank">云南</a>&nbsp;这边，海拔较高，紫外线强<br><p><span style="font-size: 1rem;">做好防晒</span><span style="font-size: 1rem;">&nbsp;</span><br></p>',
					time: '2019-03-20 15:40:20',
					watched: 10,
				},
				travelList: [
					{
						text: '出发时间',
						val: '2019-03-20',
						className: 'fa fa-clock-o'
					},{
						text: '出行天数',
						val: '1天',
						className: 'fa fa-certificate'
					},{
						text: '人物',
						val: '朋友',
						className: 'fa fa-users'
					},{
						text: '人均费用',
						val: '100RMB',
						className: 'fa fa-cny'
					}
				]
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
		},
		methods: {

		}
	})
</script>

<style scoped="scoped">
	.img{width: 100%;height: 600px;}
	.content{display: flex;margin: 0 25%;}
	.title{padding: 20px 0;display: flex;align-items: center;justify-content: space-between;}
	.travelList{padding: 10px;border: 1px dashed;display: flex;flex-direction: row;flex-wrap: wrap;}
	.travelList_item{color: orange;margin: 5px 20px}
	.content_right{width: 50%;padding: 20px;}
	.left_context{margin: 10px 0;}
	.left_context p,br{margin: 5px 0;}
	.determin{text-align: center;margin: 20px 0;}
	.determin_img{position: relative;color: #fff}
	.determin_img:hover{color: orange;}
	.determin_img img{width: 100%;height: 100%;cursor: pointer;}
	.determin_img_text{position: absolute;bottom: 5px;left: 5px;;font-weight: bold;}
</style>