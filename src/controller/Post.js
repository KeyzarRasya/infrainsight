const {createPost, getAllPost} = require('../service/post');


const posting = async(req, res) => {
    const {title, description, alamat, userId} = req.body;
    const {filename} = req.file;
    const post = await createPost({filename, title, description, alamat}, userId);
    res.send(post); 
}

const fetchPost = async(req, res) => {
    const post = await getAllPost();
    res.send(post);
}

module.exports = {
    posting,
    fetchPost
}