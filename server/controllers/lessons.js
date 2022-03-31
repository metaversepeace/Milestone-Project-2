const router = require('express').Router()
const res = require('express/lib/response')
const db = require('../models')

router.get('/', (req, res) => {
    res.json({
        apis: {
            name: "API's",
            lesson1: "Using API's",
            lesson2: "Creating API's",
            lesson3: "Something else",
            lesson4: 'Lesson 4',
            lesson5: 'Lesson 5',
            lesson6: 'You guessed it, Lesson 6'
        },
        react: {
            name: "React",
            lesson1: "What is React",
            lesson2: "What it does",
            lesson3: "Now you know React",
            lesson4: 'Lesson 4'
        },
        sql: {
            name: "SQL",
            lesson1: "Structured",
            lesson2: "Query",
            lesson3: "Language",
            lesson4: 'Lesson 4',
            lesson5: 'Lesson 5'
        }
    })
})

router.get('/lessons', (req, res) => {
    db.Lessons.find()
        .then((lessons) => {
            res.json(lessons)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router