const express = require('express')
const router = express.Router()
const encounterCtrl = require('../controllers/encounter-controller.js')

// Encounter show route
router.get('/:id', encounterCtrl.detail)

module.exports = router