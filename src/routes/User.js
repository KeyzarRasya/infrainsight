const express = require('express');
const {signup, login} = require('../controller/User')

const routes = express.Router();

routes.post('/signup', signup);
routes.post('/login', login);

module.exports = routes;