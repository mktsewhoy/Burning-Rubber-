const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()

const DRIVERDATA = require('../driverdata.json')

ROUTER.get('/', (req, res) => {
  res.render('layouts/main.hbs')
})

ROUTER.get('/leaderboard', (req, res) => {
  res.render('drivers/index')
})

module.exports = ROUTER