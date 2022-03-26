// Base setup for Mongo integration
// creator
// keyword
// informational
// mongodb


// Documents and prime/foreign keys:

// Creator- 

// Keywords/Type- mongo, express, etc

// Genre- game, tool/resource, lesson

// Title- sortable by all other tables, "master list" of end pages on the site alphabetically by title


const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, () => {
        console.log("Successful database connection made", process.env.MONGO_URI)
      }

)


module.exports.Title = require('./title')
module.exports.Creator = require('./creator')
module.exports.Keyword = require('./keyword')
module.exports.Genre = require('./genre')