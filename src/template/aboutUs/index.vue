<template>
	<div class="aboutUs">
		<div class="svg_bgi">
			<svg height="100%" width="100%">
				<polygon points="0,0 0,500 500,500" fill="orange"></polygon>
			</svg>
			<section class="section_com">
				<div class="title">公司背景</div>
				<div class="company_desc">
					<p>立刻游，中国年轻一代用得更多的旅游网站。</p>
					<br>
					<p>得益于“内容+ 交易”的核心优势，立刻游更理解年轻人的偏好，让复杂的旅游决策、预订和体验变得简单、高效和便捷。</p>
					<br>
					<p>立刻游是旅游社交网站，是数据驱动平台，是新型旅游电商。提供全球60,000 个旅游目的地的交通、酒店、景点、餐饮、购物、用车、当地玩乐等信息和产品预订服务。基于10 年的内容积累，立刻游通过AI 技术与大数据算法，将个性化旅游信息与来自全球各地的旅游产品供应商实现连接，为用户提供与众不同的旅游体验。</p>
					<br><p>立刻游独有的“内容获客”模式，高效匹配供需，助力平台商家提升利润率，并重塑旅游产业链。自2010 年公司化运营以来，经大量旅行者自主分享，立刻游社区的信息内容不断丰富和完善，每月帮助120,000,000 旅行者出行，成为年轻一代首选的“旅游神器”。与父辈们常用的传统在线旅游网站（OTA）相比，马蜂窝更潮、更酷，深谙“年轻一代的选择”，帮助他们从不同角度，重新发现世界。</p>
					<br><br><p style="font-weight: bold;">旅游之前，先上立刻游</p><br>
				</div>
			</section>
		</div>	
		<div class="svg_bgi" style="border-top: 10px solid #333">
			<svg height="100%" width="100%">
				<polygon points="0,0 500,0 0,500" fill="#333"></polygon>
			</svg>
			<section class="section_com" style="color: orange">
				<div class="title">团队介绍</div>
				<div class="company_desc">
					<p>团队组成：前端、后端</p>
					<br>
					<p>得益于“内容+ 交易”的核心优势，立刻游更理解年轻人的偏好，让复杂的旅游决策、预订和体验变得简单、高效和便捷。</p>
					<br>
					<p>立刻游是旅游社交网站，是数据驱动平台，是新型旅游电商。提供全球60,000 个旅游目的地的交通、酒店、景点、餐饮、购物、用车、当地玩乐等信息和产品预订服务。基于10 年的内容积累，立刻游通过AI 技术与大数据算法，将个性化旅游信息与来自全球各地的旅游产品供应商实现连接，为用户提供与众不同的旅游体验。</p>
					<br><p>立刻游独有的“内容获客”模式，高效匹配供需，助力平台商家提升利润率，并重塑旅游产业链。自2010 年公司化运营以来，经大量旅行者自主分享，立刻游社区的信息内容不断丰富和完善，每月帮助120,000,000 旅行者出行，成为年轻一代首选的“旅游神器”。与父辈们常用的传统在线旅游网站（OTA）相比，马蜂窝更潮、更酷，深谙“年轻一代的选择”，帮助他们从不同角度，重新发现世界。</p>
					<br><br><p style="font-weight: bold;">旅游之前，先上立刻游</p><br>
				</div>
			</section>
		</div>		
	</div>
</template>

<script>
	
	export default({
		name: 'aboutUs',
		data() {
			return {

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
	.svg_bgi{height: 500px;position: relative;}
	.section_com{position: absolute;width: 100%;height: 100%;top: 20px;display: flex;flex-direction: column;justify-content: center;align-items: center;padding: 0 25%;}
	.title{font-weight: bold;font-size: 2rem}
	.company_desc{font-size: .8rem;}

	@media screen and (max-width: 1200px){
		.section_com{padding: 0 15%;}
	}
</style>