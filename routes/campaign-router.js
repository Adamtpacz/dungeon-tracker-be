// Dependencies
const express = require('express')
const router = express.Router()
const campaignCtrl = require('../controllers/campaign-controller.js')

// Campaign index route
router.get("/", campaignCtrl.index)

// Campaign create route
router.post("/", campaignCtrl.create)

// Campaign show route
router.get("/:id", campaignCtrl.detail);

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