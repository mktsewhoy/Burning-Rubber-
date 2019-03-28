const EXPRESS = require("express")
const hbs = require("express-handlebars")
const SERVER = EXPRESS()
const SERVERROUTE = require("./routes/routes")

//added '/'
SERVER.use('/', SERVERROUTE)



//Middleware
SERVER.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))
SERVER.set('view engine', 'hbs')
SERVER.use(EXPRESS.static('public'))
SERVER.use(EXPRESS.urlencoded({extended: false}))

module.exports = SERVER