const SERVER = require("./server")
//const EXPRESS = require('express')

const PORT = process.env.PORT || 3000;

SERVER.listen(PORT, function () {
  console.log("Server is listening on Port:", PORT)
})
