const mongoose = require('mongoose');
const logger = require('./utils/logger'); // 确保你有一个 logger 模块

require('dotenv').config(); // 加载环境变量

const url = process.env.MONGODB_URI;

logger.info('Connecting to', url);
console.log('MongoDB URI:', url); // 打印连接字符串以确保正确加载

mongoose.connect(url)
    .then(result => {
        logger.info('Connected to MongoDB');
    })
    .catch((error) => {
        logger.error('Error connecting to MongoDB:', error.message);
    });

module.exports = mongoose;
