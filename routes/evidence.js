'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');

router.post('/add', (req, res) => {

    tables.Evidence.query().insert({
        label: req.body.label,
        attachedDoc: req.body.attachedDoc,
        extraChargeCosts_id: req.body.extraChargeCosts_id
    }).then(resp => {
        res.sendStatus(201);
        }

    ).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });

});

router.get('/find/:evidence_id', async (req, res) => {

    const evidence = await tables.Evidence.query().where('id', req.params.evidence_id);
    res.send(evidence);
});

module.exports = router;
