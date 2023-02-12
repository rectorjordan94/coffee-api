const mongoose = require('mongoose')

const nutritionFactSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = nutritionFactSchema

// { type: 'total fat', amount: 0, unit: 'g' }
// { type: 'sodium', amount: 105, unit: 'mg' }