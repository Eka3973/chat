const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    userName: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    avatarImage: {type: String, default: ''},
})

module.exports = model('User', UserSchema)
