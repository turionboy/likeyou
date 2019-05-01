const exp = require('express')
const router = exp.Router()
const sequelize =  require('../sequelize/sequelize')

// 列表
router.get('/city', async (req, res) => {
	// console.log('ok')
	let sql = 'select * from citys'
	let result = await sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({
		message: 'ok',
		result: result
	})
})

router.get('/scene', async (req, res) => {
	// console.log('pa', req.query)
	let sql = req.query.city_id ? 'select * from scenes where city_id = '+req.query.city_id : 'select * from scenes'
	let result = await sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({
		message: 'ok',
		result: result
	})
})

router.get('/hotel', async (req, res) => {
	// console.log('ok')
	let sql = req.query.scenes_id ? 'select * from hotels where scenes_id=' + req.query.scenes_id : 'select * from hotels'
	let result = await sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({
		message: 'ok',
		result: result
	})
})

router.get('/story', async (req, res) => {
	// console.log('ok')
	let sql = 'select * from travelStory'
	let result = await sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({
		message: 'ok',
		result: result
	})
})

router.get('/city_foreign', async (req, res) => {
	// console.log('ok')
	let sql = 'select * from citys'
	let result = await sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({
		message: 'ok',
		result: result
	})
})

// 详情
router.get('/city/:id', async (req, res) => {
	let sql = 'select * from citys where id = :id'
	let result = await sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT,
		replacements: { id: req.params.id }
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({
		message: 'ok',
		result: result[0]
	})
})

router.get('/scene/:id', async (req, res) => {
	let sql = 'select * from scenes where id = :id'
	let result = await sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT,
		replacements: { id: req.params.id }
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({
		message: 'ok',
		result: result[0]
	})
})

router.get('/hotel/:id', async (req, res) => {
	let sql = 'select * from hotels where id = :id'
	let result = await sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT,
		replacements: { id: req.params.id }
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({
		message: 'ok',
		result: result[0]
	})
})

router.get('/story/:id', async (req, res) => {
	let sql = 'select * from travelStory where id = :id'
	let result = await sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT,
		replacements: { id: req.params.id }
	})
	.catch(err => {
		res.json({ message: '服务器错误' })
	})
	res.json({
		message: 'ok',
		result: result[0]
	})
	let sql1 = 'select watched from travelStory where id = :id'
	let result1 = await sequelize.query(sql1, {
		type: sequelize.QueryTypes.SELECT,
		replacements: { id: req.params.id }
	})
	console.log('like', result1)
	let w = result1[0].watched * 1 + 1;
	// console.log('w', w, 'wat', result1[0].watched)
	await sequelize.query('update travelStory set watched = $1', {
		type: sequelize.QueryTypes.UPDATE,
		bind: [w]
	})
})

router.get('/like/:id', async (req, res) => {
	let sql = 'select liked from travelStory where id = :id'
	let result = await sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT,
		replacements: { id: req.params.id }
	})
	let l = result[0].liked + 1
	await sequelize.query('update travelStory set liked = $1', {
		type: sequelize.QueryTypes.UPDATE,
		bind: [l]
	})
	res.json({ message: 'ok' })
})
module.exports = router