const exp = require('express')
const router = exp.Router()
const sequelize =  require('../sequelize/sequelize')

// citys表增删改
router.post('/city', async (req, res) => {
	// console.log('add-city', req.body)
	var sql = `insert into citys (name, imgUrl, isForeign) values('${req.body.name}','${req.body.imgUrl}',${req.body.isForeign})`
	await sequelize.query(sql, { 
		type: sequelize.QueryTypes.INSERT 
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({ message: '新增成功！'})
	
})

router.delete('/city/:id', async (req, res) => {
	var sql = 'delete from citys where id = :id'
	// console.log('id', req.params.id)
	await sequelize.query(sql, { 
		type: sequelize.QueryTypes.DELETE, 
		replacements: { id: req.params.id } 
	})
	.catch(err => {
		res.json({ message: '服务器错误！'})
	})
	res.json({ message: '删除成功！'})
})

router.patch('/city', async (req, res) => {
	console.log('body', req.body)
	var sql = 'update citys set name = $1, imgUrl = $2, isForeign = $3 where id = $4'
	await sequelize.query(sql, {
		type: sequelize.QueryTypes.UPDATE,
		bind: [req.body.name, req.body.imgUrl, req.body.isForeign, req.body.id]
	})
	.catch(err =>{
		res.json({ message: '服务器错误！'})
	})
	res.json({ message: '更新成功！'})
})

// scenes表增删改
router.post('/scene', async (req, res) => {
	// console.log('add-city', req.body)
	var sql = 'insert into scenes (title, city_id, context, imgUrl_l, imgUrl_rt, imgUrl_rb, tele, cost_time, ticket, open_time, traffic, ename) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)'
	await sequelize.query(sql, { 
		type: sequelize.QueryTypes.INSERT,
		bind: [req.body.title, req.body.city_id * 1, req.body.context, req.body.imgUrl_l, req.body.imgUrl_rt, req.body.imgUrl_rb, req.body.tele, req.body.cost_time, req.body.ticket, req.body.open_time, req.body.traffic, req.body.ename]
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({ message: '新增成功！'})
	
})

router.delete('/scene/:id', async (req, res) => {
	var sql = 'delete from scenes where id = :id'
	// console.log('id', req.params.id)
	await sequelize.query(sql, { 
		type: sequelize.QueryTypes.DELETE, 
		replacements: { id: req.params.id } 
	})
	.catch(err => {
		res.json({ message: '服务器错误！'})
	})
	res.json({ message: '删除成功！'})
})

router.patch('/scene', async (req, res) => {
	// console.log('body', req.body)
	var sql = 'update scenes set title = $1, imgUrl_l = $2, imgUrl_rt = $3, imgUrl_rb = $4, city_id = $5, context = $6, tele = $7, cost_time = $8, open_time = $9, ticket = $10, traffic = $11, ename = $12 where id = $13'
	await sequelize.query(sql, {
		type: sequelize.QueryTypes.UPDATE,
		bind: [req.body.title, req.body.imgUrl_l, req.body.imgUrl_rt, req.body.imgUrl_rb, req.body.city_id, req.body.context, req.body.tele, req.body.cost_time, req.body.open_time, req.body.ticket, req.body.traffic, req.body.ename, req.body.id]
	})
	.catch(err =>{
		res.json({ message: '服务器错误！'})
	})
	res.json({ message: '更新成功！'})
})

// hotels表增删改
router.post('/hotel', async (req, res) => {
	// console.log('add-city', req.body)
	var sql = 'insert into hotels (scenes_id, title, description, roomType, tele, check_time, imgUrl) values($1,$2,$3,$4,$5,$6,$7)'
	await sequelize.query(sql, { 
		type: sequelize.QueryTypes.INSERT,
		bind: [req.body.scenes_id, req.body.title, req.body.description, req.body.roomType, req.body.tele, req.body.check_time, req.body.imgUrl]
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({ message: '新增成功！'})
	
})

router.delete('/hotel/:id', async (req, res) => {
	var sql = 'delete from hotels where id = :id'
	// console.log('id', req.params.id)
	await sequelize.query(sql, { 
		type: sequelize.QueryTypes.DELETE, 
		replacements: { id: req.params.id } 
	})
	.catch(err => {
		res.json({ message: '服务器错误！'})
	})
	res.json({ message: '删除成功！'})
})

router.patch('/hotel', async (req, res) => {
	console.log('body', req.body)
	var sql = 'update hotels set scenes_id = $1, title = $2, description = $3, roomType = $4, tele = $5, check_time = $6, imgUrl = $7 where id = $8'
	await sequelize.query(sql, {
		type: sequelize.QueryTypes.UPDATE,
		bind: [req.body.scenes_id, req.body.title, req.body.description, req.body.roomType, req.body.tele, req.body.check_time, req.body.imgUrl, req.body.id]
	})
	.catch(err =>{
		res.json({ message: '服务器错误！'})
	})
	res.json({ message: '更新成功！'})
})

// travelStory表增删改
router.post('/story', async (req, res) => {
	// console.log('add-city', req.body)
	var sql = 'insert into travelStory (scenes_id, title, context, imgUrl, time, start_time, days, company, cost, watched, liked) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)'
	await sequelize.query(sql, { 
		type: sequelize.QueryTypes.INSERT,
		bind: [req.body.scenes_id, req.body.title, req.body.context, req.body.imgUrl, req.body.time, req.body.start_time, req.body.days, req.body.company, req.body.cost, req.body.watched, req.body.liked]
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({ message: '新增成功！'})
	
})

router.delete('/story/:id', async (req, res) => {
	var sql = 'delete from travelStory where id = :id'
	// console.log('id', req.params.id)
	await sequelize.query(sql, { 
		type: sequelize.QueryTypes.DELETE, 
		replacements: { id: req.params.id } 
	})
	.catch(err => {
		res.json({ message: '服务器错误！'})
	})
	res.json({ message: '删除成功！'})
})

router.patch('/story', async (req, res) => {
	console.log('body', req.body)
	var sql = 'update travelStory set scenes_id = $1, title = $2, context = $3, imgUrl = $4, time = $5, start_time = $6, days = $7, company = $8, cost = $9, watched = $10, liked = $11 where id = $12'
	await sequelize.query(sql, {
		type: sequelize.QueryTypes.UPDATE,
		bind: [req.body.scenes_id, req.body.title, req.body.context, req.body.imgUrl, req.body.time, req.body.start_time, req.body.days, req.body.company, req.body.cost, req.body.watched, req.body.liked, req.body.id]
	})
	.catch(err =>{
		console.log('err', err)
		res.json({ message: '服务器错误！'})
	})
	res.json({ message: '更新成功！'})
})

module.exports = router