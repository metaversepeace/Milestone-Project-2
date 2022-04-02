//Lesson models (datasets for lesson entries)
module.exports = [{
  subject: 'Client-Server Architecture',
  title: 'Client-Server Architecture',
  image: '../images/Client-Server-Model.png',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
}, {
  subject: 'Databases',
  title: 'Databases',
  image: '../images/DB-types.png',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
}, {
  subject: 'React & Front-End Libraries',
  title: 'React & Front-End Libraries',
  image: '../images/reactLogo.png',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
}, {
  subject: 'Express & Server-Side Web Frameworks',
  title: 'Express & Server-Side Web Frameworks',
  image: '../images/reactLogo.png',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
}, {
  subject: 'MongoDB',
  title: 'MongoDB',
  image: '../images/reactLogo.png',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam urna, consequat sit amet orci condimentum, accumsan facilisis neque. Pellentesque pulvinar vehicula dapibus. Praesent convallis tortor eget scelerisque semper. Morbi nec porta turpis. Nam porta sapien quis sapien dapibus venenatis. Nam nec lectus ac massa ultrices aliquet. Donec aliquet magna eu tortor sollicitudin, nec porttitor libero tincidunt. Etiam aliquam hendrerit est, a consequat tortor. Proin lacinia facilisis nunc, vitae accumsan justo tempor vehicula. Mauris maximus tortor urna, vitae ullamcorper purus mattis sit amet. Donec lorem arcu, accumsan non lorem quis, pharetra dapibus arcu. Curabitur gravida mattis turpis. Nam non elit vel sem pretium molestie nec ut urna. Duis vitae sapien erat. Aliquam erat volutpat.',
}]

// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const lessonSchema = new Schema({
  title: {type: String, required: true},
  creator: {type: String, required: true},
  firstPub: {type: Date, required: true},
  lastPub: {type: Date, required: true},
  pic: {type: String, required: false},
  topic: {type: String, required: true},
  hasReact: {type: Boolean, required: true},
  hasMongo: {type: Boolean, required: true},
  hasExpress: {type: Boolean, required: true},
  content: {type: String, required: true}
})


//model and export
const Lesson = mongoose.model('Lesson', lessonSchema)
module.exports = Lesson