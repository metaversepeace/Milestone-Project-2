const router = require('express').Router()
const res = require('express/lib/response')
const db = require('../models')

router.get('/', (req, res) => {
    res.json({message: 'Hello World'})
})

module.exports = router