const mongoose = require("mongoose")

const EncounterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    flavorText: String,
    map: String,
    monsters: Array
}, {timestamps: true})

module.exports = mongoose.model('Encounter', EncounterSchema)