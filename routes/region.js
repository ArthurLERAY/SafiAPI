'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');

router.get('/list', async (req, res) => {

    const regions = await tables.Region.query();
    res.send(regions);
});

module.exports = router;