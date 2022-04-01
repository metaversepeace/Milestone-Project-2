// Currently throws error saying create cannot be called on undefined

const db = require('../models')

db.Lessons.create([{
    id: '001',
    title: 'React Lesson 1',
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    genre: 'Lesson',
    hasReact: true,
    hasMongo: false,
    hasExpress: false,
}, {
    id: '002',
    title: 'React Lesson 2',
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    genre: 'Lesson',
    hasReact: true,
    hasMongo: true,
    hasExpress: false,
}, {
    id: '003',
    title: 'React Lesson 3',
    creator: 'Bob Loblaw',
    firstPub: 2018,
    lastPub: 2022,
    pic: 'NA',
    genre: 'Lesson',
    hasReact: true,
    hasMongo: true,
    hasExpress: true,
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})