'use strict';
const router = require('express').Router();
const VisitReport = require('../src/Classes/VisitReport');

router.post('/create', (req, res) => {

    VisitReport.create({
        date: req.body.date,
        reason: req.body.reason,
        results: req.body.results,
        employee_id: req.body.employee_id,
        practitioner_id: req.body.practitioner_id,
        status: req.body.status
    })
        .then(resp => {
                res.sendStatus(201);
            }
        )
        .catch(err => {
                console.error(err);
                res.sendStatus(400)
            }
        );

});

router.get('/list', async (req, res) => {

    const reports = await VisitReport.getAll();
    res.send(reports);
});

router.get('/find/:id', async (req, res) => {

    const report = await VisitReport.getWhereId(req.params.id);
    res.send(report);
});

module.exports = router;
