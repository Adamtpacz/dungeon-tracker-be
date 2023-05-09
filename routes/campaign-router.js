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

// Campaign show route
router.get("/:id", (req, res) => {
	res.status(200).json({message: "campaign show route: " + req.params.id })
});

// Campaign delete route
router.delete("/:id", (req, res) => {
	res.status(200).json({message: "campaign delete route: " + req.params.id })
});

// Campaign update route
router.put("/:id", (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "campaign update route: " + req.params.id })
});

module.exports = router