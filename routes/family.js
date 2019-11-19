'use strict';
const router = require('express').Router();
const Family = require('../src/Classes/Family');

router.get('/list', async (req, res) => {

    const families = await Family.getAll();
    res.send(families);
});

module.exports = router;
