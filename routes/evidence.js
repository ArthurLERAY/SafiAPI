'use strict';
const router = require('express').Router();
const Evidence = require('../src/Classes/Justificatory');

router.post('/add', (req, res) => {

    Evidence.create({
        name: req.body.name,
        attachment: req.body.attachment,
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
