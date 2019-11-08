'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');

// The '/auth' route
// TODO handle crypting pwd
router.post('/', async (req, res) => {

    const loginReq = req.body.login;
    const pwdReq = req.body.password;

    // Check if creds are not null
    if(loginReq.length > 1 && pwdReq.length > 1) {

        const userTryingToConnect = await tables.Account.query().where('login', loginReq);
        // Check if user exists with this login
        if (userTryingToConnect.length > 0) {
            const password = await tables.Account.query().where('login', loginReq).select('password');
            // Check if both passwords match
            if (pwdReq === password) {

                const userToConnect = await tables.Employee.query().where('id', userTryingToConnect.employee_id);
                res.send(userToConnect);

            } else {
                res.sendStatus(401);
            }
        } else {
            res.sendStatus(404);
        }

    } else {
        res.sendStatus(400);
    }

});



module.exports = router;
