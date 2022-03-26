const router = require('express').Router()
const res = require('express/lib/response')
const db = require('../models')


router.get('/', (req, res) => {
    db.Title.find()
    .then((title) => {
      res.render('title/index', { title })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})


router.post('/', (req, res) => {
    db.Title.create(req.body)
    .then(() => {
        res.redirect('/title')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })


module.exports = router