const EXPRESS = require("express")

const SERVER = EXPRESS()
const SERVERROUTE = require("./routes/routes")

//added '/'
SERVER.use('/', SERVERROUTE)



//Middleware
SERVER.use(EXPRESS.static('public'))
SERVER.use(EXPRESS.urlencoded({extended: false}))

module.exports = SERVER