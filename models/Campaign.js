const mongoose = require("mongoose")

const CampaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    startLevel: {
        type: Number,
        required: true
    },
    endlevel: {
        type: Number,
        required: true
    },
    numOfPlayers: Number,
    image: String,
    encounters: mongoose.Schema.Types.ObjectId
}, {timestamps: true})

module.exports = mongoose.model('Campaign', CampaignSchema)