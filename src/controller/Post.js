const {createPost, getAllPost} = require('../service/post');

const posting = async(req, res) => {
    const {image, title, description, alamat, userid} = req.body;
    const post = await createPost({image, title, description, alamat}, userid);
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