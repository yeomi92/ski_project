var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    id: String,
    password: String,
    name: String,
    nickname: String,
    email: String,
    create_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', userSchema)