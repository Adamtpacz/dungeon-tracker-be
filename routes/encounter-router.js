const express = require('express')
const router = express.Router()
const encounterCtrl = require('../controllers/encounter-controller.js')

// Encounter show route
router.get('/:id', encounterCtrl.detail)

// Encounter update route
router.put("/:id", encounterCtrl.update)

module.exports = router