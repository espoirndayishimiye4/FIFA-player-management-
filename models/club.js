const {Schema, default: mongoose} = require('mongoose')

const clubSchema = new Schema({
    name:{
        type: String,
        required: [true,'please provide Name']
    },
    slogan:{
        type: String,
        required: [true,'please provide slogan']
    },
    club:{
        id:{type: mongoose.Schema.Types.ObjectId,
            ref:"players"}
    },

    dateTime:{
        type: Date,
        default: Date.now
    }
})

const club = mongoose.model('club',clubSchema)

module.exports = club