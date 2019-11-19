'use strict';
const router = require('express').Router();
const Employee = require('../src/Classes/Employee');

router.get('/find/:id', async (req, res) => {

    const userToSend = await Employee.getWhereId(req.params.id);
    res.send(userToSend);
});

router.put('/edit', (req, res) => {

    Employee.patch({
        code: req.body.code,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        login: req.body.login,
        password: req.body.password,
        address: req.body.address,
        postalCode: req.body.postalCode,
        city: req.body.city,
        phone: req.body.phone,
        hireDate: req.body.hireDate,
        timespan: req.body.timespan,
        api_token: req.body.api_token,
        district_id: req.body.district_id
    }, {column: 'id', value: req.body.id})
        .then(resp => {
                res.sendStatus(202);
            }
        )
        .catch(err => {
                console.error(err);
                res.sendStatus(400);
            }
        );

});

router.post('/create', (req, res) => {

    Employee.create({
        code: req.body.code,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        login: req.body.login,
        password: req.body.password,
        address: req.body.address,
        postalCode: req.body.postalCode,
        city: req.body.city,
        phone: req.body.phone,
        hireDate: req.body.hireDate,
        timespan: req.body.timespan,
        api_token: req.body.api_token,
        district_id: req.body.district_id
    }).then(resp => {
            res.sendStatus(201);
        }
    )
        .catch(err => {
                console.error(err);
                res.sendStatus(400);
            }
        );

});

router.delete('/delete', (req, res) => {

    Employee.delete({column: 'id', value: req.body.id})

        .then(resp => {
                res.sendStatus(200);
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

    const employees = await Employee.getWhere('type_id', req.params.type);

});


module.exports = router;
