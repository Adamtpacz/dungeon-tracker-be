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

module.exports = router