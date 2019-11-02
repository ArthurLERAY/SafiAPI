'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');

router.post('/create', (req, res) => {

    tables.VisitReport.query().insert({
        date: req.body.date,
        record: req.body.record,
        reason: req.body.reason,
        employee_id: req.body.employee_id,
        practitioner_id: req.body.practitioner_id,
        status: req.body.status
    })
        .then(resp => {
                res.sendStatus(201);
            }
        )
        .catch(err => {
                res.sendStatus(400)
            }
        );

});

router.get('/list', async (req, res) => {

    const reports = await tables.VisitReport.query();
    res.send(reports);
});

router.get('/find/:id', async (req, res) => {

    const report = await tables.VisitReport.query().findById(req.params.id);
    res.send(report);
});

module.exports = router;