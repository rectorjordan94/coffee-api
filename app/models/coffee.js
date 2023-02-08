const mongoose = require('mongoose')

const coffeeSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		ounces: {
			type: Number,
			required: true
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Example', coffeeSchema)
