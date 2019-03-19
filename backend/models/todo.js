const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    todoid: {type:Number, required: true, unique: true},
    content: {type:String, required: true},
    completed: {type: String, default: false}
},
{
    timestamps: true
});


module.exports=mongoose.model('Todo', todoSchema);