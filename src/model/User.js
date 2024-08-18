const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    post:[{
        type:mongoose.Schema.ObjectId,
        ref:'Post',
        require:false,
        default:[]
    }]
})

const Model = mongoose.model('User', userSchema);

module.exports = Model;