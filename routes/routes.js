const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()

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
  console.log('It works!!')
  console.log(req.body)
  res.redirect('/')
})
module.exports = ROUTER