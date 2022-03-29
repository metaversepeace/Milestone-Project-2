const mongoose = require('mongoose')

const titleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String, required: false},
    genre: {type: String, required: true},
    keywords: {type: String, required: true},
    creator: {type: String, required: true},
    firstPub: {type: String, required: true},
    lastPub: {type: String, required: true},
})

module.exports = mongoose.model('Title', titleSchema)