const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdOnDate: {
        type: Date,
        default: Date.now
    },
})

const Articles = mongoose.model("articles", articleSchema)

module.exports = Articles