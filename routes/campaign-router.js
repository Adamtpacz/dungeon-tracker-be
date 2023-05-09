// Dependencies
const express = require('express')
const router = express.Router()

// Campaign index route
router.get("/", (req, res) => {
    res.status(200).json({message: "campaign index route"})
})

// Campaign create route
router.post("/", (req, res) =>  {
	res.status(201).json({message: "campaign create route"})
})

module.exports = router