//Lesson models (datasets for lesson entries)

// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const lessonSchema = new Schema({
  id: {type: String, required: true},
  title: {type: String, required: true},
  creator: {type: String, required: true},
  firstPub: {type: Date, required: true},
  lastPub: {type: Date, required: true},
  pic: {type: String, required: false},
  topic: {type: String, required: true}, //lesson, game, tool
  hasReact: {type: Boolean, required: true},
  hasMongo: {type: Boolean, required: true},
  hasExpress: {type: Boolean, required: true},
})


//model and export
const Lesson = mongoose.model('Lesson', lessonSchema)
module.exports = Lesson