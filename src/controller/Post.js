const {createPost, getAllPost, makeComment, addLike, addShare, unLike} = require('../service/post');


const posting = async(req, res) => {
    const {title, description, alamat, userId, koordinat} = req.body;
    const {filename} = req.file;
    const post = await createPost({filename, title, description, alamat, koordinat}, userId);
    res.send(post); 
}

const fetchPost = async(req, res) => {
    const post = await getAllPost();
    res.send(post);
}

const uploadComment = async(req, res) => {
    const {userId, postId, comment} = req.body;
    const post = await makeComment(userId, postId, comment);
    res.send(post);
}

const clickLike = async(req, res) => {
    const {postId} = req.body;
    const post = await addLike(postId);
    res.send(post);
}

const clickShare = async(req, res) => {
    const {postId} = req.body;
    const post = await addShare(postId);
    res.send(post);
}

const clickUnLike = async(req, res) => {
    const {postId} = req.body;
    const post = await unLike(postId);
    res.send(post);
}

module.exports = {
    posting,
    fetchPost,
    uploadComment,
    clickLike,
    clickShare,
    clickUnLike
}