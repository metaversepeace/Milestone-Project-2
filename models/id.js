const mongoose = require('mongoose')

const idSchema = new mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    creator: {type: String, required: true},
    firstPub: {type: Date, required: true},
    lastPub: {type: Date, required: true},
    pic: {type: String, required: false},
    genre: {type: String, required: true}, //lesson, game, tool
    hasReact: {type: Boolean, required: true},
    hasMongo: {type: Boolean, required: true},
    hasExpress: {type: Boolean, required: true},
})

module.exports = mongoose.model('ID', idSchema)