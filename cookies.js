require('dotenv').config()
const assert = require('assert').strict
const cookieParser = require('cookie-parser')
const express = require('express')
const cookieRouter = express.Router()

const cookieSecret = process.env.PS_COOKIE_SECRET
assert(cookieSecret, `

\u{1F4A9}  WHOOPSIE!

This server needs an environment variable named PS_COOKIE_SECRET.
Use the default (or change it) by copying the example file:

    cp example.env .env

Or run the server like this:

    PS_COOKIE_SECRET=my_secret_phrase npm start

Read more in the NodeJS docs:

    https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env


More error message below
v-----------------------
`)

cookieRouter.use(express.urlencoded({ extended: true }))
cookieRouter.use(cookieParser(cookieSecret))

const setCookie = (res, name, value, options = {}) => {
  const { secret } = options
  res.cookie(name, value, { signed: secret })
}

const getCookie = (req, name, options = {}) => {
  const { secret } = options
  const cookies = secret ? req.signedCookies : req.cookies
  return cookies[name]
}

module.exports = {
  cookieRouter,
  setCookie,
  getCookie,
}
