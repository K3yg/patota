const mongoose = require('mongoose');

const teamSchema = require('./teamModel')
console.log(teamSchema)

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: [{ type: String, enum: ['Atacante', 'Ponta', 'Meio-campista', 'Zagueiro', 'Lateral', 'Goleiro'] }],
    team: { teamSchema }

})

const PlayerModel = mongoose.model('Player', playerSchema)

module.exports = {PlayerModel, playerSchema};