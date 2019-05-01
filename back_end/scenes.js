const exp = require('express')
const router = exp.Router()

router.get('/api/scenes', (req, res) => {
	res.json({
		message: 'scenes'
	})
})

module.exports = router