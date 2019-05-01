const exp = require('express')
const app = exp()
const moment = require('moment')
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const bodyParser = require('body-parser')
const https = require('https')
const certificate  = fs.readFileSync('cert/1_www.zhanjf.xyz_bundle.crt', 'utf8')
const privateKey = fs.readFileSync('cert/2_www.zhanjf.xyz.key', 'utf8')
const credentials = {key: privateKey, cert: certificate}
const httpsServer = https.createServer(credentials, app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', (req, res, next) => {
	// console.log('req',req)
	res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type","application/json;charset=utf-8");
	console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')} --> [${req.method}]  ${req.originalUrl}`)
	next()
})

const user = require('./routers/user')
app.use('/api/user', user)

const admin = require('./routers/admin')
app.use('/api/admin', admin)

// 上传图片
app.use(multer({ dest: './uploads/'}).any())

app.post('/uploads', (req, res) => {
	console.log('file', req.files[0])
	var filename = '/jeffrey/web/myweb/dist/files/'+ req.files[0].originalname  // + req.files[0].path.slice(0, 8) 
	console.log('filename', filename)
	fs.rename(req.files[0].path, filename, (err) => {
		if(err)
			res.json({ message: '上传失败' })
		else
			res.json({ message: 'ok', imgUrl: `https://www.zhanjf.xyz/files/${req.files[0].originalname}`})
	})
})

httpsServer.listen('8888', () => {
	console.log('success!')
})