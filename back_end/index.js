var exp = require('express'),
	app = exp(),
	https = require('https'),
	fs = require('fs'),
	certificate  = fs.readFileSync('cert/1_www.zhanjf.xyz_bundle.crt', 'utf8'),
	privateKey = fs.readFileSync('cert/2_www.zhanjf.xyz.key', 'utf8'),
	credentials = {key: privateKey, cert: certificate},
	httpsServer = https.createServer(credentials, app),
	mysql = require('mysql'),
	formidable = require('formidable');

// MySql Connection
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Zjf123497',
  database: 'web',
  port: '3306'  
});
conn.connect();

// 跨域处理
app.all('*', function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type","application/json;charset=utf-8");
    console.log('')
    next();
})

// 上传图片
var TITLE = '文件上传示例',
    AVATAR_UPLOAD_FOLDER = 'uploads/';
 
app.post('/uploads', function(req, res) {
 
    //创建上传表单
    var form = new formidable.IncomingForm();
 
    //设置编辑
    form.encoding = 'utf-8';
 
    //设置上传目录
    form.uploadDir = AVATAR_UPLOAD_FOLDER;
 
    //保留后缀
    form.keepExtensions = true;
 
    //文件大小 2M
    form.maxFieldsSize = 2 * 1024 * 1024;
 
    // 上传文件的入口文件
    form.parse(req, function(err, fields, files) {
 
        if (err) {
            res.locals.error = err;
            console.log('err,img:',err);
            return;
        }
 
        var extName = '';  //后缀名
        switch (files.fulAvatar.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;         
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;         
        }
 
        if(extName.length == 0) {
            res.locals.error = '只支持png和jpg格式图片';
            console.log('只支持png和jpg格式图片');
            return;                   
        }
 
        var avatarName = Math.random() + '.' + extName;
        var newPath = form.uploadDir + avatarName;
        fs.renameSync(files.fulAvatar.path, newPath);  //重命名
    });
 
    res.locals.success = '上传成功';
    console.log('上传成功')
});

app.get('/test', function(req, res){
	res.json({
		message: 'ok!test'
	})
})

// 获取文章内容详情
app.get('/getArticle', function(req,res) {
	var sql = 'select * from articles where a_id = ' + req.query.id;
	conn.query(sql, function(err,result){
		if(err){
			console.log(err);
			return;
		}else{
			var sql_ = 'select watched from articles where a_id='+req.query.id;
			conn.query(sql_, function(err,result2){
				if(err){
					console.log(err);
					return;
				}
				else{
					var sql_2 = 'update articles set watched='+(result2[0].watched+1)+' where a_id='+req.query.id;
					conn.query(sql_2, function(err,resu){
						if(err){
							console.log(err);
							return;
						}
						else{
							res.status(200);
							res.json({
								code: 200,
								data: result[0],
								msg: 'suceess'
							});
						}
					});
					
				}
			})
		}

	});
});

// 登录
app.post('/login', function(req,res) {
	var form = new formidable.IncomingForm();
    form.parse(req, function(err,fields,files){
	    var d = {
	        user_name: fields.username,
	        user_password: fields.password
	    };
	    var sql = "select user_password from userInfo where user_name='" + d.user_name + "'";
	    conn.query(sql, function(err,result){
	        if(err){
	            console.log('error:',err.message);
				return;
	        }
			if(result[0]){
				if(result[0].user_password == d.user_password){
					var sql_u = 'select user_id,user_name from userInfo where user_name="'+d.user_name+'"';
					conn.query(sql_u, function(err,result_u){
						res.status(200);
						res.json({
							code: 200,
							data: {userinfo: result_u[0]},
							msg: 'suceess'
						});		
						return;
					});
				}
				else{
					res.status(200);
					res.json({
						code: 200,
						data: {},
						msg: '密码错误'
					});
				}
			}
			else{
	            res.status(200);
				res.json({
					code: 200,
					data: {},
					msg: '该用户名不存在'
	            });
	        }
        });
    });
});

// 创建文章
app.post('/writeArticle', function(req,res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err,fields,files){
		var d = {
			user_id: fields.user_id,
			context: fields.context,
			title: fields.title
		};
		var sql_add = "insert into articles(user_id,title,context,liked,watched) values("+d.user_id+",'"+d.title+"','"+d.context+"',0,0)";
		conn.query(sql_add, function(err,result){
			if(err){
				console.log(err);
				return;
			}
			res.status(200);
			res.json({
				code: 200,
				data: {},
				msg: 'suceess'
			});
		});	
	});
});

// 修改文章
app.post('/setArticle',function(req,res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err,fields,files){
		var d = {
			a_id: fields.a_id,
			context: fields.context,
			title: fields.title
		};
		var sql = "update articles set context='"+d.context+"',title='"+d.title+"' where a_id="+d.a_id;
		conn.query(sql, function(err,result){
			if(err){
				console.log(err);
				return;
			}
			res.status(200);
   			 res.json({
           		 code: 200,
           		 data: {},
           		 msg: 'suceess'
   			 });
		});	
	});
});

// 首页信息
app.get('/index', function(req,res) {
	var sql_v = 'select * from visitInfo where ip="'+req.ip+'"';
	conn.query(sql_v, function(err,result_v){
		if(err){
			res.json({
				err: err.message
			});
			return;
		}
		else{
			if(result_v[0]){}
			else{
				var sql_v2 = 'insert into visitInfo(ip) values("'+req.ip+'")';
				conn.query(sql_v2, function(err,result_v2){});
			}
		}
	});
	var sql1 = 'select watch from userinfo where id=1';
	conn.query(sql1, function(err, num1) {
		var sql2 = 'update userinfo set watch='+(num1[0].watch+1)+' where id=1';
		conn.query(sql2, function(err,num2){});
	});
	var sql3 = 'select pic,watch,likes,followed,user_name from userinfo,userInfo where userinfo.id = userInfo.user_id';
	conn.query(sql3, function(err,result){
		if(err){
			console.log(err.message);
			return;
		}
		var sql_m = 'select id,title,liked from music'; 
        conn.query(sql_m, function(err,result_m){
			var sql_a = 'select a_id,title,liked from articles where user_id=1';
			conn.query(sql_a, function(err,result_a){
				if(err){
					console.log(err.message);
					return;
				}
				res.status(200);
				res.json({
					code: 200,
					msg: 'success',
					data: {userinfo: result[0],musiclist: result_m,articleslist: result_a}
				});
			});
		});
	});
});

// 获取音乐详情
app.get('/getSong', function(req,res) {
	var sql = 'select * from music where id='+req.query.id;
	conn.query(sql, function(err, result){
		if(err){
			console.log(err.message);
			return;
		}
		res.status(200);
		res.json({
			code:200,
			data: result[0]?result[0]:{},
			msg:'success'
		});
	
	});
});

// 新建音乐
app.post('/setSong', function(req,res){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err,fields,files){
		var d = {
			id: fields.id,
			title: fields.title,
			singer: fields.singer,
			imgUrl: '././static/img/img.png',
		};
		var sql_add = "insert into music(id,title,singer,imgUrl,liked) values("+d.id+",'"+d.title+"','"+d.singer+"','"+d.imgUrl+"',0)";
		conn.query(sql_add, function(err,result){
			if(err){
				console.log(err.message);
				return;
			}
			res.status(200);
			res.json({
				code: 200,
				data: {},
				msg: 'suceess'
			});
		});	
	});
}); 

// 喜欢音乐
app.get('/likedSong', function(req,res){
	var sql1 = 'select liked from music where id='+req.query.id;
	conn.query(sql1, function(err, num1) {
		var sql2 = 'update music set liked='+(num1[0].liked+1)+' where id='+req.query.id;
		conn.query(sql2, function(err,num2){
			res.status(200);
			res.json({
				code: 200,
				data: {},
				msg: 'suceess'
			});
		});
	});
});

// 喜欢文章
app.get('/likedArticle', function(req,res){
	var sql1 = 'select liked from articles where a_id='+req.query.id;
	conn.query(sql1, function(err, num1) {
		var sql2 = 'update articles set liked='+(num1[0].liked+1)+' where a_id='+req.query.id;
		conn.query(sql2, function(err,num2){
			res.status(200);
			res.json({
				code: 200,
				data: {},
				msg: 'suceess'
			});
		});
	});
});

// 喜欢用户
app.get('/likedUser', function(req,res){
	var sql1 = 'select likes from userinfo where id=1';
	conn.query(sql1, function(err, num1) {
		var sql2 = 'update userinfo set likes='+(num1[0].likes+1)+' where id=1';
		conn.query(sql2, function(err,num2){
			res.status(200);
			res.json({
				code: 200,
				data: {},
				msg: 'suceess'
			});
		});
	});
});

// 发表评论
app.post('/writeComment', function(req,res){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err,fields,files){
		var d = {
			a_id: fields.a_id,
			name: fields.name,
			context: fields.context
		};
		var sql_add = "insert into comment_a(a_id,name,context) values("+d.a_id+",'"+d.name+"','"+d.context+"')";
		conn.query(sql_add, function(err,result){
			if(err){
				console.log(err.message);
				return;
			}
			res.status(200);
			res.json({
				code: 200,
				data: {},
				msg: 'suceess'
			});
		});	
	});
});

// 获取评论
app.get('/getComment', function(req,res){
	var sql = 'select * from comment_a where a_id='+req.query.id;
	conn.query(sql, function(err,result){
		if(err){
			console.log(err.message);
			return;
		}
		res.status(200);
		res.json({
			code: 200,
			data: result,
			msg: 'suceess'
		});
	});
});

httpsServer.listen(3838, function() {});
