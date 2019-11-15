'use strict';
const router = require('express').Router();

router.get('/list', async (req, res) => {

    const families = await Family.getAll();
    res.send(families);
});

module.exports = router;
