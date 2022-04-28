const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World from Heroku!')
})

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

server.on("error", error => {
    console.log("ERROR", error)
})