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
    koordinat:{
        type:[Number]
    },
    publisher:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    like:{
        type:Number,
        default:0
    },
    share:{
        type:Number,
        default:0
    },
    comment:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Comment',
            default:[]
        }
    ]
})

const Model = mongoose.model('Post', postSchema);

module.exports = Model;