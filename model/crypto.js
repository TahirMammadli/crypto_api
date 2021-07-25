const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cryptoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    percent_change_7d: {
        type: Number,
        required: true
    },
    percent_change_30d: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('Crypto', cryptoSchema)