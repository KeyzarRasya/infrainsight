const express = require('express');
const {signup, login, userInfo} = require('../controller/User')

const routes = express.Router();

routes.post('/signup', signup);
routes.post('/login', login);
routes.get('/information', userInfo);

module.exports = routes;