const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const fs = require('fs')

const DRIVERDATA = require('../driverdata.json')

ROUTER.get('/', (req, res) => {
  let selectedDriver = 0
  let viewData = {
    driver: DRIVERDATA.cars[selectedDriver]
  }
  res.render('drivers/index.hbs', viewData)
})

ROUTER.get('/leaderboard', (req, res) => {
  res.render('drivers/leaderboard.hbs')
})

ROUTER.post('/', (req, res) => {
  let buttonPush = req.body.flag
  let selectedDriver = 0
  let currentDriver = DRIVERDATA.cars[selectedDriver]
  console.log(buttonPush)

  console.log(currentDriver)
  if (buttonPush == 'green') {
    currentDriver.votes++ 
  } else if (buttonPush == 'red') {
    currentDriver.votes--
  }
  fs
  res.redirect('/')
})
module.exports = ROUTER