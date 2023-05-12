// Dependencies
require("dotenv").config()
require('./config/db.connection.js')

const express = require("express")
const morgan = require('morgan')
const cors = require('cors')

const campaignRouter = require('./routes/campaign-router')
const encounterRouter = require('./routes/encounter-router.js')

// Configuration
const app = express()
const { PORT } = process.env

// Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// Router Middleware
app.use('/campaign', campaignRouter)
app.use('/encounter', encounterRouter)

// Test Route
app.get('/', (req, res) => res.send("hello world"))

// Listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))