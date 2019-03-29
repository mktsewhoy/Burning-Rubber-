const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()

const DRIVERDATA = require('../driverdata.json')

ROUTER.get('/', (req, res) => {
  res.render('drivers/index.hbs')
})

ROUTER.get('/leaderboard', (req, res) => {
  res.render('drivers/leaderboard.hbs')
})

ROUTER.post('/', (req, res) => {
  console.log('It works!!')
  console.log(req.body)
  res.redirect('/')
})
module.exports = ROUTER