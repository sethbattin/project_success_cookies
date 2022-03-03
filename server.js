// start from https://expressjs.com/en/starter/hello-world.html

const { cookieRouter, delCookie, getCookie, setCookie } = require('./cookies.js')
const express = require('express')
const app = express()

const { users, comments } = require('./database.js')

const cookieVars = {
  name: 'ps-cookie-name',
  acct: 'ps-cookie-id',
  sess: 'ps-cookie-session'
}

// allow POSTing to ../name OR ../password OR ../message
cookieRouter.post('/name', (req, res) => {
  const { name } = req.body
  const cookieName = getCookie(cookieVars.name)
  if (name !== cookieName) {
    delCookie(res, cookieVars.name)
    delCookie(res, cookieVars.acct)
    delCookie(res, cookieVars.pass)
  }
  const user = users.getByName(name)
  setCookie(res, cookieVars.name, name)
  setCookie(res, cookieVars.acct, user.id)
 
  res.cookie(cookieVars.name, name)
  res.redirect('/')
})

cookieRouter.post('/password', (req, res) => {
  const { pass } = req.body
  const name = getCookie(req, cookieVars.name)
  const id = getCookie(req, cookieVars.acct)

  const user = users.getByName(name)
  if (!user.pass) {
    user.pass = pass
  } else if (user.pass !== pass) {
    res.status(401, 'invalid password').end()
    return;
  }
  const uniqueNumber = uuid()
  user.session = uniqueNumber
  users.save(user)
  setCookie(res, cookieVars.sess, `${id}-${uniqueNumber}`)
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
