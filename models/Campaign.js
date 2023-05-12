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
    endLevel: {
        type: Number,
        required: true
    },
    numOfPlayers: Number,
    image: String
}, {timestamps: true})

module.exports = mongoose.model('Campaign', CampaignSchema)