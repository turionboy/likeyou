<template>
	<div class="contain">
		<div class="title">立刻游后台管理系统</div>
		<div class="login">
			<div class="login-username">
				<i class="fa fa-user-circle-o"></i>
				<input type="text" placeholder="请输入用户名" name="username" v-model="name">
			</div>
			<div class="login-password">
				<i class="fa fa-key"></i>
				<input type="password" placeholder="请输入密码" name="password" v-model="pass">
			</div>
			<div class="login-verify">
				<div class="">
					<i class="fa fa-keyboard-o"></i>
					<input type="text" placeholder="请输入验证码" id="verify" name="verify" v-model="verify">
				</div>
				<div class="">
					<canvas width="100" height="40" id="verifyCanvas"></canvas>
	        		<img id="code_img" @click="refresh">
				</div>
			</div>			
		</div>
		<div class="contain-btn">
			<div class="btn-submit" @click="submit">登录</div>
			<div class="btn-reset" @click="reset">重置</div>
		</div>
	</div>
</template>

<script>
	var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
        'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ];
    var colors = [];

	export default({
		name: 'login',
		data() {
			return {
				name: '',
				pass: '',
				verify: '',
				rand: ''
			}
		},
		mounted: function(){
			
		    this.drawCode();
		    
		},
		methods: {
			// 重置表单
			reset: function() {
				this.name = '';
				this.pass = '';
			},
			// 提交表单信息，登录
			submit: function(){
				var that = this;
				// 获取生成的验证码
				var newRand = that.rand;
	            //下面就是判断是否== 的代码，无需解释
	            var oValue = $('#verify').val().toUpperCase();
	            if (oValue == 0) {
	                that.$message({
			            message: '请输入验证码',
			            type: 'warning'
			        });
	            } else if (oValue != newRand) {
	            	that.$message({
			            message: '验证码不正确，请重新输入',
			            type: 'warning'
			        });
	                oValue = '';
	            } else {	                	            
					var data = {
						username: that.name,
						password: that.pass
					};

					that.$store.commit('setLogin',{
						token:'12121dfdsfdsfdfs',
						user: {
							username: 'jeff'
						}
					});
					that.$router.push({
						path: '/'
					});
					// that.$axios.post('http://192.168.2.148:8001'+'/api/v1/auth_token/',data).then(res => {
					// 	that.$store.commit('setLogin',{
					// 		token:res.data.token,
					// 		user: res.data.user
					// 	});
					// 	that.$router.push({
					// 		path: '/'
					// 	});
					// }).catch(function(err){
					// 	that.$message({
				 //          	message: '用户名或密码错误，请重新输入',
				 //          	type: 'warning'
				 //        });
					// });
				}
			},
			// 绘制验证码
		    drawCode: function(){
		    	var that = this;
		        var canvas = document.getElementById("verifyCanvas"); //获取HTML端画布
		        var context = canvas.getContext("2d"); //获取画布2D上下文
		        context.fillStyle = "cornflowerblue"; //画布填充色
		        context.fillRect(0, 0, canvas.width, canvas.height);
		        // 创建渐变
		        var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
		        gradient.addColorStop("0", "magenta");
		        gradient.addColorStop("0.5", "blue");
		        gradient.addColorStop("1.0", "red");
		        //清空画布
		        context.fillStyle = gradient; //设置字体颜色
		        context.font = "25px Arial"; //设置字体
		        var rand = new Array();
		        var x = new Array();
		        var y = new Array();
		        for (var i = 0; i < 4; i++) {
		            rand[i] = nums[Math.floor(Math.random() * nums.length)]
		            x[i] = i * 16 + 10;
		            y[i] = Math.random() * 20 + 20;
		            context.fillText(rand[i], x[i], y[i]);
		        }
		        
		        //画3条随机线
		        for (var i = 0; i < 3; i++) {
		            that.drawline(canvas, context);
		        }
		 
		        // 画30个随机点
		        for (var i = 0; i < 30; i++) {
		            that.drawDot(canvas, context);
		        }
		        that.convertCanvasToImage(canvas)
		 		
		 		that.rand = rand.join('').toUpperCase();
		
		    },
		 
		    // 随机线
		    drawline: function(canvas, context) {
		        context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
		        context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
		        context.lineWidth = 0.5; //随机线宽
		        context.strokeStyle = 'rgba(50,50,50,0.3)'; //随机线描边属性
		        context.stroke(); //描边，即起点描到终点
		    },
		    // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
		    drawDot: function(canvas, context) {
		        var px = Math.floor(Math.random() * canvas.width);
		        var py = Math.floor(Math.random() * canvas.height);
		        context.moveTo(px, py);
		        context.lineTo(px + 1, py + 1);
		        context.lineWidth = 0.2;
		        context.stroke();
		 
		    },
		    // 绘制图片
		    convertCanvasToImage: function(canvas) {
		        document.getElementById("verifyCanvas").style.display = "none";
		        var image = document.getElementById("code_img");
		        image.src = canvas.toDataURL("image/png");
		        return image;
		    },
		    // 点击图片刷新
		    refresh: function(){
		    	$('#verifyCanvas').remove();
		        $('#verify').after('<canvas width="100" height="40" id="verifyCanvas"></canvas>')
		        this.drawCode();
		    }
		}
	})
</script>

<style scoped="scoped">
	.contain{position: fixed;width:100%;height: 100%; background: #333;display: flex;justify-content: center;align-items: center;flex-direction: column;}
	.title{font-size: 40px;color: #fff}
	.login{text-align: right; width: 250px;margin-top: 20px;}
	.login input{height:45px;width: 88%;padding-left: 10px;}
	.login div{background: #fff;}
	.login-username{}
	.login-password{margin: 15px 0;}
	.login-verify{display: flex}
	.login-verify i{width:12%;text-align: center;margin-top: 15px;}
	.login-verify input{width: 81%;}
	#code_img{height: 100%;}
	.contain-btn{margin: 20px;display: flex;justify-content: space-around;color: #fff;width: 250px;}
	.contain-btn div{border: 1px solid;padding: 5px 20px;cursor: pointer;}
	.btn-submit:hover{opacity: 0.8}
	.btn-reset:hover{opacity: 0.8}
</style>