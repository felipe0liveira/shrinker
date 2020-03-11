const chalk = require('chalk');
const bodyParser = require('body-parser');
const router = require('express').Router();
const shrinkSchema = require('../models/shrink.schema');

console.log(`    ${chalk.yellowBright('-')} Mounting ${chalk.blueBright('Shrink')} Controller`);

router.use(bodyParser.json());

router.post('/', (req, res) => {
    shrinkSchema.create(req.body, (err, shrinked) => {
        if (err) return res.status(500).json(err);
        res.status(201).json(shrinked);
    });
});

router.get('/', async (req, res) => {
    const list = await shrinkSchema.find();
    res.status(200).json(list);
});

router.get('/:short', async (req, res) => {
    const shrinked = await shrinkSchema.findOne({ short: req.params.short });
    if (shrinked) {
        shrinkSchema.findByIdAndUpdate(shrinked._id, { clicks: (shrinked.clicks + 1) }, (err, value) => {
            if (err) return res.status(500).json(err);
            res.redirect(shrinked.url);
        });
    } else {
        res.status(404).json({ message: 'Short URL not found' });
    }
});

module.exports = router;