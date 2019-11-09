'use strict';
const router = require('express').Router();
const Account = require('../src/Classes/Account');
const Employee = require('../src/Classes/Employee');

// The '/auth' route
// TODO handle crypting pwd
router.post('/', async (req, res) => {

    const loginReq = req.body.login;
    const pwdReq = req.body.password;

    // Check if creds are not null
    if(loginReq.length > 1 && pwdReq.length > 1) {

        const userTryingToConnect = await Account.getWhere('login', loginReq);
        // Check if user exists with this login
        if (userTryingToConnect.length > 0) {
            const password = await Account.getWhere('login', loginReq, 'password');
            // Check if both passwords match
            if (pwdReq === password[0].password) {

                const userToConnect = await Employee.getWhere('id', userTryingToConnect[0].employee_id);
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
