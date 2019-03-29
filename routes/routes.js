const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const fs = require('fs')

const DRIVERDATA = require('../driverdata.json')

ROUTER.get('/', (req, res) => {
  let selectedDriver = Math.floor(Math.random() * DRIVERDATA.cars.length) 
  console.log(selectedDriver)
  let viewData = {
    driver: DRIVERDATA.cars[selectedDriver]
  }
  res.render('drivers/index.hbs', viewData)
})

ROUTER.get('/leaderboard', (req, res) => {
  res.render('drivers/leaderboard.hbs')
})

ROUTER.post('/:id', (req, res) => {
  let driversID = req.params.id
  let buttonPush = req.body.flag
  let currentDriver = DRIVERDATA.cars.find(x => x.id == driversID)
  // console.log(driversID)
  // let currentDriver = DRIVERDATA.cars[selectedDriver]
  // console.log(buttonPush)

  // console.log(currentDriver)
  if (buttonPush == 'green') {
    currentDriver.votes++ 
  } else if (buttonPush == 'red') {
    currentDriver.votes--
  }

  let dataToWrite = JSON.stringify(DRIVERDATA)
  fs.writeFile('../driverdata.json', dataToWrite, 'utf8', (err) => {
    console.log(err)
  })
  // console.log(dataToWrite)
  res.redirect('/')
})





module.exports = ROUTER