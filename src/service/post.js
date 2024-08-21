const Post = require('../model/Post');
const User = require('../model/User');
const Comment = require('../model/Comment');

const createPost = async(postmetada, userId) => {
    const post = new Post({image:postmetada.filename, title:postmetada.title, description:postmetada.description, alamat:postmetada.alamat });
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
    const post = await Post.find().populate('comment');
    return {status:200, message:'success fetch all post', post};
}

const makeComment = async(userId, postId, comment) => {
    const newComment = new Comment({
        user:userId,
        comment:comment
    })
    const post = await Post.findById(postId);
    if(!post){
        return {status:400, message:'post not found'};
    }
    post.comment.push(newComment);
    await newComment.save();
    await post.save();
    return {status:200, message:'comment added'};
}

const addLike = async(postId) => {
    const post = await Post.findById(postId);
    if(!post){
        return {status:400, message:'post not found'};
    }
    post.like++;
    await post.save();
    return {status:200, message:'like added'};
}

const unLike = async(postId) => {
    const post = await Post.findById(postId);
    if(!post){
        return {status:400, message:'post not found'};
    }
    post.like--
    await post.save();
    return {status:200, message:'like added'};
}

const addShare = async(postId) => {
    const post = await Post.findById(postId);
    if(!post){
        return {status:400, message:'post not found'};
    }
    post.share++;
    await post.save();
    return {status:200, message:'share added'};
}

module.exports = {
    createPost,
    getAllPost,
    makeComment,
    addLike,
    addShare,
    unLike
}