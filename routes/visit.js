'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');


router.get('/date/:date', async (req, res) => {

    const visits = await tables.Visit.query().where('date', req.params.date);
    res.send(visits);

});


router.get('/practitioner/:praticien_id', async (req, res) => {

    const visitsToSend = await tables.Visit.query().where('practitioner_id', req.params.praticien_id);
    res.send(visitsToSend);

});

router.get('/stats/:date');

module.exports = router;