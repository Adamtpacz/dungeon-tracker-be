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
router.delete("/:id", campaignCtrl.delete)

// Campaign update route
router.put("/:id", campaignCtrl.update)

// Encounter index route
router.get('/:id/encounters', async (req, res) => {
    res.status(200).json({message: "encounter index route"})
})

// Encounter create route
router.post("/:id/encounters", async (req, res) =>  {
	res.status(201).json({message: "encounter create route"})
})

// Encounter show route

// Encounter delete route

// Encounter update route

module.exports = router