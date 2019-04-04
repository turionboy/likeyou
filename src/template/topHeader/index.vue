<template>
	<header class="header background">
		<div class="title">
			<img src="/static/imgs/logo.jpg" alt="">
			<span style="font-weight: bold;font-size: 1.3rem;color: orange">立刻游</span>
		</div>
		<div class="toolBar">
			<div class="bar_item" :style="curr_id == index?'background:orange;color:#fff':''" v-for="item,index in toolBarList" @click="toggle(item.id)" :keys="index" @mouseenter="mouseEnter(item.id)" @mouseleave="mouseLeave(item.id)">
				<span class="item_span">{{ item.text }}</span>
			    <div  class="item_menu"  v-if="item.isShow">
			    	<span class="menu_item" v-for="item2,idx2 in item.child" :key="idx2" @click="toModule(index,item2.className)">{{ item2.text }}</span>
			    </div>
			</div>
		</div>
	</header>

</template>

<script>
	export default({
		name:'topHeader',
		data() {
			return {
				toolBarList: [
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
						id: 4,
						text: '关于我们',
						isShow: false,
						child: []
					}
				]
			}
		},
		computed: {
			curr_id() {
				return this.$store.state.curr_id
			}
		},
		methods: {
 			// 切换模块
 			toggle(id) {
 				this.$store.commit('setCurr_id', id);
 				this.$router.push({
 					path: '/'
 				});
 			},
 			// 
 			mouseLeave(id) {
 				this.toolBarList[id].isShow = false;
 			},
 			// 
 			mouseEnter(id) {
 				this.toolBarList[id].isShow = true;
 			},
 			// 
 			toModule(idx1, id) {
 				// console.log(idx1,idx2)
 				
 				console.log('id',id)
 				if(!id)
 					return;
 				setTimeout(function(){
 					let t = $('.'+id).offset().top,
 							tmp = 0;
 					var timer = setInterval(function(){						
 						if(tmp >= t){
 							$(document).scrollTop(t);
 							clearInterval(timer);
 							return;
 						}
 						tmp += 100;
 						$(document).scrollTop(tmp);
 					}, 10)	
 				},100);
 			}
		}
	})
</script>

<style scoped="scoped">
	.background{background: #fff;}
	.header{height: 70px;line-height: 60px;display: flex;justify-content: center;}
	.header .title{color: #333;font-size: 20px;display: flex;flex-direction: row;align-items: center;}
	.title img{width: 50px;height: 50px;margin-right: 10px;}
	.toolBar{margin-left: 100px;display: flex;flex-direction: row;}
	.bar_item{position: relative;padding: 0px 20px;color: #333;cursor: pointer;font-size: .7rem;display: flex;justify-content: center;align-items: center;width: 100px;}
	.item_menu{position: absolute;top: 70px;left: 0px;width: 100px;display: flex;flex-direction: column;}
	.menu_item{background: #fff;display:flex;justify-content: center;align-items: center;cursor: pointer;z-index: 100;color: #333}
	.bar_item:hover{background: orange; color: #fff}
	.menu_item:hover{background: orange;color:#fff;}
</style>
