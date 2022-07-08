const {Schema, model} = require('mongoose')

const massageSchema = new Schema({
        message: {
            text: {
                type: String,
                require: true,
            },
        },
        users: Array,
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    },
)

module.exports = model('Messages', massageSchema)
