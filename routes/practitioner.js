'use strict';
const router = require('express').Router();
const Practitioner = require('../src/Classes/Practitioner');

router.get('/list', async (req, res) => {

    const practitioners = await Practitioner.getAll();
    res.send(practitioners);
});


module.exports = router;
