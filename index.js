require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const {config} = require('./src/helper/configuration')
const userRoutes = require('./src/routes/User')
const postRoutes = require('./src/routes/Post');

const {PORT, DATABASE_URL, BASE_URL} = config(process.env);

mongoose.connect(DATABASE_URL)
.then(respon => console.log("Connected to Database"))
.catch(err => console.log(err));

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/user', userRoutes);
app.use('/post', postRoutes);

app.listen(PORT, () => {
    console.log(`Server running at ${BASE_URL}`);   
})

