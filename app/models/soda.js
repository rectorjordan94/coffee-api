const mongoose = require('mongoose')

const nutritionFactSchema = require('./nutritionFact')

const sodaSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		details: {
			type: String,
			required: true,
		},
		hasCaffeine: {
			type: Boolean,
			required: true
		},
		nutritionFacts: [nutritionFactSchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Soda', sodaSchema)
