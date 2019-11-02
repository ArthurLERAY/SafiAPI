'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');

router.get('/list', async (req, res) => {

    const sheets = await tables.CostsForm.query();
    res.send(sheets);
});

router.get('/find/:employee_id', async (req, res) => {

    const sheet = await tables.CostsForm.query().where('employee_id', req.params.employee_id);
    res.send(sheet);
});
// TODO see in DB for default params
router.get('/settings', async (req, res) => {


});

router.post('/create', (req, res) => {

    tables.CostsForm.query().insert({
        employee_id: req.body.employee_id,
        evidenceNumber: req.body.evidenceNumber,
        creationDate: req.body.creationDate,
        valueAmount: req.body.valueAmount,
        modifDate: req.body.modifDate,
        state_id: req.body.state_id,
        ref: req.body.ref
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

module.exports = router;