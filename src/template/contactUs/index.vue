<template>
	<div class="contactUs">
		<div class="title">联系我们</div>
		<div class="context">
			<div class="code"><img src="https://www.zhanjf.xyz/files/code.png" alt=""></div>
			<div class="address">
				<p>邮箱：13660493601@163.com</p>
				<p>手机号码：13660493601</p>
				<p>微信号：zhanjf1222</p>
				<p>QQ: 448191774</p>
				<p>公司地址：广州市黄埔区红山三路101号广州航海学院北区宿舍北四幢1048室</p>
			</div>
			<div class="menuList">
				<div @click="navig(index)" class="menuList_item" v-for="item,index in menuList" :key="index">
					<span class="father_item">{{ item.text }}</span>
					<div class="child">
						<span class="child_item" v-for="item2,index2 in item.child" :key="index2">{{ item2.text }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default({
		name: 'contactUs',
		data() {
			return {
				menuList: [
					{
						id: 0,
						text: '首页',
						isShow: false,
						child: [
							{
								id: 1,
								text: '热门城市',
								className: 'hot_city'
							},{
								id: 2,
								text: '热门景点',
								className: 'hot_scens'
							},{
								id: 3,
								text: '热门故事',
								className: 'hot_story'
							},
						]
					},{
						id: 1,
						text: '旅游产品',
						isShow: false,
						child: [
							{
								id: 1,
								text: '景点',
								className: ''
							},{
								id: 1,
								text: '住宿',
								className: ''
							},
						]
					},{
						id: 2,
						text: '异域风情',
						isShow: false,
						child: [
							{
								id: 1,
								text: '景点',
								className: ''
							},{
								id: 2,
								text: '住宿',
								className: ''
							},
						]
					},{
						id: 3,
						text: '社区',
						isShow: false,
						child: []
					},{
						id: 3,
						text: '关于我们',
						isShow: false,
						child: []
					}
				]
			}
		},
		created: function(){

		},
		mounted: function(){

		},
		methods: {
			navig(id) {
				this.$store.commit('setCurr_id', id);
				$(document).scrollTop(0)
			}
		}
	})
</script>

<style scoped="scoped">
	.contactUs{background: #333;height: 300px;color: #fff;padding: 0 5%}
	.title{font-size: 2rem;padding: 20px 0;}
	.context{display: flex;flex-direction: row;justify-content: space-around;}
	.code{width: 17rem;height: 17rem;}
	img{width: 100%;height: 100%}
	.address{font-size: 0.8rem;margin: 0 20px;}
	.menuList{display: flex;flex-direction: row;font-size: 0.8rem;line-height: 30px;margin: 0 20px;width: 20%;flex-wrap: wrap;}
	.menuList_item{cursor: pointer;}
	.father_item:hover{color: orange}
	.father_item{font-size: 1.2rem;margin-right: 20px}
	.child{}
	.child_item{margin-right: 10px}
	.child_item:hover{color: orange}

	@media screen and (max-width: 1200px){
		.menuList{width: 100%;}
		.code{height: 8rem}
	}
	@media screen and (max-width: 500px){
		.contactUs{padding: 0 0 0 20px;}
		.code{display: none;}
		.address{margin: 0;}
		.title{padding: 20px 0 0 0;}
	}

</style>