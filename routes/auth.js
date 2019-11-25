'use strict';
const router = require('express').Router();
const Employee = require('../src/Classes/Employee');
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
const IV_LENGTH = 16;


// The '/auth' route
// TODO handle crypting pwd
router.post('/', async (req, res) => {

    const loginReq = req.body.login;
    const pwdReq = req.body.password;

    // Check if creds are not null
    if(loginReq.length > 1 && pwdReq.length > 1) {

        const userTryingToConnect = await Employee.getWhere('login', loginReq);
        // Check if user exists with this login
        if (userTryingToConnect.length > 0) {
            const password = await Employee.getWhere('login', loginReq, 'password');
            // Check if both passwords match
            if (pwdReq === password[0].password) {

                res.send(userTryingToConnect);

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
