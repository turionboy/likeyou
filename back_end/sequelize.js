const Seq = require('sequelize')

var sequelize = new Seq('likeu', 'root', 'Zjf123497', {
	dialect: 'mysql',
	host: 'localhost',
	pool: {
		max: 5,
		min: 0
	}
})

module.exports = sequelize