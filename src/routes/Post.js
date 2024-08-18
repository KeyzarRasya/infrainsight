const express = require('express')
const {posting, fetchPost} = require('../controller/Post')

const routes = express.Router();

routes.post('/posting', posting);
routes.get('/all', fetchPost);

module.exports = routes;