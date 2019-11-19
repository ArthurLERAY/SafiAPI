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

//TODO Voir avec l'équipe la méthode d'encryption

async function encrypt(text) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    console.log(iv.length);
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
}




module.exports = router;
