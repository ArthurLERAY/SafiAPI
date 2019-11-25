'use strict';
const router = require('express').Router();
const Visit = require('../src/Classes/Visit');


router.get('/date/:date', async (req, res) => {

    const visits = await Visit.getWhere('date', req.params.date);
    res.send(visits);

});


router.get('/practitioner/:praticien_id', async (req, res) => {

    const visitsToSend = await Visit.getWhere('practitioner_id', req.params.praticien_id);
    res.send(visitsToSend);

});

router.get('/stats/:date', async (req, res) => {

    const visits = await Visit.getWhere('date', req.params.date);
    res.send(visits);
});

router.post('/create', (req, res) => {

    Visit.create({
        date: req.body.date,
        employee_id: req.body.employee_id,
        practitioner_id: req.body.practitioner_id,
        report_id: req.body.report_id
    }).then(resp => {
        res.sendStatus(201);
    })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
});

module.exports = router;
