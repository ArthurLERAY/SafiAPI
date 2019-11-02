'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');

router.get('/list', async (req, res) => {

    const families = await tables.Family.query();
    res.send(families);
});

module.exports = router;