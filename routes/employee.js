'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');

router.get('/find/:id', async (req, res) => {

    const userToSend = await tables.Employee.query().findById(req.params.id);
    res.send(userToSend);
});

router.put('/edit', (req, res) => {

    tables.Employee.query().patch({
        matriculate: req.body.matriculate,
        name: req.body.name,
        address: req.body.address,
        pc: req.body.pc,
        city: req.body.city,
        tel: req.body.tel,
        employmentDate: req.body.employmentDate,
        sector_id: req.body.sector_id,
        department_id: req.body.department_id,
        departure_id: req.body.departure_id,
        post_id: req.body.post_id,
        service_type: req.body.service_type,
        accountant_id: req.body.accountant_id
    }).findById(req.body.id)
        .then(
            res.sendStatus(202)
        )
        .error(
            res.sendStatus(400)
        );

});

router.post('/create', (req, res) => {

    tables.Employee.query().insert({
        matriculate: req.body.matriculate,
        name: req.body.name,
        address: req.body.address,
        pc: req.body.pc,
        city: req.body.city,
        tel: req.body.tel,
        employmentDate: req.body.employmentDate,
        sector_id: req.body.sector_id,
        department_id: req.body.department_id,
        departure_id: req.body.departure_id,
        post_id: req.body.post_id,
        service_type: req.body.service_type,
        accountant_id: req.body.accountant_id
    }).then(
        res.sendStatus(201)
    )
        .error(
            res.sendStatus(400)
        );

});

router.delete('/delete', (req, res) => {

    tables.Employee.query().delete().where('id', req.body.id)

        .then(resp => {
                res.sendStatus(201);
            }
        )
        .catch(err => {
                res.sendStatus(400)
            }
        );

});

// TODO see the DB for the row 'state' none for now
router.put('/changeState', async (req, res) => {



});

// TODO see the DB for the row 'type' none for now
router.get('/list/type/:type', async (req, res) => {

    const employees = await tables.Employee.query().where('type_id', req.params.type);

});



module.exports = router;