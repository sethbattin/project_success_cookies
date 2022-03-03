// start from https://expressjs.com/en/starter/hello-world.html

const { cookieRouter, getCookie, setCookie } = require('./cookies.js')
const express = require('express')
const app = express()

const { users, comments } = require('./database.js')

const cookieNames = {
  name: 'ps-cookie-name',
  pass: 'ps-cookie-password',
  acct: 'ps-cookie-id'
}

// allow POSTing to ../name OR ../password OR ../message
cookieRouter.post('/name', (req, res) => {
  const whichCookie = req.params.name
  const { name } = req.body

  res.cookie(cookieNames.name, name)
  res.redirect('/')
})

cookieRouter.post('/password', (req, res) => {

  res.redirect('/')
})

cookieRouter.post('/message', (req, res) => {

  res.redirect('/')
})

// serve data requests to http://website/cookie/*
app.use('/cookie', cookieRouter)

// serve html for every other path from the folder 'public'
app.use(express.static('public'))

// respond at a port https://en.wikipedia.org/wiki/URL#Syntax
const port = process.env.port || 9001
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
