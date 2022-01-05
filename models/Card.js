const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    descriptionText: {
        type: String,
        required: true,
    },
    drugType: {
        type: String,
        required: true,
    }
})

module.exports = model('Card', schema)