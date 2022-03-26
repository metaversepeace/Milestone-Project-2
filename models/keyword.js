const mongoose = require('mongoose')

const keywordSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String, required: false},
    genre: {type: String, required: true},
    // Models will sort by the keyword data
    // hasReact: {type: Boolean, required: true},
    // hasMongo: {type: Boolean, required: true},
    // hasExpress: {type: Boolean, required: true},
    title: {type: String, required: true},
    creator: {type: String, required: true},
    firstPub: {type: Date, required: true},
    lastPub: {type: Date, required: true},
})

module.exports = mongoose.model('Keyword', keywordSchema)