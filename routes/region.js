'use strict';
const router = require('express').Router();
const Region = require('../src/Classes/District');

router.get('/list', async (req, res) => {

    const regions = await Region.getAll();
    res.send(regions);
});

module.exports = router;
