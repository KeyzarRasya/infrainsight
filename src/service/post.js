const Post = require('../model/Post');
const User = require('../model/User');

const createPost = async(postmetada, userId) => {
    const post = new Post({image:postmetada.image, title:postmetada.title, description:postmetada.description, alamat:postmetada.alamat });
    const findUser = await User.findById(userId);
    if(!findUser){
        return {status:400, message:'user not found'};
    }
    post.publisher = userId;
    await post.save();
    findUser.post.push(post);
    await findUser.save();
    return {status:200, message:'post have been uploaded', post, user:findUser};
}

const getAllPost = async() => {
    const post = await Post.find();
    return {status:200, message:'success fetch all post', post};
}

module.exports = {
    createPost,
    getAllPost
}