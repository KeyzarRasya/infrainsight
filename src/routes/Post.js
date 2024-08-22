const express = require('express')
const {posting, fetchPost, uploadComment, clickLike, clickShare, clickUnLike, getPost} = require('../controller/Post')
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination:function (req, file, cb) {
        cb(null, 'upload/image')
    },
    filename:function (req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Only images with .jpeg or .jpg format are allowed!');
    }
  };
  
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
  });  

const routes = express.Router();

routes.post('/posting', upload.single('image'), posting);
routes.get('/all', fetchPost);
routes.get('/:postId', getPost);
routes.post('/comment', uploadComment);
routes.post('/like', clickLike);
routes.post('/share', clickShare);
routes.post('/unlike', clickUnLike)


module.exports = routes;