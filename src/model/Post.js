const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    image:{
        type:String
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    alamat:{
        type:String,
        require:true
    },
    publisher:{
        type:mongoose.Schema.ObjectId,
        require:true
    }
})

const Model = mongoose.model('Post', postSchema);

module.exports = Model;