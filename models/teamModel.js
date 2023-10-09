const mongoose = require('mongoose');

const playerSchema = require('./playerModel').playerSchema

const teamSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    players: [playerSchema]
})

const TeamModel = mongoose.model('Team', teamSchema)

module.exports = {TeamModel, teamSchema};