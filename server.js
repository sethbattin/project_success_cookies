// it's just https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const port = 3000

app.get('/data', (req, res) => {
  res.send('hello world')
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
