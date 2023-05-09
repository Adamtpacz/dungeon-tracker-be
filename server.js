// Dependencies
require("dotenv").config()
require('./config/db.connection.js')

const express = require("express")
const morgan = require('morgan')
const cors = require('cors')

const campaignRouter = require('./routes/campaign-router')

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

// Test Route
app.get('/', (req, res) => res.send("hello world"))

// Listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))