'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');

// TODO see for a row that allows to see if CA is allowed or waiting
router.post('/ask', (req, res) => {

    // tables.complementary_activity.query().insert({
    //
    // })

});

// BackOffice creation
router.post('/create', (req, res) => {

    tables.Complementary_activity.query().insert({

        num: req.body.num,
        date: req.body.date,
        place: req.body.place,
        theme: req.body.place,
        employee_id: req.body.employee_id

    }).then(resp => {
        res.sendStatus(201);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });

});

router.get('/find/:activity_id', async (req, res) => {

    const activity = await tables.Complementary_activity.query().where('id', req.params.id);
    res.send(activity);
});

router.put('/edit/:activity_id', (req, res) => {

    tables.Complementary_activity.query().patch({

        num: req.body.num,
        date: req.body.date,
        place: req.body.place,
        theme: req.body.place,
        employee_id: req.body.employee_id

    }).where('id', req.body.id)
        .then(resp => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });

});

// TODO add column for archiving, none yet
router.put('/archive/:activity_id', (req, res) => {

    tables.Complementary_activity.query().patch();

});

module.exports = router;
