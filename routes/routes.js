const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()

const DRIVERDATA = require('../driverdata.json')

ROUTER.get('/', (req, res) => {
  res.send('IT WORKS')
})