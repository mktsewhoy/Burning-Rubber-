const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()

const DRIVERDATA = require('../driverdata.json')

ROUTER.get('/', (req, res) => {
  res.render('layouts/main.hbs')
})

ROUTER.get('/leaderboard', (req, res) => {
  //Change index.hbs to leaderboard.hbs
  res.render('drivers/index', DRIVERDATA)
})



module.exports = ROUTER