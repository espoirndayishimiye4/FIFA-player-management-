const {Schema, default: mongoose} = require('mongoose')

const playerSchema = new Schema({
    firstName:{
        type: String,
        required: [true,'please provide first Name']
    },
    LastName:{
        type: String,
        required: [true,'please provide Last Name']
    },
    nationality:{
        type: String,
        required: [true,'please provide Nationality']
    },
    dateTime:{
        type: Date,
        default: Date.now
    }
})

const player = mongoose.model('player',playerSchema)

module.exports = player