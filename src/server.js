const chalk = require('chalk');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = require('express')();

module.exports = () => {
    dotenv.config();

    const port = 5000;
    app.listen(port).on('listening', async () => {
        console.log(`${chalk.yellowBright('@')} Express server is ${chalk.greenBright('runing')} at ${chalk.grey(`http://localhost:${port}/`)}`);

        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`${chalk.yellowBright('@')} MongoDB is ${chalk.greenBright('connected')}`);

        // Routing Setup
        console.log(`\n${chalk.yellowBright('@')} Routing`);
        const ShrinkController = require('./controllers/shrink.controller');
        app.use('/shrink', ShrinkController);
    });
};
