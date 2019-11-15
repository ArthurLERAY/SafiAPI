'use strict';
const router = require('express').Router();

router.get('/find/:id', async (req, res) => {

    const userToSend = await Employee.getWhereId(req.params.id);
    res.send(userToSend);
});

router.put('/edit', (req, res) => {

    Employee.patch({
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
