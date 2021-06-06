const express = require('express')
var router = require('./src/routes/router')

const port = 3001
const server = express()
server.use(router)

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})

