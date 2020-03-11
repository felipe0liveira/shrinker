const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

module.exports = () => {
    dotenv.config();

    const port = 5000;
    app.listen(port).on('listening', async () => {
        console.log(`@ Express server is runing at http://localhost:${port}/`);

        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`@ MongoDB is connected`);
    });

};
