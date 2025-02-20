const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const logger = require('./utils/logger');
const blogsRouter = require('./controllers/blogs');

mongoose.set('strictQuery', false);

//logger.info('connecting to', config.MONGODB_URI);

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB');
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message);
    });

app.use(cors());
app.use(express.static('dist'));
app.use(express.json());


//将所有以 /api/blogs 开头的请求都交给 blogsRouter 处理
app.use('/api/blogs', blogsRouter);

module.exports = app;
