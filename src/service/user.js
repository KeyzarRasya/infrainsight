const User = require('../model/User');
const bcrypt = require('bcrypt');

const createAccount = async(email, password, username) => {
    const findemail = await User.findOne({email});
    if(findemail){
        return {status:400, message:'email already exist'};
    }
    const cryptPass = await bcrypt.hash(password, 12);
    const user = new User({email, password:cryptPass, username});
    await user.save();
    return {status:200, message:'successfully created account', account:user};
}

const loginAccount = async(email, password) => {
    const findemail = await User.findOne({email});
    if(!findemail){
        return {status:400, message:'email not found'};
    }
    const isPassvalid = await bcrypt.compare(password, findemail.password);
    if(!isPassvalid){
        return {status:400, message:'wrong password'};
    }

    return {status:200, message:'login success', account:findemail};
}

const getUserInformation = async(userId) => {
    const user = await User.findById(userId).populate('post');
    if(!user){
        return {status:400, message:'user not found'};
    }
    return {status:200, message:'user found', user};
}

module.exports = {
    createAccount,
    loginAccount,
    getUserInformation
}