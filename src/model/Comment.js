const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    username:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    }
})

const Model = mongoose.model('Comment', commentSchema);

module.exports = Model;