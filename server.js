const EXPRESS = require("express")

const SERVER = EXPRESS()
const SERVERROUTE = require("./routes/routes")

SERVER.use(SERVERROUTE)
module.exports = SERVER