'use strict';
const router = require('express').Router();
const CostsForm = require('../src/Classes/ExpenseSheet');

router.get('/list', async (req, res) => {

    const sheets = await CostsForm.getAll();
    res.send(sheets);
});

router.get('/find/:employee_id', async (req, res) => {

    try {

        const sheet = await CostsForm.getWhere('employee_id', req.params.employee_id);
        res.send(sheet);

    } catch (err) {

        res.sendStatus(500);

    }

});
// TODO see in DB for default params
router.get('/settings', async (req, res) => {


});

router.post('/create', (req, res) => {

    CostsForm.create({
        employee_id: req.body.employee_id,
        creationDate: req.body.creationDate,
        totalAmount: req.body.totalAmount,
        modificationDate: req.body.modificationDate,
        sheetState_id: req.body.sheetState_id,
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

router.get('/type_employee/:sheet_type_id/:employee_id', async (req, res) => {

    try {

        const sheetsToSend = await CostsForm.getWhere('state_id', req.params.sheet_type_id).where('employee_id', req.params.employee_id);
        res.send(sheetsToSend);

    } catch (err) {

        res.sendStatus(500);

    }

});

// TODO see in DB for relation between costsForm & region
router.get('/region/:region_id', async (req, res) => {

    //const sheets = await CostsForm.getWhere();

});

module.exports = router;
