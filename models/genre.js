const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String, required: false},
    title: {type: String, required: true},
    keywords: {type: String, required: true},
    creator: {type: String, required: true},
    firstPub: {type: String, required: true},
    lastPub: {type: String, required: true},
})

module.exports = mongoose.model('Genre', genreSchema)