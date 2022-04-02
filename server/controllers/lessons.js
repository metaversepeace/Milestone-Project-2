const router = require('express').Router()
const res = require('express/lib/response')
const db = require('../models')

//Add lesson
router.post('/', (req, res) => {
    db.Lessons.create(req.body)
        .catch( err => {
            if(err && err.name == 'ValidationError'){
                let message = ''
                for(var field in err.errors) {
                    message += `${err.errors[field].message}`
                }
                console.log('Validation error message', message)
            }
        })
})

//Edit lesson
router.get('/:id/edit', (req, res) => {
    db.Lessons.findById(req.params.id)
        .then(lesson => res.json(lesson))
        .catch( err => {
            console.log(err)
        })
})
router.put('/:id', (req,res) => {
    db.Lessons.findByIdAndUpdate(req.params.id, req.body)
    .catch( err => {
        console.log('err', err)
    })
})

//View Lesson
router.get('/:id', (req, res) => {
    db.Lessons.findById(req.params.id)
        .then(lesson => res.json(lesson))
        .catch( err => {
            console.log('err', err)
        })
})

//Delete Lesson
router.delete('/:id', (req, res) => {
    db.Lessons.findByIdAndDelete(req.params.id)
        .catch( err => {
            console.log('err', err)
        })
})

router.get('/', (req, res) => {
    db.Lessons.find()
        .then((lessons) => {
            res.json(lessons)
        })
        .catch(err => {
            console.log(err)
        })
})



module.exports = router