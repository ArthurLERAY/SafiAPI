'use strict';
const router = require('express').Router();
const Evidence = require('../src/Classes/Evidence');

router.post('/add', (req, res) => {

    Evidence.create({
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

    const evidence = await Evidence.getWhere('id', req.params.evidence_id);
    res.send(evidence);
});

module.exports = router;
