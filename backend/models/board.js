var mongoose = require('mongoose')
var Schema = mongoose.Schema

var boardSchema = new Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    },
    views: {
        type: Number,
        default: 0
    },
    create_date: {
        type: Date,
        default: Date.now()
    },
    mod_date: {
        type: Date,
        default: Date.now()
    },
    content: String,
    comments: [
        {
            content: String,
            author: {
                type: mongoose.Schema.Types.ObjectId, ref: 'user'
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ]
})
module.exports = mongoose.model('board', boardSchema)