'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');

router.get('/list', async (req, res) => {

    const practitioners = await tables.practitioner.query();
    res.send(practitioners);
});


module.exports = router;